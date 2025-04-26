"use client";

import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

interface Icon {
    x: number;
    y: number;
    z: number;
    scale: number;
    opacity: number;
    id: number;
}

interface IconCloudProps {
    icons?: React.ReactNode[];
    images?: string[];
}

function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
}

export function iconCloud({ icons, images }: IconCloudProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [iconPositions, setIconPositions] = useState<Icon[]>([]);
    const [rotation] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [targetRotation, setTargetRotation] = useState<{
        x: number;
        y: number;
        startX: number;
        startY: number;
        distance: number;
        startTime: number;
        duration: number;
    } | null>(null);
    const animationFrameRef = useRef<number>();
    const rotationRef = useRef(rotation);
    const iconCanvasesRef = useRef<HTMLCanvasElement[]>([]);
    const imagesLoadedRef = useRef<boolean[]>([]);

    // Add a resize handler to make canvas responsive
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const parent = canvasRef.current.parentElement;
                if (parent) {
                    canvasRef.current.width = parent.clientWidth * 1.2; // 20% wider
                    canvasRef.current.height = 800; // Increased height from 600 to 800
                }
            }
        };

        // Set initial size
        handleResize();

        // Update on window resize
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Create icon canvases once when icons/images change
    useEffect(() => {
        if (!icons && !images) return;

        const items = icons || images || [];
        imagesLoadedRef.current = new Array(items.length).fill(false);

        const newIconCanvases = items.map((item, index) => {
            const offscreen = document.createElement("canvas");
            offscreen.width = 50; // Increased from 40
            offscreen.height = 50; // Increased from 40
            const offCtx = offscreen.getContext("2d");

            if (offCtx) {
                if (images) {
                    // Handle image URLs directly
                    const img = new Image();
                    img.crossOrigin = "anonymous";
                    img.src = items[index] as string;
                    img.onload = () => {
                        offCtx.clearRect(
                            0,
                            0,
                            offscreen.width,
                            offscreen.height
                        );

                        // Create circular clipping path
                        offCtx.beginPath();
                        offCtx.arc(25, 25, 25, 0, Math.PI * 2); // Adjusted center and radius from 20 to 25
                        offCtx.closePath();
                        offCtx.clip();

                        // Draw the image
                        offCtx.drawImage(img, 0, 0, 50, 50); // Increased from 40 to 50

                        imagesLoadedRef.current[index] = true;
                    };
                } else {
                    // Handle SVG icons
                    offCtx.scale(0.5, 0.5); // Increased scale from 0.4 to 0.5
                    const svgString = renderToString(
                        item as React.ReactElement
                    );
                    const img = new Image();
                    img.src = "data:image/svg+xml;base64," + btoa(svgString);
                    img.onload = () => {
                        offCtx.clearRect(
                            0,
                            0,
                            offscreen.width,
                            offscreen.height
                        );
                        offCtx.drawImage(img, 0, 0);
                        imagesLoadedRef.current[index] = true;
                    };
                }
            }
            return offscreen;
        });

        iconCanvasesRef.current = newIconCanvases;
    }, [icons, images]);

    // Generate initial icon positions on a sphere
    useEffect(() => {
        const items = icons || images || [];
        const newIcons: Icon[] = [];
        const numIcons = items.length || 20;

        // Fibonacci sphere parameters
        const offset = 2 / numIcons;
        const increment = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < numIcons; i++) {
            const y = i * offset - 1 + offset / 2;
            const r = Math.sqrt(1 - y * y);
            const phi = i * increment;

            const x = Math.cos(phi) * r;
            const z = Math.sin(phi) * r;

            newIcons.push({
                x: x * 160, // Increased radius from 110 to 140
                y: y * 160, // Increased radius from 110 to 140
                z: z * 160, // Increased radius from 110 to 140
                scale: 1,
                opacity: 1,
                id: i,
            });
        }
        setIconPositions(newIcons);
    }, [icons, images]);

    // Handle mouse events
    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect || !canvasRef.current) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        iconPositions.forEach((icon) => {
            const cosX = Math.cos(rotationRef.current.x);
            const sinX = Math.sin(rotationRef.current.x);
            const cosY = Math.cos(rotationRef.current.y);
            const sinY = Math.sin(rotationRef.current.y);

            const rotatedX = icon.x * cosY - icon.z * sinY;
            const rotatedZ = icon.x * sinY + icon.z * cosY;
            const rotatedY = icon.y * cosX + rotatedZ * sinX;

            const screenX = canvasRef.current!.width / 2 + rotatedX;
            const screenY = canvasRef.current!.height / 2 + rotatedY;

            const scale = (rotatedZ + 200) / 300;
            const radius = 20 * scale;
            const dx = x - screenX;
            const dy = y - screenY;

            if (dx * dx + dy * dy < radius * radius) {
                const targetX = -Math.atan2(
                    icon.y,
                    Math.sqrt(icon.x * icon.x + icon.z * icon.z)
                );
                const targetY = Math.atan2(icon.x, icon.z);

                const currentX = rotationRef.current.x;
                const currentY = rotationRef.current.y;
                const distance = Math.sqrt(
                    Math.pow(targetX - currentX, 2) +
                        Math.pow(targetY - currentY, 2)
                );

                const duration = Math.min(1200, Math.max(500, distance * 600)); // Faster animation (from 1500/600/800)

                setTargetRotation({
                    x: targetX,
                    y: targetY,
                    startX: currentX,
                    startY: currentY,
                    distance,
                    startTime: performance.now(),
                    duration,
                });
                return;
            }
        });

        setIsDragging(true);
        setLastMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePos({ x, y });
        }

        if (isDragging) {
            const deltaX = e.clientX - lastMousePos.x;
            const deltaY = e.clientY - lastMousePos.y;

            rotationRef.current = {
                x: rotationRef.current.x + deltaY * 0.003, // Increased from 0.002
                y: rotationRef.current.y + deltaX * 0.003, // Increased from 0.002
            };

            setLastMousePos({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Animation and rendering
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const maxDistance = Math.sqrt(
                centerX * centerX + centerY * centerY
            );
            const dx = mousePos.x - centerX;
            const dy = mousePos.y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const speed = 0.0055 + (distance / maxDistance) * 0.02; // Increased from 0.0045/0.015

            if (targetRotation) {
                const elapsed = performance.now() - targetRotation.startTime;
                const progress = Math.min(1, elapsed / targetRotation.duration);
                const easedProgress = easeOutCubic(progress);

                rotationRef.current = {
                    x:
                        targetRotation.startX +
                        (targetRotation.x - targetRotation.startX) *
                            easedProgress,
                    y:
                        targetRotation.startY +
                        (targetRotation.y - targetRotation.startY) *
                            easedProgress,
                };

                if (progress >= 1) {
                    setTargetRotation(null);
                }
            } else if (!isDragging) {
                rotationRef.current = {
                    x: rotationRef.current.x + (dy / canvas.height) * speed,
                    y: rotationRef.current.y + (dx / canvas.width) * speed,
                };
            }

            iconPositions.forEach((icon, index) => {
                const cosX = Math.cos(rotationRef.current.x);
                const sinX = Math.sin(rotationRef.current.x);
                const cosY = Math.cos(rotationRef.current.y);
                const sinY = Math.sin(rotationRef.current.y);

                const rotatedX = icon.x * cosY - icon.z * sinY;
                const rotatedZ = icon.x * sinY + icon.z * cosY;
                const rotatedY = icon.y * cosX + rotatedZ * sinX;

                const scale = (rotatedZ + 200) / 300;
                const opacity = Math.max(
                    0.2,
                    Math.min(1, (rotatedZ + 150) / 200)
                );

                ctx.save();
                ctx.translate(
                    canvas.width / 2 + rotatedX,
                    canvas.height / 2 + rotatedY
                );
                ctx.scale(scale, scale);
                ctx.globalAlpha = opacity;

                if (icons || images) {
                    // Only try to render icons/images if they exist
                    if (
                        iconCanvasesRef.current[index] &&
                        imagesLoadedRef.current[index]
                    ) {
                        ctx.drawImage(
                            iconCanvasesRef.current[index],
                            -22, // Increased from -20
                            -22, // Increased from -20
                            45,  // Increased from 40
                            45   // Increased from 40
                        );
                    }
                } else {
                    // Show numbered circles if no icons/images are provided
                    ctx.beginPath();
                    ctx.arc(0, 0, 25, 0, Math.PI * 2); // Increased radius from 20 to 25
                    ctx.fillStyle = "#4444ff";
                    ctx.fill();
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.font = "20px Arial"; // Increased font size from 16px to 20px
                    ctx.fillText(`${icon.id + 1}`, 0, 0);
                }

                ctx.restore();
            });
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [icons, images, iconPositions, isDragging, mousePos, targetRotation]);

    return (
        <canvas
            ref={canvasRef}
            width={1000} // Increased default width from 800 to 1000
            height={1000} // Increased default height from 800 to 1000
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="rounded-lg w-full h-full" // Added h-full to make sure the canvas takes full height of container
            aria-label="Interactive 3D Icon Cloud"
            role="img"
        />
    );
}
