/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PageID } from '../types';

interface NavbarProps {
  activePage: PageID;
  setActivePage: (page: PageID) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageID) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageID; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'insights', label: 'Insights & Blog' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-md py-3'
          : 'bg-white/90 shadow-sm backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
            id="nav-logo-link"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center text-white font-extrabold text-xl shadow-sm group-hover:shadow transition-all duration-200">
              J
            </div>
            <div>
              <div className="text-xl font-extrabold text-brand-navy tracking-tight leading-none">
                JPS <span className="text-brand-teal">Sthapatya</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-1">
                Architecture & Engineering
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  activePage === link.id
                    ? 'text-brand-teal bg-brand-teal-light/40 border-b-2 border-brand-teal'
                    : 'text-gray-600 hover:text-brand-teal hover:bg-gray-50'
                }`}
                id={`nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Nav CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-teal text-white font-bold text-sm hover:bg-brand-teal-dark active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
              id="nav-cta-btn"
            >
              Get Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-navy hover:text-brand-teal hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
              id="mobile-menu-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out border-t-3 border-brand-teal ${
          mobileMenuOpen ? 'max-h-screen opacity-100 visible py-4 bg-white shadow-xl' : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
        id="mobile-nav-menu"
      >
        <div className="px-4 pt-2 pb-5 space-y-1 sm:px-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-bold tracking-wide transition-all border-l-4 ${
                activePage === link.id
                  ? 'text-brand-teal bg-brand-teal-light border-brand-teal'
                  : 'text-gray-600 border-transparent hover:text-brand-teal hover:bg-gray-50'
              }`}
              id={`mobile-nav-${link.id}`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-teal text-white font-bold text-md hover:bg-brand-teal-dark transition-colors"
              id="mobile-nav-cta"
            >
              Get Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
