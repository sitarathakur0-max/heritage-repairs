import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin, Star, Shield, Clock } from 'lucide-react';
import { businessConfig } from '../data/businessData';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#0c1219] text-[#f2f4f7] py-12 sm:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182330] border border-[#27364a] text-xs font-semibold text-[#c36b44] uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display mb-4">
            Contact Heritage Roofing & Repairs
          </h1>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            Get in touch directly regarding roof repairs, maintenance schedules, flat roofing, or
            general enquiries for properties located in London.
          </p>
        </div>
      </div>

      {/* Main Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ContactForm />
      </div>

      {/* London Location & Verification Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#141b24] border border-[#232f3e] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#1a232f] border border-[#273445] flex items-center justify-center text-[#c36b44] flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Serving London</h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Registered location: {businessConfig.location}. Covering residential properties
                across Greater London boroughs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#1a232f] border border-[#273445] flex items-center justify-center text-[#c36b44] flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Direct Telephone</h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Call <a href={businessConfig.phoneHref} className="text-white font-bold hover:underline">{businessConfig.phone}</a> for immediate discussions regarding active roof leaks.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#1a232f] border border-[#273445] flex items-center justify-center text-[#eab308] flex-shrink-0">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">5.0 Star Feedback</h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Verified feedback from {businessConfig.reviewCount} customer reviews demonstrating
                consistent reliability and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
