import { AppSidebar } from "@/app/components/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/app/components/ui/sidebar";

import React from "react";
import HeaderDashBoard from "./HeaderDashBoard";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <HeaderDashBoard />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashBoardLayout;
