import type { Metadata } from 'next';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
    title: 'Plumber Website Template',
    description: 'Example plumber website template for Birmingham and West Midlands plumbers. See how your business could look online.',
};

const services = [
    { title: 'Emergency Plumbing', description: 'Fast response for burst pipes, leaks and urgent jobs. Available 7 days.', icon: '🔧' },
    { title: 'Boiler Repairs', description: 'Breakdowns, servicing and repairs. Gas Safe registered.', icon: '🔥' },
    { title: 'Bathroom Fitting', description: 'Full installations including plumbing, tiling and fixtures.', icon: '🚿' },
    { title: 'Central Heating', description: 'Radiators, powerflushes and heating system repairs.', icon: '♨️' },
    { title: 'Blocked Drains', description: 'Drain unblocking for sinks, toilets and outside drains.', icon: '🪠' },
    { title: 'General Plumbing', description: 'Taps, toilets, pipes and everyday plumbing work.', icon: '🔩' },
];

const trustSignals = [
    { title: 'Fully Insured', description: 'Public liability insurance for your peace of mind.' },
    { title: 'Gas Safe Registered', description: 'Qualified and registered for all gas work.' },
    { title: '20 Years Experience', description: 'Trusted by customers across Birmingham since 2004.' },
];

const testimonials = [
    { name: 'Sarah M.', text: 'Called them out for an emergency leak on a Sunday. Arrived within the hour and fixed it quickly. Fair price too.' },
    { name: 'David T.', text: 'Had a new bathroom fitted. Really pleased with the work. Tidy, on time and no hidden costs.' },
    { name: 'Karen B.', text: 'Use them for all our plumbing now. Reliable and always do a proper job.' },
];

const coverageAreas = ['Birmingham City Centre', 'Edgbaston', 'Moseley', 'Kings Heath', 'Harborne', 'Selly Oak', 'Northfield', 'Solihull', 'Sutton Coldfield', 'Erdington', 'Handsworth', 'West Bromwich'];

const faqs = [
    { question: 'Do you offer emergency call outs?', answer: 'Yes. We offer emergency plumbing 7 days a week. Call us and we will get to you as quickly as possible.' },
    { question: 'Are you Gas Safe registered?', answer: 'Yes. We are fully Gas Safe registered for all boiler and gas work. We can provide our registration number on request.' },
    { question: 'How much do you charge for a call out?', answer: 'We charge a fixed call out fee which includes the first hour of work. We will always give you a price before we start any job.' },
    { question: 'Do you give free quotes?', answer: 'Yes. For larger jobs like bathroom fitting or boiler installations, we provide free no obligation quotes.' },
    { question: 'What areas do you cover?', answer: 'We cover Birmingham and surrounding areas including Solihull, Sutton Coldfield, and parts of the Black Country. Give us a call to check if we cover your area.' },
    { question: 'Are you insured?', answer: 'Yes. We have full public liability insurance. We can provide proof on request.' },
];

export default function PlumberTemplatePage() {
    return (
        <div className="bg-white">
            {/* Example Template Banner */}
            <div className="bg-blue-600 text-white py-2">
                <div className="container mx-auto px-4 text-center text-sm font-medium">
                    EXAMPLE TEMPLATE — This is a demo website. The business shown is not real.
                </div>
            </div>

            {/* Bold Hero with Image */}
            <section className="bg-slate-900 relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center py-16 lg:py-24">
                        {/* Content */}
                        <div className="relative z-10">
                            <div className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded mb-6">
                                24/7 EMERGENCY CALL OUTS
                            </div>
                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                                Pro Plumbing Birmingham
                            </h1>
                            <p className="text-2xl text-blue-400 font-medium mb-4">
                                Reliable plumbers you can trust
                            </p>
                            <p className="text-slate-300 text-lg mb-8 max-w-lg">
                                Emergency repairs, boiler servicing, bathroom fitting and all general plumbing across Birmingham and the West Midlands.
                            </p>

                            {/* Contact Info Strip */}
                            <div className="flex flex-wrap gap-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm">Call us now</p>
                                        <p className="text-white font-bold text-lg">0121 XXX XXXX</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm">Email us</p>
                                        <p className="text-white font-bold">info@proplumbing.co.uk</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 !text-white font-bold py-4 px-8 rounded-lg text-center text-lg transition-colors">
                                    Get a Free Quote
                                </Link>
                                <Link href="/contact" className="border-2 border-white !text-white hover:bg-white hover:!text-slate-900 font-bold py-4 px-8 rounded-lg text-center text-lg transition-colors">
                                    Request This Template
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative lg:pl-8">
                            <PlaceholderImage
                                src="/images/templates/plumber-hero.png"
                                caption="Plumber at work. Replace with your own photo."
                                aspectRatio="square"
                                variant="dark"
                                className="rounded-2xl"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">Gas Safe</p>
                                        <p className="text-sm text-slate-600">Registered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 lg:py-24 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Plumbing Services</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            From emergency repairs to full bathroom installations. No job too big or small.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-600">
                                <div className="text-3xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-slate-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Gallery Row */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Our Work</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <PlaceholderImage
                            src="/images/templates/plumber-work-bathroom.png"
                            caption="Bathroom installation. Replace with your photo."
                            aspectRatio="square"
                            variant="blue"
                        />
                        <PlaceholderImage
                            src="/images/templates/plumber-work-boiler.png"
                            caption="Boiler repair. Replace with your photo."
                            aspectRatio="square"
                            variant="blue"
                        />
                        <PlaceholderImage
                            src="/images/templates/plumber-work-pipes.png"
                            caption="Pipe work. Replace with your photo."
                            aspectRatio="square"
                            variant="blue"
                        />
                        <PlaceholderImage
                            src="/images/templates/plumber-work-kitchen.png"
                            caption="Kitchen plumbing. Replace with your photo."
                            aspectRatio="square"
                            variant="blue"
                        />
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-4">Example images. Your photos will be displayed here.</p>
                </div>
            </section>

            {/* Trust Signals with Dark BG */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {trustSignals.map((signal, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{signal.title}</h3>
                                <p className="text-slate-400">{signal.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="py-16 lg:py-24 bg-blue-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">What Our Customers Say</h2>
                    <p className="text-center text-slate-500 mb-8">Example testimonials for demonstration purposes.</p>
                    <Testimonials testimonials={testimonials} isExample={false} />
                </div>
            </section>

            {/* Coverage Area */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Areas We Cover</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                We provide plumbing services across Birmingham and the surrounding areas. Not sure if we cover your area? Give us a call.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {coverageAreas.map((area, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        <span className="text-slate-700">{area}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-slate-500 mt-6">Coverage area is customisable to your business.</p>
                        </div>
                        <div>
                            <PlaceholderImage caption="Map of service area. Replace with your coverage map." aspectRatio="video" variant="blue" className="rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-16 lg:py-24 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <PlaceholderImage caption="Photo of your team or van. Replace with your own." aspectRatio="video" variant="light" className="rounded-xl" />
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">About Pro Plumbing</h2>
                            <p className="text-lg text-slate-600 mb-4">
                                We are a family run plumbing business based in Birmingham. Started in 2004, we have been looking after homes and businesses across the West Midlands for 20 years.
                            </p>
                            <p className="text-slate-600 mb-6">
                                We believe in doing things properly. That means turning up on time, doing a good job, and charging a fair price. No call centres, no runaround. When you call us, you speak to us.
                            </p>
                            <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Common Questions</h2>
                        <FAQ items={faqs} />
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section id="contact" className="py-16 lg:py-24 bg-blue-600">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="text-white">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need a Plumber?</h2>
                            <p className="text-xl text-blue-100 mb-8">
                                Fill in the form and we will get back to you. For emergencies, call us directly.
                            </p>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-blue-200">Emergency line</p>
                                    <p className="text-2xl font-bold">0121 XXX XXXX</p>
                                </div>
                            </div>
                            <p className="text-blue-200">We normally reply within 1 working day.</p>
                        </div>
                        <div className="bg-white rounded-xl p-8">
                            <ContactForm showServiceSelect={false} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Template Footer Notice */}
            <div className="bg-slate-900 py-6">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full mb-2">
                        Example Template
                    </span>
                    <p className="text-slate-400">
                        This is an example website template by Websites Done Right. <Link href="/templates" className="text-blue-400 hover:underline">View all templates</Link> or <Link href="/contact" className="text-blue-400 hover:underline">request this template</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
