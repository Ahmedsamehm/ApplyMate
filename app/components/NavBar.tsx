"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#countries", label: "Opportunities" },
    { href: "#pricing", label: "Pricing" },
    // { href: "#", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-(--background)/95 backdrop-blur-sm border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/Logo.png" alt="ApplyMate logo" width={48} height={48} priority className="object-contain size-10 md:size-fit " />
            <span className="text-md sm:text-xl font-bold text-foreground">ApplyMate</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          <ModeToggle />
          <Link href="/login">
            <Button className="bg-primary hover:bg-[color-mix(in oklch, var(--primary), black 10%)] text-primary-foreground border-0">Sign In</Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 border-t border-border" : "max-h-0"}`}>
        <div className="flex flex-col px-6 py-3 space-y-3 text-sm bg-background">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
