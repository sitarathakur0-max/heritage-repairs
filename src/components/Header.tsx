import React from 'react';
import { Phone, MapPin, Star, Menu, X, Shield, ArrowRight } from 'lucide-react';
import { businessConfig, navigationItems } from '../data/businessData';
import { PageView } from '../types';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0c1219]/95 backdrop-blur-md border-b border-[#232d3b] text-[#f2f4f7] transition-colors">
      {/* Top micro-bar for quick contact and trust signals */}
      <div className="bg-[#141b24] border-b border-[#1f2835] text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[#94a3b8]">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#f2f4f7]">
              <MapPin className="w-3.5 h-3.5 text-[#c36b44]" />
              <span>{businessConfig.location}</span>
            </span>
            <span className="hidden sm:inline-block text-[#333f4e]">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#f2f4f7]">
              <span className="text-[#eab308] font-bold">★ {businessConfig.rating}</span>
              <span className="text-[#94a3b8]">({businessConfig.reviewCount} Reviews)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#94a3b8] hidden md:inline">Enquiries & Consultations:</span>
            <a
              href={businessConfig.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-[#f2f4f7] hover:text-[#d9774a] transition-colors tracking-wide"
              id="topbar-phone-link"
            >
              <Phone className="w-3 h-3 text-[#c36b44]" />
              <span>{businessConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none"
            id="brand-logo-button"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#1e2733] to-[#121922] border border-[#2e3a4b] flex items-center justify-center text-[#c36b44] shadow-sm group-hover:border-[#c36b44]/60 transition-colors">
              <Shield className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-bold tracking-tight text-[#f8f9fa] font-display">
                {businessConfig.businessName}
              </span>
              <span className="block text-[11px] font-medium tracking-wider text-[#94a3b8] uppercase">
                London Roofing & Property Repairs
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navigationItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all ${
                    isActive
                      ? 'text-[#f8f9fa] bg-[#1a232f] border border-[#2e3b4d]'
                      : 'text-[#94a3b8] hover:text-[#f8f9fa] hover:bg-[#151d27]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            {/* Primary CTA Button: Call Now */}
            <a
              href={businessConfig.phoneHref}
              id="header-call-now-cta"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-sm font-semibold shadow-md transition-all active:scale-[0.98] whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline-block opacity-80" />
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#1a232f] border border-[#232e3d] transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
