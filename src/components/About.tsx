/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Leaf, Heart, Scale, Users, Award, Shield, Milestone } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [activeEsgTab, setActiveEsgTab] = useState<'sustainability' | 'social' | 'governance' | 'environmental'>('sustainability');

  const esgContent = {
    sustainability: {
      icon: <Leaf className="w-8 h-8 text-brand-teal" />,
      title: 'Our Sustainability Mission',
      tagline: 'Future-focused design with sustainable planning.',
      content: 'JPS Sthapatya is committed to creating sustainable, practical, and future-focused design solutions through responsible planning, efficient engineering, and environmentally conscious practices. We continuously work to improve the quality of our services while contributing positively to the communities and industries we serve. Every roof layout, solar panel wiring path, and structural column dimension is carefully optimized to conserve material and space.'
    },
    social: {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'Social & Cultural Responsibility',
      tagline: 'Encouraging collaborative growth and teamwork.',
      content: 'We believe in maintaining a professional, collaborative, and growth-oriented work culture. Our approach is built on teamwork, transparency, creativity, and long-term relationships with clients, partners, and team members while encouraging innovation and equal opportunities in every project we undertake. We actively support remote talent, mentorship programs for junior draftsmen, and equitable workspace designs.'
    },
    governance: {
      icon: <Scale className="w-8 h-8 text-indigo-400" />,
      title: 'Governance & Integrity',
      tagline: 'Focusing on accountability and reliable management.',
      content: 'At JPS Sthapatya, we focus on integrity, accountability, and professional excellence in all areas of our work. We maintain clear communication, reliable project management, and client-focused practices to ensure quality results, timely delivery, and strong professional relationships. Our billing, contracts, and safety certifications align with the highest municipal standards.'
    },
    environmental: {
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      title: 'Environmental Design Approach',
      tagline: 'Practical solutions for an energy-efficient world.',
      content: 'Environmental responsibility plays an important role in our planning and design approach. Through efficient architectural planning, optimized structural solutions, and solar permit design services, we aim to support energy-efficient and sustainable development for modern residential and commercial projects. This translates to material efficiency on trusses and smarter roof solar layouts to decrease fossil-fuel dependency.'
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* About Page Hero */}
      <section className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-teal/90 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 bg-brand-teal/20 border border-brand-teal/30 rounded-full text-xs font-bold leading-none text-[#7ee8f0] uppercase tracking-widest"
          >
            Since 2024
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            Building a Better Future, <span className="text-brand-teal">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            JPS Sthapatya is a full-service collaborative drafting, architecture, plan approval support, and structural calculations house.
          </motion.p>
        </div>
      </section>

      {/* 2. OUR COMPANY STORY SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="company-story">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2.5px] bg-brand-teal rounded-sm" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal">
                Our Roots
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
              A Complete Solution Under One Roof.
            </h2>
            <div className="p-6 rounded-xl bg-gray-50 border-l-4 border-brand-teal space-y-3">
              <blockquote className="text-sm italic text-gray-700 leading-relaxed">
                &ldquo;We started in 2024 with a vision to provide complete architectural and engineering solutions under one roof. Over time, we have expanded our expertise to better serve our clients with cost-effective and modern design solutions.&rdquo;
              </blockquote>
              <cite className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider not-italic">
                &mdash; JPS Board of Directors
              </cite>
            </div>
          </div>

          {/* Right Block Detail Texts (Mapping User Prompts) */}
          <div className="lg:col-span-7 space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
            <p>
              We are a rapidly expanding design and engineering house that takes deep, sincere pride in delivering practical, innovative, and high-quality solutions for our clients. Our multi-disciplinary work is driven by strict professionalism, spatial creativity, calculation accuracy, and a total commitment to excellence in every project we undertake.
            </p>
            <p>
              Over time, our team has integrated deep core divisions to cover architectural planning, permit drafting, RCC structural detailing, interior concepts, realistic 3D renderings, and solar permit drawings. This comprehensive structure ensures that clients avoid calling multiple separate vendors, saving budget and coordination overheads while keeping plans unified.
            </p>
            <p>
              Through optimized drafting routines and modern digital workflows (BIM, specialized CAD setups), we fast-track approvals and empower construction crews to erect structures exactly as drawn.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS FROM START TO FINISH */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-200 px-4 sm:px-6 lg:px-8" id="solutions-start-finish">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Context Paragraphs */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2.5px] bg-brand-teal rounded-sm" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal">
                  End-To-End Execution
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
                Solutions from Start to Finish
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                JPS Sthapatya delivers complete architectural and engineering solutions from concept development to final execution. In the early stages of a project, we assist with planning, drafting, layout development, and design consultation. During the design phase, we provide architectural drawings, structural detailing, interior concepts, 3D visualization, and solar permit design services for residential, commercial, and industrial projects.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                For ongoing and existing projects, we support clients with design modifications, renovation planning, structural assessments, and updated technical drawings. Our team focuses on creating practical, efficient, and cost-effective solutions that meet both functional and aesthetic requirements while maintaining quality and accuracy in every detail.
              </p>
              <p className="text-sm text-gray-500 italic">
                Beyond technical design, we work closely with clients to understand their vision and deliver customized solutions that improve usability, appearance, and overall project value. Our approach combines creativity, engineering expertise, and modern design practices to ensure reliable results from start to finish.
              </p>
            </div>

            {/* Visual Bento Cards representing stages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-150 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500">
                  <Milestone className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-brand-navy text-sm uppercase tracking-wide">
                  Early Stage Planning
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Support with spatial planning, FSI adjustments, drafting, layouts, and initial design feasibility studies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-150 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-brand-navy text-sm uppercase tracking-wide">
                  Active Design Phase
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Calculations, detailed concrete/rebar drawings, photovoltaic wire single-line diagram permit packs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-150 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-brand-teal-light flex items-center justify-center text-brand-teal">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-brand-navy text-sm uppercase tracking-wide">
                  Assessments &amp; Renovations
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Structural integrity assessments, partition replacement calculations, and historic facade updates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-150 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-400">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-brand-navy text-sm uppercase tracking-wide">
                  Owner Consultation
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Close client partnership to maximize overall asset value, layout usability, and project durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ESG HORIZONTAL TABS SELECTOR (Sustainability & Responsibility) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="esg-pillars">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2.5px] bg-brand-teal rounded-sm" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal">
              Responsibility Framework
            </span>
            <span className="w-6 h-[2.5px] bg-brand-teal rounded-sm" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
            Commitment to Responsibility (ESG)
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Review JPS Sthapatya’s environmental approach, collaborative social culture, and reliable governance standards.
          </p>
        </div>

        {/* Dynamic switcher tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Switch buttons (vertical layout on lg) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-2">
            {(Object.keys(esgContent) as Array<keyof typeof esgContent>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveEsgTab(key)}
                className={`flex-1 lg:flex-none text-left px-5 py-4 rounded-lg font-bold text-sm tracking-wide transition-all border-l-4 ${
                  activeEsgTab === key
                    ? 'bg-brand-teal/10 text-brand-teal border-brand-teal font-extrabold shadow-sm'
                    : 'bg-gray-50 text-gray-600 border-transparent hover:bg-gray-100 hover:text-brand-navy'
                }`}
                id={`esg-tab-${key}`}
              >
                {key === 'sustainability' && 'Sustainability'}
                {key === 'social' && 'Social & Culture'}
                {key === 'governance' && 'Governance'}
                {key === 'environmental' && 'Environmental Approach'}
              </button>
            ))}
          </div>

          {/* Tab content panel */}
          <div className="lg:col-span-8 bg-brand-teal-light/25 border border-brand-teal-light rounded-2xl p-8 sm:p-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                {esgContent[activeEsgTab].icon}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-brand-navy">
                  {esgContent[activeEsgTab].title}
                </h3>
                <p className="text-xs text-brand-teal font-bold uppercase tracking-wider mt-1">
                  {esgContent[activeEsgTab].tagline}
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light">
              {esgContent[activeEsgTab].content}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
