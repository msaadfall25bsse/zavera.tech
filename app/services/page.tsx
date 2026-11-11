import type { Metadata } from "next";

import Link from "next/link";

import {

  Code2,

  TrendingUp,

  Palette,

  Search,

  CheckCircle2,

  ArrowRight,

  Sparkles,

  Layers,

  MapPin,

  ShieldCheck,

  Cpu,

  Monitor,

  Globe,

  Share2,

} from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";

import CTASection from "@/components/common/CTASection";

import Breadcrumbs from "@/components/ui/Breadcrumbs";

import FAQAccordion from "@/components/common/FAQAccordion";

import Button from "@/components/ui/Button";



export const metadata: Metadata = {

  title: "IT & Digital Services in Abbottabad, Pakistan | Zavera Tech",

  description:

    "Explore end-to-end digital services by Zavera Tech: custom web development, Next.js apps, SEO optimization, Google Ads, and brand design in Pakistan.",

  keywords: [

    "IT services in Abbottabad",

    "software development services Pakistan",

    "digital marketing services Abbottabad",

    "graphic design services Abbottabad",

    "web development services Abbottabad",

    "local SEO services Abbottabad",

    "Google Ads management Pakistan",

    "custom web application development",

    "professional digital services in Abbottabad",

  ],

  alternates: {

    canonical: "https://zavera-tech.vercel.app/services",

  },

  openGraph: {

    title: "IT & Digital Services in Abbottabad, Pakistan | Zavera Tech",

    description:

      "Explore end-to-end digital services by Zavera Tech: custom web development, Next.js apps, SEO optimization, Google Ads, and brand design in Pakistan.",

    url: "https://zavera-tech.vercel.app/services",

    type: "website",

    images: [

      {

        url: "/og-image.jpg",

        width: 1200,

        height: 630,

        alt: "Zavera Tech IT and Digital Services in Abbottabad, Pakistan",

      },

    ],

  },

  twitter: {

    card: "summary_large_image",

    title: "IT & Digital Services in Abbottabad, Pakistan | Zavera Tech",

    description:

      "Explore end-to-end digital services by Zavera Tech: custom web development, Next.js apps, SEO optimization, Google Ads, and brand design in Pakistan.",

    images: ["/og-image.jpg"],

  },

  robots: {

    index: true,

    follow: true,

    googleBot: {

      index: true,

      follow: true,

      "max-video-preview": -1,

      "max-image-preview": "large",

      "max-snippet": -1,

    },

  },

};



export default function ServicesPage() {

  const breadcrumbJsonLd = {

    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [

      {

        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://zavera-tech.vercel.app",

      },

      {

        "@type": "ListItem",

        position: 2,

        name: "Services",

        item: "https://zavera-tech.vercel.app/services",

      },

    ],

  };



  const servicesCollectionJsonLd = {

    "@context": "https://schema.org",

    "@type": "CollectionPage",

    name: "IT & Digital Services | Zavera Tech",

    description:

      "Explore end-to-end digital services by Zavera Tech: custom web development, Next.js apps, SEO optimization, Google Ads, and brand design in Pakistan.",

    url: "https://zavera-tech.vercel.app/services",

    provider: {

      "@type": "Organization",

      name: "Zavera Tech",

      sameAs: "https://zavera-tech.vercel.app",

    },

  };

  const servicePillars = [

    {

      id: "web-development",

      title: "Web Development Services",

      shortDesc:

        "Custom website development, scalable web applications, and high-performance Next.js platforms built to support your online business growth.",

      icon: Code2,

      href: "/services/web-development",

      features: [

        "Modern Next.js & React App Architecture",

        "E-commerce & Corporate Website Solutions",

        "Responsive, Mobile-First Layout Engineering",

        "Custom Frontend and Backend Integration",

      ],

      subServices: [

        { title: "Custom Web Application Development", href: "/services/custom-web-application-development" },

        { title: "Next.js Web Development", href: "/services/nextjs-development" },

        { title: "Full Stack Web Development", href: "/services/full-stack-development" },

        { title: "Website Development", href: "/services/website-development" },

        { title: "E-Commerce Development", href: "/services/ecommerce-development" },

      ],

      linkText: "Explore Web Development Services",

    },

    {

      id: "seo-services",

      title: "SEO Services",

      shortDesc:

        "Data-backed search engine optimization strategies covering technical audits, on-page optimization, and local SEO to increase qualified organic visibility.",

      icon: Search,

      href: "/services/seo-services",

      features: [

        "In-Depth Technical SEO Audits & Core Web Vitals",

        "Search Intent Mapping & Keyword Research",

        "Local SEO for Abbottabad & Regional Markets",

        "Structured Data & Rich Snippet Implementation",

      ],

      subServices: [

        { title: "Local SEO Services in Abbottabad", href: "/services/local-seo" },

        { title: "SEO Content Optimization", href: "/services/content-optimization" },

        { title: "Technical SEO Audit", href: "/services/technical-seo" },

        { title: "On-Page SEO Optimization", href: "/services/on-page-seo" },

        { title: "Keyword Research Strategy", href: "/services/keyword-research" },

      ],

      linkText: "Explore SEO Services",

    },

    {

      id: "digital-marketing",

      title: "Digital Marketing Services",

      shortDesc:

        "Results-focused online marketing solutions across social media channels, paid advertising campaigns, and content strategies to acquire customers.",

      icon: TrendingUp,

      href: "/services/digital-marketing",

      features: [

        "Social Media Marketing (Facebook & Instagram)",

        "Google Ads & PPC Campaign Management",

        "Full-Funnel Content Marketing & Lead Generation",

        "Conversion Rate Optimization (CRO)",

      ],

      subServices: [

        { title: "Google Ads Management Services", href: "/services/google-ads" },

        { title: "PPC Advertising Campaigns", href: "/services/ppc-advertising" },

        { title: "Social Media Marketing", href: "/services/social-media-marketing" },

        { title: "Content Marketing Strategy", href: "/services/content-marketing" },

        { title: "Digital Marketing Strategy", href: "/services/digital-marketing-strategy" },

      ],

      linkText: "Explore Digital Marketing Services",

    },

    {

      id: "graphic-designing",

      title: "Graphic Designing Services",

      shortDesc:

        "Creative brand identity design, custom vector logos, marketing collateral, and UI/UX design that build lasting brand credibility across all touchpoints.",

      icon: Palette,

      href: "/services/graphic-designing",

      features: [

        "Custom Logo Design & Vector Emblems",

        "Corporate Brand Guidelines & Color Palettes",

        "Social Media Graphics & Ad Banner Designs",

        "Print Collateral (Brochures, Flyers & Cards)",

      ],

      subServices: [

        { title: "Custom Banner & Display Ad Design", href: "/services/banner-design" },

        { title: "Brand Identity Design & Corporate Branding", href: "/services/brand-identity-design" },

        { title: "Corporate Logo Design", href: "/services/logo-design" },

        { title: "UI/UX Product Interface Design", href: "/services/ui-ux-design" },

        { title: "Social Media Graphics", href: "/services/social-media-graphics" },

      ],

      linkText: "Explore Graphic Design Services",

    },

  ];



  const approachSteps = [

    {

      step: "01",

      title: "Discovery & Analysis",

      desc: "We understand your business goals, target audience, and project specifications to define clear technical and creative requirements.",

    },

    {

      step: "02",

      title: "Architecture & Strategy",

      desc: "Our team plans the optimal tech stack, UI wireframes, content outlines, and search marketing strategies tailored to your market.",

    },

    {

      step: "03",

      title: "Engineering & Design",

      desc: "We build clean, type-safe code and distinctive visual designs, ensuring responsive behavior and performance across all devices.",

    },

    {

      step: "04",

      title: "Testing & Optimization",

      desc: "Rigorous quality assurance, speed benchmarking, cross-browser compatibility testing, and On-Page SEO validation before launch.",

    },

    {

      step: "05",

      title: "Delivery & Continuous Support",

      desc: "Seamless live deployment with ongoing maintenance, technical support, and transparent milestone communication.",

    },

  ];



  const whyChooseUs = [

    {

      title: "Integrated Digital Services",

      desc: "We bring software development, SEO, digital marketing, and creative design together under a single, unified agency platform.",

      icon: Layers,

    },

    {

      title: "Practical Technology Solutions",

      desc: "We carefully evaluate your exact business needs before recommending frameworks and technologies, avoiding bloated and unnecessary overhead.",

      icon: Cpu,

    },

    {

      title: "Transparent Collaboration",

      desc: "Direct communication, realistic milestones, and honest reporting throughout every phase of your project.",

      icon: ShieldCheck,

    },

    {

      title: "Focus on Business Requirements",

      desc: "Every line of code and creative visual is aligned with your commercial objectives, lead generation, and customer user experience.",

      icon: Sparkles,

    },

  ];



  const servicesFAQs = [

    {

      id: "faq-serv-1",

      question: "What digital services does Zavera.Tech offer in Abbottabad?",

      answer:

        "Zavera.Tech provides comprehensive digital solutions including custom web development, search engine optimization (SEO), digital marketing, and graphic design for businesses in Abbottabad and across Pakistan.",

      category: "Services" as const,

    },

    {

      id: "faq-serv-2",

      question: "How do I choose the right digital service for my business?",

      answer:

        "Our team evaluates your current online presence, business model, and growth objectives. If you need a new website, web development is ideal; if you already have a site and need visitors, our SEO and digital marketing services are the recommended next steps.",

      category: "Process" as const,

    },

    {

      id: "faq-serv-3",

      question: "Can small businesses and startups work with Zavera.Tech?",

      answer:

        "Yes. We specialize in providing practical, scalable digital solutions for startups, local businesses in Abbottabad, and growing enterprises across Pakistan.",

      category: "General" as const,

    },

    {

      id: "faq-serv-4",

      question: "Do you provide website maintenance after launch?",

      answer:

        "Yes, we provide ongoing website maintenance, security updates, speed optimization, and technical support based on your business requirements.",

      category: "Services" as const,

    },

    {

      id: "faq-serv-5",

      question: "How long does a typical digital project take to complete?",

      answer:

        "Timelines depend on project scope. Standard business websites typically require 2 to 4 weeks, while complex web applications or comprehensive multi-channel marketing campaigns follow structured milestone phases.",

      category: "Process" as const,

    },

    {

      id: "faq-serv-6",

      question: "How can we get started with a project?",

      answer:

        "You can contact us via our Contact page or request a free proposal. We will schedule an initial consultation to discuss your requirements, deliverables, and estimated timeline.",

      category: "General" as const,

    },

  ];



  return (

    <div className="py-12 bg-transparent text-white">

      <script

        type="application/ld+json"

        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}

      />

      <script

        type="application/ld+json"

        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesCollectionJsonLd) }}

      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumbs items={[{ label: "Services" }]} />



        {/* ============================================================== */}

        {/* 1. HERO SECTION (H1) */}

        {/* ============================================================== */}

        <section className="py-12 md:py-16 text-center max-w-4xl mx-auto">

          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full inline-flex items-center gap-1.5">

            <MapPin className="w-3.5 h-3.5" />

            <span>Digital Services in Abbottabad &bull; Zavera.Tech</span>

          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mt-4 mb-6">

            Our IT and Digital Services

          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">

            Zavera Tech offers digital services for businesses that want to build, manage or improve their online presence. Explore web development, SEO, digital marketing and graphic design. Each service page explains its topic in more detail and can help you choose the right starting point.

          </p>



          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">

            <Button variant="primary" size="lg" href="/contact" className="w-full sm:w-auto">

              <span>Start a Project</span>

              <ArrowRight className="w-4 h-4 ml-2" />

            </Button>

            <Button variant="outline" size="lg" href="#explore-services" className="w-full sm:w-auto">

              Explore All Services

            </Button>

          </div>

        </section>



        {/* ============================================================== */}

        {/* 2. INTRODUCTION TO SERVICES (H2) */}

        {/* ============================================================== */}

        <section className="py-12 border-t border-neutral-800">

          <div className="max-w-4xl mx-auto space-y-4 text-center">

            <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full">

              Overview

            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">

              Choose the Right Service

            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">

              At Zavera.Tech, our mission is to deliver practical digital solutions that support communication, functionality, and long-term business growth. Whether you are establishing a new digital footprint or scaling an existing enterprise, our four core service pillars provide the technical architecture and creative foundation you need.

            </p>

          </div>

        </section>



        {/* ============================================================== */}

        {/* 3. EXPLORE OUR 4 DIGITAL SERVICES (H2) */}

        {/* ============================================================== */}

        <section id="explore-services" className="py-16 border-t border-neutral-800 scroll-mt-24">

          <SectionHeading

            badge="Core Offerings"

            title="Web Development, SEO, Digital Marketing & Graphic Designing"

            description="Four specialized disciplines engineered to solve complex digital challenges for businesses in Abbottabad and across Pakistan."

          />



          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">

            {servicePillars.map((service) => {

              const IconComp = service.icon;

              return (

                <div

                  key={service.id}

                  className="bg-white rounded-3xl p-8 border border-neutral-800 hover:border-[#F07825]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"

                >

                  <div className="space-y-4">

                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#F07825] flex items-center justify-center">

                      <IconComp className="w-6 h-6" />

                    </div>

                    <h2 className="text-2xl font-bold text-white">

                      {service.title}

                    </h2>

                    <p className="text-neutral-300 text-sm leading-relaxed">

                      {service.shortDesc}

                    </p>

                    <ul className="space-y-2.5 pt-2">

                      {service.features.map((feat, i) => (

                        <li key={i} className="flex items-start text-xs sm:text-sm text-neutral-300">

                          <CheckCircle2 className="w-4 h-4 text-[#F07825] mr-2 shrink-0 mt-0.5" />

                          <span>{feat}</span>

                        </li>

                      ))}

                    </ul>



                    {/* Sub-Services Contextual Links (Fixes Orphan Status) */}

                    {(service as any).subServices && (

                      <div className="pt-4 mt-2 border-t border-neutral-800">

                        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">

                          Specialized Solutions

                        </span>

                        <div className="flex flex-wrap gap-1.5">

                          {(service as any).subServices.map((sub: any, sIdx: number) => (

                            <Link

                              key={sIdx}

                              href={sub.href}

                              className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-neutral-800/80 text-neutral-200 hover:bg-[#F07825] hover:text-white transition-colors border border-neutral-700"

                            >

                              {sub.title}

                            </Link>

                          ))}

                        </div>

                      </div>

                    )}

                  </div>



                  <div className="pt-6 mt-6 border-t border-neutral-800">

                    <Link

                      href={service.href}

                      className="inline-flex items-center text-sm font-bold text-[#F07825] hover:text-[#d96517] transition-colors"

                    >

                      <span>{service.linkText}</span>

                      <ArrowRight className="w-4 h-4 ml-1.5" />

                    </Link>

                  </div>

                </div>

              );

            })}

          </div>

        </section>



        {/* ============================================================== */}

        {/* 4. WHY CHOOSE ZAVERA.TECH (H2) */}

        {/* ============================================================== */}

        <section className="py-16 border-t border-neutral-800">

          <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12">

            <div className="max-w-3xl mb-10">

              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF8C42] bg-[#F07825]/20 rounded-full">

                Value Proposition

              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">

                Why Choose Zavera.Tech for Your Digital Services?

              </h2>

              <p className="text-neutral-300 text-sm sm:text-base mt-2">

                We bridge the gap between engineering rigor, search engine visibility, and compelling creative design.

              </p>

            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {whyChooseUs.map((item, idx) => {

                const Icon = item.icon;

                return (

                  <div

                    key={idx}

                    className="p-6 rounded-2xl bg-neutral-800/60 border border-neutral-700/60 space-y-3"

                  >

                    <div className="w-10 h-10 rounded-xl bg-[#F07825]/20 text-[#FF8C42] flex items-center justify-center">

                      <Icon className="w-5 h-5" />

                    </div>

                    <h3 className="text-lg font-bold text-white">

                      {item.title}

                    </h3>

                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">

                      {item.desc}

                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </section>



        {/* ============================================================== */}

        {/* 5. OUR APPROACH TO DIGITAL PROJECTS (H2) */}

        {/* ============================================================== */}

        <section className="py-16 border-t border-neutral-800">

          <SectionHeading

            badge="Systematic Methodology"

            title="Our Approach to Digital Projects"

            description="A structured 5-stage execution process ensuring quality, transparency, and timely delivery."

          />



          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-6">

            {approachSteps.map((step, idx) => (

              <div

                key={idx}

                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-800 flex flex-col justify-between"

              >

                <div>

                  <span className="text-xs font-bold text-[#F07825] bg-white px-2.5 py-1 rounded-md border border-neutral-800 inline-block mb-3">

                    STAGE {step.step}

                  </span>

                  <h3 className="text-base font-bold text-white mb-2">

                    {step.title}

                  </h3>

                  <p className="text-neutral-400 text-xs leading-relaxed">

                    {step.desc}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>



        {/* ============================================================== */}

        {/* 6. REGIONAL COVERAGE: ABBOTTABAD & PAKISTAN (H2) */}

        {/* ============================================================== */}

        <section className="py-16 border-t border-neutral-800">

          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-neutral-900/80 backdrop-blur-md border border-neutral-800 space-y-4">

            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F07825]">

              <MapPin className="w-4 h-4" />

              <span>Regional Positioning & Impact</span>

            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">

              Digital Services for Businesses in Abbottabad and Across Pakistan

            </h2>

            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">

              Zavera.Tech is proudly positioned as a digital services provider in Abbottabad, Khyber Pakhtunkhwa. We serve local entrepreneurs, commercial enterprises, educational initiatives, and companies across Pakistan seeking modern software development, web engineering, SEO, and creative brand design.

            </p>

            <div className="pt-2">

              <Link

                href="/about"

                className="inline-flex items-center text-xs sm:text-sm font-bold text-[#F07825] hover:text-[#d96517]"

              >

                <span>Learn more about Zavera.Tech and our agency values</span>

                <ArrowRight className="w-4 h-4 ml-1.5" />

              </Link>

            </div>

          </div>

        </section>



        {/* ============================================================== */}

        {/* 7. FREQUENTLY ASKED QUESTIONS (H2) */}

        {/* ============================================================== */}

        <section id="faq" className="py-16 border-t border-neutral-800 scroll-mt-24">

          <SectionHeading

            badge="Got Questions?"

            title="Frequently Asked Questions About Our Digital Services"

            description="Clear answers regarding our service offerings, technical capabilities, collaboration model, and delivery timelines."

          />

          <div className="max-w-3xl mx-auto pt-6">

            <FAQAccordion items={servicesFAQs} />

          </div>

        </section>



        {/* ============================================================== */}

        {/* 8. FINAL CTA (H2) */}

        {/* ============================================================== */}

        <CTASection

          badge="Ready to build?"

          title="Transform Your Business Online with Zavera.Tech"

          description="Tell us about your digital requirements and let our team in Abbottabad engineer a practical, high-performing solution for your business."

          buttonText="Contact Us Today"

          buttonHref="/contact"

        />

      </div>

    </div>

  );

}

