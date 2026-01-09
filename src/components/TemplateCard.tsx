import Image from 'next/image';
import Link from 'next/link';

interface TemplateCardProps {
    title: string;
    description: string;
    category: 'Trade' | 'Coach' | 'Therapist' | 'Cafe';
    href: string;
    imageSrc: string;
    imageAlt: string;
}

const categoryColors = {
    Trade: 'bg-slate-100 text-slate-600',
    Coach: 'bg-slate-100 text-slate-600',
    Therapist: 'bg-slate-100 text-slate-600',
    Cafe: 'bg-amber-100 text-amber-700',
};

export default function TemplateCard({ title, description, category, href, imageSrc, imageAlt }: TemplateCardProps) {
    return (
        <div className="card-elevated group">
            {/* Image area */}
            <div className="relative aspect-[16/10] bg-slate-100 rounded-lg mb-5 overflow-hidden flex items-center justify-center">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                ) : (
                    <span className="text-slate-400 text-sm">Preview coming soon</span>
                )}
            </div>

            {/* Category badge - neutral styling */}
            <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-md mb-3 ${categoryColors[category]}`}>
                {category}
            </span>

            {/* Content */}
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-500 text-sm mb-5 leading-relaxed">{description}</p>

            {/* CTA */}
            <Link href={href} className="btn btn-secondary w-full text-center text-sm">
                View Template
            </Link>
        </div>
    );
}
