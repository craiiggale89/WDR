'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import TemplateCard from '@/components/TemplateCard';

const templates = [
    {
        title: 'Plumber Website',
        description: 'A practical website for plumbers in Birmingham and the West Midlands. Shows services, coverage area and contact details.',
        category: 'Trade' as const,
        href: '/templates/plumber-website-template',
        imageSrc: '/images/templates/plumber-hero.png',
        imageAlt: 'Plumber website template preview',
    },
    {
        title: 'Electrician Website',
        description: 'A professional website for electricians in the Black Country. Clean design with clear service listings.',
        category: 'Trade' as const,
        href: '/templates/electrician-website-template',
        imageSrc: '/images/templates/electrician-hero.png',
        imageAlt: 'Electrician website template preview',
    },
    {
        title: 'Builder Website',
        description: 'A solid website for builders across the West Midlands. Shows your work and builds trust.',
        category: 'Trade' as const,
        href: '/templates/builder-website-template',
        imageSrc: '/images/templates/builder-hero.png',
        imageAlt: 'Builder website template preview',
    },
    {
        title: 'Therapist Website',
        description: 'A calm, professional website for therapists and counsellors. Reassuring design that puts clients at ease.',
        category: 'Therapist' as const,
        href: '/templates/therapist-website-template',
        imageSrc: '/images/templates/therapist-hero.png',
        imageAlt: 'Therapist website template preview',
    },
    {
        title: 'Coach Website',
        description: 'A confident website for life coaches and business coaches. Clear messaging that attracts the right clients.',
        category: 'Coach' as const,
        href: '/templates/coach-website-template',
        imageSrc: '/images/templates/coach-hero.png',
        imageAlt: 'Coach website template preview',
    },
];

const categories = ['All', 'Trade', 'Coach', 'Therapist'] as const;

export default function TemplatesPage() {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const filteredTemplates = activeCategory === 'All'
        ? templates
        : templates.filter((t) => t.category === activeCategory);

    return (
        <>
            {/* Hero */}
            <section className="bg-slate-900 text-white py-16 md:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-white text-4xl md:text-5xl font-semibold mb-6">
                        Example templates
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Have a look at our website templates. These are examples to show what we can build. We customise everything for your business.
                    </p>
                </div>
            </section>

            {/* Note */}
            <section className="bg-slate-50 border-b border-slate-200 py-4">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <span className="example-label">Example templates for demonstration</span>
                </div>
            </section>

            {/* Filters */}
            <section className="section">
                <div className="container mx-auto">
                    {/* Filter buttons */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                                    ? 'bg-slate-900 text-white'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Templates grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTemplates.map((template) => (
                            <TemplateCard key={template.href} {...template} />
                        ))}
                    </div>

                    {filteredTemplates.length === 0 && (
                        <p className="text-center text-slate-500">No templates found in this category.</p>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
                        Like what you see?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Get in touch and tell us which template you like. We will customise it for your business.
                    </p>
                    <a href="/contact" className="btn btn-primary text-lg px-8">
                        Get a Quote
                    </a>
                </div>
            </section>
        </>
    );
}
