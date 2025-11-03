import React from "react";
import DashBoardLayout from "./_components/DashBoardLayout";
import JobApplicationsProvider from "@/app/context/JobApplicationsProvider ";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import QueryProvider from "./_components/QueryProvider";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <section>
        <JobApplicationsProvider>
          <DashBoardLayout>{children}</DashBoardLayout>
        </JobApplicationsProvider>
      </section>
    </QueryProvider>
  );
};

export default layout;
