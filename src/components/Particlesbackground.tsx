"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles"; // Import Particles component from your directory

const ParticlesBackground = () => {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(localStorage.getItem('theme') || 'light');
    }, [theme]);

    return (
        <div className=" pointer-events-none bg-transparent absolute inset-0  h-full w-full flex items-center justify-center overflow-hidden ">
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
        </div>
    );
};

export default ParticlesBackground;
