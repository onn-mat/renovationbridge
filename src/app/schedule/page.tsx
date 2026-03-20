import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Schedule a Call | RenovationBridge',
  description: 'Book a free consultation with a RenovationBridge matchmaker. We\'ll match you with the right contractor for your project.',
};

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-lavender/30 py-14 px-6 text-center">
        <h1 className="text-4xl font-bold text-secondary mb-3">Schedule a Call</h1>
        <p className="text-gray text-lg max-w-xl mx-auto">
          Book a free 20-minute consultation with your dedicated matchmaker. We&apos;ll learn about your project and get you matched with the right contractor.
        </p>
      </section>

      {/* Calendar embed */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <iframe
          src="https://link.renovationbridge.com/widget/booking/52GSluX9C6jkUZHaFVHo"
          style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px' }}
          scrolling="no"
          id="52GSluX9C6jkUZHaFVHo_1774045029094"
        />
        <Script
          src="https://link.renovationbridge.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      </section>
    </main>
  );
}
