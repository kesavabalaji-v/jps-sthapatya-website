/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { JPS_PROJECTS } from '../data';
import { ProjectItem } from '../types';
import { Filter, Calendar, MapPin, CheckSquare, X, ArrowLeft, Layers, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsProps {
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
}

export default function Projects({ selectedProjectId, setSelectedProjectId }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Residential' | 'Commercial' | 'Industrial' | 'Solar'>('All');
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  // Sync if pre-selected from external click
  useEffect(() => {
    if (selectedProjectId) {
      const match = JPS_PROJECTS.find((p) => p.id === selectedProjectId);
      if (match) {
        setModalProject(match);
      }
    }
  }, [selectedProjectId]);

  const handleCloseModal = () => {
    setModalProject(null);
    setSelectedProjectId(null);
  };

  const filteredProjects = activeCategory === 'All'
    ? JPS_PROJECTS
    : JPS_PROJECTS.filter((p) => p.category === activeCategory);

  const categories: ('All' | 'Residential' | 'Commercial' | 'Industrial' | 'Solar')[] = [
    'All',
    'Residential',
    'Commercial',
    'Industrial',
    'Solar',
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Portfolio Header */}
      <section className="bg-brand-navy-dark text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,155,171,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-xs font-bold uppercase tracking-widest text-[#7ee8f0]">
            Our Gallery &amp; Blueprints
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-brand-teal">Projects</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            A premium portfolio covering residential villas, concrete commercial cores, solar permits, and logistic hubs drafted under code standards.
          </p>
        </div>
      </section>

      {/* Categories Filter Tools */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 px-4 sm:px-6 sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
            <Filter className="w-4 h-4 text-brand-teal" />
            <span>Filter Blueprints:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-extrabold uppercase rounded-lg tracking-wider border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-teal text-white border-brand-teal shadow-md scale-102'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
                }`}
                id={`filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Display */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setModalProject(project)}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl active:scale-98 transition-all duration-300 cursor-pointer"
                id={`project-card-${project.id}`}
              >
                {/* Visual Header */}
                <div className={`h-52 bg-gradient-to-br ${project.imageBg} relative p-6 flex flex-col justify-between text-white`}>
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                  <span className="self-end px-3 py-1 bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase rounded-full">
                    {project.category}
                  </span>
                  <div className="relative z-10 space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#7ee8f0] block">
                      Year: 20{project.year}
                    </span>
                    <span className="text-xs text-slate-100 flex items-center gap-1">
                      <Compass className="w-3 h-3 text-brand-teal" /> {project.location}
                    </span>
                  </div>
                </div>

                {/* Body details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="border-t border-gray-150 pt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-teal hover:underline flex items-center gap-1">
                      View Drawing Specifications &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Expanded Modal Layer (Double layered check to avoid issues with standard popup restrictions inside iframe) */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-md"
            aria-modal="true"
            role="dialog"
            id="project-detail-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Cover Banner */}
              <div className={`h-64 bg-gradient-to-br ${modalProject.imageBg} relative p-8 flex flex-col justify-between text-white`}>
                <button
                  onClick={handleCloseModal}
                  className="self-end w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all cursor-pointer"
                  id="close-modal-btn"
                  title="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-[10px] font-extrabold uppercase rounded-full tracking-wider">
                    {modalProject.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {modalProject.title}
                  </h2>
                </div>
              </div>

              {/* Core Sheet Info */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-sm text-gray-600">
                {/* Main Specs column */}
                <div className="md:col-span-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-brand-navy text-md uppercase tracking-wider">
                      Executive Summary &amp; Scope
                    </h3>
                    <p className="leading-relaxed font-light text-gray-700">
                      {modalProject.description}
                    </p>
                  </div>

                  {/* Challenge & Solution Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-xl bg-red-50/50 border border-red-100 space-y-2">
                      <h4 className="font-extrabold text-red-800 text-xs uppercase tracking-wider">
                        The Technical Challenge
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {modalProject.challenge}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-brand-teal-light/40 border border-brand-teal-light space-y-2">
                      <h4 className="font-extrabold text-brand-teal-dark text-xs uppercase tracking-wider">
                        JPS Sthapatya Solution
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {modalProject.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metadata Column */}
                <div className="md:col-span-4 bg-gray-50 rounded-xl p-6 border border-gray-150 space-y-6">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#111]">
                    Blueprint Details
                  </h4>

                  <div className="space-y-4 text-xs font-semibold">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-brand-teal" />
                      <div>
                        <div className="text-gray-400 font-extrabold uppercase text-[9px] leading-none mb-0.5">Location</div>
                        <div className="text-gray-800">{modalProject.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-brand-teal" />
                      <div>
                        <div className="text-gray-400 font-extrabold uppercase text-[9px] leading-none mb-0.5">Year Completed</div>
                        <div className="text-gray-800">20{modalProject.year}</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200/60 pt-4 space-y-2">
                    <h5 className="text-[10px] font-extrabold text-[#333] uppercase tracking-wider">
                      Calculations &amp; Assets Included:
                    </h5>
                    <ul className="space-y-2">
                      {modalProject.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckSquare className="w-4 h-4 text-brand-teal shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer action */}
              <div className="border-t border-gray-150 px-8 py-5 bg-gray-50 flex justify-end gap-3 rounded-b-2xl">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-xs font-bold text-gray-600 hover:bg-white transition-colors cursor-pointer"
                >
                  Return to Portfolios
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
