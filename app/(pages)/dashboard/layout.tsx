import React from "react";
import DashBoardLayout from "./_components/DashBoardLayout";
import JobApplicationsProvider from "@/app/context/JobApplicationsProvider ";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <JobApplicationsProvider>
        <DashBoardLayout>{children}</DashBoardLayout>
      </JobApplicationsProvider>
    </section>
  );
};

export default layout;
