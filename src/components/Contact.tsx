/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle, Smartphone } from 'lucide-react';

export default function Contact() {
  // Inquiry states
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquirySelect, setInquirySelect] = useState('Architecture & Planning');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const handleSubmitInquiry = (e: FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryMessage) {
      alert('Please fill in high-priority fields: Full Name, Email, and Message.');
      return;
    }

    setInquirySuccess(true);
    // Clear state
    setTimeout(() => {
      setInquiryName('');
      setInquiryEmail('');
      setInquiryCompany('');
      setInquiryMessage('');
    }, 450);
  };

  const faqs = [
    {
      q: 'Do you offer remote drawing approvals and solar permit design?',
      a: 'Yes. We support architectural drafting and solar permit set configurations for projects globally. We utilize localized wind values, snow limits, and AHJ requirements to coordinate compliant plan packages recursively.'
    },
    {
      q: 'What are your standard timescales to output 2D drafting sets?',
      a: 'For average residential floorplans or PV solar layout assemblies, standard turnaround timelines are 4 to 7 business days, depending on detail density. Priority turnaround is accessible under custom contracts.'
    },
    {
      q: 'Can you assess and modify structural frameworks for older duplexes?',
      a: 'Absolutely. We calculate beam properties and steel framing supports needed to safely break load-bearing brick structures. We output complete CAD shop drawings for construction crews.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Contact Hero */}
      <section className="bg-brand-navy-dark text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,155,171,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-xs font-bold uppercase tracking-widest text-[#7ee8f0]">
            Let&rsquo;s Connect
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Get In <span className="text-brand-teal">Touch</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Ready to initiate your custom drafting, structural assessment, or solar permit package? Contact JPS Sthapatya channels today.
          </p>
        </div>
      </section>

      {/* Main Form + Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Block indicators & Regional CAD map */}
          <div className="lg:col-span-5 space-y-8 bg-white">
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-brand-navy">
                Office Information
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                Our main drafting and modeling hub is positioned in Nagpur, India (the geographical core node of Central India), which enables rapid, nationwide support.
              </p>
            </div>

            {/* Micro Details Stack */}
            <div className="space-y-6 text-sm text-gray-600">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-brand-teal-light text-brand-teal shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-extrabold text-brand-navy text-xs uppercase tracking-wider mb-1">
                    Headquarters
                  </h5>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Sthapatya Design Chambers, Suite 402<br />
                    Amravati Road, Nagpur, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-brand-teal-light text-brand-teal shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-extrabold text-brand-navy text-xs uppercase tracking-wider mb-1">
                    Contact Phone
                  </h5>
                  <a href="tel:+917124022024" className="text-xs text-brand-teal font-extrabold hover:underline">
                    +91 (712) 402-2024
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-brand-teal-light text-brand-teal shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-extrabold text-brand-navy text-xs uppercase tracking-wider mb-1">
                    Email Inquiry
                  </h5>
                  <a href="mailto:info@jps-sthapatya.com" className="text-xs text-brand-teal font-extrabold hover:underline">
                    info@jps-sthapatya.com
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action indicator */}
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-100 space-y-4">
              <div className="flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-emerald-500" />
                <h4 className="font-bold text-sm text-emerald-800 leading-none">Instant WhatsApp Directory</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Need to chat drafting changes or ask solar PV layout metrics immediately? Contact our technical director directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/917124022024?text=Hi%20JPS%20Sthapatya,%20I'm%20interested%20in%20architectural/structural%20services."
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 font-extrabold text-white text-xs rounded-lg transition"
                id="whatsapp-chat-link"
              >
                Chat Direct &rarr;
              </a>
            </div>

            {/* Geographical Vector Map (Central India Plot) */}
            <div className="p-6 rounded-xl border border-gray-150 space-y-4">
              <div className="text-xs font-mono text-gray-400 flex items-center justify-between">
                <span>COORDS: 21.14° N, 79.08° E</span>
                <span className="text-brand-teal font-bold uppercase tracking-wider text-[10px]">Central India Node</span>
              </div>
              {/* Custom SVG coordinates map */}
              <div className="h-44 bg-gray-50 rounded-lg flex items-center justify-center relative overlow-hidden border border-gray-150">
                <svg viewBox="0 0 400 200" className="w-full h-full text-brand-navy-dark" stroke="currentColor" fill="none">
                  {/* Map Grid */}
                  <line x1="50" y1="0" x2="50" y2="200" strokeDasharray="3,3" strokeWidth="0.5" className="stroke-gray-300" />
                  <line x1="150" y1="0" x2="150" y2="200" strokeDasharray="3,3" strokeWidth="0.5" className="stroke-gray-300" />
                  <line x1="250" y1="0" x2="250" y2="200" strokeDasharray="3,3" strokeWidth="0.5" className="stroke-gray-300" />
                  <line x1="350" y1="0" x2="350" y2="200" strokeDasharray="3,3" strokeWidth="0.5" className="stroke-gray-300" />
                  <line x1="0" y1="50" x2="400" y2="50" strokeDasharray="3,3" strokeWidth="0.5" className="stroke-gray-300" />
                  <line x1="0" y1="120" x2="400" y2="120" strokeDasharray="3,3" strokeWidth="0.5" className="stroke-gray-300" />

                  {/* Representative Shape of Central India Boundaries (Abstract) */}
                  <path d="M 60 40 L 140 30 Q 180 60, 200 100 T 280 140 Q 320 180, 290 190 T 150 160 L 80 140 Z" strokeWidth="1" className="stroke-brand-teal/40 fill-brand-teal/5" />

                  {/* Nagpur Node Dot */}
                  <circle cx="200" cy="100" r="16" className="fill-brand-teal/20 stroke-brand-teal stroke-[0.5]" />
                  <circle cx="200" cy="100" r="5" className="fill-brand-teal animate-ping" />
                  <circle cx="200" cy="100" r="3" className="fill-brand-teal" />

                  <text x="215" y="104" className="fill-brand-navy font-bold text-[11px] uppercase tracking-wide">Nagpur Hub</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Block Inquiries Input Form Dashboard */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 shadow-lg p-8 sm:p-12 relative overflow-hidden">
            {inquirySuccess ? (
              <div className="py-16 text-center space-y-6" id="inquiry-success-dashboard">
                <CheckCircle className="w-16 h-16 text-brand-teal mx-auto animate-bounce" />
                <h4 className="text-2xl font-extrabold text-brand-navy">Message Sent Successfully!</h4>
                <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting JPS Sthapatya. We have stored your spatial requirements and will call/email you with feasibility estimations within 1 business day.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setInquirySuccess(false)}
                    className="px-5 py-3 rounded-lg bg-brand-navy hover:bg-brand-navy-dark font-bold text-xs text-white"
                  >
                    Send Another Question
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-brand-navy">
                    Send An Inquiry
                  </h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-none">
                    Responsive responses inside 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-brand-teal outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-brand-teal outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Company / Organization</label>
                    <input
                      type="text"
                      value={inquiryCompany}
                      onChange={(e) => setInquiryCompany(e.target.value)}
                      placeholder="Sthapatya Developers Inc."
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-brand-teal outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Primary Service of Interest</label>
                    <select
                      value={inquirySelect}
                      onChange={(e) => setInquirySelect(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-brand-teal outline-none cursor-pointer"
                    >
                      <option>Architecture &amp; Planning</option>
                      <option>Structural Engineering</option>
                      <option>Precision CAD Drafting</option>
                      <option>3D modeling &amp; rendering</option>
                      <option>PV Solar Permit packages</option>
                      <option>Interior Concept Design</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 block">Tell us about your project/drafting rules *</label>
                  <textarea
                    rows={4}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Provide details about structural safety calculations, PV modules array metrics, layout parameters or code guidelines..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-brand-teal outline-none resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-teal hover:bg-brand-teal-dark active:translate-y-0.5 text-white rounded-lg text-sm font-extrabold flex items-center justify-center gap-2 transition shadow-sm hover:shadow-md cursor-pointer"
                  id="contact-form-submit"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200 px-4 sm:px-6 lg:px-8" id="contact-faqs">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-extrabold text-brand-navy text-center mb-12 flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-brand-teal" /> Frequently Asked Questions
          </h3>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 space-y-3 shadow-sm">
                <h4 className="font-extrabold text-brand-navy text-sm sm:text-base">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
