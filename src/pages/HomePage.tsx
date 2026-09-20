import React from 'react';
import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { ServiceCards } from '../components/ServiceCards';
import { GallerySection } from '../components/GallerySection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';
import { PageView } from '../types';
import { businessConfig } from '../data/businessData';
import { ArrowRight, Wrench, Shield, CheckCircle2, Phone } from 'lucide-react';
import slateImg from '../assets/images/roof_slate_repair_1789797463361.jpg';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onSelectService: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectService }) => {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Trust Stats Bar */}
      <TrustSection onNavigate={onNavigate} />

      {/* 3. Core Services Overview Section */}
      <section className="bg-[#0c1219] py-16 sm:py-20 border-b border-[#212c3b] text-[#f2f4f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16212e] border border-[#27364a] text-xs font-semibold text-[#c36b44] uppercase tracking-wider mb-3">
                <Wrench className="w-3.5 h-3.5" />
                <span>Roofing Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-3">
                Roofing Services in London
              </h2>
              <p className="text-sm sm:text-base text-[#94a3b8]">
                Professional attention across traditional slate roofs, pitched tiles, flat roofing,
                gutters, and chimney details in London W2 1PX.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#18222f] hover:bg-[#202d3e] text-white text-sm font-semibold border border-[#29394d] transition-colors self-start md:self-auto"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-4 h-4 text-[#c36b44]" />
            </button>
          </div>

          <ServiceCards onNavigate={onNavigate} onSelectService={onSelectService} limit={6} />
        </div>
      </section>

      {/* 4. Repairs & Maintenance Spotlight Feature */}
      <section className="bg-[#111720] py-16 sm:py-20 border-b border-[#212c3b] text-[#f2f4f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182330] border border-[#2b3a4c] text-xs font-semibold text-[#c36b44] uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>Property Protection</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
                Repairs & Maintenance Tailored for London Weather
              </h2>

              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                Roofs in London face seasonal rain, freezing cycles, and wind exposure. Small issues
                such as slipped slates, cracked flashings, or blocked valleys can lead to internal
                moisture damage if left unaddressed.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c36b44] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">Diagnostic Leak Assessment</strong>
                    <span className="text-xs text-[#94a3b8]">
                      Thorough checks to identify water path origins at flashings, valleys, or tiles.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c36b44] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">Slate & Tile Remedial Work</strong>
                    <span className="text-xs text-[#94a3b8]">
                      Replacing displaced or cracked tiles with proper copper nail or clip fixings.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c36b44] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">Chimney & Leadwork Checks</strong>
                    <span className="text-xs text-[#94a3b8]">
                      Reviewing lead apron integrity, masonry pointing, and chimney pot security.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('repairs')}
                  className="px-6 py-3 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-sm font-semibold transition-colors"
                >
                  Explore Repairs & Maintenance
                </button>

                <a
                  href={businessConfig.phoneHref}
                  className="px-5 py-3 rounded-lg bg-[#18222f] hover:bg-[#202d3e] text-white text-sm font-medium border border-[#2b3a4d] inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c36b44]" />
                  <span>Call {businessConfig.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#263445] shadow-2xl bg-[#141b24]">
                <img
                  src={slateImg}
                  alt="Slate roof repair and alignment detail"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e141c] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0c1219]/90 border border-[#263445] backdrop-blur-xs">
                  <span className="text-[11px] font-semibold text-[#c36b44] uppercase tracking-wider block mb-1">
                    Roofing Inspiration
                  </span>
                  <div className="text-sm font-bold text-white">
                    Slate alignment and weather-tight detailing
                  </div>
                  <div className="text-xs text-[#94a3b8] mt-0.5">
                    London W2 1PX · Heritage Roofing & Repairs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gallery Showcase Preview (Roofing Inspiration) */}
      <section className="bg-[#0c1219] py-16 sm:py-20 border-b border-[#212c3b] text-[#f2f4f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GallerySection showTitle={true} limit={6} />
        </div>
      </section>

      {/* 6. Reviews & Trust Breakdown */}
      <ReviewsSection onNavigate={onNavigate} />

      {/* 7. FAQ Section */}
      <FAQSection onNavigate={onNavigate} />

      {/* 8. Bottom CTA Banner */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
