"use client"; 

import React, { useEffect, useState, useCallback } from "react";
import axios from "axios"; 
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { BLOGGER_URL } from "@/utils/constant";
import Link from "next/link";

type BloggerEntry = {
    id: { $t: string };
    title: { $t: string };
    link: { rel: string; href: string }[];
    content: { $t: string };
    published: { $t: string };
};


type BlogPost = {
    id: string;
    title: string;
    link: string;
    content: string;
    published: string;
};


const extractImageUrl = (htmlContent: string): string => {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = htmlContent.match(imgRegex);
    return match ? match[1] : "https://via.placeholder.com/1200x630.png?text=TejasPharma+Blog";
};

const createSnippet = (htmlContent: string, maxLength: number = 110): string => {
    const plainText = htmlContent.replace(/<[^>]*>/g, "").replace(/\s+/g, ' ').trim();
    return plainText.length <= maxLength ? plainText : plainText.substring(0, maxLength) + "...";
};


const SkeletonCard = () => (
    <div className="animate-pulse rounded-xl bg-white p-4 shadow-lg">
        <div className="h-48 rounded-lg bg-gray-300"></div>
        <div className="mt-4 space-y-3">
            <div className="h-4 w-1/3 rounded bg-gray-300"></div>
            <div className="h-6 w-full rounded bg-gray-300"></div>
            <div className="h-4 w-full rounded bg-gray-300"></div>
            <div className="h-4 w-4/5 rounded bg-gray-300"></div>
        </div>
    </div>
);


const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    const imageUrl = extractImageUrl(post.content);
    const snippet = createSnippet(post.content);
    const formattedDate = new Date(post.published).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <Link
            href={`/blogs/${post.id}`}
            className="group block overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
        >
            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={imageUrl}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="p-6">
                <p className="mb-2 text-sm font-medium text-indigo-500">{formattedDate}</p>
                <h2 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-indigo-600">
                    {post.title || "Untitled Post"}
                </h2>
                <p className="text-gray-600 leading-relaxed">{snippet}</p>
                <div className="mt-4 flex items-center text-sm font-semibold text-indigo-600">
                    Read More →
                </div>
            </div>
        </Link>
    );
};




const BlogPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

    const fetchPosts = useCallback(async () => {
  setStatus("loading");
  try {
    // Call your Next.js API route instead of Blogger directly
    const response = await axios.get("/api/blogs");

    // API returns { blogs: [...] }
    const allEntries: BloggerEntry[] = response.data.blogs.flatMap(
      (blog: any) => blog.feed.entry || []
    );

    const formatted = allEntries.map((entry) => ({
      id: entry.id.$t.split("-").pop() || "",
      title: entry.title.$t,
      link: entry.link.find((l) => l.rel === "alternate")?.href || "#",
      content: entry.content.$t,
      published: entry.published.$t,
    }));

    const sortedPosts = formatted.sort(
      (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
    );

    setPosts(sortedPosts);
    setStatus("success");
  } catch (err) {
    console.error("Error fetching posts:", err);
    setStatus("error");
  }
}, []);


    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const renderContent = () => {
        switch (status) {
            case 'loading':
                return (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Render 6 skeleton cards while loading */}
                        {Array.from({ length: 6 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    </div>
                );
            case 'error':
                return (
                    <div className="text-center py-20">
                        <p className="text-xl text-red-500 mb-4">Oops! Something went wrong.</p>
                        <button
                            onClick={fetchPosts}
                            className="rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-indigo-500 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                );
            case 'success':
                if (posts.length === 0) {
                    return <p className="text-center text-gray-600 py-20 text-xl">No blog posts found.</p>;
                }
                return (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <BlogPostCard key={post.id} post={post} />
                        ))}
                    </div>
                );
        }
    };

    return (
        <main className="relative flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-50 to-gray-100">
            <Navbar />
            <div className="w-full max-w-7xl container mx-auto px-4 py-12 pt">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Insights & Articles
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                        Stay updated with the latest news, trends, and stories from our team.
                    </p>
                </div>
                {renderContent()}
            </div>
            <Footer />
        </main>
    );
};

export default BlogPage;