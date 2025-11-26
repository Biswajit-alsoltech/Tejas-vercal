"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar/navbar";
import FooterBanner from "../components/footer/banner";
import Footer from "../components/footer/footer";
import { motion } from "framer-motion";
import { BASE_URL } from "@/utils/constant";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string | null;
  created_at: string;
}

// ✅ Utility function to remove HTML tags from content
function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/blogs`)
      .then((res) => setBlogs(res.data.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Latest Blogs
        </h1>

        {/* ✅ Loading State */}
        {loading ? (
          <div className="text-center text-gray-600 py-20 text-lg">
            Loading blogs...
          </div>
        ) : blogs.length === 0 ? (
          // ✅ Empty State
          <div className="text-center text-gray-500 py-20 text-lg">
            No blogs available at the moment. Please check back later.
          </div>
        ) : (
          // ✅ Blog Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* ✅ Blog Image or Placeholder */}
                <div className="overflow-hidden">
                  {blog.image ? (
                    <img
                      src={`${BASE_URL}/${blog.image}`}
                      alt={blog.title}
                      width={600}
                      height={208}
                      className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                    />

                  ) : (
                    <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                      No Image Available
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {blog.title}
                  </h2>

                  {/* ✅ Show plain text from content, limited to 2 lines */}
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {stripHtml(blog.content)}
                  </p>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <FooterBanner />
      <Footer />
    </>
  );
}
