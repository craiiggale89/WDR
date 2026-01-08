import Link from 'next/link';

interface StickyContactStripProps {
    phone?: string;
    email?: string;
}

export default function StickyContactStrip({
    phone = '0121 XXX XXXX',
    email = 'hello@example.com'
}: StickyContactStripProps) {
    return (
        <div className="sticky-strip hidden lg:block">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        {/* Phone */}
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <span className="text-sm text-white">{phone}</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <span className="text-sm text-white">{email}</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link href="/contact" className="btn btn-white text-sm py-2 px-4">
                        Get a Quote
                    </Link>
                </div>
            </div>
        </div>
    );
}
