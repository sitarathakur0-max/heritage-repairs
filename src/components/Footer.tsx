import React from 'react';
import { Phone, MapPin, Star, Shield } from 'lucide-react';
import { businessConfig, navigationItems } from '../data/businessData';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#090d12] text-[#94a3b8] border-t border-[#1a222d] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Business Identity & Exact Details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#141b24] border border-[#232f3e] flex items-center justify-center text-[#c36b44]">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white font-display">
                {businessConfig.businessName}
              </span>
            </div>

            <p className="text-sm text-[#94a3b8] leading-relaxed max-w-md">
              Reliable roofing and property repairs in London. Dedicated to craftsmanship,
              meticulous attention to detail, and protecting residential properties across London W2 1PX.
            </p>

            <div className="space-y-2 pt-2 text-sm text-[#cbd5e1]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c36b44] flex-shrink-0" />
                <span className="text-white font-medium">{businessConfig.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c36b44] flex-shrink-0" />
                <a
                  href={businessConfig.phoneHref}
                  className="text-white font-semibold hover:text-[#d9774a] transition-colors"
                  id="footer-phone-link"
                >
                  {businessConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <div className="flex text-[#eab308]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-bold text-white">
                  {businessConfig.rating} ★ · {businessConfig.reviewCount} Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Website Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    id={`footer-nav-${item.id}`}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Roofing Services List */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Roofing Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#94a3b8]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Roof Repairs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Roof Maintenance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Flat Roofing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Pitched & Tiled Roofing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Gutter Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Chimney & Roof Details
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and compliance notes */}
        <div className="pt-8 border-t border-[#161e29] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <div>
            © {new Date().getFullYear()} {businessConfig.businessName}. Location: {businessConfig.location}.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#94a3b8]">
              Verified Feedback: {businessConfig.rating} ★ · {businessConfig.reviewCount} Reviews
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
