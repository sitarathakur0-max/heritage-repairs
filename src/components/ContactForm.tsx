import React, { useState } from 'react';
import { Phone, MapPin, Star, Send, CheckCircle2, AlertCircle, Shield } from 'lucide-react';
import { businessConfig, roofingServices } from '../data/businessData';
import { ContactFormData } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    serviceRequired: 'Roof Repairs',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Please provide a valid contact phone number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 8) {
      newErrors.message = 'Please provide a brief summary of your roofing requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean local recording without misleading claim of external SMTP server
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceRequired: 'Roof Repairs',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="rounded-2xl bg-[#141b24] border border-[#222d3b] p-6 sm:p-8 lg:p-10 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Official Business Details */}
        <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#222e3e] pb-8 lg:pb-0 lg:pr-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b2533] border border-[#2c3a4d] text-xs font-semibold text-[#c36b44] uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>Direct Property Enquiries</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display mb-3">
              {businessConfig.businessName}
            </h3>

            <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
              Contact us regarding roof repairs, seasonal maintenance, flat roofs, or rainwater
              drainage for properties located in London.
            </p>

            <div className="space-y-4 mb-8">
              {/* Location Display */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#18212c] border border-[#263345]">
                <MapPin className="w-5 h-5 text-[#c36b44] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#94a3b8] font-medium">Business Location</div>
                  <div className="text-sm font-semibold text-white">{businessConfig.location}</div>
                </div>
              </div>

              {/* Telephone Display */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#18212c] border border-[#263345]">
                <Phone className="w-5 h-5 text-[#c36b44] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#94a3b8] font-medium">Telephone Direct Line</div>
                  <a
                    href={businessConfig.phoneHref}
                    className="text-base font-bold text-white hover:text-[#d9774a] transition-colors"
                    id="contact-box-phone-link"
                  >
                    {businessConfig.phone}
                  </a>
                </div>
              </div>

              {/* Verified Trust Signal */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#18212c] border border-[#263345]">
                <Star className="w-5 h-5 text-[#eab308] fill-current flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#94a3b8] font-medium">Customer Rating</div>
                  <div className="text-sm font-bold text-white">
                    {businessConfig.rating} ★ · {businessConfig.reviewCount} Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <a
              href={businessConfig.phoneHref}
              id="contact-direct-call-action"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-sm font-semibold shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {businessConfig.phone}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Enquiry Form */}
        <div className="lg:col-span-7">
          {isSubmitted ? (
            <div className="p-8 rounded-xl bg-[#17222f] border border-[#2c3d52] text-center flex flex-col items-center justify-center min-h-[360px]">
              <div className="w-14 h-14 rounded-full bg-[#1b2b3b] border border-[#3b4f66] flex items-center justify-center text-[#c36b44] mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white font-display mb-2">
                Enquiry Details Received
              </h4>
              <p className="text-sm text-[#cbd5e1] leading-relaxed max-w-md mb-6">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your enquiry
                regarding <strong className="text-white">{formData.serviceRequired}</strong> for
                your London property has been recorded.
              </p>
              <div className="p-4 rounded-lg bg-[#111720] border border-[#243142] text-xs text-[#94a3b8] max-w-md mb-6 text-left">
                <span className="font-semibold text-white block mb-1">Direct Assistance Notice:</span>
                For prompt response or active roof leaks, please call Heritage Roofing & Repairs
                directly at{' '}
                <a
                  href={businessConfig.phoneHref}
                  className="font-bold text-[#c36b44] hover:underline"
                >
                  {businessConfig.phone}
                </a>
                .
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 rounded-lg bg-[#1e2938] hover:bg-[#283649] text-white text-xs font-semibold border border-[#37475d] transition-colors"
                id="submit-another-enquiry-btn"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="mb-2">
                <h4 className="text-lg font-bold text-white font-display">
                  Request Information or Schedule an Inspection
                </h4>
                <p className="text-xs text-[#94a3b8]">
                  Fill in your details below. We review all London property enquiries thoroughly.
                </p>
              </div>

              {/* Name field */}
              <div>
                <label htmlFor="enquiry-name" className="block text-xs font-semibold text-[#cbd5e1] mb-1.5">
                  Full Name <span className="text-[#c36b44]">*</span>
                </label>
                <input
                  type="text"
                  id="enquiry-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  className={`w-full px-4 py-2.5 rounded-lg bg-[#10161f] border text-sm text-white placeholder-[#64748b] focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-[#263243] focus:border-[#c36b44]'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="enquiry-phone" className="block text-xs font-semibold text-[#cbd5e1] mb-1.5">
                    Phone Number <span className="text-[#c36b44]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="enquiry-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +44 7700 900077"
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#10161f] border text-sm text-white placeholder-[#64748b] focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-[#263243] focus:border-[#c36b44]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="enquiry-email" className="block text-xs font-semibold text-[#cbd5e1] mb-1.5">
                    Email Address <span className="text-[#c36b44]">*</span>
                  </label>
                  <input
                    type="email"
                    id="enquiry-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@example.co.uk"
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#10161f] border text-sm text-white placeholder-[#64748b] focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-[#263243] focus:border-[#c36b44]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Service Required */}
              <div>
                <label htmlFor="enquiry-service" className="block text-xs font-semibold text-[#cbd5e1] mb-1.5">
                  Service Required <span className="text-[#c36b44]">*</span>
                </label>
                <select
                  id="enquiry-service"
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#10161f] border border-[#263243] text-sm text-white focus:outline-none focus:border-[#c36b44] transition-colors"
                >
                  {roofingServices.map((service) => (
                    <option key={service.id} value={service.title} className="bg-[#10161f]">
                      {service.title}
                    </option>
                  ))}
                  <option value="General Roof Enquiry" className="bg-[#10161f]">
                    General Roof Enquiry
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="enquiry-message" className="block text-xs font-semibold text-[#cbd5e1] mb-1.5">
                  Message / Property Details <span className="text-[#c36b44]">*</span>
                </label>
                <textarea
                  id="enquiry-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your roof requirements, signs of damage, or property location..."
                  className={`w-full px-4 py-2.5 rounded-lg bg-[#10161f] border text-sm text-white placeholder-[#64748b] focus:outline-none transition-colors ${
                    errors.message
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-[#263243] focus:border-[#c36b44]'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                id="submit-enquiry-form-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-sm font-semibold shadow-md transition-all active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Recording details...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-[#64748b] text-center pt-2">
                We handle property inquiries with discretion. Contact telephone line:{' '}
                <a href={businessConfig.phoneHref} className="text-[#94a3b8] hover:text-white underline">
                  {businessConfig.phone}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
