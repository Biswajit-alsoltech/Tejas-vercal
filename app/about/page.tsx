"use client";

import { motion } from "framer-motion";
import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import FooterBanner from "../components/footer/banner";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full min-h-[80vh] flex items-center justify-center px-6 md:px-16 bg-gradient-to-br from-white to-[#eaf8ff] overflow-hidden">
        {/* Background Glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-blue-300 opacity-20 blur-[160px] rounded-full top-[-120px] left-[-120px] z-0"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-[#0a2540] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            India&apos;s Leading Healthcare Distributor
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <strong className="text-blue-600 font-semibold">One-stop solution</strong> for authentic, discounted and timely medical product delivery – designed for businesses that value trust, speed, and support.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/media/who_are_we.jpeg"
              alt="Our team"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2020 in Kolkata, we specialize in reliable healthcare distribution. Backed by third-generation industry knowledge and genuine partnerships, we ensure timely and trusted delivery to businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-16 bg-[#f9fbfd]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a2540] text-center mb-12">What Makes Us Different</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Our Model",
                img: "/media/our-model.png",
                list: [
                  "B2B only – No retail",
                  "6 days/week – 10 hours/day",
                  "Call support & ",
                  "In-person (face-to-face) support and sales"
                ],
              },
              {
                title: "Authenticity & Trust",
                img: "/media/authenticity.png",
                list: [
                  "Only genuine medicines",
                  "Sourced from CFAs or official reps",
                  "5-step genuineness verification process",
                  "Secure packaging",
                ],
              },
              {
                title: "Our USP",
                img: "/media/our-usp.png",
                list: [
                  "PAN India delivery",
                  "Min 10% discount on all products",
                  "No upper discount limit",
                  "Timely doorstep delivery",
                ],
              },
              {
                title: "Return Policy",
                img: "/media/return-policy.png",
                list: [
                  "Easy returns within 14 days",
                  "Full customer support for disputes resolution",

                ],
              },
            ].map((block, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={block.img}
                  alt={block.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 mb-4"
                />

                <h4 className="text-lg font-semibold text-blue-700 mb-3">{block.title}</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                  {block.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterBanner />
      <Footer />
    </>
  );
};

export default AboutUs;
