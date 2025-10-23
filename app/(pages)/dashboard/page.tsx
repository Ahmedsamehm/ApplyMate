import { Metadata } from "next";
import React from "react";
import JobStatusCard, { JobStatusCardTypes } from "./_components/JobStatusCard";
import { Hourglass, UserRoundCheck, UserSearch, UserX } from "lucide-react";
import ApplicationsList, { JobApplication } from "./_components/ApplicationsList";

export const metadata: Metadata = {
  title: "Dashboard | ApplyMate",
  description: "Access your ApplyMate dashboard to manage job applications, monitor progress, update your profile, and explore new opportunities in one place.",
};

const jobStatusData: JobStatusCardTypes[] = [
  {
    title: "Applied",
    icon: <UserSearch />,
    color: "text-white",
    description: "your number of job applications",
    action: "View Offer",
    content: "1",
    footer: "Last updated 2 days ago",
  },
  {
    title: "Accepted",
    icon: <UserRoundCheck />,
    color: "text-green-600 ",
    description: "Your application has been approved",
    action: "View Offer",
    content: "1",
    footer: "Last updated 2 days ago",
  },

  {
    title: "Pending",
    icon: <Hourglass />,
    color: "text-yellow-600",
    description: "Waiting for recruiter response",
    action: "Withdraw Application",
    content: "1",
    footer: "Last updated 1 day ago",
  },
  {
    title: "Rejected",
    icon: <UserX />,
    color: "text-red-600",
    description: "Your application was not successful",
    action: "View Details",
    content: "1 ",
    footer: "Last updated 5 days ago",
  },
];
const jobApplications: JobApplication[] = [
  {
    title: "Accepted Applications",
    color: "text-green-600",

    status: "Accepted",
    date: "2 Oct 2023",
    position: "UI/UX Designer",
    companyName: "Pixel Labs",
  },
  {
    title: "Pending Applications",
    color: "text-yellow-600",
    date: "2 Oct 2023",
    status: "Pending",

    position: "Frontend Developer",
    companyName: "TechFlow",
  },
  {
    title: "Rejected Applications",
    color: "text-red-600",
    date: "2 Oct 2023",
    status: "Rejected",

    position: "Digital Marketer",
    companyName: "Brandify",
  },
];
const DashBoard = () => {
  return (
    <div className="flex flex-col flex-1 p-4 gap-8">
      {/* Job Status Cards */}
      <div className="grid w-full max-w-7xl mx-auto gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {jobStatusData.map((data, index) => (
          <JobStatusCard key={index} {...data} />
        ))}
      </div>

      {/* Job Applications List */}
      <div className="grid w-full max-w-7xl mx-auto gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {jobApplications.map((data, index) => (
          <ApplicationsList key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
