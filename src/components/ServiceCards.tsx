import React from 'react';
import { Wrench, ShieldCheck, Layers, Home, Droplets, Flame, ArrowRight, CheckCircle2 } from 'lucide-react';
import { roofingServices } from '../data/businessData';
import { PageView } from '../types';

interface ServiceCardsProps {
  onNavigate: (page: PageView) => void;
  onSelectService?: (serviceId: string) => void;
  limit?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-5 h-5 text-[#c36b44]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#c36b44]" />,
  Layers: <Layers className="w-5 h-5 text-[#c36b44]" />,
  Home: <Home className="w-5 h-5 text-[#c36b44]" />,
  Droplets: <Droplets className="w-5 h-5 text-[#c36b44]" />,
  Flame: <Flame className="w-5 h-5 text-[#c36b44]" />,
};

export const ServiceCards: React.FC<ServiceCardsProps> = ({
  onNavigate,
  onSelectService,
  limit,
}) => {
  const displayServices = limit ? roofingServices.slice(0, limit) : roofingServices;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {displayServices.map((service) => (
        <div
          key={service.id}
          className="group rounded-xl bg-[#141b24] border border-[#222c3a] hover:border-[#38485e] transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-xl"
        >
          <div>
            {/* Service Visual Preview with proper referrerPolicy and lazy loading */}
            {service.image && (
              <div className="relative h-48 w-full overflow-hidden bg-[#0d131a]">
                <img
                  src={service.image}
                  alt={`${service.title} - London roofing detail`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141b24] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded bg-[#0c1219]/90 text-[#e2e8f0] border border-[#2a3648] backdrop-blur-xs">
                  {service.title}
                </span>
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#1a232f] border border-[#2a3648] flex items-center justify-center">
                  {iconMap[service.iconName] || <Wrench className="w-5 h-5 text-[#c36b44]" />}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight font-display">
                  {service.title}
                </h3>
              </div>

              <p className="text-sm text-[#94a3b8] leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.scopePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#cbd5e1]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c36b44] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-6 pb-6 pt-2 border-t border-[#1e2734] flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                if (onSelectService) {
                  onSelectService(service.id);
                } else {
                  onNavigate('services');
                }
              }}
              className="text-xs font-semibold text-[#f8f9fa] hover:text-[#d9774a] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Service Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="text-xs font-medium text-[#94a3b8] hover:text-white px-2.5 py-1 rounded bg-[#1b2431] hover:bg-[#232e3e] border border-[#2b3748] transition-colors"
            >
              Enquire
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
