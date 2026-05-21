/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { JPS_CAREERS } from '../data';
import { CareerOpening } from '../types';
import { Briefcase, MapPin, Clock, Star, Send, ChevronDown, CheckCircle } from 'lucide-react';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  // Application fields
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [applicantMessage, setApplicantMessage] = useState('');
  const [applicationSuccess, setApplicationSuccess] = useState(false);

  const toggleExpandJob = (id: string) => {
    if (expandedJobId === id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(id);
    }
  };

  const handleApplyClick = (job: CareerOpening) => {
    setSelectedJob(job);
    setApplicationSuccess(false);
  };

  const submitApplication = (e: FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) {
      alert('Please fill in applicant Name, Email, and Phone number parameters.');
      return;
    }

    setApplicationSuccess(true);
    // Clear fields
    setTimeout(() => {
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setApplicantPortfolio('');
      setApplicantMessage('');
    }, 500);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50/50">
      {/* Careers Hero */}
      <section className="bg-brand-navy-dark text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,155,171,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-xs font-bold uppercase tracking-widest text-[#7ee8f0]">
            Work with us
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Build Your <span className="text-brand-teal">Career</span> With JPS
          </h1>
          <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Be part of a thriving, collaborative team committed to engineering precision, spatial design excellence, and zero-carbon solar permit packages.
          </p>
        </div>
      </section>

      {/* Culture overview */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 text-center lg:text-left space-y-3">
            <h3 className="text-2xl font-extrabold text-brand-navy">
              Collaborative Work Culture
            </h3>
            <p className="text-xs text-brand-teal font-extrabold uppercase tracking-widest">
              Teamwork. Growth &amp; Transparency.
            </p>
          </div>
          <div className="lg:col-span-8 text-sm text-gray-500 leading-relaxed font-light">
            <p className="mb-4">
              Our approach is built on teamwork, transparency, creativity, and long-term relationships with stakeholders while encouraging equal opportunities on every drafting or detailing set we design.
            </p>
            <p>
              We prioritize continuous mentorship, code literacy sessions, and standard work schedules to ensure our team operates in an optimized, high-performance, and healthy frame. Let&rsquo;s craft your blueprint with us.
            </p>
          </div>
        </div>
      </section>

      {/* Core Open Openings list */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-24" id="job-opportunities">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy text-center mb-12">
          Current Job Opportunities ({JPS_CAREERS.length})
        </h2>

        <div className="space-y-4">
          {JPS_CAREERS.map((job) => {
            const isExpanded = expandedJobId === job.id;

            return (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:border-brand-teal/50 transition-colors duration-200"
                id={`job-row-${job.id}`}
              >
                {/* Header preview row */}
                <div
                  onClick={() => toggleExpandJob(job.id)}
                  className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer select-none hover:bg-gray-50/50"
                >
                  <div className="space-y-1 bg-white">
                    <h3 className="text-lg font-extrabold text-brand-navy">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-400 font-bold">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-brand-teal" /> {job.department}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-teal" /> {job.location}
                      </span>
                      <span>&bull;</span>
                      <span className="bg-brand-teal-light text-brand-teal px-2 py-0.5 rounded text-[10px] uppercase font-extrabold leading-none">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 bg-transparent">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApplyClick(job);
                      }}
                      className="px-4 py-2 bg-brand-teal font-extrabold text-white text-xs rounded-lg hover:bg-brand-teal-dark transition-all cursor-pointer shadow-sm active:scale-95"
                    >
                      Apply Now
                    </button>
                    <div className="p-1 rounded bg-gray-50 text-gray-400">
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>

                {/* Expanded description detail panel */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-sm text-gray-600 space-y-4 bg-gray-50/20">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Required Experience</span>
                      <p className="font-semibold text-brand-navy text-xs">{job.experience}</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Operational Description</span>
                      <p className="leading-relaxed font-light text-xs text-gray-600">{job.description}</p>
                    </div>

                    <div className="flex items-center gap-2 pt-2 text-xs text-brand-teal font-bold">
                      <Star className="w-4 h-4 text-brand-teal fill-brand-teal" />
                      <span>Key Skills: CAD Proficiency, structural codes comprehension, or solar wiring schematic maps.</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Apply form Slideover Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          id="careers-application-dialog"
        >
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedJob(null)} />

          <div className="relative z-10 bg-white rounded-2xl w-full max-w-xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col p-8 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-extrabold text-brand-teal tracking-wider mb-1 block">New Application</span>
                <h3 className="text-xl font-extrabold text-brand-navy">
                  Applying for &ldquo;{selectedJob.title}&rdquo;
                </h3>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition"
              >
                Close &times;
              </button>
            </div>

            {applicationSuccess ? (
              <div className="py-8 text-center space-y-4" id="application-success-view">
                <CheckCircle className="w-16 h-16 text-brand-teal mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-brand-navy">Application Received!</h4>
                <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
                  Thank you for submitting your application. JPS hiring managers will inspect your CAD or electrical layouts catalog and get in touch via email within 2 business days.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-5 py-2.5 bg-brand-navy text-white hover:bg-brand-navy-dark rounded-lg font-bold text-xs"
                  >
                    Close Application Panel
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submitApplication} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Deepak Verma"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-brand-teal outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="deepak@gmail.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-brand-teal outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+91 9845X XXXXX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-brand-teal outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 block">Portfolio/CAD Link (Optional)</label>
                  <input
                    type="url"
                    value={applicantPortfolio}
                    onChange={(e) => setApplicantPortfolio(e.target.value)}
                    placeholder="https://behance.net/yourname or github"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-brand-teal outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 block">Brief Cover Letter / Experience Summary</label>
                  <textarea
                    rows={3}
                    value={applicantMessage}
                    onChange={(e) => setApplicantMessage(e.target.value)}
                    placeholder="Tell us about your proficiency with AutoCAD, structural detailing laws, or solar permits design sets..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-brand-teal outline-none resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-gray-150 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2.5 border border-gray-200 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-brand-teal hover:bg-brand-teal-dark text-white rounded-lg text-xs font-bold inline-flex items-center gap-1.5 shadow-sm active:scale-95"
                    id="submit-applicant-profile"
                  >
                    Submit Profile <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
