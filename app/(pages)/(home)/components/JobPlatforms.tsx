import { Avatar, AvatarImage } from "@/app/components/ui/avatar";
import { Briefcase, Globe } from "lucide-react";

import React from "react";

const JobPlatforms = () => {
  const jobPlatFormsDetails = [
    {
      image: "/indeed.svg",
      platform: "Indeed",
      code: "indeed",
      desc: "The world's largest job site with millions of job listings across all industries and experience levels",
      jobs: "8,000,000+",
      coverage: "Global",
    },
    {
      image: "/linkedin.svg",
      platform: "LinkedIn",
      code: "linkedin",
      desc: "Professional networking platform with extensive job listings and company insights",
      jobs: "2,000,000+",
      coverage: "Global",
    },
    {
      image: "/glassdoor.svg",
      platform: "Glassdoor",
      code: "glassdoor",
      desc: "Job search with company reviews, salaries, and interview insights from employees",
      jobs: "1,500,000+",
      coverage: "Global",
    },
  ];
  return (
    <section id="platforms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className=" backdrop-blur-md   rounded-lg p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Job Platforms We Search</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobPlatFormsDetails.map((platform, i) => (
              <div
                key={i}
                className=" border border-border bg-card/40 backdrop-blur-sm overflow-hidden    rounded-lg p-8 hover:border-blue-400/80 hover:bg-card/10 transition outline-2 dark:outline-0 "
              >
                <div className="flex  items-center gap-2 ">
                  <Avatar>
                    <AvatarImage src={platform.image} className="object-contain  size-full" />
                  </Avatar>

                  <h3 className="text-xl font-bold mb-2">
                    {platform.platform} <span className="text-slate-400 text-sm">{platform.code}</span>
                  </h3>
                </div>
                <p className="text-slate-400 text-sm mb-4">{platform.desc}</p>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    <span>{platform.jobs}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span>{platform.coverage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPlatforms;
