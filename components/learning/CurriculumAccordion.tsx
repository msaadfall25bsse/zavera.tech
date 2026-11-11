"use client";

import { useState } from "react";
import { ChevronDown, PlayCircle, BookOpen, Clock, CheckCircle2, AlertTriangle, Lightbulb, Code2 } from "lucide-react";
import { ModuleItem, LessonItem } from "@/data/bootcampCourses";
import { cn } from "@/lib/utils";

interface CurriculumAccordionProps {
  modules: ModuleItem[];
  courseTitle: string;
}

export default function CurriculumAccordion({ modules, courseTitle }: CurriculumAccordionProps) {
  const [openModuleId, setOpenModuleId] = useState<string>(modules[0]?.id || "");
  const [activeLesson, setActiveLesson] = useState<LessonItem | null>(modules[0]?.lessons[0] || null);

  const toggleModule = (id: string) => {
    setOpenModuleId(openModuleId === id ? "" : id);
  };

  const handleSelectLesson = (lesson: LessonItem, moduleId: string) => {
    setActiveLesson(lesson);
    setOpenModuleId(moduleId);
    const el = document.getElementById("active-lesson-view");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="curriculum" className="scroll-mt-24 space-y-8 max-w-full overflow-hidden">
      {/* Curriculum Accordion List */}
      <div className="space-y-4">
        {modules.map((module) => {
          const isOpen = openModuleId === module.id;
          return (
            <div
              key={module.id}
              className="border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/80 backdrop-blur-md shadow-xs transition-colors"
            >
              {/* Module Header Bar */}
              <button
                type="button"
                onClick={() => toggleModule(module.id)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none hover:bg-neutral-800/60 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 pr-2">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-950/60 border border-orange-500/30 text-[#F07825] font-bold text-xs flex items-center justify-center shrink-0">
                    M{module.moduleNumber}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base sm:text-lg text-white leading-snug truncate">
                      Module {module.moduleNumber} &mdash; {module.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">
                      {module.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
                  <span className="text-xs font-semibold text-neutral-400 hidden sm:inline-block">
                    {module.lessons.length} {module.lessons.length === 1 ? "Lesson" : "Lessons"}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-neutral-400 transition-transform duration-200",
                      isOpen && "transform rotate-180 text-[#F07825]"
                    )}
                  />
                </div>
              </button>

              {/* Module Lessons Dropdown */}
              {isOpen && (
                <div className="border-t border-neutral-800 bg-neutral-950/70 p-3 sm:p-4 space-y-2">
                  {module.lessons.map((lesson, idx) => {
                    const isSelected = activeLesson?.id === lesson.id;
                    return (
                      <div
                        key={lesson.id}
                        onClick={() => handleSelectLesson(lesson, module.id)}
                        className={cn(
                          "flex items-center justify-between p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all border",
                          isSelected
                            ? "bg-neutral-900 border-[#F07825] shadow-xs text-white"
                            : "bg-neutral-900/60 border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 text-neutral-300"
                        )}
                      >
                        <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0 pr-2">
                          <PlayCircle
                            className={cn(
                              "w-4 h-4 shrink-0",
                              isSelected ? "text-[#F07825]" : "text-neutral-500"
                            )}
                          />
                          <div className="min-w-0">
                            <span className="text-xs text-neutral-500 font-bold mr-1.5 sm:mr-2">
                              0{idx + 1}
                            </span>
                            <span
                              className={cn(
                                "text-xs sm:text-sm font-semibold truncate",
                                isSelected ? "text-[#F07825]" : "text-neutral-200"
                              )}
                            >
                              {lesson.title}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1.5 sm:space-x-2 text-xs text-neutral-400 shrink-0">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Active Detailed Lesson Experience */}
      {activeLesson && (
        <div
          id="active-lesson-view"
          className="mt-8 sm:mt-12 bg-neutral-900/90 rounded-2xl sm:rounded-3xl border border-[#F07825]/40 p-4 sm:p-8 md:p-10 shadow-2xl scroll-mt-24 text-white"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-neutral-800">
            <div>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#F07825] bg-orange-950/60 border border-orange-500/30 rounded-full inline-block">
                Interactive Lesson Experience
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2">
                {activeLesson.title}
              </h3>
            </div>
            <div className="flex items-center text-xs font-semibold text-neutral-300 bg-neutral-800/80 border border-neutral-700/60 px-3 py-1.5 rounded-lg self-start sm:self-auto">
              <Clock className="w-4 h-4 mr-1.5 text-[#F07825]" />
              <span>Duration: {activeLesson.duration}</span>
            </div>
          </div>

          {/* Introduction & Objectives */}
          <div className="py-6 space-y-6">
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              {activeLesson.introduction}
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800">
              <h4 className="text-sm font-bold text-white mb-3 flex items-center">
                <BookOpen className="w-4 h-4 text-[#F07825] mr-2" />
                Lesson Learning Objectives
              </h4>
              <ul className="space-y-2">
                {activeLesson.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#F07825] mr-2 mt-0.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deep Explanation */}
            <div className="space-y-3 sm:space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Detailed Concept Breakdown
              </h4>
              <p>{activeLesson.explanation}</p>
            </div>

            {/* Key Concepts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {activeLesson.concepts.map((concept, i) => (
                <div
                  key={i}
                  className="bg-neutral-950/70 border border-neutral-800 p-3 sm:p-3.5 rounded-xl text-xs font-semibold text-neutral-200 flex items-center space-x-2"
                >
                  <Lightbulb className="w-4 h-4 text-[#F07825] shrink-0" />
                  <span>{concept}</span>
                </div>
              ))}
            </div>

            {/* Code / Visual Example Block */}
            {activeLesson.codeSnippet && (
              <div className="space-y-2 pt-2 max-w-full">
                <div className="flex items-center justify-between text-xs font-bold text-neutral-400 uppercase">
                  <span className="flex items-center">
                    <Code2 className="w-4 h-4 mr-1 text-[#F07825]" />
                    Hands-On Code Example ({activeLesson.codeLanguage || "code"})
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden bg-black text-neutral-100 p-4 sm:p-5 font-mono text-xs sm:text-sm shadow-inner border border-neutral-800 overflow-x-auto">
                  <pre className="whitespace-pre-wrap break-all sm:whitespace-pre sm:break-normal">{activeLesson.codeSnippet}</pre>
                </div>
                {activeLesson.expectedOutput && (
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300">
                    <strong className="text-white">Expected Result: </strong>
                    {activeLesson.expectedOutput}
                  </div>
                )}
              </div>
            )}

            {/* Common Mistakes */}
            {activeLesson.commonMistakes && activeLesson.commonMistakes.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/30 border border-amber-800/50 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-amber-300 flex items-center">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 shrink-0" />
                  Common Beginner Mistakes to Avoid
                </h4>
                <ul className="space-y-1.5">
                  {activeLesson.commonMistakes.map((mistake, i) => (
                    <li key={i} className="text-xs text-amber-200/90 leading-relaxed list-disc list-inside">
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Self-Check Question */}
            {activeLesson.quizQuestion && (
              <div className="p-4 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#F07825] mr-2" />
                  Quick Concept Self-Check
                </h4>
                <p className="text-xs sm:text-sm text-neutral-200 font-semibold">
                  {activeLesson.quizQuestion.question}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {activeLesson.quizQuestion.options.map((opt: string, i: number) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl border border-neutral-800 text-xs text-neutral-300 bg-neutral-900/60"
                    >
                      <span className="font-bold text-[#F07825] mr-2">{String.fromCharCode(65 + i)}.</span>
                      {opt}
                    </div>
                  ))}
                </div>
                <div className="pt-2 text-xs text-neutral-400 border-t border-neutral-800">
                  <span className="font-semibold text-[#F07825]">Correct Answer: </span>
                  Option {activeLesson.quizQuestion.correctAnswer} &mdash; {activeLesson.quizQuestion.explanation}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
