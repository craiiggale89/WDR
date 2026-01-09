import Link from 'next/link';
import TemplateCard from '@/components/TemplateCard';
import TrustSignals from '@/components/TrustSignals';

const templates = [
  {
    title: 'Plumber Website',
    description: 'A practical website for plumbers in Birmingham and the West Midlands.',
    category: 'Trade' as const,
    href: '/templates/plumber-website-template',
    imageSrc: '/images/templates/plumber-hero.png',
    imageAlt: 'Plumber website template preview',
  },
  {
    title: 'Electrician Website',
    description: 'A professional website for electricians in the Black Country.',
    category: 'Trade' as const,
    href: '/templates/electrician-website-template',
    imageSrc: '/images/templates/electrician-hero.png',
    imageAlt: 'Electrician website template preview',
  },
  {
    title: 'Builder Website',
    description: 'A solid website for builders across the West Midlands.',
    category: 'Trade' as const,
    href: '/templates/builder-website-template',
    imageSrc: '/images/templates/builder-hero.png',
    imageAlt: 'Builder website template preview',
  },
];

const trustSignals = [
  {
    title: 'We handle everything',
    description: 'From domain setup to going live. You focus on your work.',
  },
  {
    title: 'Built for local businesses',
    description: 'Designed for service businesses in Birmingham and the West Midlands.',
  },
  {
    title: 'No jargon',
    description: 'Plain English. Clear pricing. No surprises.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Tell us about your business',
    description: 'Fill in a short form or give us a call. We ask a few questions to understand what you need.',
  },
  {
    number: '2',
    title: 'We build your website',
    description: 'We design and build your site. You review it and tell us if anything needs changing.',
  },
  {
    number: '3',
    title: 'Go live',
    description: 'Once you are happy, we set everything up and your website goes live.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="!text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight text-balance">
              Websites done right for local businesses
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-medium tracking-wide mb-10">
              Focused on clarity, structure, and results
            </p>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-xl leading-relaxed font-light">
              We build simple, professional websites for independent service businesses in Birmingham and the West Midlands. From trades and therapists to other local services, we handle everything for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/templates" className="btn btn-primary px-8 py-4 text-base !text-white">
                View Templates
              </Link>
              <Link href="/contact" className="btn btn-ghost px-8 py-4 text-base">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="section-lg">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-5">Who we work with</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We build websites for people who want to get on with their work, not spend time managing a website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Trades */}
            <div className="text-center">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl mx-auto mb-5 flex items-center justify-center">
                <svg className="w-7 h-7 text-slate-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trades</h3>
              <p className="text-slate-500 mb-4 leading-relaxed">
                Plumbers, electricians, builders and other tradespeople across Birmingham and the Black Country.
              </p>
              <Link href="/trades" className="link-underline text-sm font-medium">
                Learn more
              </Link>
            </div>

            {/* Coaches */}
            <div className="text-center">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl mx-auto mb-5 flex items-center justify-center">
                <svg className="w-7 h-7 text-slate-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Coaches</h3>
              <p className="text-slate-500 mb-4 leading-relaxed">
                Life coaches, business coaches and career coaches who want to reach more clients.
              </p>
              <Link href="/coaches-and-therapists" className="link-underline text-sm font-medium">
                Learn more
              </Link>
            </div>

            {/* Therapists */}
            <div className="text-center">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl mx-auto mb-5 flex items-center justify-center">
                <svg className="w-7 h-7 text-slate-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Therapists</h3>
              <p className="text-slate-500 mb-4 leading-relaxed">
                Counsellors, psychotherapists and wellbeing practitioners in the West Midlands.
              </p>
              <Link href="/coaches-and-therapists" className="link-underline text-sm font-medium">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section section-alt">
        <div className="container mx-auto">
          <TrustSignals signals={trustSignals} />
        </div>
      </section>

      {/* How It Works */}
      <section className="section-lg">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-5">How it works</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Getting a website should be simple. Here is how we do it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl mx-auto mb-5 flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/how-it-works" className="link-underline font-medium">
              Learn more about our process
            </Link>
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="section section-alt">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="mb-5">Example templates</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              These are proven layouts that work for service businesses. We use these structures because they generate enquiries, not just because they look good.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template) => (
              <TemplateCard key={template.href} {...template} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/templates" className="btn btn-primary px-8">
              View All Templates
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white py-20 lg:py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us about your business and we will get back to you within 1 working day.
          </p>
          <Link href="/contact" className="btn btn-primary text-lg px-10 py-4">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
