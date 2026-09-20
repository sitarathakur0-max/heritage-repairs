import React from 'react';
import { Phone, MapPin, Star, ArrowRight, Shield } from 'lucide-react';
import { businessConfig } from '../data/businessData';
import { PageView } from '../types';

interface CTASectionProps {
  onNavigate: (page: PageView) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
  return (
    <section className="bg-gradient-to-b from-[#111720] to-[#0c1219] py-16 sm:py-20 border-b border-[#212c3b] text-[#f2f4f7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl bg-gradient-to-r from-[#17222f] via-[#151e2a] to-[#1a2432] border border-[#2b3a4d] p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2a3a] border border-[#304157] text-xs font-semibold text-[#c36b44] uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>London Roofing & Property Repairs</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display mb-4">
              Need Professional Roofing Care for Your Property?
            </h2>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-6">
              From targeted tile repairs and leak investigations to scheduled roof maintenance and
              gutter servicing across London W2 1PX.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-[#cbd5e1]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#c36b44]" />
                <span>{businessConfig.location}</span>
              </span>
              <span className="text-[#475569]">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#eab308] fill-current" />
                <span>{businessConfig.rating} ★ ({businessConfig.reviewCount} Reviews)</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={businessConfig.phoneHref}
              id="cta-section-call-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-base font-semibold shadow-xl shadow-[#c36b44]/20 transition-all active:scale-[0.98] whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {businessConfig.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              id="cta-section-enquire-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#141b24] hover:bg-[#1a232f] text-white text-sm font-semibold border border-[#2e3b4d] transition-colors whitespace-nowrap"
            >
              <span>Online Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#94a3b8]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
