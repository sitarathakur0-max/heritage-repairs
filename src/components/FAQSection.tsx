import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Phone, ArrowRight } from 'lucide-react';
import { faqItems, businessConfig } from '../data/businessData';
import { PageView } from '../types';

interface FAQSectionProps {
  onNavigate: (page: PageView) => void;
  showSearch?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  onNavigate,
  showSearch = true,
}) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-[#111720] text-[#f2f4f7] py-16 sm:py-20 border-b border-[#212c3b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18222e] border border-[#273547] text-xs font-semibold text-[#c36b44] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Customer Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto">
            Clear, honest answers regarding our roofing services, repairs, and how to request
            information for your London property.
          </p>
        </div>

        {/* Optional Search Bar */}
        {showSearch && (
          <div className="relative mb-8 max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748b]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search roofing questions..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#16202c] border border-[#273445] text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#c36b44] focus:ring-1 focus:ring-[#c36b44] transition-colors"
            />
          </div>
        )}

        {/* Accordion list */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-colors overflow-hidden ${
                    isOpen
                      ? 'bg-[#151d27] border-[#38485e]'
                      : 'bg-[#131a23] border-[#222c3a] hover:border-[#2d3a4b]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    id={`faq-btn-${faq.id}`}
                    className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-semibold text-white font-display">
                      {faq.question}
                    </span>
                    <span
                      className={`p-1 rounded-md bg-[#1e2734] text-[#94a3b8] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#c36b44]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#94a3b8] leading-relaxed border-t border-[#1f2937]/70">
                      <p>{faq.answer}</p>
                      {faq.id === 'faq-5' && (
                        <div className="mt-3 p-3 rounded-lg bg-[#1a232f] border border-[#293646] text-xs text-[#cbd5e1] flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#c36b44] flex-shrink-0" />
                          <span>
                            Call{' '}
                            <a
                              href={businessConfig.phoneHref}
                              className="font-bold text-white underline hover:text-[#d9774a]"
                            >
                              {businessConfig.phone}
                            </a>{' '}
                            with your property details for specific guidance.
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-[#94a3b8] text-sm">
              No matching questions found. Please call us directly on {businessConfig.phone}.
            </div>
          )}
        </div>

        {/* Bottom Contact Help Note */}
        <div className="mt-10 p-5 rounded-xl bg-[#141b24] border border-[#222c3a] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white mb-0.5">
              Have another question regarding your roof?
            </h4>
            <p className="text-xs text-[#94a3b8]">
              Contact Heritage Roofing & Repairs at {businessConfig.location} or call{' '}
              {businessConfig.phone}.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 rounded-lg bg-[#1b2533] hover:bg-[#232f41] border border-[#2d3a4d] text-xs font-semibold text-white inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
          >
            <span>Send Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#c36b44]" />
          </button>
        </div>
      </div>
    </section>
  );
};
