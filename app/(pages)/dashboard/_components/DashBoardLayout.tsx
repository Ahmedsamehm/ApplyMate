import { AppSidebar } from "@/app/components/app-sidebar";
import { Breadcrumb, BreadcrumbPage } from "@/app/components/ui/breadcrumb";
import { Separator } from "@/app/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/app/components/ui/sidebar";
import React from "react";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <Breadcrumb className="flex justify-between flex-row  w-full">
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
            <BreadcrumbPage>User</BreadcrumbPage>
          </Breadcrumb>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashBoardLayout;
