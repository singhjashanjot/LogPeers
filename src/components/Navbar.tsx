"use client";
import * as React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ui/dark-mode-button";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookOpen as Book } from "lucide-react";

// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "DATA ENGINEERING",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "WEB DEVELOPMENT",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "DSA(JAVA)",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "AI/ML",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "OOPS",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "CLOUD",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export function NavBar() {
    return (
        <div className="fixed flex w-full z-[999] m-auto justify-between p-2 backdrop-blur-sm border shadow-lg">
            <div className="flex mx-3 justify-center items-center px-3 gap-4">
                <NavigationMenu>
                    <NavigationMenuList>
                        
                <NavigationMenuItem>
                    <Link to="/">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle() + 'tracking-wider crazyfont text-xl font-semibold hover:bg-transparent hover:text-white'}
                            >
                            LogPeers
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                                </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu className="">
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
                                                {/* <Icons.logo className="h-6 w-6" /> */}
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
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Learnings
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/docs">
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
            <div className="flex justify-center items-center gap-4 mx-3">
                <ThemeToggle />
                <Button
                    className="rounded-3xl bg-black dark:bg-slate-50 dark:hover:bg-gray-200 text-white dark:text-slate-800"
                    variant={"outline"}
                >
                    {" "}
                    Sign Up
                </Button>
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
