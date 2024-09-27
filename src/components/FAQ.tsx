'use client'

import { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from 'framer-motion'

export default function MinimalistFAQSection() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    console.log(hoveredItem);

    return (
        <section className="w-screen  mx-auto py-16 px-80 bg-white dark:bg-black transition-colors duration-300">
            <h2 className="pointer-events-none font-bold whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400/80 bg-clip-text text-center text-4xl 
             leading-none text-transparent dark:from-white dark:to-slate-900/10 py-10">
                Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {['item-1', 'item-2', 'item-3'].map((item, index) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="w-full"
                    >
                        <AccordionItem
                            value={item}
                            className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition-all duration-300"
                            onMouseEnter={() => setHoveredItem(item)}
                            onMouseLeave={() => setHoveredItem(null)}
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
    )
}

function getQuestion(item: string): string {
    switch (item) {
        case 'item-1':
            return "Why choose LogPeers over others?"
        case 'item-2':
            return "How LogPeers help students in their learnings ?"
        case 'item-3':
            return "How can I contribute my notes with others through LogPeers?"

        default:
            return ""
    }
}

function getAnswer(item: string): string {
    switch (item) {
        case 'item-1':
            return "To create an account, click on the 'Sign Up' button in the top right corner of our homepage. Fill in your details, including your email address and a secure password. Once you've completed the form, click 'Create Account' and follow the verification steps sent to your email."
        case 'item-2':
            return "We accept a variety of payment methods including credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For specific regional payment options, please check our payment page or contact our customer support."
        case 'item-3':
            return "Our customer support team is available 24/7. You can reach us through our contact form on the website, by email at support@example.com, or by phone at +1 (800) 123-4567. For fastest response, please include your order number or account details when contacting us."
        default:
            return ""
    }
}