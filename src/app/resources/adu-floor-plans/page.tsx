import { Metadata } from 'next';
import Link from 'next/link';
import { models } from './data';
import ModelsGrid from './ModelsGrid';


export const metadata: Metadata = {
  title: 'ADU Models | RenovationBridge',
  description: 'Browse prefab ADU floor plans from our vetted contractors — all in one place. Find the model that fits your property and budget.',
};

export default function ADUModelsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Mobile back link */}
      <div className="md:hidden px-6 pt-5">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray hover:text-primary transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Home
        </Link>
      </div>

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

      {/* Model Cards */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <ModelsGrid models={models} />
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
