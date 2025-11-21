import { Metadata } from "next";
import { Suspense } from "react";
import JobsList from "./_components/JobsList";
import { Spinner } from "@/app/components/ui/spinner";

export const metadata: Metadata = {
  title: "Jobs | Dashboard",
  description:
    "Manage and explore job listings from your ApplyMate dashboard. Search, view details, and apply to positions directly within your account.",
};

const Jobs = () => {
  return (
    <Suspense fallback={<Spinner className="flex justify-center items-center min-h-[80vh] mx-auto size-20" />}>
      <JobsList />
    </Suspense>
  );
};

export default Jobs;
