export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  features: string[];
  href: string;
  keywords?: string[];
}

export interface SubServiceDetail {
  slug: string;
  title: string;
  categorySlug: string;
  categoryTitle: string;
  heroHeadline: string;
  heroDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  supportingKeywords?: string[];
  longTailKeywords?: string[];
  localKeywords?: string[];
  metaTitle?: string;
  metaDescription?: string;
  imageAlt?: string;
  shortDesc: string;
  image: string;
  features:
    | {
        title: string;
        description: string;
      }[]
    | string[];
  deliverables?: string[];
  techStack?: string[];
  process: {
    step: string;
    title: string;
    desc?: string;
    description?: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  services: SubServiceDetail[];
}
