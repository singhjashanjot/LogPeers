"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import Particles from "@/components/magicui/particles";

const ParticlesBackground = () => {
    const [color, setColor] = useState("#000000"); // Default particle color for light mode
  
    useEffect(() => {
      // Function to update particle color based on the current theme
      const updateParticleColor = () => {
        const htmlElement = document.documentElement;
  
        // Check if dark mode is active (using the 'dark' class on html element)
        if (htmlElement.classList.contains('dark')) {
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
        attributeFilter: ['class'], // Specifically watch for class changes
      });
  
      return () => {
        // Clean up the observer when the component unmounts
        observer.disconnect();
      };
    }, []);
  
    return (
        <div className="z-0 selection: flex h-screen n w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <div className="mx-auto text-center flex items-center flex-col justify-center gap-6">
                <div
                    className={cn(
                        "z-50 group rounded-full border border-neutral-500/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-neutral-500 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    )}
                >
                    <AnimatedShinyText className=" inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>✨ About LogPeers</span>
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
                <span className="selection:bg-slate-200 selection:text-black pointer-events-none font-bold whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl  leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    WELCOME TO LOGPEERS
                </span>
                <p className="mb-8 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    LogPeers is an all-in-one e-learning platform
                    bringing together curated, verified notes and study
                    materials.
                </p>
                <div className="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    
                    <a
                        href="#"
                        className="inline-flex items-center transition ease-out justify-center px-7 py-3 text-base font-medium text-center border border-solid border-neutral-300 shadow-md text-neutral-600 bg-white rounded-full  hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                        Get Started For free
                        <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
                <Particles
                    className="absolute inset-0 pointer-events-none"
                    quantity={80}
                    ease={69}
                    color={color}
                    refresh
                />
            </div>
        </div>
    );
};

export default ParticlesBackground;
