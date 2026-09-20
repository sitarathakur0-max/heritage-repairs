import React from 'react';
import { Wrench, ShieldCheck, AlertTriangle, CheckCircle2, Phone, MapPin, ArrowRight } from 'lucide-react';
import { businessConfig } from '../data/businessData';
import { PageView } from '../types';
import slateImg from '../assets/images/roof_slate_repair_1789797463361.jpg';
import chimneyImg from '../assets/images/chimney_flashing_1789797479516.jpg';

interface RepairsPageProps {
  onNavigate: (page: PageView) => void;
}

export const RepairsPage: React.FC<RepairsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0c1219] text-[#f2f4f7] py-12 sm:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182330] border border-[#27364a] text-xs font-semibold text-[#c36b44] uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Repairs & Maintenance Focus</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display mb-4">
            Roof Repairs & Preventive Maintenance
          </h1>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            Targeted remedial solutions and proactive care to keep London residential roofs
            weather-tight, stable, and protected against environmental wear.
          </p>
        </div>
      </div>

      {/* Two Column Core Focus: Repairs vs Maintenance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Roof Repairs */}
          <div className="p-8 rounded-2xl bg-[#141b24] border border-[#222d3b] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1d2735] border border-[#2e3e53] flex items-center justify-center text-[#c36b44]">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white font-display">Roof Repairs</h2>
                  <span className="text-xs text-[#94a3b8]">General remedial roofing requirements</span>
                </div>
              </div>

              <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                When a roof develops leaks, displaced slates, or broken tiles, immediate action
                prevents secondary water ingress into timber joists, ceilings, and internal decor.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0 mt-0.5" />
                  <span>Slipped, broken, or storm-dislodged tiles and slates</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0 mt-0.5" />
                  <span>Tracing active leak paths and moisture ingress origins</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0 mt-0.5" />
                  <span>Ridge and hip tile re-bedding with fresh mortar mix</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0 mt-0.5" />
                  <span>Lead apron and stepped flashing repairs at abutments</span>
                </div>
              </div>
            </div>

            <a
              href={businessConfig.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Repair Enquiry: {businessConfig.phone}</span>
            </a>
          </div>

          {/* Card 2: Roof Maintenance */}
          <div className="p-8 rounded-2xl bg-[#141b24] border border-[#222d3b] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1d2735] border border-[#2e3e53] flex items-center justify-center text-[#c36b44]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white font-display">Roof Maintenance</h2>
                  <span className="text-xs text-[#94a3b8]">Keeping roofing systems properly maintained</span>
                </div>
              </div>

              <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                Preventative care preserves the lifespan of roofing coverings. Regular checks
                identify subtle fatigue before it triggers disruptive structural leaks.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0 mt-0.5" />
                  <span>Clearing leaves, silt, and moss from roof valleys</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0 mt-0.5" />
                  <span>Checking rainwater gutters and downpipes for clear flow</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0 mt-0.5" />
                  <span>Visual examination of parapet copings and chimneys</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                  <CheckCircle2 className="w-4 h-4 text-[#c36b44] flex-shrink-0 mt-0.5" />
                  <span>General seasonal maintenance guidance for London homeowners</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#1a2432] hover:bg-[#232f41] text-white text-sm font-semibold border border-[#2d3d52] transition-colors"
            >
              <span>Enquire About Maintenance Schedule</span>
              <ArrowRight className="w-4 h-4 text-[#c36b44]" />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Detail Section with Inspiration imagery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden bg-[#131a23] border border-[#232d3b]">
            <img
              src={slateImg}
              alt="Slate tile replacement and repair alignment"
              referrerPolicy="no-referrer"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-5">
              <span className="text-[11px] font-semibold text-[#c36b44] uppercase tracking-wider block mb-1">
                Roofing Inspiration · Remedial Craft
              </span>
              <h3 className="text-lg font-bold text-white font-display">
                Tile & Slate Alignment
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1">
                Individual slates are securely refitted with dedicated fixings to maintain continuous
                water runoff without disrupting surrounding layers.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-[#131a23] border border-[#232d3b]">
            <img
              src={chimneyImg}
              alt="Chimney flashing and masonry repointing inspection"
              referrerPolicy="no-referrer"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-5">
              <span className="text-[11px] font-semibold text-[#c36b44] uppercase tracking-wider block mb-1">
                Roofing Inspiration · Chimney Junctions
              </span>
              <h3 className="text-lg font-bold text-white font-display">
                Flashing & Junction Integrity
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1">
                Regular checks of leadwork aprons and mortar pointing around high-level chimney
                stacks prevent wind-driven rainwater penetration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Warning Signs Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#141b24] border border-[#253243]">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-[#c36b44]" />
            <h3 className="text-xl font-bold text-white font-display">
              Signs Your Roof May Require Attention
            </h3>
          </div>
          <p className="text-sm text-[#94a3b8] mb-6">
            If you notice any of these common symptoms on your London property, contact Heritage
            Roofing & Repairs to discuss your repair requirements:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#cbd5e1] mb-6">
            <div className="p-3.5 rounded-lg bg-[#18212d] border border-[#243142]">
              <strong className="text-white block mb-1">Damp ceiling patches</strong>
              Moisture or discolouration on upper-floor ceilings following rain.
            </div>
            <div className="p-3.5 rounded-lg bg-[#18212d] border border-[#243142]">
              <strong className="text-white block mb-1">Debris in gutters</strong>
              Pieces of broken slate or mortar accumulating in gutter channels.
            </div>
            <div className="p-3.5 rounded-lg bg-[#18212d] border border-[#243142]">
              <strong className="text-white block mb-1">Displaced roof slates</strong>
              Uneven lines or visible gaps along the roof slope.
            </div>
            <div className="p-3.5 rounded-lg bg-[#18212d] border border-[#243142]">
              <strong className="text-white block mb-1">Overflowing gutters</strong>
              Water spilling over eaves during moderate rain showers.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1f2835]">
            <span className="text-xs text-[#94a3b8]">
              Heritage Roofing & Repairs · Location: {businessConfig.location}
            </span>
            <a
              href={businessConfig.phoneHref}
              className="px-6 py-2.5 rounded-lg bg-[#c36b44] hover:bg-[#aa5935] text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              Call Now: {businessConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
