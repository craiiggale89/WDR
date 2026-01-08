interface TrustSignal {
    title: string;
    description: string;
}

interface TrustSignalsProps {
    signals: TrustSignal[];
    className?: string;
}

export default function TrustSignals({ signals, className = '' }: TrustSignalsProps) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 ${className}`}>
            {signals.map((signal, index) => (
                <div key={index} className="flex items-start gap-4">
                    {/* Checkmark icon - neutral slate styling */}
                    <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{signal.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{signal.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
