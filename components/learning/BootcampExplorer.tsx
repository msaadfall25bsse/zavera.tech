"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Layers, ArrowRight, Filter } from "lucide-react";
import { BootcampCourse } from "@/data/bootcampCourses";
import { cn } from "@/lib/utils";

interface BootcampExplorerProps {
  courses: BootcampCourse[];
}

const CATEGORIES = [
  "All Categories",
  "Web Development",
  "HTML & CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "TypeScript",
  "SEO",
  "Digital Marketing",
  "Graphic Designing",
];

const DIFFICULTIES = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function BootcampExplorer({ courses }: BootcampExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" || course.category === selectedCategory;

      const matchesDifficulty =
        selectedDifficulty === "All Levels" || course.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [courses, searchQuery, selectedCategory, selectedDifficulty]);

  return (
    <div className="space-y-8 sm:space-y-12 max-w-full overflow-hidden">
      {/* Search and Filters Bar */}
      <div className="bg-neutral-900/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-neutral-800 p-4 sm:p-8 shadow-sm space-y-4 sm:space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Live Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search courses, technologies, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-12 py-3 rounded-xl sm:rounded-2xl border border-neutral-750 bg-black text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F07825] focus:border-transparent transition-all placeholder:text-neutral-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Difficulty Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-neutral-400 shrink-0 hidden sm:block" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full sm:w-auto px-4 py-3 rounded-xl sm:rounded-2xl border border-neutral-750 text-sm font-semibold text-white bg-black focus:outline-none focus:ring-2 focus:ring-[#F07825]"
            >
              {DIFFICULTIES.map((diff) => (
                <option key={diff} value={diff} className="bg-neutral-900 text-white">
                  {diff}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 border-t border-neutral-800 scrollbar-none max-w-full">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0",
                  isSelected
                    ? "bg-[#F07825] text-white shadow-xs"
                    : "bg-neutral-800/80 text-neutral-300 hover:bg-neutral-750 hover:text-white"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => {
            const totalLessons = course.modules.reduce((a, m) => a + m.lessons.length, 0);

            return (
              <article
                key={course.slug}
                className="group bg-neutral-900/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-neutral-800 overflow-hidden shadow-xs hover:shadow-2xl hover:border-[#F07825]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 text-white"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative w-full h-48 sm:h-52 bg-neutral-950 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-bold text-white border border-neutral-700 shadow-xs">
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-7 space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between text-xs text-neutral-400 font-medium">
                      <span className="px-2.5 py-0.5 rounded-md bg-orange-950/60 border border-orange-500/30 text-[#F07825] font-bold">
                        {course.difficulty}
                      </span>
                      <span className="flex items-center text-neutral-400">
                        <Layers className="w-3.5 h-3.5 mr-1" />
                        {course.modules.length} Modules &bull; {totalLessons} Lessons
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#F07825] transition-colors leading-snug">
                      <Link href={`/learning/${course.slug}`}>{course.title}</Link>
                    </h3>

                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {course.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="px-5 sm:px-7 pb-5 sm:pb-7 pt-2 border-t border-neutral-800 flex items-center justify-between">
                  <Link
                    href={`/learning/${course.slug}`}
                    className="inline-flex items-center text-sm font-bold text-[#F07825] hover:text-[#ff9d5c] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>

                  <span className="text-xs font-semibold text-neutral-400">
                    {course.duration}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-neutral-900/60 rounded-3xl border border-neutral-800 p-8">
          <p className="text-base font-semibold text-neutral-300">
            No courses found matching &ldquo;{searchQuery}&rdquo;
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Categories");
              setSelectedDifficulty("All Levels");
            }}
            className="mt-4 text-xs font-bold text-[#F07825] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
