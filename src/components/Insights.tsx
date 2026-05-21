/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { JPS_INSIGHTS } from '../data';
import { InsightArticle } from '../types';
import { BookOpen, Calendar, Clock, User, X, Flame } from 'lucide-react';

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  const handleArticleClick = (article: InsightArticle) => {
    setSelectedArticle(article);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50/50">
      {/* Insights Hero Header */}
      <section className="bg-brand-navy-dark text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,155,171,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-xs font-bold uppercase tracking-widest text-[#7ee8f0]">
            Stay Informed
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Sthapatya <span className="text-brand-teal">News &amp; Insights</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Professional updates on energy-efficient planning, structural safety regulations, and building code compliance vectors.
          </p>
        </div>
      </section>

      {/* Main Insights Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JPS_INSIGHTS.map((article) => (
            <div
              key={article.id}
              onClick={() => handleArticleClick(article)}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 active:scale-98 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              id={`article-card-${article.id}`}
            >
              <div className="p-6 sm:p-8 space-y-4">
                {/* Visual Category Badge */}
                <div className="flex items-center justify-between text-xs font-bold uppercase">
                  <span className={`px-2.5 py-1 rounded ${
                    article.category === 'News' ? 'bg-indigo-50 text-indigo-600' : 'bg-brand-teal/10 text-brand-teal'
                  }`}>
                    {article.category}
                  </span>
                  <span className="text-gray-400 font-mono font-normal">
                    {article.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-teal line-clamp-3 leading-snug transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed font-light">
                  {article.summary}
                </p>
              </div>

              {/* Card Footer Detail */}
              <div className="px-6 sm:px-8 py-4 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-teal" /> {article.readTime}
                </span>
                <span className="font-extrabold text-brand-teal shrink-0 hover:underline">
                  Read Article &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slide-over Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-end p-0 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          id="article-read-modal"
        >
          {/* Backdrop Closer Click */}
          <div className="absolute inset-0 z-0 cursor-pointer" onClick={() => setSelectedArticle(null)} />

          <div className="relative z-10 w-full max-w-3xl h-full bg-white shadow-2xl overflow-y-auto flex flex-col">
            {/* Header Controls */}
            <div className="sticky top-0 bg-white border-b border-gray-150 px-6 sm:px-10 py-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                <BookOpen className="w-4 h-4 text-brand-teal" />
                <span>Reading Article</span>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all cursor-pointer"
                title="Return to list"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Sheets */}
            <div className="px-6 sm:px-10 py-12 space-y-8 flex-1">
              {/* Category, Date & Read Time */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs font-bold">
                  <span className="px-2.5 py-1 bg-brand-teal/10 text-brand-teal rounded">
                    {selectedArticle.category}
                  </span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {selectedArticle.date}
                  </span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>

              {/* Horizontal line divider */}
              <div className="w-full h-[1px] bg-gray-200" />

              {/* Core Text Body */}
              <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                {selectedArticle.content.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Author Footer Badge */}
              <div className="pt-8 border-t border-gray-150 flex items-center gap-3 text-xs">
                <div className="w-9 h-9 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold">
                  JS
                </div>
                <div>
                  <div className="text-brand-navy font-bold flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-brand-teal" /> Drafted by: {selectedArticle.author}
                  </div>
                  <div className="text-gray-400 mt-0.5">JPS Engineering Division</div>
                </div>
              </div>
            </div>

            {/* Read Complete Close bar */}
            <div className="bg-gray-50 border-t border-gray-150 px-6 sm:px-10 py-5 flex items-center justify-between text-xs text-gray-500">
              <span>Thank you for reading the Sthapatya update journal.</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-brand-navy text-white hover:bg-brand-navy-dark rounded-lg font-bold cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
