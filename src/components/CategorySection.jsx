import React from "react";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";

export default function CategorySection({
  title,
  subtitle,
  list = [],
  onOpen,
  onEnroll,
  categoryKey,
}) {
  return (
    <section className="max-w-7xl mx-auto mt-20 px-4">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h2>

        {subtitle && (
          <p className="text-gray-500 dark:text-gray-300 mt-1">{subtitle}</p>
        )}

        {/* Decorative Underline - Lighter Colors */}
        <div className="w-20 h-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full mt-3"></div>
      </motion.div>

      {/* Course Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {list.map((c) => (
          <CourseCard
            key={c.id}
            c={c}
            onOpen={onOpen}
            onEnroll={onEnroll}
            categoryKey={categoryKey}
          />
        ))}
      </motion.div>
    </section>
  );
}