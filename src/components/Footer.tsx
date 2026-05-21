/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageID } from '../types';
import { ArrowUp, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageID) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handlePageSelect = (pageId: PageID) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-dark text-white pt-16 pb-12 overflow-hidden border-t-4 border-brand-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handlePageSelect('home')}
            >
              <div className="w-10 h-10 rounded-lg bg-brand-teal flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                J
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight block">
                  JPS <span className="text-brand-teal">Sthapatya</span>
                </span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase block mt-0.5">
                  Architecture & Engineering
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Premium multi-disciplinary drafting, architecture, structural planning, and solar drawing permit set engineering house — delivering creative, safe, and code-compliant frameworks since 2024.
            </p>
            <div className="flex items-center gap-3 text-xs text-brand-teal font-semibold">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-brand-teal" />
                Founded in 2024
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-brand-teal" />
                100% Client-Focused
              </span>
            </div>
          </div>

          {/* Quick links to pages */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-teal">
              Our Pages
            </h4>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handlePageSelect('home')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                Home Portfolio
              </button>
              <button
                onClick={() => handlePageSelect('about')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                About JPS Sthapatya
              </button>
              <button
                onClick={() => handlePageSelect('services')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                Our Services & Scope
              </button>
              <button
                onClick={() => handlePageSelect('projects')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                Featured Engineering Projects
              </button>
              <button
                onClick={() => handlePageSelect('insights')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                Building News & Insights
              </button>
              <button
                onClick={() => handlePageSelect('careers')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                Careers at JPS
              </button>
            </div>
          </div>

          {/* Quick links to services */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-teal">
              Expert Solutions
            </h4>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handlePageSelect('services')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                Architecture & Spatial Planning
              </button>
              <button
                onClick={() => handlePageSelect('services')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                Structural Engineering
              </button>
              <button
                onClick={() => handlePageSelect('services')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                Interior Concepts
              </button>
              <button
                onClick={() => handlePageSelect('services')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                Precision 2D CAD Drafting
              </button>
              <button
                onClick={() => handlePageSelect('services')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                3D modeling & Visuals
              </button>
              <button
                onClick={() => handlePageSelect('services')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                PV Solar Permit sets
              </button>
            </div>
          </div>

          {/* Direct Address & Communications */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-teal">
              Contact Channels
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span>
                  JPS Sthapatya Headquarters<br />
                  Sthapatya Design Chambers, Suite 402<br />
                  Amravati Road, Nagpur, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <a href="tel:+91712402500" className="hover:text-white transition-colors">
                  +91 (712) 402-2024
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                <a href="mailto:info@jps-sthapatya.com" className="hover:text-white transition-colors">
                  info@jps-sthapatya.com
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => handlePageSelect('contact')}
                  className="px-4 py-2 border border-brand-teal/40 hover:border-brand-teal text-xs font-bold text-center rounded-md text-brand-teal hover:text-white hover:bg-brand-teal text-nowrap transition-all duration-200"
                >
                  Contact Office Directory &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} JPS Sthapatya. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <span>&bull;</span>
              <a href="#terms" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              <span>&bull;</span>
              <a href="#compliance" className="hover:text-gray-300 transition-colors">
                Local Building Codes Compliance
              </a>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 hover:border-brand-teal hover:bg-brand-teal hover:text-white transition-all duration-300 flex items-center justify-center text-gray-400 cursor-pointer hover:shadow-lg"
            title="Scroll to Top"
            id="footer-scroll-to-top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
