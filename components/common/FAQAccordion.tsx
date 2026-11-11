"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/faqs";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={cn("space-y-4 max-w-3xl mx-auto", className)}>
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/80 backdrop-blur-md shadow-sm transition-colors hover:border-neutral-700"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-lg text-white pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200",
                  isOpen && "transform rotate-180 text-[#F07825]"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-3 text-neutral-300 leading-relaxed border-t border-neutral-800 bg-neutral-950/60">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
