"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

import doctorImage from "../../assets/images/female-doctor.jpg";
import pharmacistImage from "../../assets/images/male-doctor.jpg";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-24 px-6 md:px-12 bg-white overflow-hidden -mt-12"
    >
      {/* Modern background elements (hidden on small screens) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-white z-0" />

        {/* Geometric shapes – visible only on md+ */}
        <motion.div
          className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-100/30 blur-[80px] hidden md:block"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-cyan-100/30 blur-[80px] hidden md:block"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-600">
              One of India&apos;s Leading Healthcare Distributors
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              One Stop Solution to
            </span>{" "}
            <br />
            Medicine Procurement
            <br />
            <span className="text-blue-600">And Warehousing</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            One of India&apos;s Largest and Fastest Growing Healthcare Products Distribution Chain
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/contact">
              <Button className="px-8 py-4 text-base font-medium rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all">
                Get In Touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>

            <Link href="/about">
              <Button
                variant="outline"
                className="px-8 py-4 text-base font-medium rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Images and decorative shapes (hidden on small screens) */}
        <motion.div className="relative h-[500px] hidden md:block" style={{ y }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main image */}
            <motion.div
              className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={pharmacistImage}
                alt="Healthcare professional"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Secondary image */}
            <motion.div
              className="absolute -bottom-10 -left-10 w-56 h-72 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20"
              whileHover={{ x: -5, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={doctorImage}
                alt="Medical professional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-100/50 backdrop-blur-sm border-2 border-white shadow-lg flex items-center justify-center z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-4 h-4 rounded-full bg-blue-500" />
            </motion.div>

            <motion.div
              className="absolute bottom-20 -right-8 w-16 h-16 rounded-full bg-cyan-100/50 backdrop-blur-sm border-2 border-white shadow-lg flex items-center justify-center z-0"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      {/* <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
    <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center p-1">
      <motion.div
        className="w-1 h-2 rounded-full bg-gray-400"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  </motion.div> */}
    </section>

  );
};

export default Hero;