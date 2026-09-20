import React from 'react';
import { Star, Shield, MapPin, Phone, CheckCircle, FileText } from 'lucide-react';
import { businessConfig } from '../data/businessData';
import { PageView } from '../types';

interface TrustSectionProps {
  onNavigate: (page: PageView) => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onNavigate }) => {
  return (
    <section className="bg-[#111720] border-b border-[#202a37] py-14 sm:py-16 text-[#f2f4f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Verified Rating */}
          <div className="p-6 rounded-xl bg-[#16202c] border border-[#253243] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#202c3c] border border-[#2d3d52] flex items-center justify-center text-[#eab308]">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#202c3c] text-[#c8d4e2] border border-[#2d3d52]">
                  Verified Feedback
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {businessConfig.rating} ★ Rating
              </h3>
              <p className="text-sm text-[#94a3b8] mb-4">
                Backed by {businessConfig.reviewCount} customer reviews demonstrating consistent
                service and reliability.
              </p>
            </div>
            <button
              onClick={() => onNavigate('reviews')}
              className="text-xs font-semibold text-[#d9774a] hover:text-[#f8f9fa] inline-flex items-center gap-1 text-left transition-colors"
            >
              View Rating Details →
            </button>
          </div>

          {/* Card 2: London Coverage */}
          <div className="p-6 rounded-xl bg-[#16202c] border border-[#253243] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#202c3c] border border-[#2d3d52] flex items-center justify-center text-[#c36b44]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#202c3c] text-[#c8d4e2] border border-[#2d3d52]">
                  London Base
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{businessConfig.location}</h3>
              <p className="text-sm text-[#94a3b8] mb-4">
                Centered in London W2 1PX with comprehensive attention to roofs across London boroughs
                and architectural styles.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-semibold text-[#d9774a] hover:text-[#f8f9fa] inline-flex items-center gap-1 text-left transition-colors"
            >
              Contact Location →
            </button>
          </div>

          {/* Card 3: Craftsmanship Focus */}
          <div className="p-6 rounded-xl bg-[#16202c] border border-[#253243] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#202c3c] border border-[#2d3d52] flex items-center justify-center text-[#c36b44]">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#202c3c] text-[#c8d4e2] border border-[#2d3d52]">
                  Property Care
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Meticulous Detail</h3>
              <p className="text-sm text-[#94a3b8] mb-4">
                Dedicated attention to flashing joints, slate alignments, and weather protection to
                safeguard the home.
              </p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="text-xs font-semibold text-[#d9774a] hover:text-[#f8f9fa] inline-flex items-center gap-1 text-left transition-colors"
            >
              Learn About Craft →
            </button>
          </div>

          {/* Card 4: Direct Communication */}
          <div className="p-6 rounded-xl bg-[#16202c] border border-[#253243] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#202c3c] border border-[#2d3d52] flex items-center justify-center text-[#c36b44]">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#202c3c] text-[#c8d4e2] border border-[#2d3d52]">
                  Direct Contact
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{businessConfig.phone}</h3>
              <p className="text-sm text-[#94a3b8] mb-4">
                Call directly to discuss your roof repair, maintenance needs, or schedule an
                informative property check.
              </p>
            </div>
            <a
              href={businessConfig.phoneHref}
              className="text-xs font-semibold text-[#d9774a] hover:text-[#f8f9fa] inline-flex items-center gap-1 text-left transition-colors"
            >
              Call Us Directly →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
