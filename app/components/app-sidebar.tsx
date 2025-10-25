"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/app/components/ui/sidebar";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/Logo.png";
import { getUser } from "../utils/userStorage";
// This is sample data.
const data = {
  items: [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    // {
    //   title: "Jobs",
    //   url: "/dashboard/jobs",
    // },
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
  const pathname = usePathname();

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
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1>{getUser()}</h1>
        </div>
        <Link href="/" className="text-foreground hover:underline">
          <Button size="sm" variant="outline">
            Logout
          </Button>
        </Link>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
