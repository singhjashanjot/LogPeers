import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Get the saved theme from localStorage, if available, and apply it
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        document.documentElement.classList.toggle(
            "dark",
            savedTheme === "dark"
        );
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        // Save the theme in localStorage
        localStorage.setItem("theme", newTheme);
        // Toggle the dark class on the html element
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <div className="flex flex-col justify-center items-center text-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
            <button onClick={toggleTheme} className="relative cursor-pointer ">
                {theme === "dark" ? (
                    <Sun className="max-w-max" />
                ) : (
                    <Moon className="max-w-max" />
                )}
                <span className="sr-only">Switch to light/dark mode</span>
            </button>
        </div>
    );
}
