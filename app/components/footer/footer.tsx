"use client";

import Image from "next/image";
import Link from "next/link";
import brandLogoDark from "../../assets/icons/brandLogoDark.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
import facebook from "../../assets/icons/facebook.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-white/70 backdrop-blur-md border-t border-gray-200 text-gray-800">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16 space-y-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Link href="/">
            <Image src={brandLogoDark} alt="Tejas Pharma" height={50} />
          </Link>

          <p className="max-w-md text-sm font-medium text-gray-700">
            One of India&apos;s largest and fastest growing healthcare products
            distribution chain.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { href: "https://www.linkedin.com/company/tejas-pharma/", icon: linkedin, alt: "LinkedIn" },
              { href: "https://www.instagram.com/tejaspharma_official/", icon: instagram, alt: "Instagram" },
              { href: "https://www.facebook.com/tejaspharma/", icon: facebook, alt: "Facebook" },
              { href:"https://wa.me/917980066405?text=Hi%2C%20I%20am%20interested%20in%20your%20services", icon: whatsapp, alt: "WhatsApp" },
            ].map(({ href, icon, alt }) => (
              <Link key={alt} href={href} target="_blank">
                <Image src={icon} alt={alt} className="w-9 h-9 hover:scale-110 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid md:grid-cols-2 gap-6 border-t border-gray-200 pt-10">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {[
              { label: "About Us", href: "/" },
              { label: "Blogs", href: "/" },
              { label: "Careers", href: "/careers" },
              { label: "Terms & Conditions", href: "/" },
              { label: "Privacy Policy", href: "/" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="hover:text-app transition-colors">
                {label}
              </Link>
            ))}
            {/* <Link
              href="#"
              target="_blank"
            >
              <Button className="rounded-lg bg-app text-white hover:shadow-lg hover:bg-app/90 transition-all duration-300">
                Get the app
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>
            </Link> */}
          </div>

          {/* Email */}
          <div className="flex gap-3 items-center justify-start md:justify-end text-sm">
            <Mail className="text-app" />
            <Link
              href="mailto:sales@tejaspharma.in"
              className=" hover:text-app transition"
            >
              sales@tejaspharma.in
            </Link>
          </div>
        </div>

        {/* Mobile Call To Action */}
        <div className="md:hidden flex items-center justify-between border-t border-gray-200 pt-6">
          <Link href="/contact" className="group">
            <Button className="rounded-lg bg-app text-white hover:bg-app/90 transition-all">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </Button>
          </Link>
          <div className="text-right text-sm text-app">
            <p>Give us a call</p>
            <a
              href="tel:+917980066405"
              className="hover:text-blue-800 transition font-semibold"
              aria-label="Call +91 7980066405"
            >
              +91 7980066405
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
