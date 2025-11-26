"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import chartIcon from "../../assets/icons/chart.svg";
import magnifyingGlass from "../../assets/icons/magnifyingGlass.svg";
import user from "../../assets/icons/user.svg";
import medal from "../../assets/icons/medal.svg";
import shield from "../../assets/icons/shieldCheck.svg";

const values = [
  {
    title: "Authenticity",
    desc: "We are individually responsible towards fulfillment of our promises made to customers and suppliers.",
    icon: shield,
  },
  {
    title: "Integrity",
    desc: "Adhering to ethical principles is at the core of our decision-making process.",
    icon: medal,
  },
  {
    title: "Customer First",
    desc: "Our customers are at the center of everything we do. Their success defines ours.",
    icon: user,
  },
  {
    title: "Transparency",
    desc: "Trust gained through transparent practices and policies forms the bedrock of our business.",
    icon: magnifyingGlass,
  },
];

const ValueCard = ({ title, desc, icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="relative group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
  >
    {/* Gradient fill from bottom */}
    <div className="absolute inset-0 z-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-gradient-to-t before:from-blue-500 before:via-blue-400 before:to-blue-300 before:transition-all before:duration-500 before:rounded-2xl group-hover:before:h-full group-hover:before:rounded-none before:z-[-1]"></div>

    <div className="relative z-10 p-6 transition-colors duration-300 group-hover:text-white">
      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shadow-inner mb-6 group-hover:bg-white/20 transition">
        <Image src={icon} alt={title} className="w-6 h-6" />
      </div>

      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);


const Values = () => {
  return (
    <section className="w-full mx-auto px-4 md:px-8 max-w-screen-2xl py-20 text-left">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Our Core Values
        </h2>
        <p className="text-sm mt-4 text-gray-600 max-w-2xl mx-auto">
          At Tejas Pharma, our values are more than words. They guide every
          decision we make to ethically serve the healthcare ecosystem.
        </p>
      </motion.div>

      {/* CTA Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-2xl mt-16 shadow-xl relative overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
        <div className="relative z-10">
          <Image src={chartIcon} alt="Growth" className="w-10 mb-4" />
          <h3 className="text-2xl font-bold">Higher Margins, Delivered!</h3>
          <p className="text-sm mt-3 max-w-xl">
            We work directly with company officials and make bulk procurements
            to ensure you get above-market discounts with zero compromise on
            quality.
          </p>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {values.map((value, index) => (
          <ValueCard key={index} {...value} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default Values;
  