'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AduModel } from './data';

type SortKey = 'size' | 'price';
type SortDir = 'asc' | 'desc';

export default function ModelsGrid({ models }: { models: AduModel[] }) {
  const [sortKey, setSortKey] = useState<SortKey>('size');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const sorted = [...models].sort((a, b) => {
    let diff = 0;
    if (sortKey === 'size') {
      diff = a.sqft - b.sqft;
    } else {
      const priceA = parseInt(a.price.replace(/\D/g, ''));
      const priceB = parseInt(b.price.replace(/\D/g, ''));
      diff = priceA - priceB;
    }
    return sortDir === 'asc' ? diff : -diff;
  });

  const ArrowIcon = ({ active, dir }: { active: boolean; dir: SortDir }) => (
    <svg
      className={`w-3.5 h-3.5 transition-transform ${active ? 'text-white' : 'text-gray/50'} ${dir === 'desc' && active ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  );

  return (
    <>
      {/* Sort controls */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-sm text-gray font-medium">Sort by:</span>
        <div className="flex rounded-lg border border-gray/20 overflow-hidden">
          {(['size', 'price'] as SortKey[]).map((key) => {
            const isActive = sortKey === key;
            return (
              <button
                key={key}
                onClick={() => handleSort(key)}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold capitalize transition-colors ${
                  isActive ? 'bg-primary text-white' : 'bg-white text-gray hover:bg-gray/5'
                }`}
              >
                {key === 'size' ? 'Size' : 'Price'}
                <ArrowIcon active={isActive} dir={isActive ? sortDir : 'asc'} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sorted.map((model) => (
          <article
            key={model.slug}
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
                  href={`/resources/adu-floor-plans/${model.slug}`}
                  className="inline-block w-full text-center bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
