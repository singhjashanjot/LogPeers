import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, BookOpen, NotebookPen } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface DockItemProps {
    to: string;
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
}

export function DockComponent() {
    const location = useLocation();
    const { isAuthenticated } = useAuth();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
            <div className="absolute inset-0 bg-background/90 backdrop-blur-[8px] border-t border-border/40 dark:border-gray-800/40 shadow-lg dark:shadow-gray-950/50"></div>
            <div className="relative flex justify-around w-full">
                <nav className="flex h-16 w-full max-w-md">
                    <div className="flex-1 flex justify-around items-center">
                        <DockItem 
                            to="/" 
                            icon={<Home />} 
                            label="Home" 
                            isActive={location.pathname === "/"} 
                        />
                        <DockItem 
                            to="/learnings" 
                            icon={<BookOpen />} 
                            label="Learn" 
                            isActive={location.pathname === "/learnings"} 
                        />
                        <DockItem 
                            to="/notes" 
                            icon={<NotebookPen />} 
                            label="Notes" 
                            isActive={location.pathname === "/notes"} 
                        />
                        {isAuthenticated && (
                            <DockItem 
                                to="/profile" 
                                icon={<UserProfile />} 
                                label="Profile" 
                                isActive={location.pathname === "/profile"} 
                            />
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}

const DockItem = ({ to, icon, label, isActive }: DockItemProps) => {
    const navigate = useNavigate();
    
    return (
        <button
            onClick={() => navigate(to)}
            className={`
                relative flex flex-col items-center justify-center w-16 p-1
                transition-all duration-200 ease-out
                hover:translate-y-[-4px]
                active:translate-y-[0px]
                ${isActive 
                    ? 'text-primary dark:text-primary-foreground' 
                    : 'text-muted-foreground dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }
            `}
        >
            <div className={`
                relative p-2 rounded-xl
                transition-all duration-200
                ${isActive 
                    ? 'bg-primary/10 dark:bg-primary/20 shadow-lg shadow-primary/20 dark:shadow-primary/10' 
                    : 'hover:bg-muted/50 dark:hover:bg-gray-800/50'
                }
            `}>
                <div className="w-5 h-5">
                    {icon}
                </div>
                
                {isActive && (
                    <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary dark:bg-primary-foreground rounded-full transform -translate-x-1/2" />
                )}
            </div>

            <span className={`
                text-xs mt-1
                transition-colors duration-200
                ${isActive 
                    ? 'font-medium text-primary dark:text-primary-foreground' 
                    : 'font-normal'
                }
            `}>
                {label}
            </span>
        </button>
    );
};

const UserProfile = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
    >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);
