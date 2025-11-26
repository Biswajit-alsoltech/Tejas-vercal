"use client";

import Image from "next/image";
import brandLogo from "../../assets/icons/brandLogo.svg";
import { ArrowRight, Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useEffect, useState } from "react";

const Navbar = () => {
  const scrollDirection = useScrollDirection();
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalNavbarHeight = 112;

  return (
    <>
      <div
        className={`fixed w-full z-50 transition-transform duration-300 ${scrollDirection === "up" && !isTop ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        {/* Top Contact Bar */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm py-2 px-4 backdrop-blur-md">
          <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
             <a
              href="tel:+917980066405"
              className="hover:text-blue-800 transition"
              aria-label="Call +91 7980066405"
            >
              +91 7980066405
            </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" aria-hidden="true" />
              <Link
                href="mailto:sales@tejaspharma.in"
                className="hover:text-app transition"
                aria-label="Send email to sales@tejaspharma.in"
              >
                sales@tejaspharma.in
              </Link>
            </div>

          </div>
        </div>

        {/* Main Navbar */}
        <header className="backdrop-blur-md bg-white/70 shadow-md border-b border-white/20">
          <div className="w-full mx-auto px-4 md:px-8 flex h-20 max-w-screen-2xl items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image src={brandLogo} alt="Tejas Pharma" priority height={40} />
            </Link>

            {/* Desktop Links */}
            <nav className="hidden md:flex gap-8 items-center">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Blogs", href: "/blogs" },
                { label: "Contact Us/Support", href: "/contact" },
                { label: "Career", href: "/careers" },
                { label: "Reach", href: "/reach" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {label}
                </Link>
              ))}
              {/* <Link href="/contact">
                <Button className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all duration-300">
                  Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link> */}
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-700">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="p-6 pt-10 bg-white">
                  <SheetHeader className="text-left">
                    <div className="flex flex-col gap-5 text-base font-medium text-gray-800">
                      <Link href="/">Home</Link>
                      <Link href="/about">About Us</Link>
                      <Link href="/blogs">Blogs</Link>
                      <Link href="/contact">Contact Us/Support</Link>
                      <Link href="/careers">Career</Link>
                      <Link href="/reach">Reach</Link>
                      {/* <Link href="/contact">
                        <Button className="mt-4 w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
                          Get In Touch
                        </Button>
                      </Link> */}
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer */}
      <div style={{ height: `${totalNavbarHeight}px` }} />
    </>
  );
};

export default Navbar;
