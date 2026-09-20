import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Phone, MapPin, Award } from 'lucide-react';
import { businessConfig } from '../data/businessData';
import { PageView } from '../types';

interface ReviewsPageProps {
  onNavigate: (page: PageView) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0c1219] text-[#f2f4f7] py-12 sm:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182330] border border-[#27364a] text-xs font-semibold text-[#eab308] uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Customer Rating & Reviews</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display mb-4">
            Customer Feedback & Verified Rating
          </h1>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            Heritage Roofing & Repairs is proud to maintain a 5.0 out of 5 rating across 473
            verified customer reviews from London residential property owners.
          </p>
        </div>
      </div>

      {/* Primary Scorecard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-2xl bg-[#141b24] border border-[#222d3b] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Score Block */}
            <div className="lg:col-span-5 text-center lg:text-left lg:border-r lg:border-[#222d3a] lg:pr-8">
              <span className="text-xs font-bold text-[#c36b44] uppercase tracking-wider block mb-2">
                Overall Performance
              </span>
              <div className="inline-flex items-baseline gap-2 mb-3">
                <span className="text-6xl sm:text-7xl font-extrabold text-white font-display">
                  {businessConfig.rating}
                </span>
                <span className="text-3xl font-bold text-[#64748b]">/ 5.0</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-1 text-[#eab308] mb-4">
                <Star className="w-7 h-7 fill-current" />
                <Star className="w-7 h-7 fill-current" />
                <Star className="w-7 h-7 fill-current" />
                <Star className="w-7 h-7 fill-current" />
                <Star className="w-7 h-7 fill-current" />
              </div>

              <div className="text-xl font-bold text-white mb-1">
                {businessConfig.reviewCount} Verified Reviews
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Reflecting consistent customer feedback across roofing repairs, leak resolution,
                flashing work, and property maintenance in London W2 1PX.
              </p>
            </div>

            {/* Right Distribution & Verification Guarantee */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 rounded-xl bg-[#18212c] border border-[#263345]">
                <div className="flex justify-between text-xs font-bold text-white mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#eab308] fill-current" />
                    5 Star Reviews
                  </span>
                  <span className="text-[#eab308]">{businessConfig.reviewCount} (100%)</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#111720] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#eab308] to-[#d9774a] rounded-full w-full" />
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#111720] border border-[#222d3b] text-xs text-[#94a3b8] space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#c36b44]" />
                  <span>Review Authenticity Commitment</span>
                </div>
                <p className="leading-relaxed">
                  We present verified overall review counts and average ratings accurately. We do not
                  publish fabricated testimonials, artificial customer quotes, or invent fictional
                  endorsements.
                </p>
                <p className="leading-relaxed text-[#cbd5e1]">
                  If you wish to discuss previous projects similar to your roof structure, please
                  contact us directly on {businessConfig.phone}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Performance Criteria */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl font-bold text-white font-display mb-6">
          Core Pillars of Customer Satisfaction
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#141b24] border border-[#222d3b] space-y-3">
            <CheckCircle2 className="w-6 h-6 text-[#c36b44]" />
            <h3 className="text-base font-bold text-white">Prompt Communication</h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Clear telephone discussions regarding work required, with transparent explanations
              of what needs attention on the roof.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141b24] border border-[#222d3b] space-y-3">
            <CheckCircle2 className="w-6 h-6 text-[#c36b44]" />
            <h3 className="text-base font-bold text-white">Structural Care</h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Careful handling of surrounding roof coverings to ensure long-term weather tightness
              and property protection.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141b24] border border-[#222d3b] space-y-3">
            <CheckCircle2 className="w-6 h-6 text-[#c36b44]" />
            <h3 className="text-base font-bold text-white">London Focus</h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Familiarity with historic London building fabric, terrace parapets, slate nails,
              and lead flashing details.
            </p>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#141b24] border border-[#232e3d] text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white font-display mb-2">
            Speak With Heritage Roofing & Repairs
          </h3>
          <p className="text-xs sm:text-sm text-[#94a3b8] mb-6">
            Join 473 London property owners who trust our roofing and repair services.
          </p>
          <a
            href={businessConfig.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-sm font-semibold shadow-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {businessConfig.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
