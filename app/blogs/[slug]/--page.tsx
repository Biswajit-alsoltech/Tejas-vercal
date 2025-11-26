import axios from "axios";
import { BASE_URL } from "@/utils/constant";
import Navbar from "@/app/components/navbar/navbar";
import FooterBanner from "@/app/components/footer/banner";
import Footer from "@/app/components/footer/footer";

interface Blog {
  slug: string;
  title: string;
  image: string;
  content: string;
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${BASE_URL}/api/blogs`, { cache: "force-cache" });
    const data = await res.json();

    return data.data.map((blog: Blog) => ({
      slug: blog.slug,
    }));
  } catch (err) {
    console.error("Failed to fetch blog slugs:", err);
    return [];
  }
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  let blog: Blog | null = null;

  try {
    const res = await fetch(`${BASE_URL}/api/blogs/slug/${params.slug}`, { cache: "force-cache" });
    const data = await res.json();
    blog = data.data;
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        <p className="text-lg">Blog not found.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${BASE_URL}/${blog.image}`}
            alt={blog.title}
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
            {blog.title}
          </h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <article
          className="prose prose-sm sm:prose base md:prose-lg lg:prose-xl max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>


      <FooterBanner />
      <Footer />
    </>
  );
}
