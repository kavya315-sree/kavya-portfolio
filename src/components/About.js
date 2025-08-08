import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 bg-white"
    >
      <div className="max-w-xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About Me
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          Experienced IT professional with 4+ years in software engineering and business analysis. Skilled in driving process improvements and delivering effective solutions to support organizational growth.
        </p>
      </div>
    </section>
  );
};

export default About;
