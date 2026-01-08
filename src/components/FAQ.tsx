'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    className?: string;
}

export default function FAQ({ items, className = '' }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className={`divide-y divide-slate-200 ${className}`}>
            {items.map((item, index) => (
                <div key={index} className="py-4">
                    <button
                        type="button"
                        className="w-full flex items-center justify-between text-left"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <span className="font-medium text-slate-900">{item.question}</span>
                        <svg
                            className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    {openIndex === index && (
                        <div className="mt-3 text-slate-600">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
