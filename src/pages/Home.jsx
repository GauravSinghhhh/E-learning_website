import React from "react";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import courses from "../data/courses";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleOpen = (course) => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pb-20">
      <Hero />

      <CategorySection
        title="Class 9 Courses"
        subtitle="Strengthen fundamentals with easy-to-understand concepts."
        list={courses.class9}
        categoryKey="class9"
        onOpen={handleOpen}
      />

      <CategorySection
        title="Class 10 Courses"
        subtitle="Master the concepts that matter most for board exams."
        list={courses.class10}
        categoryKey="class10"
        onOpen={handleOpen}
      />

      <CategorySection
        title="Class 11 Courses"
        subtitle="Advanced learning with concept-driven explanations."
        list={courses.class11}
        categoryKey="class11"
        onOpen={handleOpen}
      />

      <CategorySection
        title="Class 12 Courses"
        subtitle="Exam-oriented study material with crystal-clear clarity."
        list={courses.class12}
        categoryKey="class12"
        onOpen={handleOpen}
      />

      <CategorySection
        title="College Courses"
        subtitle="Skill-oriented learning designed for real-world careers."
        list={courses.college}
        categoryKey="college"
        onOpen={handleOpen}
      />
    </div>
  );
}
