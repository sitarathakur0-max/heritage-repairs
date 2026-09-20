import React from 'react';
import { Phone, MapPin, Star, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../data/businessData';
import { PageView } from '../types';
import heroImage from '../assets/images/london_roof_hero_1789797446825.jpg';

interface HeroProps {
  onNavigate: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#0c1219] text-[#f2f4f7] border-b border-[#212c3b]">
      {/* Background image layer with dark luxury architectural overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="London residential slate and tiled roofs architectural detail"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:transition-transform duration-1000"
        />
        {/* Gradients to ensure text contrast and avoid tacky effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1219] via-[#0c1219]/90 to-[#0c1219]/65" />
        <div className="absolute inset-0 bg-radial at-top from-transparent via-[#0c1219]/40 to-[#0c1219]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Location & Trust Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18222f] border border-[#2b3a4e] text-xs font-medium text-[#c8d4e2] mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#c36b44]" />
            <span className="font-semibold text-white">{businessConfig.businessName}</span>
            <span className="text-[#64748b]">·</span>
            <span className="inline-flex items-center gap-1 text-[#94a3b8]">
              <MapPin className="w-3 h-3 text-[#c36b44]" />
              {businessConfig.location}
            </span>
          </div>

          {/* Primary Hero Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] font-display mb-6">
            Reliable Roofing & Repairs in London
          </h1>

          {/* Concise supporting copy focused on professional roofing & property care */}
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed mb-8 max-w-2xl">
            Professional roofing and property-care services dedicated to safeguarding London
            residences. Specializing in roof repairs, diagnostic leak assessments, slate and tile
            restoration, flat roofing, and complete gutter maintenance.
          </p>

          {/* Primary Contact Details Bar */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm sm:text-base font-medium text-[#c8d4e2] mb-8 pb-6 border-b border-[#232e3d]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-[#18222e] border border-[#2c394b] flex items-center justify-center text-[#c36b44]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <a
                href={businessConfig.phoneHref}
                className="text-white font-semibold hover:text-[#d9774a] transition-colors"
                id="hero-phone-link"
              >
                {businessConfig.phone}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-[#18222e] border border-[#2c394b] flex items-center justify-center text-[#c36b44]">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="text-white font-medium">{businessConfig.location}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href={businessConfig.phoneHref}
              id="hero-call-now-button"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-base font-semibold shadow-lg shadow-[#c36b44]/20 transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <button
              type="button"
              onClick={() => onNavigate('services')}
              id="hero-explore-services-button"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg bg-[#18222f] hover:bg-[#202c3c] text-white text-base font-semibold border border-[#2b3a4e] transition-all"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-[#94a3b8]" />
            </button>
          </div>

          {/* Verified Trust Signal Box */}
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-xl bg-[#121922]/90 border border-[#253243] backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f8f9fa] tracking-tight flex items-baseline gap-1">
                <span>{businessConfig.rating}</span>
                <span className="text-base font-normal text-[#94a3b8]">/ 5</span>
              </div>
              <div className="flex flex-col">
                <div className="flex text-[#eab308]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-xs text-[#94a3b8] font-medium">Verified Customer Rating</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-[#283647]" />

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#c36b44] flex-shrink-0" />
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#f8f9fa]">
                  {businessConfig.reviewCount} Reviews
                </div>
                <div className="text-xs text-[#94a3b8]">London Residential Properties</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
