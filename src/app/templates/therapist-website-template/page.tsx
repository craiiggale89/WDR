import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import PlaceholderImage from '@/components/PlaceholderImage';

export const metadata: Metadata = {
    title: 'Therapist Website Template',
    description: 'Example therapist website template for counsellors and therapists in Birmingham. See how your practice could look online.',
};

const areas = [
    'Anxiety and worry',
    'Depression and low mood',
    'Relationship difficulties',
    'Grief and loss',
    'Life transitions',
    'Self esteem',
];

const approach = [
    {
        title: 'Person Centred',
        description: 'I follow your lead. You know yourself best, and my role is to help you find your own way forward.',
    },
    {
        title: 'Confidential',
        description: 'Everything you share stays between us. Complete confidentiality in a safe, private space.',
    },
    {
        title: 'At Your Pace',
        description: 'There is no pressure to talk about anything before you are ready. We work at the pace that feels right for you.',
    },
];

const testimonials = [
    { name: 'Rebecca L.', text: 'I was nervous about starting therapy but I was put at ease from the first session. It has made a real difference.' },
    { name: 'Michael P.', text: 'The online sessions worked really well for me. Professional, supportive and genuinely helpful.' },
    { name: 'Helen T.', text: 'I finally felt heard. The approach was gentle but also practical. I learned tools I still use.' },
];

const faqs = [
    { question: 'How do I know if therapy is right for me?', answer: 'If something feels difficult to manage on your own, talking to a professional can help. You do not need to be in crisis to benefit from therapy.' },
    { question: 'What happens in the first session?', answer: 'We talk about what brought you here and what you hope to get from therapy. It is a chance for us to see if we are a good fit. There is no pressure.' },
    { question: 'How many sessions will I need?', answer: 'It varies. Some people find a few sessions helpful. Others prefer to work together for longer. We will check in regularly about how things are going.' },
    { question: 'Is everything confidential?', answer: 'Yes. What you share in sessions stays between us. The only exceptions are if there is a risk of serious harm. We will explain this clearly in our first session.' },
    { question: 'What does it cost?', answer: 'Sessions are £50 to £70. We offer some reduced rate places for those who need them. We will discuss this when you get in touch.' },
    { question: 'Can I have sessions online?', answer: 'Yes. We offer video sessions which work well for many people. The quality of the work is the same.' },
];

export default function TherapistTemplatePage() {
    return (
        <div className="bg-stone-50">
            {/* Example Template Banner - Soft */}
            <div className="bg-teal-700 text-white py-2">
                <div className="container mx-auto px-4 text-center text-sm">
                    Example Template — This is a demo website. The practice shown is not real.
                </div>
            </div>

            {/* Minimal Hero - Lots of Space */}
            <section className="py-32 lg:py-40">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 mb-8 leading-tight tracking-tight">
                            Calm Path Therapy
                        </h1>
                        <p className="text-xl text-stone-600 mb-4 font-light">
                            Counselling and Psychotherapy
                        </p>
                        <p className="text-lg text-stone-500 mb-12">
                            Birmingham
                        </p>
                        <div className="w-16 h-px bg-teal-600 mx-auto mb-12"></div>
                        <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-12">
                            A safe, confidential space to be heard. Individual counselling for anxiety, depression, relationships and more.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="bg-teal-700 hover:bg-teal-800 text-white py-4 px-10 rounded text-lg transition-colors">
                                Get in Touch
                            </Link>
                            <Link href="/contact" className="border border-stone-300 hover:border-teal-600 text-stone-600 hover:text-teal-700 py-4 px-10 rounded text-lg transition-colors">
                                Request This Template
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calming Image */}
            <section className="pb-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <PlaceholderImage
                            src="/images/templates/therapist-hero.png"
                            caption="Calm, natural image. Replace with your own."
                            aspectRatio="wide"
                            variant="green"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* About - Very Simple */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="grid lg:grid-cols-5 gap-12 items-start">
                            <div className="lg:col-span-2">
                                <PlaceholderImage
                                    src="/images/templates/therapist-portrait.png"
                                    caption="Therapist photo. Replace with your own."
                                    aspectRatio="portrait"
                                    variant="green"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl font-light text-stone-800 mb-8">About Me</h2>
                                <p className="text-lg text-stone-600 leading-relaxed mb-6">
                                    I am a qualified counsellor based in Birmingham. I offer a warm, non judgemental space where you can explore what is on your mind.
                                </p>
                                <p className="text-stone-600 leading-relaxed mb-6">
                                    I trained at the University of Birmingham and have been in practice for over eight years. I work with individuals on a range of issues including anxiety, depression, relationship difficulties and life transitions.
                                </p>
                                <p className="text-stone-600 leading-relaxed mb-8">
                                    My approach is person centred. That means I follow your lead. I believe you know yourself best, and my job is to help you find your own way forward.
                                </p>
                                <div className="flex items-center gap-4 text-sm text-stone-500">
                                    <span>BACP Registered Member</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What I Help With - Light */}
            <section className="py-24 bg-stone-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-light text-stone-800 text-center mb-16">What I Help With</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {areas.map((area, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                                    <span className="text-lg text-stone-700">{area}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-stone-500 mt-12">
                            This is not an exhaustive list. Please get in touch if you are unsure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Approach - Very Gentle Layout */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-light text-stone-800 text-center mb-16">My Approach</h2>
                        <div className="space-y-16">
                            {approach.map((item, index) => (
                                <div key={index} className="text-center">
                                    <h3 className="text-xl text-stone-800 mb-4">{item.title}</h3>
                                    <p className="text-stone-600 leading-relaxed max-w-xl mx-auto">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Calm Divider Image */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        <PlaceholderImage
                            src="/images/templates/therapist-peaceful-divider.png"
                            caption="Peaceful image. Replace with your own."
                            aspectRatio="video"
                            variant="green"
                            className="rounded-lg"
                        />
                        <p className="text-center text-sm text-stone-500 mt-4">Example image. Your imagery here.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials - Quiet */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-light text-stone-800 text-center mb-4">What Clients Say</h2>
                        <p className="text-center text-stone-500 mb-16">Example testimonials for demonstration.</p>
                        <div className="space-y-12">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="text-center">
                                    <p className="text-lg text-stone-600 italic leading-relaxed mb-4 max-w-2xl mx-auto">
                                        &ldquo;{testimonial.text}&rdquo;
                                    </p>
                                    <p className="text-stone-500">{testimonial.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Information */}
            <section className="py-24 bg-stone-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-light text-stone-800 text-center mb-16">Practical Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div>
                                <h3 className="text-stone-800 mb-3">Sessions</h3>
                                <p className="text-stone-600">50 minutes<br />Weekly or fortnightly</p>
                            </div>
                            <div>
                                <h3 className="text-stone-800 mb-3">Location</h3>
                                <p className="text-stone-600">Central Birmingham<br />or online</p>
                            </div>
                            <div>
                                <h3 className="text-stone-800 mb-3">Fees</h3>
                                <p className="text-stone-600">£50 to £70<br />Reduced rates available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ - Simple */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-light text-stone-800 text-center mb-16">Common Questions</h2>
                        <FAQ items={faqs} />
                    </div>
                </div>
            </section>

            {/* Contact - Minimal */}
            <section className="py-24 bg-teal-700">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-3xl font-light text-white mb-6">Get in Touch</h2>
                        <p className="text-teal-100 mb-12 leading-relaxed">
                            If you would like to arrange a session or ask a question, please fill in the form below. I aim to reply within one working day.
                        </p>
                        <div className="bg-white rounded-lg p-8 lg:p-10">
                            <ContactForm showServiceSelect={false} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer Space */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <div className="max-w-md mx-auto">
                        <p className="text-stone-600 mb-4">Calm Path Therapy</p>
                        <p className="text-stone-500 text-sm mb-2">Birmingham</p>
                        <p className="text-stone-500 text-sm">BACP Registered</p>
                    </div>
                </div>
            </section>

            {/* Template Footer Notice */}
            <div className="bg-stone-200 py-8">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-2 bg-teal-700 text-white text-sm rounded mb-3">
                        Example Template
                    </span>
                    <p className="text-stone-600">
                        This is an example website template by Websites Done Right. <Link href="/templates" className="text-teal-700 hover:underline">View all templates</Link> or <Link href="/contact" className="text-teal-700 hover:underline">request this template</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
