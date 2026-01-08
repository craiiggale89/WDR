import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
    title: 'Coach Website Template',
    description: 'Example coach website template for life coaches and business coaches. See how your coaching practice could look online.',
};

const services = [
    { title: 'Career Coaching', description: 'Clarity on your next move. Whether you are stuck, changing direction or going for promotion.' },
    { title: 'Leadership Coaching', description: 'Develop your leadership style. Communicate better, make decisions with confidence.' },
    { title: 'Life Coaching', description: 'Work out what you want and how to get there. Practical support for real change.' },
    { title: 'Business Coaching', description: 'For business owners who want to grow. Strategy, focus and accountability.' },
];

const process = [
    { step: '01', title: 'Discovery Call', description: 'A free 30 minute conversation to understand where you are and where you want to be.' },
    { step: '02', title: 'Goal Setting', description: 'We agree on clear objectives and how we will work together to achieve them.' },
    { step: '03', title: 'Regular Sessions', description: 'Fortnightly sessions focused on action, progress and overcoming obstacles.' },
    { step: '04', title: 'Ongoing Support', description: 'Between sessions you have email support when you need it.' },
];

const outcomes = [
    'Clarity on your direction and priorities',
    'Confidence to make decisions and take action',
    'Better communication and relationships',
    'Accountability to follow through',
    'Tools and frameworks you can use beyond coaching',
    'A trusted sounding board for your ideas',
];

const testimonials = [
    { name: 'Tom B.', text: 'Working with a coach changed how I approach my career. I am clearer about what I want and more confident going after it.' },
    { name: 'Sarah K.', text: 'The sessions are challenging but supportive. I have made more progress in 6 months than in the previous 2 years.' },
    { name: 'Raj P.', text: 'Practical, no nonsense coaching. Helped me get clear on my priorities and actually follow through.' },
];

const faqs = [
    { question: 'What is the difference between coaching and therapy?', answer: 'Coaching focuses on where you want to go and how to get there. Therapy often explores the past to understand the present. Coaching assumes you are capable and focuses on action.' },
    { question: 'How does coaching work?', answer: 'We meet regularly, usually every two weeks. Between sessions you take action on what we discussed. I keep you accountable and help you stay on track.' },
    { question: 'How many sessions will I need?', answer: 'Most clients work with me for 3 to 6 months. Some prefer ongoing support. We will discuss what makes sense for your goals.' },
    { question: 'What happens in the first session?', answer: 'We talk about where you are now, where you want to be, and what is getting in the way. By the end we will have a sense of what to work on.' },
    { question: 'What does it cost?', answer: 'Individual coaching is £100 to £150 per session depending on the package. I also offer team and corporate rates. Get in touch to discuss.' },
    { question: 'Can we meet online?', answer: 'Yes. Most of my clients choose video sessions. They work just as well as in person.' },
];

export default function CoachTemplatePage() {
    return (
        <div className="bg-white">
            {/* Example Template Banner */}
            <div className="bg-violet-600 text-white py-2">
                <div className="container mx-auto px-4 text-center text-sm font-medium">
                    EXAMPLE TEMPLATE — This is a demo website. The practice shown is not real.
                </div>
            </div>

            {/* Spacious Hero */}
            <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-violet-600 font-semibold tracking-wide uppercase mb-6">Clear Path Coaching</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                            Get clear on what you want.<br />Take action. Make it happen.
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                            Career and life coaching for professionals in Birmingham and online. Practical support for people ready to make real changes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 px-10 rounded-full text-lg transition-colors">
                                Book a Free Call
                            </Link>
                            <Link href="/contact" className="border-2 border-slate-300 hover:border-violet-600 text-slate-700 hover:text-violet-600 font-semibold py-4 px-10 rounded-full text-lg transition-colors">
                                Request This Template
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coach Photo Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">About Me</h2>
                            <p className="text-lg text-slate-600 mb-4">
                                I am a professional coach based in Birmingham. Before coaching, I spent 15 years in senior roles in business. I know what it is like to face big decisions and feel stuck.
                            </p>
                            <p className="text-slate-600 mb-6">
                                I trained with the International Coaching Federation and have been coaching for over five years. I work with professionals, leaders and business owners who want to make progress.
                            </p>
                            <p className="text-slate-600 mb-8">
                                My style is direct but supportive. I will challenge you when needed and support you to take action. No waffle, just practical help to get you where you want to go.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">ICF Accredited Coach</p>
                                    <p className="text-sm text-slate-500">International Coaching Federation</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <PlaceholderImage
                                src="/images/templates/coach-portrait.png"
                                caption="Coach headshot. Replace with your professional photo."
                                aspectRatio="square"
                                variant="purple"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services with lots of space */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How I Can Help</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            I work with individuals who are ready to make meaningful changes in their work and life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process - Visual Steps */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A clear, straightforward process focused on getting you results.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-12">
                            {process.map((item, index) => (
                                <div key={index} className="flex gap-8 items-start">
                                    <div className="flex-shrink-0">
                                        <span className="text-5xl font-bold text-violet-200">{item.step}</span>
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className="py-24 bg-violet-600">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">What You Can Expect</h2>
                        <p className="text-violet-200 text-center text-lg mb-12">
                            Clients typically experience these outcomes from our work together.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {outcomes.map((outcome, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span className="text-white text-lg">{outcome}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials - Clean Cards */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">What Clients Say</h2>
                    <p className="text-center text-slate-500 mb-12">Example testimonials for demonstration.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-violet-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-violet-600">{testimonial.name[0]}</span>
                                </div>
                                <p className="text-slate-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Common Questions</h2>
                        <FAQ items={faqs} />
                    </div>
                </div>
            </section>

            {/* Contact - Centered and Clean */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Ready to Take the Next Step?</h2>
                        <p className="text-lg text-slate-600 mb-12">
                            Book a free 30 minute discovery call. No pressure, just a conversation to see if coaching is right for you.
                        </p>
                        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
                            <ContactForm showServiceSelect={false} />
                        </div>
                        <p className="text-slate-500 mt-6">I reply to all enquiries within 1 working day.</p>
                    </div>
                </div>
            </section>

            {/* Session Image */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <PlaceholderImage
                            src="/images/templates/coach-workshop.png"
                            caption="Coaching session or workspace photo. Replace with your own."
                            aspectRatio="wide"
                            variant="purple"
                            className="rounded-2xl"
                        />
                        <p className="text-center text-sm text-slate-500 mt-4">Example image. Replace with your photo.</p>
                    </div>
                </div>
            </section>

            {/* Template Footer Notice */}
            <div className="bg-violet-600 py-8">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-2 bg-white text-violet-600 text-sm font-medium rounded-full mb-3">
                        Example Template
                    </span>
                    <p className="text-violet-100">
                        This is an example website template by Websites Done Right. <Link href="/templates" className="text-white hover:underline">View all templates</Link> or <Link href="/contact" className="text-white hover:underline">request this template</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
