import Features from "./components/features/features";
import FooterBanner from "./components/footer/banner";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import OnboardingSteps from "./components/onboarding/onboarding-steps";
import Ourbrands from "./components/Ourbrands/Ourbrands";
import Presence from "./components/presence/presence";
import Reading from "./components/reading/reading";
import Stats from "./components/stats/stats";
import Testimonials from "./components/testimonials/testimonials";
import Values from "./components/values/values";
import WhatsAppButton from "./components/whatsapp/WhatsAppButton";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      {/* <Presence /> */}
      <Values />
      <Testimonials />
      <OnboardingSteps />
      <Reading />
      <Ourbrands />
      <Footer />
     

    </main>
  );
  //   (
  //     // <main className="relative flex min-h-screen flex-col items-center">
  //       {/* <Navbar />
  //       <Hero />
  //       <Features />
  //       <Stats />
  //       <Presence />
  //       <Values />
  //       <Testimonials />
  //       <OnboardingSteps />
  //       <Reading /> */}

  //       {/* <Footer /> */}
  //     // </main>
  //   );
}
