import React, { useState } from 'react';
import { Wrench, ShieldCheck, Layers, Home, Droplets, Flame, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { roofingServices, businessConfig } from '../data/businessData';
import { PageView } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageView) => void;
  selectedServiceId?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-6 h-6 text-[#c36b44]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#c36b44]" />,
  Layers: <Layers className="w-6 h-6 text-[#c36b44]" />,
  Home: <Home className="w-6 h-6 text-[#c36b44]" />,
  Droplets: <Droplets className="w-6 h-6 text-[#c36b44]" />,
  Flame: <Flame className="w-6 h-6 text-[#c36b44]" />,
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, selectedServiceId }) => {
  const [activeTab, setActiveTab] = useState<string>(selectedServiceId || 'all');

  const filteredServices = activeTab === 'all'
    ? roofingServices
    : roofingServices.filter(s => s.id === activeTab);

  return (
    <div className="bg-[#0c1219] text-[#f2f4f7] py-12 sm:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182330] border border-[#27364a] text-xs font-semibold text-[#c36b44] uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>London Roofing Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display mb-4">
            Professional Roofing Services
          </h1>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            Comprehensive roofing care tailored to London residential properties. From targeted
            repairs and routine maintenance to flat roof systems and chimney detailing.
          </p>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-wrap gap-2 pb-2 border-b border-[#1f2835]">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
              activeTab === 'all'
                ? 'bg-[#c36b44] text-white shadow-sm'
                : 'bg-[#141b24] text-[#94a3b8] hover:text-white border border-[#222c3a]'
            }`}
          >
            All Services (6)
          </button>
          {roofingServices.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                activeTab === service.id
                  ? 'bg-[#c36b44] text-white shadow-sm'
                  : 'bg-[#141b24] text-[#94a3b8] hover:text-white border border-[#222c3a]'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Services Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-16">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="rounded-2xl bg-[#131a23] border border-[#232e3d] overflow-hidden shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image side */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] w-full bg-[#0d131a]">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={`${service.title} - London roofing detail`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131a23] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 text-[11px] font-semibold px-3 py-1 rounded bg-[#0b1017]/90 text-white border border-[#2a3648] backdrop-blur-xs">
                    Roofing Inspiration · {service.title}
                  </div>
                </div>
              </div>

              {/* Text info side */}
              <div className={`p-6 sm:p-8 lg:p-10 lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1b2533] border border-[#2b394d] flex items-center justify-center">
                    {iconMap[service.iconName] || <Wrench className="w-6 h-6 text-[#c36b44]" />}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                      {service.title}
                    </h2>
                    <span className="text-xs text-[#c36b44] font-medium">{service.summary}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                    Key Scope & Focus Areas:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.scopePoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                        <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#1f2835]">
                  <a
                    href={businessConfig.phoneHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call to Discuss: {businessConfig.phone}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#1c2634] hover:bg-[#253244] text-white text-xs sm:text-sm font-medium border border-[#2d3a4b] transition-colors"
                  >
                    <span>Request Information</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#94a3b8]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Guidance Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#141b24] border border-[#232f3e] text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white font-display mb-2">
            Pricing & Individual Requirements
          </h3>
          <p className="text-sm text-[#94a3b8] mb-6">
            Every roof structure in London differs by access, pitch, tile type, and condition.
            Visitors should contact Heritage Roofing & Repairs regarding their specific requirements
            for clear, honest guidance.
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
