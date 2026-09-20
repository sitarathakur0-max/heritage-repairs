import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, Phone, MapPin } from 'lucide-react';
import { businessConfig } from '../data/businessData';
import { PageView } from '../types';

interface ReviewsSectionProps {
  onNavigate: (page: PageView) => void;
  showFullDetails?: boolean;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  onNavigate,
  showFullDetails = true,
}) => {
  return (
    <section className="bg-[#0e141c] text-[#f2f4f7] py-16 sm:py-20 border-b border-[#212c3b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18222f] border border-[#273547] text-xs font-semibold text-[#eab308] uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-3">
            5.0 Star Rated Service in London
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8]">
            Transparent satisfaction metrics reflecting real customer engagements across London
            residential roofing and property repair projects.
          </p>
        </div>

        {/* Centralized Rating Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#141b24] border border-[#232f3e] p-6 sm:p-10 shadow-2xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Big Rating Block */}
            <div className="md:col-span-5 text-center md:text-left md:border-r md:border-[#222e3d] md:pr-8">
              <div className="inline-flex items-baseline gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight font-display">
                  {businessConfig.rating}
                </span>
                <span className="text-2xl font-bold text-[#64748b]">/ 5</span>
              </div>

              {/* 5 Filled Stars */}
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#eab308] mb-3">
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
              </div>

              <div className="text-lg font-bold text-[#f8f9fa] mb-1">
                {businessConfig.reviewCount} Verified Reviews
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Consistently rated for reliable roof repairs, prompt communication, and structural
                care across London W2 1PX and surrounding areas.
              </p>
            </div>

            {/* Rating Breakdown & Standards */}
            <div className="md:col-span-7 space-y-3">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-[#cbd5e1]">
                  <span>5 Star Rating</span>
                  <span className="text-[#eab308]">{businessConfig.reviewCount} Reviews (100%)</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#1e2836] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#eab308] to-[#d9774a] rounded-full w-full" />
                </div>
              </div>

              <div className="opacity-40">
                <div className="flex justify-between text-xs font-semibold mb-1 text-[#64748b]">
                  <span>4 Star Rating</span>
                  <span>0%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#1e2836] overflow-hidden">
                  <div className="h-full bg-[#64748b] rounded-full w-0" />
                </div>
              </div>

              <div className="opacity-40">
                <div className="flex justify-between text-xs font-semibold mb-1 text-[#64748b]">
                  <span>3 Star Rating</span>
                  <span>0%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#1e2836] overflow-hidden">
                  <div className="h-full bg-[#64748b] rounded-full w-0" />
                </div>
              </div>

              <div className="pt-4 border-t border-[#1f2937] flex items-center gap-2 text-xs text-[#94a3b8]">
                <ShieldCheck className="w-4 h-4 text-[#c36b44] flex-shrink-0" />
                <span>
                  Authentic rating verification adhering strictly to honest customer documentation.
                  Individual fabricated quotes are never published.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Property Care Quality Pillars */}
        {showFullDetails && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="p-5 rounded-xl bg-[#141b24] border border-[#222e3d]">
              <div className="flex items-center gap-2.5 mb-2 text-white font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#c36b44]" />
                <span>Clear Communication</span>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Direct contact regarding your repair or maintenance needs, with no ambiguous advice
                or unverified claims.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#141b24] border border-[#222e3d]">
              <div className="flex items-center gap-2.5 mb-2 text-white font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#c36b44]" />
                <span>Roofing Integrity</span>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Careful attention paid to roof tiles, slates, lead flashings, and rainwater systems
                protecting the home.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#141b24] border border-[#222e3d]">
              <div className="flex items-center gap-2.5 mb-2 text-white font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#c36b44]" />
                <span>London Coverage</span>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Local awareness of London architectural styles including Victorian, Edwardian, and
                contemporary property roof structures.
              </p>
            </div>
          </div>
        )}

        <div className="text-center">
          <a
            href={businessConfig.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-sm font-semibold shadow-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call to Discuss Your Roofing Requirements: {businessConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
