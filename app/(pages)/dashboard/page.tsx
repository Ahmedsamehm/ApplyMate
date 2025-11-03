import { Metadata } from "next";
import JobStatusCard from "./_components/JobStatusCard";

import ApplicationsList from "./_components/ApplicationsList";
import { Suspense } from "react";
import { Spinner } from "@/app/components/ui/spinner";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Dashboard | ApplyMate",
  description: "Access your ApplyMate dashboard to manage job applications, monitor progress, update your profile, and explore new opportunities in one place.",
};

const DashBoard = () => {
  return (
    <div className="flex flex-col flex-1 p-4 gap-8">
      {/* Job Status Cards */}
      <Suspense fallback={<Spinner className="flex justify-center items-center min-h-[80vh] mx-auto size-20" />}>
        <JobStatusCard />

        {/* Job Applications List */}

        <ApplicationsList />
      </Suspense>
    </div>
  );
};

export default DashBoard;
