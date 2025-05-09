"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { IconCloud } from "@/components/atoms/icons";
interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-white dark:bg-black font-sans md:px-10 pt-0" /* Reduced top padding to pt-0 */
            ref={containerRef}
        >
            <div className="flex flex-row items-center max-w-7xl lg:mx-auto px-2 md:px-8 portrait:flex-col-reverse portrait:justify-center lg:px-10 -mt-32"> {/* Added negative margin top */}
                <div className="w-full md:w-3/5 lg:w-1/2"> 
                    <h2 className="crazyfont mb-4 pointer-events-none font-bold whitespace-pre-wrap bg-gradient-to-b from-black via-gray-900 to-gray-700 bg-clip-text text-center lg:text-left text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-none text-transparent dark:from-white dark:via-gray-300 dark:to-gray-500/80">
                        What We Offer 
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg portrait:text-center">
                        At LogPeers, we&apos;re dedicated to transforming the
                        way students learn and collaborate. Our platform is a
                        comprehensive e-learning hub designed to simplify your
                        academic journey. We provide easy access to notes, study materials,
                        and resources all in one place. No more searching across multiple websites
                        or platforms for what you need. Our goal is to save you time and
                        reduce stress, letting you focus on learning instead of searching.
                        Here&apos;s what you can expect:
                    </p>
                </div>
                <div className="relative flex h-full w-full md:w-2/5 lg:w-1/2 max-w-[40rem] items-center justify-center overflow-hidden rounded-lg ml-auto portrait:ml-0 bg-transparent px-10 md:px-14"> 
                    <IconCloud />
                </div>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20 mt-2"> {/* Reduced top margin from mt-8 to mt-2 */}
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-24 md:gap-10" /* Reduced padding top from 40 to 24 */
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="crazyfont hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
