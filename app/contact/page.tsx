import ContactForm from "../components/contact/contact-form";
import FooterBanner from "../components/footer/banner";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <ContactForm />
      <FooterBanner />
      <Footer />
    </main>
  );
}