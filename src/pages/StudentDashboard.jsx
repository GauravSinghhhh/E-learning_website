import React from "react";
import { BookOpen, Clock, Medal, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentDashboard() {
  const enrolledCourses = [
    {
      id: 1,
      title: "Mathematics Fundamentals",
      progress: 65,
      lastOpened: "2 days ago",
    },
    {
      id: 2,
      title: "Physics Problem Solving",
      progress: 40,
      lastOpened: "5 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Student Dashboard</h1>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-lg mb-8"
      >
        <h2 className="text-2xl font-semibold mb-2">Welcome Back, Student!</h2>
        <p className="text-gray-600">Track your learning and continue where you left off.</p>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-5 bg-white rounded-xl shadow flex items-center gap-4">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <div>
            <p className="text-xl font-bold">{enrolledCourses.length}</p>
            <p className="text-gray-600 text-sm">Courses Enrolled</p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl shadow flex items-center gap-4">
          <Clock className="w-8 h-8 text-purple-600" />
          <div>
            <p className="text-xl font-bold">12 hrs</p>
            <p className="text-gray-600 text-sm">Time Spent</p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl shadow flex items-center gap-4">
          <TrendingUp className="w-8 h-8 text-green-600" />
          <div>
            <p className="text-xl font-bold">72%</p>
            <p className="text-gray-600 text-sm">Overall Progress</p>
          </div>
        </div>
      </div>

      {/* Enrolled Courses */}
      <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {enrolledCourses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-5 rounded-xl shadow border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-sm text-gray-600 mb-3">Last opened: {course.lastOpened}</p>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-2 text-gray-700">Progress: {course.progress}%</p>

            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Continue
            </button>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
        <div className="p-5 bg-white rounded-xl shadow w-fit flex items-center gap-3 border">
          <Medal className="w-8 h-8 text-yellow-500" />
          <p className="text-gray-700">Completed 5 Courses 🎉</p>
        </div>
      </div>
    </div>
  );
}
