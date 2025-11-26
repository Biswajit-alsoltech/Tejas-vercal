"use client";

import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/917980066405?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Glassy Button */}
      <div className="flex items-center gap-3 bg-white/30 backdrop-blur-lg shadow-lg rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-white/20">
        <img
          src="https://img.icons8.com/ios-filled/50/25D366/whatsapp.png"
          alt="WhatsApp"
          className="w-7 h-7"
        />
        <span className="text-sm font-medium text-green-700 hidden sm:inline-block">
          Order on WhatsApp
        </span>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
