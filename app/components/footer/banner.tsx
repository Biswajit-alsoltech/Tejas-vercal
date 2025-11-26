import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";
import tick from "../../assets/images/tick.svg";

const FooterBanner = () => {
  return (
    <section className="relative w-full px-6 md:px-12 py-14 bg-[#ece5dd] overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 relative">
        {/* LEFT SIDE CONTENT */}
        <div className="space-y-5 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-sm text-green-700 font-semibold uppercase tracking-wider">
            Easier Ordering
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-snug">
            We’ve moved to <span className="text-green-700">WhatsApp</span>.
          </h2>
          <p className="text-zinc-700 text-base leading-relaxed max-w-md">
            Now place your pharma orders directly on WhatsApp. It&apos;s fast, secure, and app-free. Tejas Pharma is now available for quick B2B order fulfillment on chat.
          </p>

          <Link
            href="https://wa.me/917980066405?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex justify-center md:justify-start"
          >
            <Button className="mt-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 text-sm rounded-full flex items-center gap-2 shadow hover:shadow-md transition">
              <MessageCircleMore className="h-5 w-5" />
              Order Now on WhatsApp
            </Button>
          </Link>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative h-80 md:h-[22rem] flex justify-center items-center">
          <Image
            src="/media/whatsapp_chat.png"
            alt="WhatsApp Chat with Tejas Pharma"
            width={320}
            height={500}
            className="rounded-xl object-contain"
            priority
          />
        </div>
      </div>

      {/* BACKGROUND PILL IMAGE */}
      <Image
        src={tick}
        alt="Pill"
        className="absolute bottom-0 right-0 w-24 md:w-36 opacity-50 z-0 pointer-events-none"
      />
    </section>
  );
};

export default FooterBanner;
