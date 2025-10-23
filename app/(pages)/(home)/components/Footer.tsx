import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background/5 backdrop-blur-900/10 border-t py-12  outline-1 ">
      <p className="text-center text-muted-foreground   ">
        &copy; 2025 ApplyMate. All rights reserved. Developed by {""}
        <Link href="https://www.linkedin.com/in/ahmedsamehazouz/" target="_blank" className="text-[var(--foreground)] hover:underline">
          Ahmed Sameh Azouz
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
