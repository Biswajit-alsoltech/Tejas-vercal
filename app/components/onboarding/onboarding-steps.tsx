"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import pillIcon from "../../assets/icons/pill.svg";

const steps = [
  {
    title: "App Based Onboarding",
    desc: "Download our app and register as a retailer or wholesaler within minutes.",
  },
  {
    title: "Submit Business Details",
    desc: "Provide your drug license, GST number and basic business details.",
  },
  {
    title: "Verification",
    desc: "Our backend team verifies your information and completes KYC swiftly.",
  },
  {
    title: "Start Ordering",
    desc: "Place your first order and get it shipped within 24 hours of approval.",
  },
];

const OnboardingSteps = () => {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase text-sm font-semibold tracking-widest text-app">
            How it works
          </p>
          <h2 className="text-4xl font-extrabold mt-4 text-gray-900 leading-tight">
            Your Journey to Start Ordering
          </h2>
          <p className="text-sm mt-4 text-gray-600 max-w-md">
            Seamless onboarding experience to place your first order with confidence.
          </p>

          <div className="mt-10 flex items-center gap-8">
            <Link href="/contact" className="group">
              <Button className="rounded-xl bg-app hover:bg-app/90 transition shadow-md">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200" />
              </Button>
            </Link>
            <div>
              <p className="text-sm text-gray-600">Call us directly</p>
              <a
                href="tel:+917980066405"
                className="hover:text-blue-800 transition text-sm font-semibold text-gray-800"
                aria-label="Call +91 7980066405"
              >
                +91 7980066405
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col gap-14 before:absolute before:top-2 before:left-5 before:h-full before:w-[4px] before:bg-gradient-to-b before:from-app before:to-blue-400 before:rounded-full"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-14 group"
            >
              {/* Icon Container */}
              <div className="absolute left-0 top-1">
                <div className="w-10 h-10 bg-white border-2 border-app rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-blue-200 transition-transform duration-300">
                  <Image src={pillIcon} alt="step icon" className="w-5 h-5 group-hover:invert" />
                </div>
              </div>

              {/* Text Content */}
              <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-app border border-gray-100">
                <h4 className="text-lg font-bold text-gray-800 group-hover:text-app transition">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
