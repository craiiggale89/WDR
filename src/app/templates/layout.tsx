import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Website Templates',
    description: 'Example website templates for trades, coaches and therapists in Birmingham and the West Midlands.',
};

export default function TemplatesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
