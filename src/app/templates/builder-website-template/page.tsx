import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
    title: 'Builder Website Template',
    description: 'Example builder website template for West Midlands builders. See how your construction business could look online.',
};

const services = [
    { title: 'Extensions', description: 'Single and double storey extensions. Planning, building and finishing.', image: '/images/templates/builder-project-extension.png' },
    { title: 'Loft Conversions', description: 'Create extra living space with a professional loft conversion.', image: '/images/templates/builder-project-loft.png' },
    { title: 'Renovations', description: 'Full property renovations. Period homes to modern refurbishments.', image: '/images/templates/builder-project-renovation.png' },
    { title: 'New Builds', description: 'Ground up construction for residential properties.', image: '/images/templates/builder-project-garden.png' },
    { title: 'Brickwork', description: 'Walls, patios, driveways and structural brickwork.', image: '/images/templates/builder-hero.png' },
    { title: 'General Building', description: 'Structural repairs, alterations and maintenance.', image: '/images/templates/builder-team-van.png' },
];

const projects = [
    { title: 'Rear Extension', location: 'Solihull', type: 'Extension', image: '/images/templates/builder-project-extension.png' },
    { title: 'Loft Conversion', location: 'Sutton Coldfield', type: 'Conversion', image: '/images/templates/builder-project-loft.png' },
    { title: 'Full Renovation', location: 'Moseley', type: 'Renovation', image: '/images/templates/builder-project-renovation.png' },
    { title: 'Garden Room', location: 'Edgbaston', type: 'New Build', image: '/images/templates/builder-project-garden.png' },
];

const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '100%', label: 'Satisfaction Rate' },
];

const testimonials = [
    { name: 'Steve W.', text: 'Had a rear extension built. From start to finish they were professional and reliable. The finish was excellent.' },
    { name: 'Amanda C.', text: 'Our loft conversion was completed on time and on budget. They kept the site tidy and communicated well throughout.' },
    { name: 'Peter D.', text: 'Used them for a full renovation of a Victorian terrace. They understood the property and did a proper job.' },
];

const coverageAreas = ['Birmingham', 'Solihull', 'Sutton Coldfield', 'Walsall', 'Wolverhampton', 'Dudley', 'West Bromwich', 'Tamworth', 'Lichfield', 'Cannock', 'Redditch', 'Bromsgrove'];

const faqs = [
    { question: 'Do you handle planning permission?', answer: 'Yes. We can help with planning applications and work with local authorities on your behalf. We will advise what permissions you need.' },
    { question: 'How do you quote for work?', answer: 'We visit the property, discuss what you want to achieve, and provide a detailed written quote. Quotes are free with no obligation.' },
    { question: 'How long does an extension take?', answer: 'A typical single storey extension takes 8 to 12 weeks. We will give you a clear timeline before work starts.' },
    { question: 'Do you use subcontractors?', answer: 'We have our own skilled team for most work. When we use specialist subcontractors, they are trusted tradespeople we have worked with for years.' },
    { question: 'Are you insured?', answer: 'Yes. We have full public liability insurance and employer liability insurance. We can provide documentation on request.' },
    { question: 'Do you provide a warranty?', answer: 'Yes. All our structural work comes with a warranty. We also offer insurance backed guarantees on request.' },
];

export default function BuilderTemplatePage() {
    return (
        <div className="bg-white">
            {/* Example Template Banner */}
            <div className="bg-orange-600 text-white py-2">
                <div className="container mx-auto px-4 text-center text-sm font-medium">
                    🏗️ EXAMPLE TEMPLATE — This is a demo website. The business shown is not real.
                </div>
            </div>

            {/* Large Hero with Background */}
            <section className="relative min-h-[70vh] flex items-center bg-slate-800">
                <div className="absolute inset-0">
                    <PlaceholderImage
                        src="/images/templates/builder-hero.png"
                        caption="Construction site image. Replace with your project photo."
                        aspectRatio="wide"
                        variant="dark"
                        className="w-full h-full rounded-none object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/80" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
                    <div className="max-w-3xl">
                        <p className="text-orange-500 font-bold text-lg mb-4">ESTABLISHED 1995</p>
                        <h1 className="text-white text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            West Midlands Building Co
                        </h1>
                        <p className="text-white font-medium text-2xl mb-8">
                            Quality building work across Birmingham and the West Midlands
                        </p>
                        <p className="text-slate-200 text-lg mb-10 max-w-2xl leading-relaxed">
                            Extensions, loft conversions, renovations and new builds. Family run since 1995, delivering projects that stand the test of time.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded text-lg transition-colors">
                                Start Your Project
                            </Link>
                            <Link href="/contact" className="bg-white/10 hover:bg-white/20 !text-white font-bold py-4 px-10 rounded text-lg transition-colors backdrop-blur">
                                Request This Template
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-orange-600 py-10">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <p className="text-5xl font-bold text-white mb-2">{stat.value}</p>
                                <p className="text-orange-100 text-lg">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services - Large Cards */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">What We Build</h2>
                        <p className="text-xl text-slate-600">
                            From planning to completion, we handle every aspect of your building project with care and expertise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group">
                                <div className="aspect-video mb-4">
                                    <PlaceholderImage
                                        src={service.image}
                                        caption={`${service.title} example. Replace with your photo.`}
                                        aspectRatio="video"
                                        variant="warm"
                                        className="rounded-lg"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                                <p className="text-slate-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects - Big Grid */}
            <section className="py-20 bg-slate-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Recent Projects</h2>
                            <p className="text-xl text-slate-600">A selection of our completed work across the West Midlands.</p>
                        </div>
                        <Link href="/contact" className="text-orange-600 font-bold hover:text-orange-700 transition-colors">
                            View all projects →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden group">
                                <div className="aspect-video relative">
                                    <PlaceholderImage
                                        src={project.image}
                                        caption={`${project.title} project. Replace with your photo.`}
                                        aspectRatio="video"
                                        variant="warm"
                                        className="w-full h-full"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-orange-600 text-white text-sm font-medium px-3 py-1 rounded">
                                            {project.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                                    <p className="text-slate-600">{project.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-8">Example projects. Your work will be displayed here.</p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-8">Why Work With Us</h2>
                            <div className="space-y-6">
                                {[
                                    { title: 'Family Business', desc: 'Three generations of building experience. We care about our reputation.' },
                                    { title: 'Full Project Management', desc: 'From planning applications to the final finish. We handle everything.' },
                                    { title: 'Quality Materials', desc: 'We use trusted suppliers and never cut corners.' },
                                    { title: 'Clear Communication', desc: 'Regular updates and no surprises. You always know what is happening.' },
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                            <p className="text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <PlaceholderImage
                                src="/images/templates/builder-team-van.png"
                                caption="Team at work. Replace with your photo."
                                aspectRatio="portrait"
                                variant="dark"
                                className="rounded-lg"
                            />
                            <PlaceholderImage
                                src="/images/templates/builder-project-renovation.png"
                                caption="Finished project. Replace with your photo."
                                aspectRatio="portrait"
                                variant="dark"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews - Large Quote Style */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">What Clients Say</h2>
                    <p className="text-center text-slate-500 mb-12">Example testimonials for demonstration.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-slate-50 p-8 rounded-xl">
                                <svg className="w-10 h-10 text-orange-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                </svg>
                                <p className="text-lg text-slate-700 mb-6">{testimonial.text}</p>
                                <p className="font-bold text-slate-900">{testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-20 bg-orange-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <PlaceholderImage
                            src="/images/templates/builder-team-van.png"
                            caption="Team or project photo. Replace with your own."
                            aspectRatio="video"
                            variant="warm"
                            className="rounded-xl"
                        />
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">About West Midlands Building Co</h2>
                            <p className="text-lg text-slate-600 mb-4">
                                We are a family building company that has been working across the West Midlands since 1995. Started by our dad, we now have a team of skilled tradespeople who share his approach to doing things right.
                            </p>
                            <p className="text-slate-600 mb-8">
                                We work closely with homeowners throughout every project. You will always know what is happening, what comes next, and what it will cost. No surprises, just solid building work.
                            </p>
                            <div className="flex flex-wrap gap-8">
                                <div>
                                    <p className="font-bold text-orange-600">FMB Member</p>
                                    <p className="text-sm text-slate-600">Federation of Master Builders</p>
                                </div>
                                <div>
                                    <p className="font-bold text-orange-600">Fully Insured</p>
                                    <p className="text-sm text-slate-600">Public liability covered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coverage Areas */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Areas We Cover</h2>
                    <p className="text-center text-slate-600 mb-10">We work across Birmingham and the wider West Midlands.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
                        {coverageAreas.map((area, index) => (
                            <div key={index} className="bg-slate-100 py-3 px-4 rounded text-center">
                                <span className="text-slate-700 text-sm font-medium">{area}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-500 text-center mt-6">Coverage area is customisable to your business.</p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Common Questions</h2>
                        <FAQ items={faqs} />
                    </div>
                </div>
            </section>

            {/* Contact - Full Width */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">Start Your Project</h2>
                            <p className="text-xl text-slate-300 mb-8">
                                Tell us about your building project and we will get back to you with a free quote.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400">Call us</p>
                                        <p className="text-xl font-bold text-white">0121 XXX XXXX</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400">Email</p>
                                        <p className="text-white">info@wmbuilding.co.uk</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-400">We reply within 1 working day.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl">
                            <ContactForm showServiceSelect={false} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Template Footer Notice */}
            <div className="bg-orange-600 py-6">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-2 bg-white text-orange-600 text-sm font-medium rounded-full mb-2">
                        Example Template
                    </span>
                    <p className="text-orange-100">
                        This is an example website template by Websites Done Right. <Link href="/templates" className="text-white hover:underline">View all templates</Link> or <Link href="/contact" className="text-white hover:underline">request this template</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
