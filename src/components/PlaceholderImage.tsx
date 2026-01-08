import Image from 'next/image';

interface PlaceholderImageProps {
    caption?: string;
    src?: string;
    aspectRatio?: 'video' | 'square' | 'portrait' | 'wide';
    className?: string;
    variant?: 'light' | 'dark' | 'blue' | 'green' | 'purple' | 'warm';
}

const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
};

const variantClasses = {
    light: 'bg-slate-100 text-slate-400',
    dark: 'bg-slate-800 text-slate-500',
    blue: 'bg-blue-50 text-blue-300',
    green: 'bg-emerald-50 text-emerald-300',
    purple: 'bg-purple-50 text-purple-300',
    warm: 'bg-amber-50 text-amber-300',
};

export default function PlaceholderImage({
    caption = 'Example image. Replace with your own.',
    src,
    aspectRatio = 'video',
    className = '',
    variant = 'light',
}: PlaceholderImageProps) {
    if (src) {
        return (
            <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}>
                <Image
                    src={src}
                    alt={caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-end justify-center pb-4 opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                        {caption}
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`${aspectClasses[aspectRatio]} ${variantClasses[variant]} rounded-lg flex flex-col items-center justify-center ${className}`}
        >
            <svg
                className="w-12 h-12 mb-2 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
            </svg>
            <span className="text-xs text-center px-4 opacity-75">{caption}</span>
        </div>
    );
}
