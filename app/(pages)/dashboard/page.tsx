import { Metadata } from "next";
import JobStatusCard from "./_components/JobStatusCard";

import ApplicationsList from "./_components/ApplicationsList";

export const metadata: Metadata = {
  title: "Dashboard | ApplyMate",
  description: "Access your ApplyMate dashboard to manage job applications, monitor progress, update your profile, and explore new opportunities in one place.",
};

const DashBoard = () => {
  return (
    <div className="flex flex-col flex-1 p-4 gap-8">
      {/* Job Status Cards */}

      <JobStatusCard />

      {/* Job Applications List */}

      <ApplicationsList />
    </div>
  );
};

export default DashBoard;
