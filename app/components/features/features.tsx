"use client";
import { ArrowRight, Globe, Boxes } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Globe className="w-6 h-6 text-app" />,
    title: "Reach",
    description: "Serving pan India with seamless delivery network.",
  },
  {
    icon: <Boxes className="w-6 h-6 text-app" />,
    title: "Stock",
    description: "Over 15,000+ genuine medicine samples ready.",
  },
];

const Features = () => {
  return (
    <section className="w-full  max-w-screen-2xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-10">
      {/* LEFT TEXT */}
      <motion.div
        className="flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
          We Are Tejas Pharma
        </h2>
        <p className="text-base text-gray-600 max-w-xl">
          Established in 2020, Tejas Pharma aims to build a cohesive healthcare product
          distribution network across India, leveraging technology for enhanced efficiency
          and value in the healthcare ecosystem.
        </p>

        <div className="flex gap-6 items-center mt-8">
          <Link href="/contact">
            <Button className="rounded-lg bg-app hover:shadow-md transition-all duration-300">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <div>
            <p className="text-sm text-gray-500">Give us a call</p>

            <a
              href="tel:+917980066405"
              className="hover:text-blue-800 transition text-sm font-semibold text-app "
              aria-label="Call +91 7980066405"
            >
              +91 7980066405
            </a>
          </div>
        </div>
      </motion.div>

      {/* RIGHT CARDS */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {features.map((item, i) => (
          <div
            key={i}
            className=" rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-3">{item.icon}</div>
            <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
