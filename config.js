// ============================================================
//  SANSKARIYA INDUSTRIES — WEBSITE CONFIGURATION
//  Edit anything here to update the website content.
//  No coding knowledge required!
// ============================================================

const SITE_CONFIG = {

  // ----------------------------------------------------------
  // BRAND
  // ----------------------------------------------------------
  brand: {
    name: "Sanskariya Industries",
    tagline: "Dairy / Sugar Plant Service & Spares",
    website: "www.sanskariya.com",
    logo: "./logo.png",   // replace with your logo file path
  },

  // ----------------------------------------------------------
  // COLORS  (change hex codes to restyle the whole site)
  // ----------------------------------------------------------
  colors: {
    teal:       "#0e7c85",
    tealDark:   "#085960",
    tealLight:  "#e8f7f8",
    gold:       "#B8860B",
    goldLight:  "#D4A017",
    goldPale:   "#FDF3DC",
    bg:         "#F9FAFB",
    charcoal:   "#1a1a1a",
    mid:        "#555555",
  },

  // ----------------------------------------------------------
  // HERO SECTION
  // ----------------------------------------------------------
  hero: {
    badge:   "Dairy / Sugar Plant Specialists",
    title:   "From Dairy Freshness to Sugar Sweetness",
    titleEm: "Freshness",   // the word that gets highlighted
    tagline: "Advanced dairy and sugar processing equipment — design, fabrication, installation, and engineering consultancy delivered with precision and trust.",
    cta1:    { label: "Explore Products", href: "#products" },
    cta2:    { label: "Request a Quote",  href: "#contact"  },
    stats: [
      { num: "360°", label: "Full Plant Solutions" },
      { num: "2",    label: "Core Sectors"         },
      { num: "24/7", label: "Support Available"    },
      { num: "100+", label: "Projects Done"        },
    ],
  },

  // ----------------------------------------------------------
  // ABOUT SECTION
  // ----------------------------------------------------------
  about: {
    badge:     "Who We Are",
    title:     "Engineering Excellence in Food Processing",
    titleEm:   "Food Processing",
    founded:   "2020",
    paragraphs: [
      "Sanskariya Industries excels in advanced dairy and sugar processing equipment, offering services that include design, supply, fabrication, erection, commissioning, engineering consultancy, and process design.",
      "Known for our timely delivery and reliability, we help clients enhance productivity by combining innovation with trust. Every solution is tailored to the unique demands of modern dairy and sugar processing operations.",
    ],
    highlights: ["Timely Delivery", "Trusted Reliability", "Custom Engineering", "End-to-End Service"],
  },

  // ----------------------------------------------------------
  // PRODUCTS
  // ----------------------------------------------------------
  products: [
    { icon: "🥛", name: "Milk Processing Plant",       desc: "Complete turnkey solutions for modern milk processing operations" },
    { icon: "⚙️", name: "Processing Machinery",        desc: "High-performance industrial machinery for dairy and sugar applications" },
    { icon: "🧺", name: "Crate Washer",                desc: "Stainless steel crate washers for hygienic cleaning operations" },
    { icon: "🥫", name: "Can Washer",                  desc: "Automated can washing systems for dairy plants" },
    { icon: "❄️", name: "Bulk Milk Cooler",            desc: "Energy-efficient cooling systems to maintain milk freshness" },
    { icon: "💧", name: "SS Centrifugal Pumps",        desc: "Food-grade stainless steel pumps for precise fluid handling" },
    { icon: "🗄️", name: "Storage Tanks",              desc: "Insulated and jacketed tanks for dairy and sugar storage" },
    { icon: "🏭", name: "Silos & Related Equipment",   desc: "Large-capacity storage solutions for sugar and powder products" },
  ],

  // ----------------------------------------------------------
  // MANUFACTURING SPECIALITIES
  // ----------------------------------------------------------
  manufacturing: [
    "HMST & VMST (Horizontal & Vertical Milk Storage Tanks)",
    "Processing and Aging Tanks",
    "Stainless Steel Can and Crate Washers",
    "Stainless Steel Centrifugal Pumps",
    "Pasteurizer Skid for Milk, Cream & Paneer",
    "Curd Shell & Tube Heat Exchangers",
    "Powder Mixing Units & CIP Systems",
    "Hot Water Systems & Filtration Systems",
  ],

  // ----------------------------------------------------------
  // SPARES / GASKETS SECTION
  // ----------------------------------------------------------
  spares: {
    badge:  "Spares & Gaskets",
    title:  "Plate Heat Exchanger Gaskets & Spares",
    titleEm: "Gaskets & Spares",
    body:   "We supply all types of PHE gaskets — square frame gaskets, circular flange gaskets, and specialty sealing solutions. Custom sizes available for all major heat exchanger brands.",
  },

  // ----------------------------------------------------------
  // SERVICES
  // ----------------------------------------------------------
  services: [
    { icon: "📐", title: "Plant Layout & Design",         body: "Comprehensive plant layout and design tailored to your production capacity and operational requirements." },
    { icon: "🔧", title: "Installation & Commissioning",  body: "Complete installation and commissioning of plant piping, fittings, and equipment — optimally from day one." },
    { icon: "♨️", title: "PHE Servicing & Spares",       body: "All types of Plate Heat Exchanger servicing, spare parts supply, and gasket replacement." },
    { icon: "🛠️", title: "Dairy Plant Troubleshooting",  body: "Expert troubleshooting and preventive maintenance to minimize downtime and maximize productivity." },
    { icon: "📊", title: "Instrument Supply & Calibration", body: "Supply, installation and calibration of all types of industrial instruments for dairy and sugar plants." },
    { icon: "🏗️", title: "Engineering Consultancy",      body: "Process design and engineering consultancy to optimize production workflows and operational excellence." },
  ],

  // ----------------------------------------------------------
  // CONTACT
  // ----------------------------------------------------------
  contact: {
    badge:  "Get In Touch",
    title:  "Let's Build Your Dream Plant",
    titleEm: "Dream Plant",
    intro:  "Whether setting up a new dairy plant or upgrading your sugar processing facility, our team is ready with expert guidance and reliable solutions.",
    phone:  "+91 83290 90799 / +91 99759 19890",
    email:  "atul.dhairya@sanskariya.com",
    website: "www.sanskariya.com",
    formTitle: "Request a Quote",
    enquiryOptions: [
      "Milk Processing Plant",
      "Storage Tanks / Silos",
      "PHE Gaskets & Spares",
      "Centrifugal Pumps",
      "Pasteurizer Skid",
      "Plant Layout & Design",
      "Installation & Commissioning",
      "Other",
    ],
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    copy: "© 2025 Sanskariya Industries · Dairy/Sugar Plant Service & Spares",
    links: ["About", "Products", "Manufacturing", "Services", "Contact"],
  },
};
