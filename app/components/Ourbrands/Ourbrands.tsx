import React from "react";
import Image from "next/image";
import Link from "next/link";

const brands = [
  { src: "/media/abbot-healthcare-2.jpg", alt: "Abbot Healthcare", href: "https://www.abbott.in" },
  { src: "/media/cipla.svg", alt: "Cipla", href: "https://www.cipla.com" },
  { src: "/media/Dabur.png", alt: "Dabur", href: "https://www.dabur.com" },
  { src: "/media/Dr-Reddy.svg", alt: "Dr Reddy", href: "https://www.drreddys.com" },
  { src: "/media/hindustan uniliver.png", alt: "Hindustan Unilever", href: "https://www.hul.co.in" },
  { src: "/media/jhonson.svg", alt: "Johnson & Johnson", href: "https://www.jnj.com" },
  { src: "/media/Mankind.svg", alt: "Mankind", href: "https://www.mankindpharma.com" },
  { src: "/media/msnlabs.png", alt: "MSN Labs", href: "https://www.msnlabs.com" },
  { src: "/media/sunpharma.png", alt: "Sun Pharma", href: "https://sunpharma.com" },
  { src: "/media/zuventus.png", alt: "Zuventus", href: "https://www.zuventus.com" },
];

const Ourbrands = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Top Marketer Companies We Deal With
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Proudly dealing with top marketer companies setting benchmarks in healthcare
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 mb-10">
          {brands.map((brand, idx) => (
            <a
              key={idx}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg border border-gray-100 transition-all duration-300 flex items-center justify-center h-[100px]"
            >
              <div className="relative w-[120px] h-[60px]">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>

        {/* See All Button */}
        <Link href="/brands">
          <button className="px-6 py-2 border border-app text-app rounded-md font-medium hover:bg-app hover:text-white transition">
            See All Brands →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Ourbrands;
