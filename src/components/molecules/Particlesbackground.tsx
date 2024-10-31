"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/atoms/animated-shiny-text";
import StarButton from "@/components/atoms/star-github-button";

import Particles from "@/components/atoms/particles";
import { Link } from "react-router-dom";
import GetStartedButton from "@/components/atoms/get-started-button";

const ParticlesBackground = () => {
    const [color, setColor] = useState("#000000"); // Default particle color for light mode

    useEffect(() => {
        // Function to update particle color based on the current theme
        const updateParticleColor = () => {
            const htmlElement = document.documentElement;

            // Check if dark mode is active (using the 'dark' class on html element)
            if (htmlElement.classList.contains("dark")) {
                setColor("#ffffff"); // White particles for dark mode
            } else {
                setColor("#000000"); // Black particles for light mode
            }
        };

        // Initial check when component mounts
        updateParticleColor();

        // Listen for theme toggle (every time the 'dark' class is toggled)
        const observer = new MutationObserver(updateParticleColor);
        observer.observe(document.documentElement, {
            attributes: true, // Watch for changes in attributes
            attributeFilter: ["class"], // Specifically watch for class changes
        });

        return () => {
            // Clean up the observer when the component unmounts
            observer.disconnect();
        };
    }, []);

    return (
        <div className="z-0 flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <div className="mx-auto self-center text-center flex items-center flex-col justify-center gap-5 px-5 mt-auto">
                <div
                    className={cn(
                        "z-50 group rounded-full border border-neutral-500/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-neutral-500 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    )}
                >
                    <AnimatedShinyText className=" inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <Link to="/about">✨ About LogPeers</Link>
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
                <span className="pointer-events-none font-bold whitespace-pre-wrap bg-gradient-to-b from-black via-gray-900 to-gray-700 bg-clip-text text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-none text-transparent dark:from-white dark:via-gray-300 dark:to-gray-500/80">
                    Discover a New Way to Study
                </span>
                <p className="mb-8 text-base sm:text-lg lg:text-xl text-center font-normal text-gray-500 sm:px-8 md:px-16 lg:px-32 xl:px-48 dark:text-gray-400">
                    LogPeers is an all-in-one e-learning platform bringing
                    together curated, verified notes and study materials.
                </p>
                <div className="flex flex-col mb-8 w-full items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <GetStartedButton />
                    <StarButton />   
                </div>
                <img
                    src="/icons/arrow.gif"
                    className="pointer-events-none"
                    height={10}
                    alt=""
                />

                <Particles
                    className="absolute inset-0 pointer-events-none"
                    quantity={80}
                    ease={12}
                    color={color}
                    refresh
                    staticity={50}
                    vy={-0.2}
                />
            </div>
        </div>
    );
};

export default ParticlesBackground;
