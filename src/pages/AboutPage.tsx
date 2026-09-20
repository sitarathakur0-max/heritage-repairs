import React from 'react';
import { Shield, CheckCircle2, Phone, MapPin, Star, Wrench, Layers, Eye } from 'lucide-react';
import { businessConfig } from '../data/businessData';
import { PageView } from '../types';
import heroImg from '../assets/images/london_roof_hero_1789797446825.jpg';
import chimneyImg from '../assets/images/chimney_flashing_1789797479516.jpg';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0c1219] text-[#f2f4f7] py-12 sm:py-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182330] border border-[#27364a] text-xs font-semibold text-[#c36b44] uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>About Heritage Roofing & Repairs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display mb-4">
            Craftsmanship & Reliable Property Care in London
          </h1>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            Dedicated to safeguarding residential properties through roofing expertise, meticulous
            attention to detail, and dependable repair solutions for London homeowners.
          </p>
        </div>
      </div>

      {/* Main Focus Pillars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Craftsmanship */}
          <div className="p-7 rounded-2xl bg-[#141b24] border border-[#222d3b] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#1b2533] border border-[#2a384b] flex items-center justify-center text-[#c36b44]">
              <Wrench className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h2 className="text-xl font-bold text-white font-display">Roofing Craftsmanship</h2>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Every roof is an architectural system requiring precise fitting. We emphasize clean
              slate alignment, secure tile bedding, and proper nail fixings that respect the
              structure of each property.
            </p>
          </div>

          {/* Pillar 2: Attention to Detail */}
          <div className="p-7 rounded-2xl bg-[#141b24] border border-[#222d3b] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#1b2533] border border-[#2a384b] flex items-center justify-center text-[#c36b44]">
              <Eye className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h2 className="text-xl font-bold text-white font-display">Attention to Detail</h2>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Water finds the smallest vulnerability. We focus closely on vulnerable interfaces
              such as chimney flashings, valley troughs, gutter junctions, and perimeter seals where
              leaks most frequently develop.
            </p>
          </div>

          {/* Pillar 3: Protecting the Property */}
          <div className="p-7 rounded-2xl bg-[#141b24] border border-[#222d3b] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#1b2533] border border-[#2a384b] flex items-center justify-center text-[#c36b44]">
              <Shield className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h2 className="text-xl font-bold text-white font-display">Protecting the Property</h2>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              A sound roof protects interior ceilings, insulation, and timber framework from costly
              damp and structural deterioration. Our objective is always lasting protection and
              peace of mind.
            </p>
          </div>
        </div>
      </div>

      {/* London Architectural Roofing Context Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#121922] border border-[#222d3a]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Roofing Expertise Across London Properties
              </h2>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                London features diverse residential roofing typologies, from historic Victorian and
                Edwardian terraces with Welsh slates and ornate chimney pots, to interwar tiled
                semis and modern flat-roof extensions.
              </p>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                Understanding these diverse configurations allows Heritage Roofing & Repairs to
                diagnose issues accurately and recommend suitable, practical repair steps based in
                London W2 1PX.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#cbd5e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0" />
                  <span>Natural Slate & Plain Clay Tiles</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#cbd5e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0" />
                  <span>Dressed Lead Step & Apron Flashings</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#cbd5e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0" />
                  <span>Flat Roof Waterproof Membranes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#cbd5e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0" />
                  <span>Rainwater Guttering & Downpipes</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-[#283648] bg-[#0c1219] shadow-lg">
                <img
                  src={chimneyImg}
                  alt="Chimney stack and dressed lead flashing detailing"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-3 text-[11px] text-[#94a3b8] bg-[#141b24] border-t border-[#222d3b] flex items-center justify-between">
                  <span>Roofing Inspiration · Chimney & Flashing</span>
                  <span className="text-[#c36b44]">London W2 1PX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Location Summary Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-xl bg-[#141b24] border border-[#253243] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-base">
              <MapPin className="w-4 h-4 text-[#c36b44]" />
              <span>{businessConfig.businessName} · {businessConfig.location}</span>
            </div>
            <p className="text-xs text-[#94a3b8]">
              Verified Customer Feedback: {businessConfig.rating} ★ based on {businessConfig.reviewCount} customer reviews.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={businessConfig.phoneHref}
              className="px-5 py-2.5 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {businessConfig.phone}</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2.5 rounded-lg bg-[#1a232f] hover:bg-[#232e3d] text-white text-xs sm:text-sm font-medium border border-[#2e3b4d] transition-colors whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
