import React from "react";
import CategorySection from "../components/CategorySection";
import courses from "../data/courses";

export default function Courses() {
  return (
    <div className="pt-20">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Explore All Courses
      </h1>

      {Object.keys(courses).map((key) => (
        <CategorySection
          key={key}
          title={key.toUpperCase() + " Courses"}
          list={courses[key]}
          categoryKey={key}
        />
      ))}
    </div>
  );
}
