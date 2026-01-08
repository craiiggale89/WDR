import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
    title: 'Electrician Website Template',
    description: 'Example electrician website template for Black Country and West Midlands electricians. See how your business could look online.',
};

const services = [
    { title: 'Domestic Rewiring', description: 'Full and partial rewires. Bring older properties up to current standards.', icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' },
    { title: 'Fuse Board Upgrades', description: 'Consumer unit replacements with modern safety features.', icon: 'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z' },
    { title: 'Fault Finding', description: 'Tripping circuits and outages diagnosed and repaired.', icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' },
    { title: 'Lighting Installation', description: 'Indoor and outdoor lighting. Design to installation.', icon: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18' },
    { title: 'EICR Inspections', description: 'Electrical reports for landlords and homeowners.', icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z' },
    { title: 'Commercial Work', description: 'Electrical work for shops, offices and businesses.', icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' },
];

const certifications = [
    { name: 'NICEIC Approved', description: 'Regularly assessed to highest standards' },
    { name: 'Part P Certified', description: 'Compliant with building regulations' },
    { name: 'Fully Insured', description: 'Public liability coverage' },
];

const testimonials = [
    { name: 'Mark H.', text: 'Had the whole house rewired. They were tidy, professional and kept me informed throughout. Would definitely recommend.' },
    { name: 'Louise P.', text: 'Quick response for an emergency call out. Found the fault and fixed it same day. Very reasonable price.' },
    { name: 'James R.', text: 'Used them for an EICR for my rental property. Report was clear and they explained everything I needed to do.' },
];

const coverageAreas = ['West Bromwich', 'Dudley', 'Walsall', 'Wolverhampton', 'Sandwell', 'Tipton', 'Oldbury', 'Smethwick', 'Wednesbury', 'Birmingham', 'Halesowen', 'Stourbridge'];

const faqs = [
    { question: 'Are you a registered electrician?', answer: 'Yes. We are NICEIC approved contractors. This means we are regularly assessed to ensure our work meets the highest standards.' },
    { question: 'Do you provide certificates?', answer: 'Yes. All notifiable work comes with the appropriate certification. For inspections, we provide full EICR reports.' },
    { question: 'How much does a rewire cost?', answer: 'It depends on the size of the property and the amount of work needed. We provide free quotes with no obligation.' },
    { question: 'Do you do small jobs?', answer: 'Yes. From adding a socket to installing a light fitting. No job is too small.' },
    { question: 'Can you help with a fault I cannot find?', answer: 'Yes. We have the equipment and experience to track down faults that are not obvious. We charge a fixed fee for fault finding.' },
    { question: 'Do you work on commercial properties?', answer: 'Yes. We do electrical work for shops, offices and other commercial premises.' },
];

export default function ElectricianTemplatePage() {
    return (
        <div className="bg-slate-50">
            {/* Example Template Banner */}
            <div className="bg-amber-500 text-slate-900 py-2">
                <div className="container mx-auto px-4 text-center text-sm font-medium">
                    ⚡ EXAMPLE TEMPLATE — This is a demo website. The business shown is not real.
                </div>
            </div>

            {/* Technical Header */}
            <section className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 lg:px-8 py-8">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">Black Country Electrical</h1>
                            <p className="text-slate-600">NICEIC Approved Contractors</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <p className="text-sm text-slate-500">Call us</p>
                                <p className="text-xl font-bold text-slate-900">0121 XXX XXXX</p>
                            </div>
                            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded transition-colors">
                                Free Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Grid */}
            <section className="bg-slate-900 py-16 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-8 items-center">
                        <div className="lg:col-span-3">
                            <div className="flex items-center gap-2 text-amber-500 mb-4">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                                <span className="font-medium">Qualified Electricians</span>
                            </div>
                            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Professional Electrical Services for the Black Country
                            </h2>
                            <p className="text-slate-300 text-lg mb-8">
                                Domestic and commercial electrical work across Dudley, Walsall, Wolverhampton and the wider West Midlands. Fully certified and insured.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-8 rounded transition-colors">
                                    Get a Quote
                                </Link>
                                <Link href="/contact" className="border border-slate-600 !text-white hover:bg-slate-800 font-medium py-4 px-8 rounded transition-colors">
                                    Request This Template
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <PlaceholderImage
                                src="/images/templates/electrician-hero.png"
                                caption="Electrician working. Replace with your photo."
                                aspectRatio="square"
                                variant="dark"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Strip */}
            <section className="bg-white border-b border-slate-200 py-8">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">{cert.name}</h3>
                                    <p className="text-sm text-slate-600">{cert.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services with Icons */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Electrical Services</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            From simple repairs to complete rewires. All work certified and guaranteed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-amber-300 transition-colors">
                                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-slate-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Gallery */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Recent Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-4">
                            <PlaceholderImage
                                src="/images/templates/electrician-work-fuseboard.png"
                                caption="Fuse board upgrade. Replace with your photo."
                                aspectRatio="video"
                                variant="light"
                                className="rounded-lg"
                            />
                            <div className="p-4 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-slate-900">Consumer Unit Upgrade</h3>
                                <p className="text-sm text-slate-600">Dudley, West Midlands</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <PlaceholderImage
                                src="/images/templates/electrician-work-rewire.png"
                                caption="House rewire. Replace with your photo."
                                aspectRatio="video"
                                variant="light"
                                className="rounded-lg"
                            />
                            <div className="p-4 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-slate-900">Full House Rewire</h3>
                                <p className="text-sm text-slate-600">Wolverhampton</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <PlaceholderImage
                                src="/images/templates/electrician-work-commercial.png"
                                caption="Commercial installation. Replace with your photo."
                                aspectRatio="video"
                                variant="light"
                                className="rounded-lg"
                            />
                            <div className="p-4 bg-slate-50 rounded-lg">
                                <h3 className="font-bold text-slate-900">Shop Fit Out</h3>
                                <p className="text-sm text-slate-600">West Bromwich</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-6">Example projects. Your work will be displayed here.</p>
                </div>
            </section>

            {/* Reviews */}
            <section className="py-16 bg-slate-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Customer Reviews</h2>
                    <p className="text-center text-slate-500 mb-8">Example testimonials for demonstration.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg border border-slate-200">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-slate-600 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                                <p className="font-medium text-slate-900">{testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage with structured layout */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Areas</h2>
                            <p className="text-slate-600 mb-6">
                                We cover the Black Country and wider West Midlands. Call to check if we cover your area.
                            </p>
                            <p className="text-sm text-slate-500">Coverage area is customisable.</p>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {coverageAreas.map((area, index) => (
                                    <div key={index} className="bg-slate-50 px-4 py-3 rounded text-center">
                                        <span className="text-slate-700 text-sm">{area}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-16 lg:py-24 bg-slate-900">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">About Black Country Electrical</h2>
                            <p className="text-lg text-slate-300 mb-4">
                                We are a local electrical company based in West Bromwich. For over 15 years we have been providing reliable electrical services to homes and businesses across the Black Country.
                            </p>
                            <p className="text-slate-400 mb-6">
                                We take pride in doing things right. That means quality workmanship, clear communication, and fair prices. Every job comes with the right certification.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-bold">15+ Years Experience</p>
                                    <p className="text-slate-400 text-sm">Trusted across the Black Country</p>
                                </div>
                            </div>
                        </div>
                        <PlaceholderImage
                            src="/images/templates/electrician-team-van.png"
                            caption="Your team or van photo. Replace with your own."
                            aspectRatio="video"
                            variant="dark"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Frequently Asked Questions</h2>
                        <FAQ items={faqs} />
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-16 bg-slate-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
                                <p className="text-slate-600 mb-6">Need an electrician? Fill in the form and we will get back to you.</p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                        <span className="text-slate-700">0121 XXX XXXX</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                        <span className="text-slate-700">info@blackcountryelectrical.co.uk</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 mt-6">We normally reply within 1 working day.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <ContactForm showServiceSelect={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Template Footer Notice */}
            <div className="bg-slate-900 py-6">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-2 bg-amber-500 text-slate-900 text-sm font-medium rounded-full mb-2">
                        Example Template
                    </span>
                    <p className="text-slate-400">
                        This is an example website template by Websites Done Right. <Link href="/templates" className="text-amber-500 hover:underline">View all templates</Link> or <Link href="/contact" className="text-amber-500 hover:underline">request this template</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
