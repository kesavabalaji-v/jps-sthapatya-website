/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { JPS_SERVICES } from '../data';
import { ArrowRight, Check, Sparkles, Clock, ShieldCheck, RefreshCw } from 'lucide-react';

interface ServicesProps {
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
  setActivePage: (page: PageID) => void;
}

type PageID = 'home' | 'about' | 'services' | 'projects' | 'insights' | 'careers' | 'contact';

export default function Services({ selectedServiceId, setSelectedServiceId, setActivePage }: ServicesProps) {
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (selectedServiceId && serviceRefs.current[selectedServiceId]) {
      // Small timeout to allow markup rendering
      const timer = setTimeout(() => {
        serviceRefs.current[selectedServiceId]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        // Highlight logic complete
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [selectedServiceId]);

  const handleConsultationClick = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50/50">
      {/* Services Hero Header */}
      <section className="bg-brand-navy-dark text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,155,171,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-xs font-bold uppercase tracking-widest text-[#7ee8f0]">
            Complete Scope of Works
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Expert <span className="text-brand-teal">Services</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Multi-disciplinary layouts, rigorous calculations, and sustainable PV permit sets delivered with high-accuracy CAD execution.
          </p>
        </div>
      </section>

      {/* Services Fast Jumper Navigation */}
      <section className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 sticky top-20 z-30 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <span className="text-xs uppercase font-extrabold text-[#111] tracking-wider shrink-0">
            Quick Jump To:
          </span>
          <div className="flex flex-wrap gap-2 overflow-x-auto select-none no-scrollbar">
            {JPS_SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setSelectedServiceId(s.id);
                  serviceRefs.current[s.id]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap border ${
                  selectedServiceId === s.id
                    ? 'bg-brand-teal text-white border-brand-teal shadow-sm scale-102'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                }`}
                id={`jumper-${s.id}`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Scrolling Block Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {JPS_SERVICES.map((service, index) => {
          const isHighlighted = selectedServiceId === service.id;

          return (
            <div
              key={service.id}
              ref={(el) => {
                serviceRefs.current[service.id] = el;
              }}
              className={`bg-white rounded-2xl border-2 p-8 lg:p-12 transition-all duration-500 shadow-md flex flex-col lg:flex-row gap-12 relative overflow-hidden ${
                isHighlighted
                  ? 'border-brand-teal ring-4 ring-brand-teal/10 scale-[1.01]'
                  : 'border-gray-200'
              }`}
              id={`service-block-${service.id}`}
            >
              {/* Highlight ribbon indicator */}
              {isHighlighted && (
                <div className="absolute top-0 right-0 bg-brand-teal text-white text-[10px] font-extrabold tracking-widest px-4 py-1.5 uppercase rounded-bl-xl shadow-sm animate-pulse">
                  Active Reference
                </div>
              )}

              {/* Left Column: Icon description & structural limits */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-teal-light rounded-2xl flex items-center justify-center text-4xl shadow-inner">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-brand-navy">
                      {service.title}
                    </h3>
                    <p className="text-xs text-brand-teal font-extrabold uppercase mt-1 tracking-wider font-mono">
                      Division &bull; {index + 1}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  {service.fullDesc}
                </p>

                {/* Scope features bullet list */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-navy">
                    Core Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-gray-500 leading-relaxed">
                        <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Dynamic Process Timeline */}
              <div className="lg:w-1/2 space-y-6 p-6 lg:p-8 bg-gray-50/70 rounded-2xl border border-gray-150">
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-navy flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-brand-teal" /> Step-By-Step Process
                </h4>

                <div className="space-y-6 relative border-l-2 border-brand-teal/20 pl-6 ml-3">
                  {service.process.map((step, i) => (
                    <div key={i} className="relative space-y-1">
                      {/* Step Indicator Dot */}
                      <span className="absolute -left-10 top-0.5 w-6 h-6 rounded-full bg-white border-2 border-brand-teal text-[10px] font-extrabold text-brand-teal flex items-center justify-center shadow-sm">
                        0{i + 1}
                      </span>
                      <h5 className="font-bold text-sm text-brand-navy leading-none">
                        {step.split('&')[0].split('and')[0].trim()}
                      </h5>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-mono font-bold">
                    EST. TURNAROUND: 4-7 DAYS
                  </span>
                  <button
                    onClick={handleConsultationClick}
                    className="px-4 py-2 border border-brand-teal/50 hover:border-brand-teal text-xs font-bold text-brand-teal hover:text-white hover:bg-brand-teal transition-all duration-200 rounded-lg cursor-pointer"
                  >
                    Discuss Scope &rarr;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Services Bottom Banner */}
      <section className="bg-brand-navy-dark text-white py-16 text-center px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <Clock className="w-10 h-10 text-brand-teal mx-auto" strokeWidth="1.5" />
          <h3 className="text-2xl font-bold tracking-tight">Need a custom mixed-discipline layout?</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            We regularly blend architectural floor drafting with rebar details and solar line diagram permit packages for simplified code assessments. Let&rsquo;s coordinate a solution.
          </p>
          <button
            onClick={handleConsultationClick}
            className="px-6 py-3 rounded-lg bg-brand-teal text-white text-xs font-bold hover:bg-brand-teal-dark active:scale-95 transition-all cursor-pointer"
          >
            Start Project Discussion
          </button>
        </div>
      </section>
    </div>
  );
}
