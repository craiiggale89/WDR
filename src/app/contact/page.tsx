import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
    title: 'Contact Us',
    description:
        'Get in touch about your website project. We normally reply within 1 working day.',
};

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-slate-900 text-white py-16 md:py-20">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-white text-4xl md:text-5xl font-semibold mb-6">
                        Get in touch
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Tell us about your business and what you need. We normally reply within 1 working day.
                    </p>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Form */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                            <ContactForm />
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Other ways to reach us</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-medium text-slate-900 mb-1">Email</h3>
                                    <p className="text-slate-600">hello@wdr.co.uk</p>
                                </div>

                                <div>
                                    <h3 className="font-medium text-slate-900 mb-1">Phone</h3>
                                    <p className="text-slate-600">0121 XXX XXXX</p>
                                    <p className="text-sm text-slate-500 mt-1">Monday to Friday, 9am to 5pm</p>
                                </div>

                                <div>
                                    <h3 className="font-medium text-slate-900 mb-1">Location</h3>
                                    <p className="text-slate-600">Birmingham, West Midlands</p>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                                <h3 className="font-medium text-slate-900 mb-2">What happens next?</h3>
                                <ol className="space-y-2 text-slate-600 text-sm">
                                    <li>1. We read your message and get back to you within 1 working day.</li>
                                    <li>2. We might ask a few more questions to understand your needs.</li>
                                    <li>3. We send you a clear quote with no hidden costs.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
