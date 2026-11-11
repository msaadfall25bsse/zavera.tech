import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-neutral-800 overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(240,120,37,0.18)] hover:border-[#F07825]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 text-white">
      <div>
        <div className="relative w-full h-52 bg-neutral-950 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors" />
        </div>

        <div className="p-6">
          <div className="text-xs font-semibold text-[#F07825] uppercase tracking-wider mb-2">
            {project.category}
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F07825] transition-colors">
            {project.name}
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/80">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium text-neutral-300 bg-neutral-800/80 border border-neutral-700/50 px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
