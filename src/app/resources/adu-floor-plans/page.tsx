import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ADU Models | RenovationBridge',
  description: 'Browse prefab ADU floor plans from our vetted contractors — all in one place. Find the model that fits your property and budget.',
};

interface AduModel {
  id: string;
  name: string;
  size: string;
  sqft: number;
  beds: number;
  baths: number;
  features: string[];
  price: string;
  priceNote: string;
  exteriorImage: string;
  floorPlanImage: string;
  learnMoreUrl: string;
}

const models: AduModel[] = [
  {
    id: '400a',
    name: 'The 400A',
    size: "15' × 26'",
    sqft: 390,
    beds: 1,
    baths: 1,
    features: [
      'Full kitchen',
      'Dining area',
      "Living room (15' × 15')",
      '1 Bedroom',
      '1 Bathroom',
      'Washer/dryer stack',
      'Water heater included',
    ],
    price: '$195,000',
    priceNote: 'Includes foundation, utilities, delivery, and installation',
    exteriorImage: '/images/adu/400a/400.webp',
    floorPlanImage: '/images/adu/400a/400-floorplan.png',
    learnMoreUrl: 'https://aducrew.com/the-400a/',
  },
  {
    id: '500',
    name: 'The 500',
    size: "14' × 36'",
    sqft: 500,
    beds: 1,
    baths: 1,
    features: [
      'Full kitchen',
      'Dining area',
      "Living room (19' × 14')",
      '1 Bedroom',
      '1 Bathroom',
      'Stackable washer/dryer',
      'Water heater included',
    ],
    price: '$200,000',
    priceNote: 'Includes foundation, utilities, delivery, and installation',
    exteriorImage: '/images/adu/500/500.webp',
    floorPlanImage: '/images/adu/500/500-floorplan.webp',
    learnMoreUrl: 'https://aducrew.com/the-500/',
  },
];

export default function ADUModelsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-lavender/30 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">ADU Models</h1>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Browse prefab ADU models from our vetted contractors — all in one place.
            Find the floor plan that fits your property and budget, then get matched with a contractor who can build it.
          </p>
        </div>
      </section>

      {/* Model Cards — side by side */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model) => (
            <article
              key={model.id}
              className="bg-white rounded-2xl border border-gray/20 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Exterior photo */}
              <div className="relative w-full h-56">
                <Image
                  src={model.exteriorImage}
                  alt={`${model.name} exterior`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-lavender text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                    {model.beds} Bed
                  </span>
                  <span className="bg-lavender text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                    {model.baths} Bath
                  </span>
                  <span className="bg-lavender text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                    {model.sqft} sq ft
                  </span>
                </div>

                {/* Name + size */}
                <h2 className="text-2xl font-bold text-secondary mb-0.5">{model.name}</h2>
                <p className="text-gray text-sm mb-4">{model.size}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6 flex-1">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-gray text-sm">
                      <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Floor plan */}
                <div className="relative w-full h-44 rounded-lg overflow-hidden border border-gray/20 mb-6">
                  <Image
                    src={model.floorPlanImage}
                    alt={`${model.name} floor plan`}
                    fill
                    className="object-contain bg-[#fdf9ef] p-3"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Price + CTA */}
                <div className="border-t border-gray/20 pt-5">
                  <p className="text-xs text-gray uppercase tracking-wide font-semibold mb-1">Fully Installed — Starting at</p>
                  <p className="text-3xl font-bold text-primary mb-1">{model.price}</p>
                  <p className="text-xs text-gray mb-5">{model.priceNote}</p>
                  <Link
                    href={model.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-lavender/30 py-14 px-6 text-center">
        <h2 className="text-2xl font-bold text-secondary mb-3">Ready to get started?</h2>
        <p className="text-gray mb-6 max-w-xl mx-auto">
          Tell us about your property and we&apos;ll match you with the right contractor to bring your ADU to life.
        </p>
        <Link
          href="/get-started"
          className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Get Matched with a Contractor
        </Link>
      </section>
    </main>
  );
}
