import React, { useEffect } from 'react';
import { Phone, MapPin, Star, X, ChevronRight, Shield } from 'lucide-react';
import { businessConfig, navigationItems } from '../data/businessData';
import { PageView } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
}) => {
  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#0e141c] border-l border-[#222c3a] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Top header inside drawer */}
          <div className="flex items-center justify-between pb-5 border-b border-[#1f2835]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#18212c] border border-[#2b3747] flex items-center justify-center text-[#c36b44]">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-bold text-[#f8f9fa] font-display">
                  {businessConfig.businessName}
                </span>
                <span className="block text-[10px] text-[#94a3b8]">{businessConfig.location}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#1a232f] border border-[#232e3d]"
              aria-label="Close navigation menu"
              id="mobile-menu-close-button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links list */}
          <nav className="mt-6 space-y-1.5" aria-label="Mobile Navigation">
            {navigationItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  id={`mobile-nav-link-${item.id}`}
                  className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg text-left transition-colors ${
                    isActive
                      ? 'text-white bg-[#1a232f] border border-[#2e3b4d]'
                      : 'text-[#94a3b8] hover:text-white hover:bg-[#131b24]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 ${isActive ? 'text-[#c36b44]' : 'text-[#475569]'}`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Trust signal pill */}
          <div className="mt-8 p-4 rounded-xl bg-[#141c26] border border-[#232e3d]">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex text-[#eab308]">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-bold text-white text-sm">{businessConfig.rating} / 5</span>
            </div>
            <p className="text-xs text-[#94a3b8]">
              Based on {businessConfig.reviewCount} customer reviews across London.
            </p>
          </div>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="mt-8 pt-5 border-t border-[#1f2835] space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#94a3b8]">
            <MapPin className="w-3.5 h-3.5 text-[#c36b44]" />
            <span>Serving London · {businessConfig.location}</span>
          </div>

          <a
            href={businessConfig.phoneHref}
            id="mobile-drawer-call-btn"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white font-semibold text-center text-sm shadow-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now: {businessConfig.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
