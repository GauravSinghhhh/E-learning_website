import React from "react";
import { SubjectIcon } from "./Icons";

/* Lighter Category Colors */
const CATEGORY_COLORS = {
  class9:  { accent: "text-teal-600 bg-teal-50 dark:bg-teal-900/30" },
  class10: { accent: "text-green-600 bg-green-50 dark:bg-green-900/30" },
  class11: { accent: "text-violet-600 bg-violet-50 dark:bg-violet-900/30" },
  class12: { accent: "text-amber-600 bg-amber-50 dark:bg-amber-900/30" },
  college: { accent: "text-sky-700 bg-sky-50 dark:bg-sky-900/30" },
};

export default function CourseCard({ c, onOpen, categoryKey = "class9" }) {
  const colors = CATEGORY_COLORS[categoryKey] || CATEGORY_COLORS.class9;

  return (
    <article
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md 
      hover:shadow-lg hover:-translate-y-1 transition-all duration-300 
      p-6 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-start gap-4">

        {/* ICON BOX */}
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center 
          ${colors.accent} shadow-sm`}
        >
          <SubjectIcon
            subject={c.subject}
            className="w-7 h-7"
            strokeWidth={1.6}
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
            {c.title}
          </h3>

          <button
            onClick={() => onOpen(c)}
            className="mt-5 px-4 py-2 rounded-lg 
            bg-gray-50 dark:bg-gray-700
            border border-gray-200 dark:border-gray-600
            text-gray-800 dark:text-gray-200 
            hover:bg-gray-100 dark:hover:bg-gray-600
            transition shadow-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
