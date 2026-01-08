import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Pricing',
    description:
        'Clear, upfront pricing for websites. Three packages to suit different needs. No hidden costs.',
};

const packages = [
    {
        name: 'Starter',
        price: '£495',
        description: 'A simple one page website to get you online.',
        features: [
            'One page website',
            'Mobile friendly design',
            'Contact form',
            'Domain setup',
            'Basic SEO',
            '30 days support after launch',
        ],
        cta: 'Get Started',
        highlighted: false,
    },
    {
        name: 'Standard',
        price: '£795',
        description: 'A complete website with multiple pages. Our most popular option.',
        features: [
            'Up to 5 pages',
            'Mobile friendly design',
            'Contact form',
            'Domain and email setup',
            'Full SEO setup',
            'Google Business Profile setup',
            '90 days support after launch',
        ],
        cta: 'Get Started',
        highlighted: true,
    },
    {
        name: 'Premium',
        price: '£1,295',
        description: 'Everything you need plus extra features and ongoing support.',
        features: [
            'Up to 10 pages',
            'Mobile friendly design',
            'Contact form with notifications',
            'Domain and email setup',
            'Full SEO setup',
            'Google Business Profile setup',
            'Social media links',
            'Review integration',
            '12 months support',
            'Priority response',
        ],
        cta: 'Get Started',
        highlighted: false,
    },
];

export default function PricingPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-slate-900 text-white py-16 md:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-white text-4xl md:text-5xl font-semibold mb-6">
                        Clear, upfront pricing
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        No hidden costs. No monthly fees for basic packages. Choose the package that fits your needs.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.name}
                                className={`rounded-xl p-8 ${pkg.highlighted
                                        ? 'bg-slate-900 text-white ring-2 ring-blue-500'
                                        : 'bg-white border border-slate-200'
                                    }`}
                            >
                                {pkg.highlighted && (
                                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full mb-4">
                                        Most Popular
                                    </span>
                                )}
                                <h2 className={`text-2xl font-semibold ${pkg.highlighted ? 'text-white' : 'text-slate-900'}`}>
                                    {pkg.name}
                                </h2>
                                <p className={`mt-2 ${pkg.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {pkg.description}
                                </p>
                                <p className={`text-4xl font-bold mt-6 ${pkg.highlighted ? 'text-white' : 'text-slate-900'}`}>
                                    {pkg.price}
                                </p>
                                <p className={`text-sm ${pkg.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                                    One-time payment
                                </p>

                                <ul className="mt-8 space-y-3">
                                    {pkg.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg
                                                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-blue-400' : 'text-green-600'}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className={pkg.highlighted ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className={`btn w-full mt-8 ${pkg.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                                >
                                    {pkg.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section section-alt">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-center mb-8">Common questions</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-2">Are there any monthly fees?</h3>
                                <p className="text-slate-600">
                                    The website build is a one-time payment. You will need to pay for domain renewal (usually around £10 to £15 per year) and hosting if required. We can explain the options when we chat.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-2">What if I need more pages?</h3>
                                <p className="text-slate-600">
                                    We can add extra pages for £75 each. Or if you need a larger site, get in touch and we will give you a custom quote.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-2">How long does it take?</h3>
                                <p className="text-slate-600">
                                    Most websites are ready within 2 to 3 weeks. It depends on how quickly you can provide content and feedback.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-2">Can I make changes myself?</h3>
                                <p className="text-slate-600">
                                    Yes. We can set up your site so you can make simple changes. We also offer support if you prefer us to handle updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
                        Not sure which package?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Get in touch and we will help you choose the right option for your business.
                    </p>
                    <Link href="/contact" className="btn btn-primary text-lg px-8">
                        Get a Quote
                    </Link>
                </div>
            </section>
        </>
    );
}
