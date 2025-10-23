import React from "react";
import DashBoardLayout from "./_components/DashBoardLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <DashBoardLayout>{children}</DashBoardLayout>
    </section>
  );
};

export default layout;
