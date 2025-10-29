"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { LogOut, Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import logo from "@/public/Logo.png";
import { useAuth, useUser } from "@clerk/nextjs";
import { Spinner } from "./ui/spinner";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useAuth();

  const links = [
    { href: "#features", label: "Features" },
    { href: "#countries", label: "Opportunities" },
    { href: "#pricing", label: "Pricing" },
    { href: "/dashboard", label: "dashboard", disabled: !isSignedIn },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-(--background)/95 backdrop-blur-sm border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-1">
            <Image src={logo} alt="ApplyMate logo" width={48} height={48} priority className="object-contain size-10 md:size-fit " />
            <span className="text-md sm:text-xl font-bold text-foreground">ApplyMate</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className={`text-muted-foreground hover:text-foreground transition-colors capitalize "${link.disabled ? "hidden" : ""}`}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Dark / Light Mode Toggle */}
          <ModeToggle />

          {!isLoaded ? (
            <Spinner />
          ) : (
            <div className="hidden md:flex items-center gap-3">
              {isSignedIn ? (
                <div className="flex items-center gap-2">
                  <Image src={user.imageUrl} alt={user.firstName || "user"} width={32} height={32} className="object-contain rounded-full" />
                  <span className="text-sm font-semibold text-foreground">{user.fullName}</span>

                  <Button variant="ghost" className="cursor-pointer" onClick={() => signOut()}>
                    <LogOut />
                  </Button>
                </div>
              ) : (
                <Link href="/sign-in">
                  <Button>Sign In</Button>
                </Link>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)} className="text-foreground" aria-label="Toggle menu" variant="ghost">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
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
          {isSignedIn ? (
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                <Image src={user.imageUrl} alt={user.firstName || "user"} width={32} height={32} className="object-contain rounded-full" />
                <span className="text-sm font-semibold text-foreground">{user.fullName}</span>
              </div>
              <Button variant="ghost" className="cursor-pointer" onClick={() => signOut()}>
                <LogOut />
              </Button>
            </div>
          ) : (
            <Link href="/sign-in">
              <Button className="w-full">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
