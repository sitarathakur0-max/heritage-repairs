import React from 'react';
import { GallerySection } from '../components/GallerySection';
import { Sparkles, Phone, MapPin, Star } from 'lucide-react';
import { businessConfig } from '../data/businessData';
import { PageView } from '../types';

interface GalleryPageProps {
  onNavigate: (page: PageView) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0c1219] text-[#f2f4f7] py-12 sm:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182330] border border-[#27364a] text-xs font-semibold text-[#c36b44] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display mb-4">
            Roofing Inspiration
          </h1>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            Explore architectural roofing styles, slate alignments, leadwork junctions, flat roof
            membranes, and gutter profiles across London residential properties. Click any image to
            view in detail with our interactive lightbox.
          </p>
        </div>
      </div>

      {/* Main Gallery Grid with Filter and Lightbox */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <GallerySection showTitle={false} />
      </div>

      {/* Trust & Project Consultation Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#141b24] border border-[#253243] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white font-display">
              Have a similar roofing requirement in London?
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8]">
              Contact Heritage Roofing & Repairs at {businessConfig.location}. Backed by{' '}
              {businessConfig.rating} ★ verified feedback ({businessConfig.reviewCount} Reviews).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={businessConfig.phoneHref}
              className="px-6 py-3 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {businessConfig.phone}</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-lg bg-[#1a232f] hover:bg-[#232e3d] text-white text-xs sm:text-sm font-medium border border-[#2e3b4d] transition-colors whitespace-nowrap"
            >
              Request Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
