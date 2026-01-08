import type { Metadata } from 'next';
import Link from 'next/link';
import TemplateCard from '@/components/TemplateCard';
import TrustSignals from '@/components/TrustSignals';

export const metadata: Metadata = {
    title: 'Websites for Tradespeople in Birmingham and West Midlands',
    description:
        'Professional websites for plumbers, electricians, builders and other trades in Birmingham, the Black Country and West Midlands. We handle everything for you.',
};

const templates = [
    {
        title: 'Plumber Website',
        description: 'A practical website for plumbers in Birmingham and the West Midlands.',
        category: 'Trade' as const,
        href: '/templates/plumber-website-template',
    },
    {
        title: 'Electrician Website',
        description: 'A professional website for electricians in the Black Country.',
        category: 'Trade' as const,
        href: '/templates/electrician-website-template',
    },
    {
        title: 'Builder Website',
        description: 'A solid website for builders across the West Midlands.',
        category: 'Trade' as const,
        href: '/templates/builder-website-template',
    },
];

const trustSignals = [
    {
        title: 'Built for trades',
        description: 'We understand what tradespeople need. A website that looks professional and brings in work.',
    },
    {
        title: 'Local focus',
        description: 'We know Birmingham and the West Midlands. Your website will reach local customers.',
    },
    {
        title: 'No hassle',
        description: 'We set everything up. You do not need to worry about domains, hosting or tech.',
    },
];

const benefits = [
    {
        title: 'Get found online',
        description: 'When someone in Birmingham searches for a plumber or electrician, your website will help them find you.',
    },
    {
        title: 'Look professional',
        description: 'A professional website shows customers you take your work seriously.',
    },
    {
        title: 'Save time',
        description: 'We handle everything. You focus on your trade.',
    },
    {
        title: 'Show your work',
        description: 'Display your services, coverage area and customer reviews all in one place.',
    },
];

export default function TradesPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-slate-900 text-white py-16 md:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-blue-400 font-medium mb-4">Websites for Trades</p>
                        <h1 className="text-white text-4xl md:text-5xl font-semibold mb-6">
                            Professional websites for Birmingham tradespeople
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            Plumbers, electricians, builders and other trades across Birmingham, the Black Country and the West Midlands. We build your website and handle everything for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/templates" className="btn btn-primary text-lg px-8">
                                View Trade Templates
                            </Link>
                            <Link href="/contact" className="btn btn-secondary text-lg px-8">
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="mb-4">Why your trade business needs a website</h2>
                        <p className="text-lg text-slate-600">
                            More people search online before hiring a tradesperson. A simple website helps them find and trust you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">{benefit.title}</h3>
                                    <p className="text-slate-600">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="section section-alt">
                <div className="container mx-auto">
                    <TrustSignals signals={trustSignals} />
                </div>
            </section>

            {/* Templates */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="mb-4">Trade website templates</h2>
                        <p className="text-lg text-slate-600">
                            Have a look at our templates for tradespeople. We can customise any of these for your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {templates.map((template) => (
                            <TemplateCard
                                key={template.href}
                                {...template}
                                imageSrc={template.href.includes('plumber') ? '/images/templates/plumber-hero.png' :
                                    template.href.includes('electrician') ? '/images/templates/electrician-hero.png' :
                                        '/images/templates/builder-hero.png'}
                                imageAlt={`${template.title} preview`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="section section-alt">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-center mb-8">What you get</h2>
                        <ul className="space-y-4">
                            {[
                                'A professional website that shows what you do and where you work',
                                'Your own domain name (like yourname.co.uk)',
                                'Contact form so customers can reach you',
                                'Mobile friendly design that works on phones and tablets',
                                'We set up everything and show you how to make updates',
                                'Ongoing support if you need help',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
                        Get a website that works for your trade
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Tell us about your business and we will get back to you within 1 working day.
                    </p>
                    <Link href="/contact" className="btn btn-primary text-lg px-8">
                        Get a Quote
                    </Link>
                </div>
            </section>
        </>
    );
}
