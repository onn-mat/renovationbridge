import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { models, standards, upgrades } from '../data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const model = models.find((m) => m.slug === params.slug);
  if (!model) return {};
  return {
    title: `${model.name} ADU Model | RenovationBridge`,
    description: `${model.name} — ${model.sqft} sq ft prefab ADU. Fully installed starting at ${model.price}. Browse standards, upgrades, and schedule a call.`,
  };
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

function SpecCard({ title, items, variant }: { title: string; items: string[]; variant: 'standard' | 'upgrade' }) {
  const isUpgrade = variant === 'upgrade';
  return (
    <div className={`rounded-xl p-6 border ${isUpgrade ? 'border-amber-200 bg-amber-50/50' : 'border-gray/20 bg-white'}`}>
      <h3 className={`font-bold text-base mb-4 ${isUpgrade ? 'text-amber-700' : 'text-secondary'}`}>{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-gray">
            {isUpgrade ? <StarIcon /> : <CheckIcon />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AduModelDetailPage({ params }: Props) {
  const model = models.find((m) => m.slug === params.slug);
  if (!model) notFound();

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative w-full h-[55vh] min-h-[380px]">
        <Image
          src={model.exteriorImage}
          alt={`${model.name} exterior`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-white/80">ADU Model</p>
          <h1 className="text-5xl font-bold mb-4">{model.name}</h1>
          <div className="flex gap-4 text-sm font-medium mb-8">
            <span className="bg-white/20 px-3 py-1 rounded-full">{model.beds} Bed</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">{model.baths} Bath</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">{model.sqft} sq ft</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">{model.size}</span>
          </div>
          <Link
            href="/get-started"
            className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      {/* Price + Floor Plan */}
      <section className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs text-gray uppercase tracking-widest font-semibold mb-2">Fully Installed — Starting at</p>
          <p className="text-5xl font-bold text-primary mb-3">{model.price}</p>
          <p className="text-gray text-sm mb-6">{model.priceNote}</p>
          <ul className="space-y-2 mb-8">
            {model.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-gray text-sm">
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/get-started"
              className="inline-block text-center bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              Schedule a Call
            </Link>
            <Link
              href="/resources/adu-floor-plans"
              className="inline-block text-center border border-gray/30 text-secondary font-semibold px-6 py-3 rounded-lg hover:bg-gray/5 transition-colors text-sm"
            >
              ← All Models
            </Link>
          </div>
        </div>
        <div className="relative w-full h-64 rounded-xl overflow-hidden border border-gray/20">
          <Image
            src={model.floorPlanImage}
            alt={`${model.name} floor plan`}
            fill
            className="object-contain bg-[#fdf9ef] p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Standards */}
      <section className="bg-lavender/20 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-2">What&apos;s Included</h2>
            <p className="text-gray">Every unit comes fully built to these standards — no surprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpecCard title="Construction" items={standards.construction} variant="standard" />
            <SpecCard title="Interior" items={standards.interior} variant="standard" />
            <SpecCard title="Exterior" items={standards.exterior} variant="standard" />
          </div>
        </div>
      </section>

      {/* Upgrades */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-2">Available Upgrades</h2>
            <p className="text-gray">Customize your ADU with premium options to match your vision and budget.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpecCard title="Construction" items={upgrades.construction} variant="upgrade" />
            <SpecCard title="Interior" items={upgrades.interior} variant="upgrade" />
            <SpecCard title="Exterior" items={upgrades.exterior} variant="upgrade" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-secondary py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-3">Interested in {model.name}?</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Let&apos;s talk through your property, timeline, and budget — we&apos;ll handle the rest.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-started"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Schedule a Call
          </Link>
          <Link
            href="/resources/adu-floor-plans"
            className="inline-block border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            View All Models
          </Link>
        </div>
      </section>

    </main>
  );
}
