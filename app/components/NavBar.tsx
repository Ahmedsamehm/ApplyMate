import React from "react";

import Link from "next/link";
import { Button } from "./ui/button";

import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  return (
    <header>
      <nav className="sticky top-0 z-50 bg-[#06090D]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={50} height={50} className="size-full object-cover" />

            <Link href="/" className="text-xl font-bold text-white `">
              ApplyMate
            </Link>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#features" className="text-slate-300 hover:text-white transition">
              Features
            </a>
            <a href="#countries" className="text-slate-300 hover:text-white transition">
              Opportunities
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">
              Pricing
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition">
              About
            </a>
          </div>
          <ModeToggle />
          <Link href="/auth">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0">Sign In</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
