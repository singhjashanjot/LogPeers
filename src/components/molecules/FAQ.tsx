'use client';

import { useEffect, useRef, useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

export default function MinimalistFAQSection() {
    const [inView, setInView] = useState(false); // State to track if component is in view
    const sectionRef = useRef<HTMLDivElement | null>(null); // Ref for the section

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); // Stop observing after the first entry
                }
            },
            {
                threshold: 0.1, // Adjust as necessary
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect(); // Cleanup observer on unmount
        };
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className="w-full mx-auto py-16 px-4 bg-white dark:bg-black transition-colors duration-300"
        >
            <h2 className="pointer-events-none font-bold whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400/80 bg-clip-text text-center text-4xl 
                leading-none text-transparent dark:from-white dark:to-slate-900/10 py-10"
            >
                Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4 max-w-4xl mx-auto">
                {['item-1', 'item-2', 'item-3'].map((item, index) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <AccordionItem
                            value={item}
                            className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition-all duration-300"
                        >
                            <AccordionTrigger className="px-6 py-4 bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-slate-100/10 transition-all duration-300">
                                <span className="text-lg font-semibold text-black dark:text-white">
                                    {getQuestion(item)}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 bg-gray-100 dark:bg-slate-100/5">
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-700 dark:text-gray-300"
                                >
                                    {getAnswer(item)}
                                </motion.p>
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                ))}
            </Accordion>
        </section>
    );
}

function getQuestion(item: string): string {
    switch (item) {
        case 'item-1':
            return "Why choose LogPeers over others?";
        case 'item-2':
            return "How LogPeers help students in their learnings?";
        case 'item-3':
            return "How can I contribute my notes with others through LogPeers?";
        default:
            return "";
    }
}

function getAnswer(item: string): string {
    switch (item) {
        case 'item-1':
            return "LogPeers stands out for its intuitive interface and collaborative features, making study easier and more effective.";
        case 'item-2':
            return "LogPeers enhances learning by providing structured notes, interactive content, and a community for sharing insights.";
        case 'item-3':
            return "You can easily contribute by uploading your notes on the platform, allowing others to benefit from your knowledge.";
        default:
            return "";
    }
}