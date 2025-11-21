import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-20 px-6">
      <div
        className="
          max-w-5xl mx-auto text-center 
          rounded-3xl shadow-xl border border-gray-200
          bg-white 
          dark:bg-gray-800 dark:border-gray-700
          p-14 
          transition-all duration-300
        "
      >
        {/* Heading */}
        <h1
          className="
            text-5xl font-extrabold mb-6 leading-tight
            bg-gradient-to-r from-blue-500 to-indigo-500 
            bg-clip-text text-transparent
          "
        >
          Learn Smarter. Achieve Faster.
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore curated courses for Class 9 to 12 and college-level learning with
          high-quality, easy-to-understand study material designed to boost your skills.
        </p>
      </div>
    </section>
  );
};

export default Hero;
