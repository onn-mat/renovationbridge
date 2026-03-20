import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ADU Floor Plans | RenovationBridge',
  description: 'Browse prefab ADU floor plans from our vetted contractors and find the right model for your property.',
};

export default function ADUFloorPlansPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-secondary mb-4">ADU Floor Plans</h1>
        <p className="text-gray text-lg max-w-2xl mx-auto">
          Browse prefab ADU models from our vetted contractors all in one place. Find the floor plan that fits your property and budget.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 text-center text-gray">
        <p>Floor plans coming soon. Check back shortly.</p>
      </section>
    </main>
  );
}
