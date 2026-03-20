'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Upgrade } from '../data';

// Merge Kitchen → Interior, Utilities → Construction
const CATEGORY_MAP: Record<string, string> = {
  Construction: 'Construction',
  Utilities: 'Construction',
  Interior: 'Interior',
  Kitchen: 'Interior',
  Exterior: 'Exterior',
};

const DISPLAY_CATEGORIES = ['Construction', 'Interior', 'Exterior'];

function UpgradeRow({ upgrade }: { upgrade: Upgrade }) {
  const hasPrice = upgrade.price !== null;
  return (
    <div className="flex items-start justify-between gap-3 py-3 border-b border-gray/10 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-secondary text-sm">{upgrade.name}</p>
        <p className="text-xs text-gray mt-0.5 leading-relaxed">{upgrade.description}</p>
      </div>
      {hasPrice ? (
        <span className="shrink-0 bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
          {upgrade.price_note}
        </span>
      ) : (
        <Link
          href="/get-started"
          className="shrink-0 bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap hover:bg-primary/20 transition-colors"
        >
          Get a Quote
        </Link>
      )}
    </div>
  );
}

export default function UpgradesAccordion({ upgrades }: { upgrades: Upgrade[] }) {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const grouped = DISPLAY_CATEGORIES.reduce<Record<string, Upgrade[]>>((acc, cat) => {
    acc[cat] = upgrades.filter((u) => CATEGORY_MAP[u.category] === cat);
    return acc;
  }, {});

  const toggle = (cat: string) => setOpenCategories((prev) => {
    const next = new Set(prev);
    next.has(cat) ? next.delete(cat) : next.add(cat);
    return next;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
      {DISPLAY_CATEGORIES.map((cat) => {
        const isOpen = openCategories.has(cat);
        const items = grouped[cat];
        return (
          <div key={cat} className="rounded-xl border border-amber-200 bg-white overflow-hidden">
            <button
              onClick={() => toggle(cat)}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-amber-50/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-secondary">{cat}</span>
                <span className="text-xs text-gray bg-gray/10 px-2 py-0.5 rounded-full">{items.length} options</span>
              </div>
              <svg
                className={`w-5 h-5 text-gray transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="px-6 pb-4">
                {items.map((u) => (
                  <UpgradeRow key={u.id} upgrade={u} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
