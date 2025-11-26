"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import reachBanner from "../../public/media/reach-banner.png";

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const features = [
    {
        icon: "🧪",
        title: "2500+ SKUs",
        desc: "Extensive range of branded medicines & healthcare essentials.",
    },
    {
        icon: "📊",
        title: "Real-Time Management",
        desc: "Instant stock & order tracking with intuitive dashboards.",
    },
    {
        icon: "🚚",
        title: "Fast Delivery",
        desc: "Nationwide reach across 500+ districts with reliable logistics.",
    },
    {
        icon: "🤝",
        title: "Massive Network",
        desc: "Trusted by 1200+ wholesalers and 10,000+ retailers.",
    },
];


export default function ReachPage() {
    return (
        <>
            <Navbar />
            <main className="text-gray-800 bg-white">

                {/* 🚀 Hero */}
                <section className="relative bg-gradient-to-br  from-blue-50 to-white py-16 px-6 md:px-16 overflow-hidden">
                    <div className="relative max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
                                Reach by Tejas Pharma
                            </h1>
                            <p className="text-lg text-gray-700 mb-8">
                                Next-gen B2B procurement & supply chain platform for pharma retailers & wholesalers.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium shadow-lg transition"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={reachBanner}
                                alt="Reach by Tejas Pharma"
                                className="rounded-2xl shadow-2xl"
                                placeholder="blur"
                            />
                        </motion.div>
                    </div>
                </section>

      
                <section className="py-20 px-6 md:px-16 bg-white">
                    <div className="max-w-screen-xl mx-auto text-center">
                        <motion.h2
                            className="text-4xl font-extrabold text-blue-800 mb-12"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Why Choose Reach?
                        </motion.h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {features.map((feat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeIn}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-white border border-blue-100 rounded-xl shadow hover:shadow-lg transition"
                                >
                                    <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl text-blue-700 font-bold">
                                        {feat.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{feat.title}</h3>
                                    <p className="text-gray-600">{feat.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </section>

                
                <section className="bg-gradient-to-br from-blue-50 to-white py-24 px-6 md:px-16">
                    <div className="relative max-w-screen-xl mx-auto">
                        <motion.h2 className="text-4xl font-extrabold text-blue-900 mb-6 text-center" initial="hidden" whileInView="visible" variants={fadeIn} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            Platform Overview
                        </motion.h2>
                        <motion.p className="text-gray-700 text-center max-w-2xl mx-auto mb-16 text-lg" initial="hidden" whileInView="visible" variants={fadeIn} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}>
                            Reach unifies procurement, inventory, and logistics into a smart B2B dashboard — delivering speed, scale, and efficiency to pharmaceutical operations.
                        </motion.p>
                        <div className="grid md:grid-cols-2 gap-10">
                            {[{
                                title: "Core Capabilities",
                                items: [
                                    "2500+ SKUs at your fingertips",
                                    "Simple UI for rapid order placement",
                                    "Smart pricing & bulk discounts",
                                    "Deliveries across 500+ districts",
                                    "Real-time stock & order visibility",
                                    "Fast KYC & onboarding"
                                ],
                                icon: "✔️",
                                color: "blue"
                            },
                            {
                                title: "Business Advantages",
                                items: [
                                    "Faster and streamlined workflows",
                                    "Clearer stock control",
                                    "Improved profit margins",
                                    "Collaborations with top pharmacy chains",
                                    "Trusted by 30k+ businesses"
                                ],
                                icon: "🚀",
                                color: "green"
                            }].map((col, idx) => (
                                <motion.div
                                    key={idx}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeIn}
                                    transition={{ delay: idx * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 hover:shadow-2xl transition"
                                >
                                    <h3 className="text-2xl font-bold text-blue-800 mb-6">{col.title}</h3>
                                    <ul className="space-y-4">
                                        {col.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-700">
                                                <span className={`text-${col.color}-600 mt-1`}>{col.icon}</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

               
                <section className="bg-white py-24 px-6 md:px-16 overflow-hidden">
                    <div className="relative max-w-screen-xl mx-auto">
                        <motion.h2 className="text-4xl font-extrabold text-blue-900 mb-12 text-center" initial="hidden" whileInView="visible" variants={fadeIn} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            Getting Started
                        </motion.h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Create Account", icon: "📝", desc: "Sign up on the Reach platform to get started." },
                                { title: "Submit Details", icon: "📄", desc: "Upload your drug license & GST for verification." },
                                { title: "Fast KYC", icon: "⚡", desc: "Complete verification—typically within hours." },
                                { title: "Place Orders", icon: "🚚", desc: "Start ordering. We ship within 24 hours!" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-blue-50/60 rounded-xl p-6 border border-blue-100 shadow hover:shadow-lg transition-all"
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeIn}
                                    transition={{ delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h4 className="text-xl font-bold text-blue-800 mb-1">{item.title}</h4>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center mt-16">
                            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition">
                                Start Now
                            </Link>
                        </div>
                    </div>
                </section>

          
                <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-20 px-6 md:px-16 text-white text-center">
                    <motion.h2 className="text-4xl font-bold mb-4" initial="hidden" whileInView="visible" variants={fadeIn} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        Get in Touch
                    </motion.h2>
                    <motion.p className="mb-6 text-lg" initial="hidden" whileInView="visible" variants={fadeIn} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}>
                        Need more info? Our team is ready to assist you.
                    </motion.p>
                    <motion.a href="tel:+917980066405" className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition" initial="hidden" whileInView="visible" variants={fadeIn} transition={{ delay: 0.4, duration: 0.6 }} viewport={{ once: true }}>
                        Call +91 79800 66405
                    </motion.a>
                </section>

            </main>
            <Footer />
        </>
    );
}
