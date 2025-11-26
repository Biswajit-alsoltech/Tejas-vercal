"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const readingList = [
  {
    title: "Why medicine distribution is important?",
    desc: "The importance of medicine distribution in the healthcare ecosystem.",
    author: "Eric Ries",
    link: "https://www.google.com/search?q=Why+medicine+distribution+is+important",
    image:
      "/media/what_to_read_1.jpeg"
  },
  {
    title: "How medicine distribution works?",
    desc: "How the medicine distribution process works in the healthcare ecosystem.",
    author: "Eric Ries",
    link: "https://www.google.com/search?q=How+medicine+distribution+works",
    image:
      "/media/what_to_read_2.jpeg"
  },
  {
    title: "The future of medicine distribution",
    desc: "Exploring the future landscape of pharma logistics and innovation.",
    author: "Eric Ries",
    link: "https://www.google.com/search?q=The+future+of+medicine+distribution",
    image:
      "/media/what_to_read_3.jpeg"
  }
];

const Reading = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f9fbff] to-[#edf0f5] py-20 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          What To Read Next
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">
          {readingList.map((reading, index) => (
            <motion.div
              key={index}
              className="group relative rounded-3xl p-1 bg-white/30 backdrop-blur-md shadow-lg border border-white/10 transition-transform duration-700 transform hover:scale-[1.05] hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Glass glow border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 z-0" />

              {/* Zooming Image with shine */}
              <div className="overflow-hidden rounded-t-3xl relative z-10">
                <Image
                  src={reading.image}
                  alt="Blog Thumbnail"
                  width={800}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition duration-300 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 bg-white/60 backdrop-blur-md rounded-b-3xl">
                <Link href={reading.link} target="_blank">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors relative w-full line-clamp-2">
                    {reading.title}
                    <span className="block h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full mt-1"></span>
                  </h3>

                </Link>
                <p className="text-sm mt-3 text-gray-700">{reading.desc}</p>
                <p className="text-xs mt-4 text-gray-500 italic">By {reading.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Reading;
