import React from "react";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ onSearch }) {
  return (
    <nav className="backdrop-blur-lg bg-white/60 shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto p-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-gray-900">
          <GraduationCap className="w-7 h-7 text-sky-600" />
          SkillBridge
        </Link>

        <div className="flex items-center gap-4">

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search courses..."
            onChange={(e) => onSearch?.(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-300 bg-white/80 
                       backdrop-blur-sm focus:outline-none focus:ring-2 
                       focus:ring-sky-400 transition"
          />

          {/* Dashboard Button */}
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-xl bg-sky-600 text-white font-semibold
                       hover:bg-sky-700 transition shadow-md"
          >
            Dashboard
          </Link>

        </div>
      </div>
    </nav>
  );
}
