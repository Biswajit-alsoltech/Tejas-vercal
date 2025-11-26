import BlogPage from "../components/Blog/BlogPage";
import ApplicationForm from "../components/careers/ApplicationForm";
import CareerForm from "../components/careers/career-form";
import Features from "../components/features/features";
import FooterBanner from "../components/footer/banner";
import Footer from "../components/footer/footer";
import CareersHero from "../components/hero/careers-hero";
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/navbar";
import OnboardingSteps from "../components/onboarding/onboarding-steps";
import Presence from "../components/presence/presence";
import Reading from "../components/reading/reading";
import Stats from "../components/stats/stats";
import Testimonials from "../components/testimonials/testimonials";
import Values from "../components/values/values";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <CareersHero />
      {/* <CareerForm /> */}
      <ApplicationForm/>
      <FooterBanner />
      <Footer />
    </main>
  );
}