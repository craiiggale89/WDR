'use client';

import { useState } from 'react';

interface ContactFormProps {
    showServiceSelect?: boolean;
    className?: string;
}

export default function ContactForm({ showServiceSelect = true, className = '' }: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    service: formData.get('service'),
                    message: formData.get('message'),
                }),
            });

            if (!response.ok) {
                throw new Error('Something went wrong. Please try again.');
            }

            setSubmitted(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    if (submitted) {
        return (
            <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Message sent</h3>
                <p className="text-green-700">
                    Thanks for getting in touch. We normally reply within 1 working day.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={className}>
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="form-label">
                        Your name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="form-input"
                        placeholder="John Smith"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="form-input"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="form-label">
                            Phone number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="form-input"
                            placeholder="07123 456789"
                        />
                    </div>
                </div>

                {showServiceSelect && (
                    <div>
                        <label htmlFor="service" className="form-label">
                            What do you need?
                        </label>
                        <select id="service" name="service" className="form-input">
                            <option value="">Select an option</option>
                            <option value="new-website">New website</option>
                            <option value="website-update">Website update</option>
                            <option value="template">Request a template</option>
                            <option value="other">Something else</option>
                        </select>
                    </div>
                )}

                <div>
                    <label htmlFor="message" className="form-label">
                        Tell us about your project
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="form-input"
                        placeholder="What does your business do? What would you like your website to achieve?"
                    />
                </div>

                {error && (
                    <p className="text-red-600 text-sm">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-sm text-slate-500 text-center">
                    We normally reply within 1 working day.
                </p>
            </div>
        </form>
    );
}
