import { Button } from "@/app/components/ui/button";
import React from "react";

const Hero = () => {
  const chooses = ["Remote", "Work from home", "Part-time", "Full-time", "Internship"];
  return (
    <section >
      <div className="flex justify-center items-center min-h-[90vh] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-blue-400">Track your job</span> applications all in one place
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Our platform helps you manage your job search across multiple platforms. Track applications, monitor status, and export your data with ease.
          </p>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 justify-center">
            {chooses.map((tag) => (
              <Button key={tag} className="px-4 py-2 border border-blue-400/80 rounded-lg text-blue-400 text-sm bg-blue-400/5 backdrop-blur-md hover:bg-blue-400/10 transition">
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
