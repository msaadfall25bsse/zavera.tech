import type { Metadata } from "next";
import Link from "next/link";
import { 
  Globe, 
  Code2, 
  Search, 
  TrendingUp, 
  Palette, 
  BookOpen, 
  ArrowRight, 
  MapPin, 
  Sparkles 
} from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";

export const metadata: Metadata = {
  title: "HTML Sitemap & Complete Directory | Zavera Tech",
  description:
    "Explore the complete site architecture and directory of Zavera Tech. Access all web development, SEO, digital marketing, graphic design services and learning resources.",
  alternates: {
    canonical: "https://zavera-tech.vercel.app/sitemap",
  },
  openGraph: {
    title: "HTML Sitemap & Complete Directory | Zavera Tech",
    description:
      "Explore the complete site architecture and directory of Zavera Tech. Access all web development, SEO, digital marketing, graphic design services and learning resources.",
    url: "https://zavera-tech.vercel.app/sitemap",
    type: "website",
  },
};

export default function SitemapPage() {
  const sections = [
    {
      title: "Core Pages",
      icon: Globe,
      description: "Main company information, brand background, services overview, learning academy, and contact channels.",
      links: [
        { label: "Home — IT & Digital Services in Abbottabad", href: "/" },
        { label: "About Zavera Tech — Who We Are & Values", href: "/about" },
        { label: "Our IT & Digital Services Overview", href: "/services" },
        { label: "Learning Resources & Educational Hub", href: "/learning" },
        { label: "Contact Zavera Tech — Inquiries & Consultations", href: "/contact" },
      ],
    },
    {
      title: "Web Development Services",
      icon: Code2,
      description: "Modern website engineering, custom web applications, e-commerce stores, and full-stack development.",
      links: [
        { label: "Web Development in Abbottabad", href: "/services/web-development" },
        { label: "Website Development Services", href: "/services/website-development" },
        { label: "Custom Web Application Development", href: "/services/custom-web-application-development" },
        { label: "Next.js Development Services", href: "/services/nextjs-development" },
        { label: "React.js Development Services", href: "/services/reactjs-development" },
        { label: "Ecommerce Website Development", href: "/services/ecommerce-development" },
        { label: "Full Stack Web Development Services", href: "/services/full-stack-development" },
        { label: "Website Maintenance & Ongoing Support", href: "/services/website-maintenance" },
      ],
    },
    {
      title: "Search Engine Optimization (SEO)",
      icon: Search,
      description: "Organic search visibility, technical site audits, on-page optimization, local maps ranking, and authority building.",
      links: [
        { label: "SEO Services in Abbottabad", href: "/services/seo-services" },
        { label: "Technical SEO Audits & Core Web Vitals", href: "/services/technical-seo" },
        { label: "On-Page SEO Optimization", href: "/services/on-page-seo" },
        { label: "Off-Page SEO & Authority Growth", href: "/services/off-page-seo" },
        { label: "Local SEO & Google Maps Optimization", href: "/services/local-seo" },
        { label: "Keyword Research & Search Intent Strategy", href: "/services/keyword-research" },
        { label: "Website SEO Audit Services", href: "/services/website-seo-audit" },
        { label: "White-Hat Link Building Services", href: "/services/link-building" },
        { label: "SEO Content Optimization & Refreshes", href: "/services/content-optimization" },
      ],
    },
    {
      title: "Digital Marketing Solutions",
      icon: TrendingUp,
      description: "Multi-channel online promotion, social media marketing, targeted advertising, and email automation.",
      links: [
        { label: "Digital Marketing in Abbottabad", href: "/services/digital-marketing" },
        { label: "Social Media Marketing & Management", href: "/services/social-media-marketing" },
        { label: "Facebook Marketing & Meta Ads", href: "/services/facebook-marketing" },
        { label: "Instagram Marketing & Growth Strategy", href: "/services/instagram-marketing" },
        { label: "Google Ads Management Services", href: "/services/google-ads" },
        { label: "PPC Paid Search Advertising", href: "/services/ppc-advertising" },
        { label: "Content Marketing & Editorial Strategy", href: "/services/content-marketing" },
        { label: "Email Marketing & Automated Newsletters", href: "/services/email-marketing" },
      ],
    },
    {
      title: "Graphic Designing & Brand Identity",
      icon: Palette,
      description: "Visual branding, corporate logo design, digital marketing creatives, and intuitive UI/UX experiences.",
      links: [
        { label: "Graphic Designing Services in Abbottabad", href: "/services/graphic-designing" },
        { label: "Logo Design & Visual Identity", href: "/services/logo-design" },
        { label: "Brand Identity Design & Guidelines", href: "/services/brand-identity-design" },
        { label: "Social Media Graphic Design", href: "/services/social-media-design" },
        { label: "Business Card & Stationery Design", href: "/services/business-card-design" },
        { label: "Digital Banner & Display Advertising Design", href: "/services/banner-design" },
        { label: "Company Brochure & Profile Design", href: "/services/brochure-design" },
        { label: "UI/UX Interface Design", href: "/services/ui-ux-design" },
      ],
    },
    {
      title: "Learning Hub & Technical Tutorials",
      icon: BookOpen,
      description: "Free in-depth educational roadmaps covering modern software engineering, SEO strategies, and design principles.",
      links: [
        { label: "Introduction to Modern Web Development", href: "/learning/introduction-to-modern-web-development" },
        { label: "Mastering CSS Flexbox and Grid", href: "/learning/mastering-css-flexbox-and-grid" },
        { label: "JavaScript ES6 and Asynchronous Patterns", href: "/learning/javascript-es6-and-asynchronous-patterns" },
        { label: "Building Scalable UIs with React", href: "/learning/building-scalable-uis-with-react" },
        { label: "Next.js App Router and Server Components", href: "/learning/nextjs-app-router-and-server-components" },
        { label: "Type-Safe Web Applications with TypeScript", href: "/learning/type-safe-web-applications-with-typescript" },
        { label: "Actionable Technical SEO for Modern Websites", href: "/learning/actionable-technical-seo-for-modern-websites" },
        { label: "Crafting Sustainable Digital Marketing Strategies", href: "/learning/crafting-sustainable-digital-marketing-strategies" },
        { label: "Principles of Impactful Brand Identity Design", href: "/learning/principles-of-impactful-brand-identity-design" },
      ],
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "HTML Sitemap" }]} />

        {/* Hero Section */}
        <section className="py-12 md:py-16 text-center max-w-4xl mx-auto">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Site Index & Architecture &bull; Zavera Tech</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight mt-4 mb-6">
            Complete Website Directory & Sitemap
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Browse all public pages, commercial services, technical disciplines, and educational guides published across the Zavera Tech platform.
          </p>
        </section>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {sections.map((section, idx) => {
            const IconComp = section.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-[#F07825]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F07825] flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900">
                      {section.title}
                    </h2>
                  </div>

                  <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                    {section.description}
                  </p>

                  <ul className="space-y-2.5">
                    {section.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          href={link.href}
                          className="text-xs sm:text-sm text-neutral-700 hover:text-[#F07825] transition-colors flex items-center group py-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-[#F07825] mr-2 shrink-0 transition-colors" />
                          <span className="group-hover:underline">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span>{section.links.length} Pages Listed</span>
                  <span className="text-[#F07825] font-semibold flex items-center">
                    Crawlable <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <CTASection
          badge="Need a Custom Digital Solution?"
          title="Looking to Build or Optimize Your Website?"
          description="Contact Zavera Tech to discuss your requirements and confirm the right scope for your project in Abbottabad and across Pakistan."
          buttonText="Contact Zavera Tech"
          buttonHref="/contact"
        />
      </div>
    </div>
  );
}

