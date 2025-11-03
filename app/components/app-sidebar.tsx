"use client";
import React, { useEffect } from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/app/components/ui/sidebar";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/Logo.png";

import { useUser } from "@clerk/nextjs";
import { Spinner } from "./ui/spinner";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
// This is sample data.
const data = {
  items: [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Jobs",
      url: "/dashboard/jobs",
    },
    {
      title: "Add Job",
      url: "/dashboard/addjob",
    },
    // {
    //   title: "Settings",
    //   url: "/settings",
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut, isLoaded: isAuthLoaded } = useAuth();
  const pathname = usePathname();
  useEffect(() => {
    if (user) {
      const userData = {
        user_id: user.id,
        name: user.fullName,
        email: user.emailAddresses[0]?.emailAddress,
      };

      axios.post("/api/auth", userData, { withCredentials: true });
    }
  }, [isSignedIn]);
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex flex-row items-center">
        <Image src={logo} alt="ApplyMate logo" width={48} height={48} priority className="object-contain size-10 md:size-fit " />
        <h1>ApplyMate</h1>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        <Separator />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter className="flex flex-row  justify-between items-center">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src={user?.imageUrl} alt={user?.firstName || "user"} />
            <AvatarFallback>{user?.firstName?.charAt(0)}</AvatarFallback>
          </Avatar>
          {!isLoaded ? <Spinner /> : <h1>{user?.fullName}</h1>}
        </div>

        <Button disabled={!isLoaded || !isAuthLoaded} onClick={() => signOut()} size="sm" variant="outline" className="cursor-pointer">
          Logout
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
