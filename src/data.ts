import { ServiceItem, ProjectItem, TestimonialItem, CareerOpening, InsightArticle } from './types';

export const JPS_SERVICES: ServiceItem[] = [
  {
    id: 'architecture-planning',
    icon: '🏛️',
    title: 'Architecture & Planning',
    shortDesc: 'Complete spatial layouts, zoning compliance, and conceptual blueprints tailored to modern design standards.',
    fullDesc: 'We assist with layout development, design consultation, and conceptual blueprints for residential, commercial, and industrial spaces. From early concept sketches down to final builder specifications, our designs balance aesthetics with structural performance.',
    features: [
      'Comprehensive zoning analysis and compliance checks',
      'Site planning, building masterplans, and block modeling',
      'Creative schematic designs with optimal flow and space efficiency',
      'Complete submission drawings for local developmental approvals'
    ],
    process: [
      'Initial Site Survey & Consultation',
      'Zoning and Feasibility Studies',
      'Conceptual Framing & Schematics',
      'Detail Planning Approval Packaging'
    ]
  },
  {
    id: 'structural-engineering',
    icon: '📐',
    title: 'Structural Engineering & Detailing',
    shortDesc: 'Rigorous calculation, foundation design, and structural detailing to ensure lifetime safety and reliability.',
    fullDesc: 'Our structural solutions focus on practicality, safety, and optimization. We specialize in foundation assessment, frame calculations, structural modifications, and detailing for concrete, steel, and timber systems.',
    features: [
      'Complete structural load detailing and structural calculations',
      'Foundation and retaining wall designs built for local subsoil systems',
      'Detailed framing plans for steel, timber, and reinforced concrete (RCC)',
      'Assessments and updates for existing buildings, renovations, and expansions'
    ],
    process: [
      'Geotech Review & Load Estimation',
      'Structural Analysis & Element Dimensions',
      'Detailed CAD Framing Drawings & Rebar detailing',
      'Quality Signs-offs & Structural Certification support'
    ]
  },
  {
    id: 'drafting',
    icon: '🏗️',
    title: 'Precision Drafting & Cad services',
    shortDesc: 'High-accuracy 2D shop drawings, construction documents, and layout updates under one roof.',
    fullDesc: 'We translate raw sketches, old blueprints, or design ideas into millimeter-accurate digital drafting sets. Our services include construction documentation, shop drawing details, and layout modifications.',
    features: [
      'Detailed architectural plans, sections, and elevation sheets',
      'Construction documentation packages (CD sets) for field use',
      'Shop drawings for cabinetry, facades, steel frameworks, and MEP services',
      'As-built drawings for older properties undergoing renovation'
    ],
    process: [
      'Raw Sketch or Scanned Document Intake',
      'CAD Translation, Layering, and Scaled Draft drafting',
      'Annotation & Detail Callouts Enrichment',
      'Multi-format Exports (DWG, PDF, BIM files)'
    ]
  },
  {
    id: '3d-modeling',
    icon: '🏢',
    title: '3D Modeling & Visualization',
    shortDesc: 'Stunning photo-realistic renderings and interior/exterior 3D walkthroughs that bring concepts to life.',
    fullDesc: 'Ensure absolute alignment on your designs before breaking ground. We build precise 3D digital models and render photo-realistic interior/exterior scenes, complete with custom finishes, textures, and lighting.',
    features: [
      'High-fidelity digital 3D architectural modeling (Revit, SketchUp models)',
      'Photo-realistic interior and exterior visual rendering and color studies',
      '3D spatial layouts for sales collaterals and project pitches',
      'Virtual walkthrough flyovers for comprehensive spatial comprehension'
    ],
    process: [
      'BIM/CAD Draft Import & Core 3D Extrusion',
      'Material Texturing, Lighting Setup, and Environmental styling',
      'High-Resolution Ray-Traced Rendering',
      'Animation Rendering & Client Feedback Adjustments'
    ]
  },
  {
    id: 'solar-permit',
    icon: '☀️',
    title: 'Solar Permit Design',
    shortDesc: 'Fast-track PV solar drawings, single-line electrical diagrams, and custom utility permit packages.',
    fullDesc: 'Accelerate your sustainable energy installations. We design full PV solar permit sets with accurate roof layouts, wiring paths, single-line diagrams, calculations, and local utility permit compliance documentation.',
    features: [
      'Professional roof mapping, panel placement layout, and shading analysis',
      'Accurate Three-Line & Single-Line Electrical Diagrams (SLDs)',
      'Structural evaluation for PV array load distribution on rafters',
      'Seamless compliance sets built for rapid AHJ/Utility permit reviews'
    ],
    process: [
      'Site Measurement & Rafter Span Analytics',
      'Electrical Calculations & Interconnection Plan',
      'Drafting full Site Plan, Electrical sheets, and Labels page',
      'Pre-submission Quality Check with local structural/electrical criteria'
    ]
  },
  {
    id: 'interior-design',
    icon: '🛋️',
    title: 'Interior Concepts & Design',
    shortDesc: 'Practical, aesthetic indoor space solutions combining custom styling with ergonomic layouts.',
    fullDesc: 'We transform raw indoor environments into balanced, brand-aligned, or comfort-focused interior concepts. Our services map ergonomics, modern furniture selections, material specifications, and lighting layouts.',
    features: [
      'Spatial planning, cabinetry detailing, and partition design',
      'Detailed mood boards detailing paint colors, floor textures, and lighting styles',
      'Lighting layouts, electrical coordinates, and RCP plans',
      'Complete furniture, fixtures, and equipment (FF&E) lists'
    ],
    process: [
      'Design Consultation & Brand/Mood Mapping',
      'Layout Planning & Ceiling Coordinates drafting',
      'Material Selection & Photorealistic Renderings',
      'FF&E Documentation for procurement convenience'
    ]
  }
];

export const JPS_PROJECTS: ProjectItem[] = [
  {
    id: 'mahindra-greenwood',
    title: 'Mahindra Greenwood Residences',
    category: 'Residential',
    location: 'Mumbai Suburbs',
    year: '24',
    description: 'Bespoke 3D visual masterplan and structural drafting of a modern sustainable residential complex.',
    challenge: 'Integrating solar array layouts and water recovery systems on uneven hilly terrain while keeping high-end luxury aesthetics intact.',
    solution: 'Engineered a stepped structural framing pattern. Modeled custom 3D visualizations showing the sun path to maximize both passive lighting and active solar absorption.',
    imageBg: 'from-brand-navy-dark to-brand-teal',
    features: ['Modern 3D spatial render', 'Step-Frame Structural Layout', 'Solar layout pre-plan']
  },
  {
    id: 'aura-tech-corp',
    title: 'Aura Tech Corporate Headquarters',
    category: 'Commercial',
    location: 'Bengaluru IT Corridor',
    year: '25',
    description: 'Comprehensive interior concepts, open-plan architectural drafting, and steel structural detailing for a 45,000 sq ft office building.',
    challenge: 'Minimizing central structural pillars to enable maximum layout adaptability for open-plan collaborative hotdesking.',
    solution: 'Designed an advanced post-tensioned beam framework and load-bearing perimeter trusses. Delivered complete shop drawings and MEP coordination layout maps.',
    imageBg: 'from-brand-navy to-gray-800',
    features: ['Post-tension load distribution', 'As-built drafting sets', 'High-end lighting coordination']
  },
  {
    id: 'industrial-warehousing',
    title: 'Ahmadabad Logistic Warehousing Hub',
    category: 'Industrial',
    location: 'Sardar Industrial Belt',
    year: '24',
    description: 'High-payload foundation detailing and light-gauge steel roof structure drafting for heavy-vehicle transit terminals.',
    challenge: 'Subsoil reports indicated high seasonal clay expansions, risking foundation settlement under massive material freight loads.',
    solution: 'Designed deep micro-piles combined with a thick raft foundation system. Completed all structural permit and structural detailing packages in record time.',
    imageBg: 'from-gray-900 to-brand-navy-dark',
    features: ['High-load micro-piling calculation', 'Standard-compliant steel truss detailing', 'Drainage optimization plans']
  },
  {
    id: 'koyna-solar-grid',
    title: 'Koyna Solar Farm Permitting',
    category: 'Solar',
    location: 'Maharashtra Foothills',
    year: '25',
    description: 'Full electrical and layout design permit packages for a 150kW grid-tied commercial rooftop installation.',
    challenge: 'Fast-tracking permit releases with strict municipal rules on cable routings and structural ballast ratings.',
    solution: 'Drafted professional three-line electrical schematic sheets, detailed load spread calcs, and configured wind-load structural ballast blocks.',
    imageBg: 'from-brand-teal to-brand-teal-dark',
    features: ['Utility permit compliance packet', 'Three-line wiring diagram', 'Wind-ballast load blueprint']
  },
  {
    id: 'vasant-vihar-remodel',
    title: 'Vasant Vihar duplex Remodeling',
    category: 'Residential',
    location: 'New Delhi',
    year: '24',
    description: 'Complete interior renovation plans, spatial drafting, and structural assessment reporting of a classic 1980s brick duplex.',
    challenge: 'Safely removing load-bearing partitions to connect the kitchen and main living deck without weakening upper floors.',
    solution: 'Calculated and integrated a hidden load-bearing steel Universal Beam (H-beam). Guided the drafting crew in creating a highly modern open interior flow.',
    imageBg: 'from-brand-teal-dark to-brand-navy-dark',
    features: ['H-Beam load-bearing integration', 'Bespoke custom kitchen details', 'As-built CAD revisions']
  },
  {
    id: 'heliopolis-center',
    title: 'Heliopolis Retail Promenade',
    category: 'Commercial',
    location: 'Sector 5 Center',
    year: '25',
    description: 'Aesthetic front-facade 3D modeling, material specification consulting, and solar permit layout drafting for a 30-store high-street boutique plaza.',
    challenge: 'Developing a cohesive design theme that accommodates premium brand branding while complying with uniform city frontage laws.',
    solution: 'Devised a modular front-panel framework with customizable LED lighting nodes. Drafted full solar layouts to cover promenade walkway lighting costs.',
    imageBg: 'from-gray-800 to-brand-teal',
    features: ['High-definition walkthrough model', 'Modular steel architectural panels', 'Clean PV-loop wiring layout']
  }
];

export const JPS_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'client-1',
    quote: "JPS Sthapatya delivers exceptional precision in their drawings. Our solar permit set went through local AHJ approval in the first round without a single comment or delay.",
    author: "Rakesh K. Mehta",
    role: "Director of Solar Implementations",
    organization: "EcoVolt Solutions India"
  },
  {
    id: 'client-2',
    quote: "Working with JPS Sthapatya on our home remodeling was wonderful. Their 3D walkthrough models gave us total trust before starting construction, and the interior concepts are stunning.",
    author: "Meera & Siddharth Roy",
    role: "Property Owners",
    organization: "Vasant Vihar Duplex Project"
  },
  {
    id: 'client-3',
    quote: "As standard builders, we need engineering drawing sets that are incredibly easy to read but fully detailed under local laws. JPS's framing and foundation guides are consistently outstanding.",
    author: "Devendra Verma",
    role: "Lead Structural Partner",
    organization: "Verma Heights Construction Base"
  }
];

export const JPS_INSIGHTS: InsightArticle[] = [
  {
    id: 'article-1',
    category: 'Articles',
    title: 'Navigating Local Zoning Regulations & Building Layout Clearances',
    date: 'May 18, 2026',
    readTime: '6 min read',
    summary: 'A comprehensive starter manual detailing set-back alignments, local height restrictions, FSI optimizations, and the exact steps to clear local municipal approvals.',
    content: 'Zoning laws dictate the structural framework under which real estate assets can grow. Understanding how municipal authorities calculate Floor Space Index (FSI) or Floor Area Ratio (FAR) is the single most critical step in design planning. JPS Sthapatya details the optimal path to clear municipal approvals by outlining: 1. Set-back rules from regional borders. 2. Parking structure calculations in connection with local workspace regulations. 3. Seismic and load framing rules that local inspectors prioritize.',
    author: 'JPS Drafting Team'
  },
  {
    id: 'article-2',
    category: 'Articles',
    title: 'The Blueprint of Solar PV Permit Drawing Compliance',
    date: 'April 05, 2026',
    readTime: '8 min read',
    summary: 'Everything installer organizations need to compile in their drawing packages for rapid solar approvals, from electrical wiring line maps to rafter math calculations.',
    content: 'PV electrical wiring plans must remain highly detailed under safety standards. Common structural solar permit rejections are almost entirely caused by incomplete rafter weight distributions or unclear electrical labels on direct current converters. Keeping detailed three-line electrical maps representing exact junction boxes and DC-AC conversions accelerates the timeline. JPS Sthapatya highlights best practices to pass building and electrical reviews.',
    author: 'Solar Layout Engineering'
  },
  {
    id: 'article-3',
    category: 'News',
    title: 'JPS Sthapatya Marks Two Years of Creative Design Integrity desde 2024',
    date: 'March 14, 2026',
    readTime: '4 min read',
    summary: 'Celebrating our transition towards zero-carbon architectural planning frameworks and automated structural drawing validation sequences.',
    content: 'Since our inception in early 2024, JPS Sthapatya has focused on bridging creative spatial architecture with raw, safe, affordable engineering. This anniversary signals a major strategic transition. We are integrating advanced thermal energy simulations inside our early-stage 3D models. This guarantees residential units are pre-built to minimize air conditioning and heating expenditure over a 50-year building lifecycle.',
    author: 'JPS Press Office'
  }
];

export const JPS_CAREERS: CareerOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Cad Draftsman',
    department: 'Drafting & Engineering',
    location: 'Remote / HQ Hybrid',
    type: 'Full-Time',
    experience: '3+ Years',
    description: 'We are seeking an expert 2D Draftsperson with extreme fluency in AutoCAD and Revit. You will develop detailed construction sets (CD sets), architectural outlines, and structural detailing projects.'
  },
  {
    id: 'job-2',
    title: 'Solar Layout Designer',
    department: 'Solar Engineering',
    location: 'Remote',
    type: 'Full-Time or Freelance',
    experience: '1+ Years',
    description: 'Specialist role supporting panel mapping and single-line/three-line wiring layouts for commercial and residential scale grid deployments. Knowledge of NEC codes and AHJ permit rules is required.'
  },
  {
    id: 'job-3',
    title: '3D Artist & Rendering Specialist',
    department: 'Architecture & Modeling',
    location: 'HQ Base',
    type: 'Contract/Full-Time',
    experience: '2+ Years',
    description: 'Expert with Blender, 3ds Max, V-Ray, or Unreal Engine, rendering high-end luxury interiors and bold exterior plazas. Ability to interpret structural CAD blueprints and map textures with photorealistic lighting is essential.'
  }
];
