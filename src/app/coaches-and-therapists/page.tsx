import type { Metadata } from 'next';
import Link from 'next/link';
import TemplateCard from '@/components/TemplateCard';
import TrustSignals from '@/components/TrustSignals';

export const metadata: Metadata = {
    title: 'Websites for Coaches and Therapists in Birmingham and West Midlands',
    description:
        'Professional websites for life coaches, business coaches, counsellors and therapists in Birmingham and the West Midlands. Simple, calm and professional.',
};

const templates = [
    {
        title: 'Therapist Website',
        description: 'A calm, professional website for therapists and counsellors.',
        category: 'Therapist' as const,
        href: '/templates/therapist-website-template',
        imageSrc: '/images/templates/therapist-hero.png',
        imageAlt: 'Therapist website template preview',
    },
    {
        title: 'Coach Website',
        description: 'A confident website for coaches who want to reach more clients.',
        category: 'Coach' as const,
        href: '/templates/coach-website-template',
        imageSrc: '/images/templates/coach-hero.png',
        imageAlt: 'Coach website template preview',
    },
];

const trustSignals = [
    {
        title: 'Designed for your profession',
        description: 'We understand what coaches and therapists need. A website that feels right for your clients.',
    },
    {
        title: 'Professional and calm',
        description: 'Clean, minimal design that creates the right impression from the first visit.',
    },
    {
        title: 'We handle everything',
        description: 'From domain setup to going live. You focus on your clients.',
    },
];

const benefits = [
    {
        title: 'Reach more clients',
        description: 'When someone searches for a coach or therapist in Birmingham, your website helps them find you.',
    },
    {
        title: 'Build trust',
        description: 'A professional website shows potential clients that you take your practice seriously.',
    },
    {
        title: 'Share your approach',
        description: 'Explain how you work and who you help. Let clients know what to expect.',
    },
    {
        title: 'Simple to manage',
        description: 'We build your site so you can focus on your work. Updates are easy if you need them.',
    },
];

export default function CoachesAndTherapistsPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-slate-900 text-white py-16 md:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-green-400 font-medium mb-4">Websites for Coaches and Therapists</p>
                        <h1 className="text-white text-4xl md:text-5xl font-semibold mb-6">
                            Professional websites for coaches and therapists
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            Life coaches, business coaches, counsellors and therapists in Birmingham and the West Midlands. We build calm, professional websites that help you reach more clients.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/templates" className="btn btn-primary text-lg px-8">
                                View Templates
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
                        <h2 className="mb-4">Why you need a professional website</h2>
                        <p className="text-lg text-slate-600">
                            Potential clients often search online before booking a session. Your website is usually their first impression.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
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
                        <h2 className="mb-4">Website templates for coaches and therapists</h2>
                        <p className="text-lg text-slate-600">
                            Have a look at our templates. We can customise these for your practice.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {templates.map((template) => (
                            <TemplateCard key={template.href} {...template} />
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
                                'A calm, professional website that reflects your practice',
                                'Your own domain name',
                                'Clear information about your services and approach',
                                'Contact form or booking integration',
                                'Mobile friendly design',
                                'We set up everything and provide ongoing support',
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
                        Ready to reach more clients?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Tell us about your practice and we will get back to you within 1 working day.
                    </p>
                    <Link href="/contact" className="btn btn-primary text-lg px-8">
                        Get a Quote
                    </Link>
                </div>
            </section>
        </>
    );
}
