"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import userIcon from "../../assets/icons/user.svg";

const testimonials = [
  {
    id: 1,
    name: "Riya Mehta",
    designation: "Pharmacy Owner, Delhi",
    content:
      "Tejas Pharma’s service is outstanding! They offer timely deliveries and excellent margins. I’ve been able to expand my offerings thanks to them.",
    rating: 5,
  },
  {
    id: 2,
    name: "Amit Kumar",
    designation: "Retailer, Kolkata",
    content:
      "Reliable and trustworthy. Their support team is always just a call away. A great partner for long-term growth.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sonal Singh",
    designation: "Distributor, Mumbai",
    content:
      "Their wide range of SKUs and consistent service have made our job much easier. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Prakash Verma",
    designation: "Wholesaler, Lucknow",
    content:
      "I’ve been in the business for over a decade, and Tejas Pharma stands out for their professional approach and fast logistics.",
    rating: 5,
  },
  {
    id: 5,
    name: "Neha Joshi",
    designation: "Pharmacist, Pune",
    content:
      "Excellent margins and a very responsive sales team. They make it easy to do business, even in a competitive market.",
    rating: 4,
  },
  {
    id: 6,
    name: "Rajesh Patel",
    designation: "Medical Store Owner, Ahmedabad",
    content:
      "Their product quality and packaging are top-notch. Customers trust the brands they distribute.",
    rating: 5,
  },
  {
    id: 7,
    name: "Anita Sharma",
    designation: "Healthcare Consultant, Jaipur",
    content:
      "Tejas Pharma provides consistent service and valuable insights. Their partnership has helped several of my clients grow.",
    rating: 4,
  },
  {
    id: 8,
    name: "Deepak Rana",
    designation: "Distributor, Chandigarh",
    content:
      "They’re a reliable partner for anyone in pharmaceutical distribution. Their inventory and communication are excellent.",
    rating: 5,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1 mt-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.964c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.964a1 1 0 00-.364-1.118L2.34 9.391c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.964z" />
      </svg>
    ))}
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Testimonials = () => {
  return (
    <section className="w-full bg-[#FBF6EA] py-10 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
            What People Say About Us
          </h2>
          <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
            Hear directly from our clients, distributors and leadership on how Tejas Pharma is shaping India’s pharma distribution landscape.
          </p>
        </motion.div>

        {/* Scrollable Testimonials Section */}
        <div
          className="overflow-y-auto custom-scrollbar pr-2"
          style={{
            maxHeight: "22rem", // height to fit approx 2 rows
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-3 rounded-md border border-gray-200 shadow hover:shadow-md transition text-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={userIcon}
                    alt={t.name}
                    className="w-7 h-7 rounded-full bg-gray-100 p-1"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800 text-xs">{t.name}</h4>
                    <p className="text-gray-500 text-[10px]">{t.designation}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-xs mb-1 line-clamp-4">{t.content}</p>
                <StarRating count={t.rating} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
