/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, DraftingCompass, Cpu, FileText, Check, Award, Compass, Layers } from 'lucide-react';
import { PageID } from '../types';
import { JPS_SERVICES, JPS_PROJECTS, JPS_TESTIMONIALS } from '../data';
import { useState, useEffect } from 'react';

interface HomeProps {
  setActivePage: (page: PageID) => void;
  setSelectedServiceId: (id: string | null) => void;
  setSelectedProjectId: (id: string | null) => void;
}

export default function Home({ setActivePage, setSelectedServiceId, setSelectedProjectId }: HomeProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % JPS_TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setActivePage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActivePage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden pt-16">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-teal/80 text-white overflow-hidden py-20"
      >
        {/* Decorative Grid Patterns & Circles */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-brand-navy/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/20 border border-brand-teal/30 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#7ee8f0]">
                  Engineering Solutions Since 24
                </span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tighter text-white"
                >
                  From Vision <br className="hidden sm:inline" />
                  <span className="text-brand-teal">to Reality.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-200 font-light leading-relaxed max-w-xl"
                >
                  JPS Sthapatya delivers precision drafting, core structural calculations, elegant architectural layouts, photorealistic 3D rendering, and fast-track solar permit package compliance - all under one professional roof.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => setActivePage('services')}
                  className="px-6 py-3.5 rounded-lg bg-brand-teal text-white font-bold text-sm shadow-md hover:bg-brand-teal-dark transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95 hover:-translate-y-0.5"
                  id="hero-explore-services"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActivePage('projects')}
                  className="px-6 py-3.5 rounded-lg border-2 border-white/40 text-white font-bold text-sm shadow-sm hover:border-white transition-colors duration-200 cursor-pointer active:scale-95"
                  id="hero-view-work"
                >
                  View Our Portfolio
                </button>
              </motion.div>

              {/* Stat figures */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg"
              >
                <div>
                  <div className="text-3xl font-extrabold text-[#7ee8f0] font-mono">2024</div>
                  <p className="text-xs text-slate-300 uppercase font-bold mt-1 tracking-wider leading-none">
                    Founded & Innovating
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#7ee8f0] font-mono">100%</div>
                  <p className="text-xs text-slate-300 uppercase font-bold mt-1 tracking-wider leading-none">
                    Permit Approval Rate
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#7ee8f0] font-mono">2D & 3D</div>
                  <p className="text-xs text-slate-300 uppercase font-bold mt-1 tracking-wider leading-none">
                    End-To-End Assets
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Architectural Vector/Logo Column */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-sm h-[420px] rounded-2xl bg-brand-navy-dark/60 border border-white/10 flex flex-col justify-between p-8 relative shadow-2xl backdrop-blur-sm group hover:border-brand-teal/40 transition-colors duration-300"
              >
                <div className="absolute top-4 left-4 text-[10px] font-mono text-brand-teal font-extrabold uppercase tracking-widest">
                  Blueprint grid CAD-v1
                </div>

                {/* Simulated building skeleton */}
                <div className="flex-1 flex items-center justify-center py-6" id="hero-vector-illustration">
                  <svg
                    viewBox="0 0 200 240"
                    className="w-48 h-56 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    {/* Horizon */}
                    <line x1="10" y1="210" x2="190" y2="210" strokeDasharray="3,3" className="stroke-gray-500" />
                    {/* Foundation */}
                    <rect x="30" y="190" width="140" height="20" rx="2" className="stroke-brand-teal fill-brand-teal/10" />
                    {/* Core framing floors */}
                    <rect x="40" y="50" width="120" height="140" rx="3" className="stroke-brand-teal/60" />
                    <line x1="40" y1="100" x2="160" y2="100" className="stroke-slate-500/40" />
                    <line x1="40" y1="150" x2="160" y2="150" className="stroke-slate-500/40" />
                    {/* Structural column guidelines */}
                    <line x1="80" y1="50" x2="80" y2="190" strokeDasharray="2,2" className="stroke-slate-500/40" />
                    <line x1="120" y1="50" x2="120" y2="190" strokeDasharray="2,2" className="stroke-slate-500/40" />
                    {/* Truss angles */}
                    <line x1="40" y1="50" x2="80" y2="100" className="stroke-white/20" />
                    <line x1="80" y1="100" x2="40" y2="150" className="stroke-white/20" />
                    <line x1="120" y1="100" x2="160" y2="150" className="stroke-white/20" />
                    <line x1="160" y1="50" x2="120" y2="100" className="stroke-white/20" />
                    {/* Roof alignment point */}
                    <polygon points="100,10 40,50 160,50" className="stroke-brand-teal fill-brand-teal/5" />
                    <line x1="100" y1="10" x2="100" y2="190" strokeDasharray="4,4" className="stroke-white/40" />
                  </svg>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-gray-400">
                  <div className="font-mono text-[10px]">COORDS &bull; 21.14° N, 79.08° E</div>
                  <div className="font-bold text-brand-teal">Sthapatya Standards</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US PREVIEW */}
      <section className="py-24 bg-white" id="home-about-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left columns: Statistics Boxes (Walker Style) */}
            <div className="lg:col-span-12 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 rounded-xl bg-brand-navy-dark text-white space-y-3">
                <span className="text-4xl font-extrabold text-brand-teal block font-mono">2024</span>
                <h4 className="font-bold text-md tracking-tight text-slate-100">Year Founded</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Established with a single focused vision: complete, modern architectural planning & structural safety under one unified roof.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-brand-teal-light text-brand-navy space-y-3 border border-brand-teal/10">
                <span className="text-4xl font-extrabold text-brand-teal block font-mono">100%</span>
                <h4 className="font-bold text-md tracking-tight text-brand-navy">Sustainable Intent</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Committed to optimizing solar arrays and load frameworks for long-term power recovery and material thrift.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-gray-50 text-gray-800 space-y-3 border border-gray-150">
                <span className="text-4xl font-extrabold text-brand-navy block font-mono">Expert</span>
                <h4 className="font-bold text-md tracking-tight text-brand-navy">CAD Drafting</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Translating spatial concepts and structural specifications into impeccable, builder-friendly 2D code sheets.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-brand-navy text-white space-y-3">
                <span className="text-4xl font-extrabold text-brand-teal block font-mono">One</span>
                <h4 className="font-bold text-md tracking-tight text-white">Turnkey Solution</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Integrating architecture, framing, drafting, rendering, and solar permit sets in a single unified workflow.
                </p>
              </div>
            </div>

            {/* Right columns: Content Details */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2.5px] bg-brand-teal rounded-sm" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal">
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy leading-tight">
                Complete Engineering &amp; Architectural Solutions.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                JPS Sthapatya is a rapidly evolving design and specialized engineering firm taking absolute pride in delivering practical, innovative, and code-compliant solutions for modern projects.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We have expanded our operations to house expert divisions covering architectural planning, building layout clearance drafting, structural calculations, interior conceptual drawings, realistic 3D visualization, and professional photovoltaic solar utility permit packages.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => setActivePage('about')}
                  className="px-5 py-3 rounded-lg bg-brand-navy hover:bg-brand-navy-dark text-white text-xs font-bold transition-all duration-200 cursor-pointer"
                  id="about-learn-more"
                >
                  Read Our Full Story
                </button>
                <div className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-teal">
                  <CheckCircle2 className="w-5 h-5" /> In Service Since 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section className="py-24 bg-brand-teal-light/30 border-t border-b border-brand-teal-light" id="home-services-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2.5px] bg-brand-teal rounded-sm" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal">
                  Our Specializations
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
                What We Do
              </h2>
              <p className="text-sm text-gray-500 max-w-lg">
                Full-service drafting, design, and structural planning support from initial concept through local AHJ utility permit clearance.
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedServiceId(null);
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3 border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white rounded-lg text-xs font-bold inline-flex items-center gap-2 transition-all duration-200 shrink-0 cursor-pointer self-start md:self-auto"
              id="services-view-all"
            >
              All Services &amp; Processes <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JPS_SERVICES.slice(0, 6).map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="group relative bg-white border border-gray-200 rounded-xl p-8 hover:bg-brand-teal hover:border-brand-teal active:scale-98 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5"
                id={`home-service-card-${service.id}`}
              >
                <div className="w-12 h-12 bg-brand-teal-light rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-white/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-white/85 transition-colors duration-300">
                  {service.shortDesc}
                </p>
                <div className="text-xs font-bold text-brand-teal group-hover:text-white/90 inline-flex items-center gap-1 transition-colors duration-300">
                  Detailed Scope &amp; Processes <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS / WORKFLOW SECTION */}
      <section className="py-24 bg-white" id="home-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2.5px] bg-brand-teal rounded-sm" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal">
                Our Workflow
              </span>
              <span className="w-6 h-[2.5px] bg-brand-teal rounded-sm" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
              Solutions from Start to Finish
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Our structured process ensures seamless quality, compliance, and perfect translation from initial discussions to the final builder permit draft packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Horizontal timeline bar for desktop */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gray-200 z-0" />

            {[
              { num: '01', title: 'Consultation', desc: 'Understanding client vision, zoning, FSI rules, and layout feasibility benchmarks.' },
              { num: '02', title: 'Drafting CAD', desc: '2D mapping, scaled structural detailing outlines, and dimension settings.' },
              { num: '03', title: 'calculations', desc: 'Load evaluation, single-line diagrams, and architectural checks.' },
              { num: '04', title: '3D modeling', desc: 'Photorealistic render setups, material finishes mapping, and lighting flyovers.' },
              { num: '05', title: 'Permits Package', desc: 'Draft sets assembly, code documentation reports, and utility sign-off packs.' }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-teal flex items-center justify-center text-xl font-extrabold text-brand-teal shadow-md hover:bg-brand-teal hover:text-white transition-colors duration-300">
                  {step.num}
                </div>
                <h4 className="font-extrabold text-sm uppercase text-brand-navy tracking-wide">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS SECTION */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-150" id="home-projects-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2.5px] bg-brand-teal rounded-sm" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal">
                  Our Accomplishments
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
                Featured Work &amp; Blueprints
              </h2>
              <p className="text-sm text-gray-500 max-w-lg">
                Explore architectural and electrical drawings delivered with utmost precision to satisfy code requirements and builders.
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedProjectId(null);
                setActivePage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3 rounded-lg bg-brand-navy text-white text-xs font-bold hover:bg-brand-navy-dark transition-all duration-200 cursor-pointer self-start md:self-auto"
              id="projects-view-all"
            >
              Browse All Projects &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JPS_PROJECTS.slice(0, 3).map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                id={`home-project-card-${project.id}`}
              >
                {/* Visual Thumbnail */}
                <div className={`h-48 bg-gradient-to-br ${project.imageBg} relative p-6 flex flex-col justify-between text-white`}>
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                  <span className="self-end px-3 py-1 bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase rounded-full">
                    {project.category}
                  </span>
                  <div className="relative z-10 space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#7ee8f0] block">
                      Year: 20{project.year}
                    </span>
                    <span className="text-xs text-slate-200 flex items-center gap-1">
                      <Compass className="w-3 h-3 text-brand-teal shrink-0" /> {project.location}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="border-t border-gray-100 pt-4 flex flex-wrap gap-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="px-2 py-0.5 bg-gray-100 text-[10px] font-bold text-gray-600 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DYNAMIC TESTIMONIALS SECTION */}
      <section className="py-24 bg-brand-teal-light text-brand-navy-dark" id="home-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left label column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2.5px] bg-brand-teal rounded-sm" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal">
                  Client Feedback
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy leading-tight">
                Read Reviews from Project Stakeholders
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Accuracy, transparency, and architectural elegance matter. See how JPS Sthapatya satisfies property owners, solar companies, and developers alike.
              </p>
              <button
                onClick={() => setActivePage('contact')}
                className="px-5 py-3 rounded-lg border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-bold text-xs transition-colors duration-200 cursor-pointer shadow-sm"
              >
                Send Us Your Experience
              </button>
            </div>

            {/* Right slider column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative min-h-[220px] bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-brand-teal-light/50">
                <div className="absolute top-4 right-6 text-6xl text-brand-teal/10 font-serif select-none pointer-events-none">
                  &ldquo;
                </div>

                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed">
                    &ldquo;{JPS_TESTIMONIALS[activeTestimonial].quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/15 text-brand-teal font-extrabold text-base flex items-center justify-center">
                      {JPS_TESTIMONIALS[activeTestimonial].author[0]}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-brand-navy-dark text-sm leading-none">
                        {JPS_TESTIMONIALS[activeTestimonial].author}
                      </h4>
                      <p className="text-xs text-brand-teal mt-1 font-semibold">
                        {JPS_TESTIMONIALS[activeTestimonial].role} &bull; <span className="text-gray-500">{JPS_TESTIMONIALS[activeTestimonial].organization}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots Controls */}
              <div className="flex justify-center lg:justify-start gap-2 px-2">
                {JPS_TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeTestimonial === index ? 'w-8 bg-brand-teal' : 'w-2.5 bg-brand-teal/30 hover:bg-brand-teal/60'
                    }`}
                    aria-label={`Show review ${index + 1}`}
                    id={`testimonial-dot-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGH-IMPACT COLLABORATIVE CTA */}
      <section className="bg-brand-navy-dark text-white py-24 relative overflow-hidden" id="home-cta">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(26,155,171,0.15),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <Layers className="w-12 h-12 text-brand-teal mx-auto animate-bounce" />
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Let&rsquo;s Build Something <span className="text-brand-teal">Exceptional Together.</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
              From early drafted layouts to structural safety models and solar permits, our engineering divisions get your project done properly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActivePage('contact')}
              className="px-8 py-3.5 rounded-lg bg-brand-teal text-white font-bold text-sm shadow-md hover:bg-brand-teal-dark active:scale-95 transition-all duration-200 cursor-pointer"
              id="cta-contact-btn"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => setActivePage('services')}
              className="px-8 py-3.5 rounded-lg border-2 border-white/20 text-white font-bold text-sm hover:border-white active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Learn More &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
