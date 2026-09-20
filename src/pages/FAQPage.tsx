import React from 'react';
import { FAQSection } from '../components/FAQSection';
import { HelpCircle, Phone, MapPin } from 'lucide-react';
import { businessConfig } from '../data/businessData';
import { PageView } from '../types';

interface FAQPageProps {
  onNavigate: (page: PageView) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0c1219] text-[#f2f4f7] py-12 sm:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182330] border border-[#27364a] text-xs font-semibold text-[#c36b44] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Help & Information</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            Find straightforward answers regarding our services, repair enquiries, roof types, and
            how pricing is established for properties across London.
          </p>
        </div>
      </div>

      {/* Main FAQ Accordion Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FAQSection onNavigate={onNavigate} showSearch={true} />
      </div>

      {/* Direct Contact Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#141b24] border border-[#232f3e] text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white font-display mb-2">
            Have a question not listed here?
          </h3>
          <p className="text-sm text-[#94a3b8] mb-6">
            Our team is available by telephone to answer questions regarding your roof in London W2 1PX.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={businessConfig.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-sm font-semibold shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {businessConfig.phone}</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1a232f] hover:bg-[#232e3d] text-white text-sm font-medium border border-[#2d3a4b] transition-colors"
            >
              <span>Submit Enquiry</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
