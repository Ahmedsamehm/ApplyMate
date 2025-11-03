"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/app/components/ui/breadcrumb";
import { Separator } from "@/app/components/ui/separator";
import { SidebarTrigger } from "@/app/components/ui/sidebar";
import { Spinner } from "@/app/components/ui/spinner";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderDashBoard = () => {
  const { user, isLoaded } = useUser();

  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 ">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
      <Breadcrumb className="flex justify-between w-full">
        <BreadcrumbList>
          {paths.map((segment, index) => {
            const href = "/" + paths.slice(0, index + 1).join("/");
            const isLast = index === paths.length - 1;

            return (
              <div key={href} className="flex items-center">
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="capitalize">{segment}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild className="capitalize">
                      <Link href={href}>{segment}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>

                {!isLast && <BreadcrumbSeparator />}
              </div>
            );
          })}
        </BreadcrumbList>
        {!isLoaded ? <Spinner /> : <h1>Hello {user?.fullName}</h1>}
      </Breadcrumb>
    </header>
  );
};

export default HeaderDashBoard;
