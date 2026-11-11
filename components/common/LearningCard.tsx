import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { LearningArticle } from "@/data/learning";

interface LearningCardProps {
  article: LearningArticle;
}

export default function LearningCard({ article }: LearningCardProps) {
  const getBadgeColor = () => {
    switch (article.difficulty) {
      case "Beginner":
        return "bg-emerald-950/60 text-emerald-400 border-emerald-800/60";
      case "Intermediate":
        return "bg-orange-950/60 text-[#F07825] border-orange-800/60";
      case "Advanced":
        return "bg-purple-950/60 text-purple-400 border-purple-800/60";
      default:
        return "bg-neutral-800 text-neutral-300 border-neutral-700";
    }
  };

  return (
    <article className="group bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-neutral-800 overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(240,120,37,0.18)] hover:border-[#F07825]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 text-white">
      <div>
        <div className="relative w-full h-48 bg-neutral-950 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm text-neutral-200 border border-neutral-700 shadow-sm">
              {article.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
            <span
              className={`font-semibold px-2 py-0.5 rounded border text-[11px] ${getBadgeColor()}`}
            >
              {article.difficulty}
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-neutral-400" />
              {article.duration}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-[#F07825] transition-colors leading-snug mb-2">
            <Link href={`/learning/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-neutral-300 text-sm leading-relaxed line-clamp-3">
            {article.summary}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
        <Link
          href={`/learning/${article.slug}`}
          className="inline-flex items-center text-sm font-semibold text-[#F07825] group-hover:text-[#ff9d5c] transition-colors"
        >
          <span>Start Learning</span>
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-neutral-500">
          <BookOpen className="w-4 h-4" />
        </span>
      </div>
    </article>
  );
}
