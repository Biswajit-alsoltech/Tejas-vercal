"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    title: "1,200+",
    body: "Wholesellers",
    footer: "Fulfilling supply from us",
  },
  {
    title: "10,000+",
    body: "Retailers",
    footer: "Delivering to customers",
  },
  {
    title: "15,000+",
    body: "Unique SKUs",
    footer: "Always ready for delivery",
  },
  {
    title: "30+",
    body: "Years",
    footer: "In pharma business",
  },
  {
    title: "50+",
    body: "Retail Pharma Chains",
    footer: "Serviced actively",
  },
  {
    title: "500+",
    body: "Districts Covered",
    footer: "Across India",
  },
];

type StatsCardProps = {
  title: string;
  body: string;
  footer: string;
  delay: number;
};

const StatsCard = ({ title, body, footer, delay }: StatsCardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const numericPart = parseInt(title.replace(/[^0-9]/g, ""), 10);
  const hasPlus = title.includes("+");

  return (
    <motion.div
      ref={ref}
      className="rounded-xl border border-gray-100 bg-white p-6 shadow-md hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <h3 className="text-3xl font-bold text-app">
        {inView ? (
          <>
            <CountUp end={numericPart} duration={2} separator="," />
            {hasPlus && "+"}
          </>
        ) : (
          "0"
        )}
      </h3>
      <p className="text-lg font-medium text-gray-800 mt-2">{body}</p>
      <p className="text-sm text-gray-500 mt-1">{footer}</p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Impact in Numbers
        </h2>
        <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto">
          We&apos;ve consistently delivered results in India&apos;s dynamic pharma supply chain.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
