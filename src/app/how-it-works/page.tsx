import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How It Works',
    description:
        'Our simple process for building your website. From first contact to going live, we handle everything.',
};

const steps = [
    {
        number: '1',
        title: 'Get in touch',
        description: 'Fill in our contact form or give us a call. Tell us about your business and what you need. We will reply within 1 working day.',
    },
    {
        number: '2',
        title: 'We send you a quote',
        description: 'Based on what you tell us, we will send you a clear quote with no hidden costs. We will explain exactly what you get.',
    },
    {
        number: '3',
        title: 'You provide content',
        description: 'We will ask for some information about your business. Your services, your story, any photos you want to use. We will guide you through it.',
    },
    {
        number: '4',
        title: 'We build your website',
        description: 'We design and build your site. You will see a preview and can request changes. We keep going until you are happy.',
    },
    {
        number: '5',
        title: 'Review and refine',
        description: 'You look at every page and tell us if anything needs changing. We make adjustments until everything is right.',
    },
    {
        number: '6',
        title: 'Go live',
        description: 'Once you approve the final version, we connect your domain and your website goes live. We handle all the technical bits.',
    },
];

const whatWeHandle = [
    'Domain name registration',
    'Hosting setup',
    'Email configuration',
    'SSL certificate (the padlock in the browser)',
    'Mobile responsive design',
    'Search engine basics',
    'Contact form setup',
    'Google Business Profile (if required)',
];

export default function HowItWorksPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-slate-900 text-white py-16 md:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-white text-4xl md:text-5xl font-semibold mb-6">
                        How it works
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Getting a website should be simple. Here is our process from start to finish.
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={step.number} className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold text-lg">
                                            {step.number}
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className="w-0.5 h-16 bg-slate-200 mx-auto mt-4" />
                                        )}
                                    </div>
                                    <div className="pb-8">
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-600">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Handle */}
            <section className="section section-alt">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="mb-4">What we handle for you</h2>
                            <p className="text-lg text-slate-600">
                                You do not need to worry about the technical side. We take care of everything.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {whatWeHandle.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="mb-4">How long does it take?</h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Most websites are ready to go live within 2 to 3 weeks.
                        </p>
                        <p className="text-slate-600">
                            The exact timeline depends on how quickly you can provide content and feedback. We will give you a clearer estimate once we know what you need.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
                        Ready to get started?
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
