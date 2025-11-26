"use client";

import React, { useEffect, useState } from "react";

type BlogPost = {
  title: string;
  link: string;
  content: string;
  published: string;
};

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://biswajitbloggernew.blogspot.com/feeds/posts/default?alt=json")
      .then((res) => res.json())
      .then((data) => {
        const entries = data.feed.entry || [];
        const formatted = entries.map((entry: any) => ({
          title: entry.title.$t,
          link: entry.link.find((l: any) => l.rel === "alternate").href,
          content: entry.content.$t,
          published: entry.published.$t,
        }));
        setPosts(formatted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="mb-6 p-4 border rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-green-700">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
            </h2>
            <p className="text-sm text-gray-500 mb-2">{new Date(post.published).toDateString()}</p>
            <div
              className="text-gray-700 text-sm line-clamp-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-2 inline-block hover:underline"
            >
              Read More →
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogPage;
