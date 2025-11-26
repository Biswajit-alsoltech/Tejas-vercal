import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "./hero.css"; // Make sure this CSS includes `.careers-hero`

const CareersHero = () => {
  return (
    <section className="w-full min-h-[600px] md:h-[600px] relative text-white careers-hero">
      <section className="h-full w-full mx-auto px-4 md:px-8 max-w-screen-2xl pt-24 pb-20 flex items-center">
        <div className="w-full md:max-w-2xl p-10 rounded-2xl backdrop-blur-sm bg-black/40 border border-white/10 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
            Join Our Growing Team of{" "}
            <span className="text-blue-500">Smart People</span>
          </h1>

          <p className="mt-6 text-lg text-white/90 font-medium leading-relaxed">
            Work at one of India&apos;s largest and fastest growing healthcare products
            <br className="hidden md:block" /> distribution chains.
          </p>

          <div className="mt-10">
            <Link href="/contact" className="group">
              <Button className="px-6 py-3 text-base font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md">
                Join Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200" />
              </Button>
            </Link>
          </div>
        </div>

      </section>
    </section>
  );
};

export default CareersHero;
