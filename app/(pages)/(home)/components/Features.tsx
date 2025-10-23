import { Briefcase, FileJson, Globe, MapPin, Search, TrendingUp } from "lucide-react";
import React from "react";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Multi-Platform Search",
      desc: "Search across Indeed, LinkedIn, and Glassdoor simultaneously",
    },
    {
      icon: Briefcase,
      title: "Full Job Descriptions",
      desc: "Get complete job details with all requirements and benefits",
    },
    {
      icon: TrendingUp,
      title: "Track Applications",
      desc: "Monitor all your applications in one organized dashboard",
    },
    {
      icon: FileJson,
      title: "Export Data",
      desc: "Export your applications as JSON or CSV for Excel",
    },
    {
      icon: MapPin,
      title: "Location Filters",
      desc: "Filter jobs by location, remote status, and more",
    },
    {
      icon: Search,
      title: "Advanced Search",
      desc: "Find exactly what you're looking for with smart filters",
    },
  ];
  return (
    <section id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose ApplyMate?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className=" border border-border bg-card/40 backdrop-blur-sm overflow-hidden    rounded-lg p-8 hover:border-blue-400/80 hover:bg-card/10 transition outline-2 dark:outline-0 "
              >
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
