import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
    services: [
        { name: 'Templates', href: '/templates' },
        { name: 'Trades', href: '/trades' },
        { name: 'Coaches & Therapists', href: '/coaches-and-therapists' },
        { name: 'Pricing', href: '/pricing' },
    ],
    company: [
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Contact', href: '/contact' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-slate-900">
            {/* Main footer content */}
            <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <Image
                            src="/images/wdr-logo-v2.png"
                            alt="Websites Done Right"
                            width={140}
                            height={48}
                            className="h-10 w-auto brightness-0 invert"
                        />
                        <p className="mt-4 text-slate-400 max-w-sm leading-relaxed">
                            We build simple, professional websites for Birmingham and West Midlands trades, coaches and therapists.
                        </p>
                        <p className="mt-2 text-slate-500 text-sm">
                            We handle everything for you.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-3">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-300 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-2">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-300 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact hint */}
                    <div className="md:col-span-2">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
                            Get in touch
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Birmingham &amp; West Midlands
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block mt-4 text-sm text-white font-medium hover:text-slate-300 transition-colors"
                        >
                            Contact us →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800">
                <div className="container mx-auto px-4 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © {new Date().getFullYear()} Websites Done Right
                        </p>
                        <p className="text-slate-600 text-xs">
                            Websites done right for local businesses.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
