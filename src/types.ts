/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageID = 'home' | 'about' | 'services' | 'projects' | 'insights' | 'careers' | 'contact';

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  process: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Solar';
  location: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  imageBg: string; // Gradient color description or vector
  features: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

export interface InsightArticle {
  id: string;
  category: 'Articles' | 'News' | 'Case Studies';
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  author: string;
}
