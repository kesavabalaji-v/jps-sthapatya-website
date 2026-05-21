/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageID } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Insights from './components/Insights';
import Careers from './components/Careers';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState<PageID>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-brand-off-white text-gray-700 flex flex-col justify-between selection:bg-brand-teal/30 selection:text-brand-navy-dark">
      {/* Navbar Container */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Pages Content with Smooth Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {activePage === 'home' && (
              <Home
                setActivePage={setActivePage}
                setSelectedServiceId={setSelectedServiceId}
                setSelectedProjectId={setSelectedProjectId}
              />
            )}
            {activePage === 'about' && <About />}
            {activePage === 'services' && (
              <Services
                selectedServiceId={selectedServiceId}
                setSelectedServiceId={setSelectedServiceId}
                setActivePage={setActivePage}
              />
            )}
            {activePage === 'projects' && (
              <Projects
                selectedProjectId={selectedProjectId}
                setSelectedProjectId={setSelectedProjectId}
              />
            )}
            {activePage === 'insights' && <Insights />}
            {activePage === 'careers' && <Careers />}
            {activePage === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Container */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

