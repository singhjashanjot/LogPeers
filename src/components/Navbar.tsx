"use client";
import * as React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ui/dark-mode-button";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookOpen as Book } from "lucide-react";
import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import HamburgerButton from "./atoms/HamburgerButton";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full p-4 backdrop-blur-sm border shadow-lg fixed z-[999] justify-between">
            {/* Navbar container */}
            <div className="flex justify-between items-center">
                {/* Left Section: Logo and Menu */}
                <div className="flex items-center gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link to="/">
                                    <NavigationMenuLink
                                        className={
                                            navigationMenuTriggerStyle() +
                                            " bg-transparent tracking-wide crazyfont text-xl font-semibold hover:bg-background dark:hover:text-white"
                                        }
                                    >
                                        LogPeers
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Navigation Menu for larger screens */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Getting started
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-neutral-100/50 to-gray-200 p-6 no-underline outline-none focus:shadow-md dark:from-black/10 dark:to-black/90"
                                                    href="/"
                                                >
                                                    <Book />
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        LogPeers
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        LogPeers is a
                                                        minimalist, all-in-one
                                                        e-learning platform
                                                        bringing together
                                                        curated, verified notes
                                                        and study materials,
                                                        designed for efficient
                                                        and focused learning.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem
                                            href="/docs"
                                            title="Introduction"
                                        >
                                            Re-usable components built using
                                            Radix UI and Tailwind CSS.
                                        </ListItem>
                                        <ListItem
                                            href="/docs/installation"
                                            title="Installation"
                                        >
                                            How to install dependencies and
                                            structure your app.
                                        </ListItem>
                                        <ListItem
                                            href="/docs/primitives/typography"
                                            title="Typography"
                                        >
                                            Styles for headings, paragraphs,
                                            lists...etc
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="/learnings">
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Learnings
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="/notes">
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Notes
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Section: Theme Toggle, Button Group, and Hamburger for mobile */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Button Group */}
                    <Button
                        className="rounded-3xl bg-black dark:bg-slate-50 dark:hover:bg-gray-200 text-white dark:text-slate-800"
                        variant={"outline"}
                    >
                        Sign Up
                    </Button>

                    {/* Mobile Hamburger Menu */}
                    <div className="md:hidden">
                        <HamburgerButton
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu with Sliding Effect */}
            <div
                className={`fixed top-0 left-0 w-full bg-transparent transition-transform duration-300 ease-in-out bg-white dark:bg-black text-black dark:text-white p-4 backdrop-blur-lg z-[59] ${
                    isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
                // Adjust this value based on your navbar height
            >
                <NavigationMenu>
                    <NavigationMenuList>
                        {/* "Getting Started" menu item for mobile */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Getting Started
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-neutral-100/50 to-gray-200 p-6 no-underline outline-none focus:shadow-md dark:from-black/10 dark:to-black/90"
                                                href="/"
                                            >
                                                <Book />
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    LogPeers
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    LogPeers is a minimalist,
                                                    all-in-one e-learning
                                                    platform bringing together
                                                    curated, verified notes and
                                                    study materials, designed
                                                    for efficient and focused
                                                    learning.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/docs" title="Introduction">
                                        Re-usable components built using Radix
                                        UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem
                                        href="/docs/installation"
                                        title="Installation"
                                    >
                                        How to install dependencies and
                                        structure your app.
                                    </ListItem>
                                    <ListItem
                                        href="/docs/primitives/typography"
                                        title="Typography"
                                    >
                                        Styles for headings, paragraphs,
                                        lists...etc
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Existing mobile links */}
                        <NavigationMenuItem>
                            <Link to="/learnings">
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Learnings
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/notes">
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Notes
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});

ListItem.displayName = "ListItem";
