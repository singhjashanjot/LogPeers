import { useEffect, useState } from "react";
import StarButton from "@/components/atoms/star-github-button";
import Particles from "@/components/atoms/particles";
import GetStartedButton from "@/components/atoms/get-started-button";

const ParticlesBackground = () => {
    const [color, setColor] = useState("#000000");

    useEffect(() => {
        const updateParticleColor = () => {
            const htmlElement = document.documentElement;
            if (htmlElement.classList.contains("dark")) {
                setColor("#ffffff");
            } else {
                setColor("#000000");
            }
        };

        updateParticleColor();

        const observer = new MutationObserver(updateParticleColor);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="z-0 max-w-7xl lg:mx-auto flex min-h-[600px] w-full flex-col justify-center overflow-hidden rounded-lg bg-background p-8">
            <div className="px-5 mt-8"> 
                <span className="crazyfont pointer-events-none font-bold whitespace-pre-wrap bg-gradient-to-b from-black via-gray-900 to-gray-700 bg-clip-text text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight sm:leading-snug md:leading-none text-transparent dark:from-white dark:via-gray-300 dark:to-gray-500/80 block mt-5">
                    Simplify Learning, Amplify Success
                </span>
                <p className="mt-5 text-base sm:text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400 max-w-3xl">
                    LogPeers makes learning effortless with curated resources and study materials, so you can focus on mastering skills and reaching new heights!
                </p>
                <div className="flex flex-col mt-8 lg:items-start space-y-4 items-center sm:flex-row sm:space-y-0 sm:space-x-4">
                    <GetStartedButton />
                    <StarButton />
                </div>
            </div>
        </div>
    );
};

export default ParticlesBackground;
{/* <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={20}
        ease={12}
        color={color}
        refresh
        staticity={25}
        vy={-0.01}
    /> */}