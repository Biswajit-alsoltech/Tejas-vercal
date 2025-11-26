"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import FooterBanner from "../components/footer/banner";
import Footer from "../components/footer/footer";
import img2 from "../../public/media/sunpharma.png"

const brands = [
  { name: "A. Menarini India Pvt. Ltd.", url: "https://www.menariniapac.com", img: "/media/a-menarini-india.jpg" },
  { name: "Abbott Healthcare Pvt Ltd", url: "https://www.abbott.in", img: "/media/abbot-healthcare-2.jpg" },
  { name: "Abbott India Ltd.", url: "https://www.abbott.in", img: "/media/abbot-healthcare-2.jpg" },
  { name: "Acme Generics Pvt. Ltd.", url: "https://acmegenerics.in", img: "/media/acme-generics.png" },
  { name: "Aglowmed Limited", url: "https://aglowmed.com", img: "/media/aglowmed.gif" },
  { name: "Aimil Ltd.", url: "https://www.aimil.com", img: "/media/aimil.png" },
  { name: "Ajanta Pharma Limited", url: "https://www.ajantapharma.com", img: "/media/ajanta-pharma.png" },
  { name: "Akumentis Healthcare Limited", url: "https://akumentishealthcare.com", img: "/media/akumentis-healthcare.gif" },
  { name: "Albert David Limited", url: "https://www.albertdavidindia.com", img: "/media/albert-david.png" },
  { name: "Alcon Inc.", url: "https://www.alcon.com", img: "/media/alcon-2.jpg" },
  { name: "Alembic Pharmaceuticals Ltd", url: "https://alembicpharmaceuticals.com", img: "/media/alembic-pharmaceuticals.WEBP" },
  { name: "Alkem Laboratories Limited", url: "https://www.alkemlabs.com", img: "/media/alkem-laboratories.png" },
  { name: "Allergen", url: "https://www.abbvie.com/allergan.html?utm_source=allergan_redirect&utm_medium=referral", img: "/media/allergen.SVG" },
  { name: "Alniche Life Sciences", url: "https://www.alniche.com", img: "/media/alniche-life-sciences.WEBP" },
  { name: "Alteus Biogenics Pvt Ltd", url: "https://www.alteus.in", img: "/media/alteus-biogenics.png" },
  { name: "Alvio Pharmaceuticals Pvt Ltd", url: "https://alviopharma.com", img: "/media/alvio-pharmaceuticals.SVG" },
  { name: "Amrutanjan Health Care Ltd", url: "https://www.amrutanjan.com", img: "/media/amrutanjan-health-care.png" },
  { name: "Anglo French Drugs And Industries Ltd.", url: "https://www.afdil.com", img: "/media/anglo-french-drugs.SVG" },
  { name: "Apex Pharma", url: "https://apexpharmaeg.com", img: "/media/apex-pharma.png" },
  { name: "Aristo Pharma", url: "https://www.aristopharma.co.in", img: "/media/aristo-pharma.png" },
  { name: "Astrazeneca", url: "https://www.astrazeneca.com", img: "/media/astrazeneca.png" },
  { name: "Bal Pharma Limited", url: "https://www.balpharma.com", img: "/media/bal-pharma.png" },
  { name: "Bayer Zydus Pharma Ltd", url: "https://www.bayerzyduspharma.com/en/", img: "/media/bayer-zydus-pharma.SVG" },
  { name: "Bengal Chemicals & Pharmaceuticals Limited", url: "https://bengalchemicals.co.in", img: "/media/bengal-chemicals.png" },
  { name: "Biocon Limited", url: "https://www.biocon.com", img: "/media/biocon.png" },
  { name: "Biological E Ltd", url: "https://www.biologicale.com", img: "/media/biological-e.png" },
  { name: "Blisson Health", url: "https://www.blisson.health", img: "/media/blisson-health.GIF" },
  { name: "Blue Cross Laboratories", url: "https://bluecrosslabs.com", img: "/media/blue-cross-laboratories.SVG" },
  { name: "Boehringer Ingelheim", url: "https://www.boehringer-ingelheim.com", img: "/media/boehringer-ingelheim.jpg" },
  { name: "British Biologicals", url: "https://www.britishbiologicals.com", img: "/media/british-biologicals.png" },
  { name: "Burnet Pharmaceuticals Pvt Ltd", url: "https://www.burnetpharmaceuticals.com", img: "/media/burnet-pharmaceuticals.AVIF" },
  { name: "Cachet Pharmaceuticals Pvt Ltd", url: "https://www.cachetindia.com", img: "/media/cachet.jpg" },
  { name: "Cadila Pharmaceuticals Ltd", url: "https://www.cadilapharma.com", img: "/media/cadila.jpg" },
  { name: "Caplet India Pvt Ltd", url: "https://capletindia.com", img: "/media/caplet-india.png" },
  { name: "Cipla Limited", url: "https://www.cipla.com", img: "/media/cipla.SVG" },
  { name: "Cipla Generic", url: "https://www.cipla.com/generic-product-list", img: "/media/cipla.svg" },
  { name: "Concept Pharmaceuticals Ltd", url: "https://conceptpharma.com", img: "/media/concept-pharmaceuticals.png" },
  { name: "Corona Remedies Pvt Ltd", url: "https://www.coronaremedies.com", img: "/media/corona-remedies.png" },
  { name: "D.D.Pharmaceuticals Pvt.Ltd.", url: "https://ddpharmapvtltd.com", img: "/media/dd-pharmaceuticals.jpg" },
  { name: "Dabour India Pvt Ltd", url: "https://www.dabur.com", img: "/media/dabur.png" },
  { name: "Devyam Medicare", url: "https://devyam.in", img: "/media/devyam-medicare.png" },
  { name: "Dey'S Medical", url: "https://www.deysmedical.com", img: "/media/deys-medical.jpg" },
  { name: "Dr. Reddy’S Laboratories Ltd.", url: "https://www.drreddys.com", img: "/media/dr-reddys.SVG" },
  { name: "East India Pharmaceutical Works Limited", url: "https://eastindiapharma.org", img: "/media/east-india-pharma.jpg" },
  { name: "Elder Laboratories Ltd.", url: "https://www.elderpharma.com", img: "/media/elder-laboratories.png" },
  { name: "Eli Lilly And Company", url: "https://www.lilly.com", img: "/media/eli-lilly.png" },
  { name: "Emcee Pharmaceuticals (P) Ltd.", url: "https://www.emceepharma.com", img: "/media/emcee-pharmaceuticals.png" },
  { name: "Emcure Pharma Ltd", url: "https://www.emcure.com", img: "/media/emcure-pharma.WEBP" },
  { name: "Entod Pharmaceuticals Ltd", url: "https://entodpharma.com", img: "/media/entod-pharmaceuticals.WEBP" },
  { name: "Eris Lifesciences", url: "https://eris.co.in", img: "/media/eris-lifesciences.png" },
  { name: "Eskag Pharma Pvt. Ltd.", url: "https://www.eskag.in", img: "/media/eskag-pharma.png" },
  { name: "Fdc India Ltd.", url: "https://www.fdcindia.com", img: "/media/fdc-india.SVG" },
  { name: "Franco-Indian Pharmaceuticals Pvt. Ltd.", url: "https://www.francoindian.com", img: "/media/franco-indian.png" },
  { name: "Fusion Health Care Pvt Ltd", url: "https://www.fusionhealthc.com", img: "/media/fusion-health-care.png" },
  { name: "Galderma Sa", url: "https://www.galderma.com", img: "/media/galderma.jpg" },
  { name: "Geno Pharmaceuticals Pvt. Ltd.", url: "https://genopharma.com", img: "/media/geno-pharmaceuticals.jpg" },
  { name: "German Lifesciences Private Limited", url: "", img: "/media/german-lifesciences.png" },
  { name: "Glaxo Smithkline Pvt. Ltd.", url: "https://www.gsk.com/en-gb", img: "/media/glaxo-smithkline.png" },
  { name: "Glenmark Pharmaceuticals Ltd", url: "https://glenmarkpharma.com", img: "/media/glenmark-logo.jpg" },
  { name: "Goddres Pharmaceuticals Pvt Ltd", url: "https://goddres.com", img: "/media/goddres-pharmaceuticals.png" },
  { name: "Grandcure Healthcare Pvt. Ltd.", url: "https://www.grandcure.com", img: "/media/grandcure-healthcare.png" },
  { name: "Hegde & Hegde Pharmaceutica Llp(H&H)", url: "https://www.hhpharma.com", img: "/media/hegde-hegde.jpg" },
  { name: "Hetero Healthcare Ltd.", url: "https://www.heterohealthcare.com", img: "/media/hetero-healthcare.SVG" },
  { name: "Hicks India Ltd.", url: "https://www.hicksindia.in", img: "/media/hicks-india.AVIF" },
  { name: "Himalaya Global Holdings Ltd.", url: "https://himalayawellness.in", img: "/media/himalaya-wellness.AVIF" },
  { name: "Hindustan Unilever Limited", url: "https://www.hul.co.in", img: "/media/hu.jpg" },
  { name: "Indchemie Health Specialities Pvt. Ltd.", url: "https://www.indchemie.in/Manufacturing%201.html", img: "/media/indchemie.jpg" },
  { name: "Indiabulls Pharmaceuticals Limited", url: "https://biodealpharma.com/indiabulls-pharmaceuticals/", img: "/media/indiabulls-pharmaceuticals.png" },
  { name: "Indian National Drug Co. Pvt Ltd", url: "http://indayurveda.com", img: "/media/indian-national-drug.png" },
  { name: "Indoco Remedies Ltd", url: "https://www.indoco.com", img: "/media/indoco-remedies.png" },
  { name: "Innovcare Lifesciences Pvt. Ltd.", url: "https://www.innovcare.in", img: "/media/innovcare.jpg" },
  { name: "Intas Pharmaceuticals Ltd.", url: "https://www.intaspharma.com", img: "/media/intas-pharmaceuticals.png" },
  { name: "Ipca Laboratories Ltd", url: "https://www.ipca.com", img: "/media/ipca-laboratories.SVG" },
  { name: "Jagsanpal Pharmaceuticals Ltd", url: "https://www.jagsonpal.com", img: "/media/jagsonpal.jpg" },
  { name: "Johnson & Johnson Ltd", url: "https://www.jnj.com", img: "/media/johnson-johnson.SVG" },
  { name: "Jubilant Lifescience Limited", url: "https://www.jubl.com", img: "/media/jubilant-lifescience.png" },
  { name: "Juggat Pharma", url: "https://www.jagdale.com/products-juggat-pharma", img: "/media/juggat-pharma.png" },
  { name: "Jupiter Pharmaceuticals Ltd", url: "https://jupiterpharma.com", img: "/media/jupiter-pharmaceuticals.png" },
  { name: "Kc Laboratories", url: "https://www.kclaboratories.com", img: "/media/kc-laboratories.png" },
  { name: "Karnataka Antibiotics & Pharmaceuticals Limited", url: "https://www.kaplindia.com", img: "/media/karnataka-antibiotics.jpg" },
  { name: "Klm Laboratories", url: "https://www.klmlab.com", img: "/media/klm-laboratories.png" },
  { name: "Kontest Chemicals Ltd", url: "", img: "/media/kontest-chemicals.png" },
  { name: "Koye Pharmaceuticals Pvt Ltd", url: "https://www.koye.co", img: "/media/koye-pharmaceuticals.png" },
  { name: "La Renon Healthcare Pvt. Ltd.", url: "https://www.larenon.com", img: "/media/la-renon-healthcare.png" },
  { name: "Leeford Healthcare Ltd", url: "https://www.leeford.in", img: "/media/leeford-healthcare.png" },
  { name: "Liveasy", url: "https://liveasyproducts.com", img: "/media/liveasy.SVG" },
  { name: "Liveon Healthcare Pvt. Ltd.", url: "https://liveonhealthcare.com", img: "/media/liveon-healthcare.png" },
  { name: "Lloyd Healthcare Pvt Ltd", url: "https://www.lloydhealthcare.org", img: "/media/lloyd-healthcare.png" },
  { name: "Lupin Limited", url: "https://www.lupin.com", img: "/media/lupin.jpg" },
  { name: "Macleods Pharmaceuticals", url: "https://www.macleodspharma.com/about", img: "/media/macleods-pharmaceuticals.JPEG" },
  { name: "Mankind Pharma", url: "https://www.mankindpharma.com", img: "/media/mankind-pharma.SVG" },
  { name: "Martin & Harris Laboratories Ltd", url: "https://martinharrislabs.com", img: "/media/martin-harris.png" },
  { name: "Medley Pharmaceuticals", url: "https://www.medleylab.com", img: "/media/medley-pharmaceuticals.jpg" },
  { name: "Merck Ltd", url: "https://www.merckgroup.com/en", img: "/media/merck.png" },
  { name: "Meyer Organics Pvt. Ltd.", url: "https://meyer.co.in", img: "/media/meyer-organics.png" },
  { name: "Micro Labs Limited", url: "https://www.microlabsltd.com", img: "/media/micro-labs.jpg" },
  { name: "Modi-Mundi Pharma Private Limited", url: "https://www.mundipharma.com", img: "/media/mundi-pharma.jpg" },
  { name: "Dr.Morepen Homehealth", url: "https://www.morepen.com", img: "/media/dr-morepen.png" },
  { name: "Msd", url: "https://www.msd.com", img: "/media/msd.SVG" },
  { name: "Msn Laboratories Private Limited", url: "https://www.msnlabs.com", img: "/media/msn-laboratories.png" },
  { name: "Natco Pharma", url: "https://www.natcopharma.co.in", img: "/media/natco-pharma.png" },
  { name: "Neon Healthcare", url: "https://neonhealthcare.com", img: "/media/neon-healthcare.png" },
  { name: "Novartis India", url: "https://www.novartis.com/in-en/", img: "/media/novartis-india.SVG" },
  { name: "Novo Nordisk", url: "https://www.novonordisk.com", img: "/media/novo-nordisk.png" },
  { name: "Nutricia International Private Limited", url: "https://www.nutricia.com", img: "/media/nutrica.jpg" },
  { name: "Oaknet Healthcare", url: "https://oaknethealthcare.com", img: "/media/oaknet-healthcare.SVG" },
  { name: "Ozone Pharmaceuticals Ltd.", url: "https://www.ozonepharma.com", img: "/media/ozone-pharmaceuticals.png" },
  { name: "Procter & Gamble", url: "https://in.pg.com", img: "/media/procter_and_gamble.jpg" },
  { name: "Palsons Derma", url: "https://palsonsderma.com", img: "/media/palsons-derma.WEBP" },
  { name: "Panacea Biotec Ltd.", url: "https://www.panaceabiotec.com", img: "/media/panacea-biotec.png" },
  { name: "Pfizer Limited", url: "https://www.pfizerltd.co.in", img: "/media/pfizer.SVG" },
  { name: "Pharmed Limited", url: "https://pharmedlimited.com", img: "/media/pharmed.WEBP" },
  { name: "Piramal Ltd", url: "https://www.piramal.com", img: "/media/piramal.SVG" },
  { name: "Pulse Pharmaceuticals Pvt. Ltd.", url: "https://www.pulsepharma.net", img: "/media/pulse-pharmaceuticals.png" },
  { name: "Sun Pharma (Ranbaxy)", url: "https://sunpharma.com", img: "/media/sunpharma.png" },
  { name: "Raptakos Brett & Co Ltd", url: "https://www.raptakos.com", img: "/media/raptakos-brett.png" },
  { name: "Reckitt Benckiser Healthcare India Private Limited", url: "https://www.reckitt.com", img: "/media/reckitt-benckiser.SVG" },
  { name: "Reliance Life Sciences Pvt. Ltd.", url: "https://www.rellife.com", img: "/media/reliance-life-sciences.jpg" },
  { name: "Roche", url: "https://www.roche.com", img: "/media/roche.png" },
  { name: "Rpg Lifesciences", url: "https://www.rpglifesciences.com/website/index.php", img: "/media/rpg-lifesciences.png" },
  { name: "Salud Care India Pvt Ltd", url: "https://saludcare.co.in", img: "/media/salud-care.png" },
  { name: "Samarth Life Sciences Pvt. Ltd.", url: "https://samarthlife.com", img: "/media/samarth-life-sciences.png" },
  { name: "Sandoz India Pvt Ltd", url: "https://www.sandoz.com", img: "/media/sandoz.SVG" },
  { name: "Sanofi S.A", url: "https://www.sanofi.com/en", img: "/media/sanofi.png" },
  { name: "Serdia Pharmaceuticals India Pvt Ltd", url: "", img: "/media/serdia-pharmaceuticals.png" },
  { name: "Serum Institute Of India", url: "https://www.seruminstitute.com", img: "/media/serum-institute.png" },
  { name: "Servier India Private Limited", url: "https://servier.in", img: "/media/servier-india.SVG" },
  { name: "Shine Pharmaceuticals Ltd", url: "https://shinepharma.com", img: "/media/shine-pharmaceuticals.png" },
  { name: "Signova Healthcare Pvt. Ltd.", url: "https://www.signovapharma.com", img: "/media/signova-healthcare.png" },
  { name: "Sun Pharma Ltd", url: "https://sunpharma.com", img: "/media/sunpharma1.png" },
  { name: "Sunways India Pvt Ltd.", url: "https://sunways.com", img: "/media/sunways-india.GIF" },
  { name: "Symbiotic Therapeutics Pvt Ltd", url: "https://symbiotictherapeutics.com", img: "/media/symbiotic-therapeutics.png" },
  { name: "Systopic Laboratories Private Limited", url: "https://www.systopic.com", img: "/media/systopic-laboratories.jpg" },
  { name: "Tablets India Ltd", url: "https://tabletsindia.com", img: "/media/tablets-india.png" },
  { name: "Torrent Pharmaceuticals Ltd", url: "https://www.torrentpharma.com", img: "/media/torrent-pharmaceuticals.SVG" },
  { name: "Troikaa Pharmaceuticals Limited", url: "https://www.troikaa.com", img: "/media/troikaa-pharmaceuticals.png" },
  { name: "Ttk Healthcare Ltd.", url: "https://ttkhealthcare.com", img: "/media/ttk-healthcare.jpg" },
  { name: "J.B. Chemicals And Pharmaceuticals Limited", url: "https://jbpharma.com", img: "/media/jb-chemicals.SVG" },
  { name: "Universal Pharmaceuticals Ltd.", url: "http://www.unipha.co.in", img: "/media/universal-pharmaceuticals.png" },
  { name: "Usv Private Limited", url: "https://www.usvindia.com", img: "/media/usv.png" },
  { name: "Wallace Pharmaceuticals Private Limited", url: "https://wallacepharma.com", img: "/media/wallace-pharmaceuticals.jpg" },
  { name: "Waterley Pharmaceuticals", url: "https://waterley.co.in", img: "/media/waterley-pharmaceuticals.jpg" },
  { name: "Win Medicare Pvt. Ltd.", url: "https://umeshmodigroup.com/win-medicare.html", img: "/media/win-medicare.png" },
  { name: "Wockhardt Limited", url: "https://www.wockhardt.com", img: "/media/wockhardt.png" },
  { name: "Zeelab Pharmacy", url: "https://zeelabpharmacy.com", img: "/media/zeelab-pharmacy.png" },
  { name: "Zuventus Healthcare Limited", url: "https://www.zuventus.com", img: "/media/zuventus-healthcare.png" },
  { name: "Zydus Healthcare Limited", url: "https://www.zydushealthcare.com", img: "/media/zydus-healthcare.png" }
];

// 🔤 Group brands alphabetically
const groupBrands = (list: typeof brands) => {
  return list.reduce((acc, brand) => {
    const letter = brand.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(brand);
    return acc;
  }, {} as Record<string, typeof brands>);
};

const BrandsPage = () => {
  const [search, setSearch] = useState("");

  // Filtered & grouped brands
  const groupedBrands = useMemo(() => {
    const filtered = brands.filter((b) =>
      b.name.toLowerCase().includes(search.toLowerCase())
    );
    return groupBrands(filtered);
  }, [search]);

  return (
    <>
      <Navbar />
    <section className="relative w-full py-28 px-4 sm:px-6 md:px-16 bg-gradient-to-br from-[#f9fbff] to-[#edf0f5] overflow-hidden">
  {/* Glowing Background Elements */}
  <motion.div
    className="absolute w-[300px] h-[300px] bg-cyan-300 opacity-20 blur-[120px] rounded-full top-[-80px] left-[-80px] z-0"
    animate={{ y: [0, -30, 0] }}
    transition={{ duration: 8, repeat: Infinity }}
  />
  <motion.div
    className="absolute w-[300px] h-[300px] bg-blue-400 opacity-20 blur-[120px] rounded-full bottom-[-80px] right-[-80px] z-0"
    animate={{ y: [0, 30, 0] }}
    transition={{ duration: 8, repeat: Infinity }}
  />

  <div className="relative z-10 max-w-screen-xl mx-auto text-center">
    {/* Heading */}
    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-snug">
      <span className="text-blue-700">Top Marketer Companies </span>We Deal With
    </h1>
    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-12">
      Dealing with 140+ certified pharma manufacturers & distributors across India.
    </p>

    {/* Search Input */}
    <div className="mb-16 flex justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="🔍 Search brand..."
          className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all text-gray-800 bg-white/60 backdrop-blur-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>

    {/* Brand Grid */}
    {Object.entries(groupedBrands)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([_, items]) => {
        const filteredItems = items.filter((brand) =>
          brand.name.toLowerCase().includes(search.toLowerCase())
        );
        if (!filteredItems.length) return null;

        return (
          <div key={_} className="mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
              {filteredItems.map((brand, idx) => (
                <motion.a
                  key={idx}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="group bg-white/50 border border-white/20 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl transition-all p-5 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border border-gray-200 shadow-sm bg-white flex items-center justify-center">
                    {brand.img ? (
  <img
    src={brand.img}
    alt={brand.name}
    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
    onError={(e) => {
      const el = e.target as HTMLImageElement;
      el.style.display = "none";
      const fallback = document.createElement("div");
      fallback.className = "text-xl font-semibold text-gray-700";
      fallback.innerText = brand.name.charAt(0).toUpperCase();
      el.parentElement?.appendChild(fallback);
    }}
  />
) : (
  <div className="text-xl font-semibold text-gray-700">
    {brand.name.charAt(0).toUpperCase()}
  </div>
)}

                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-blue-700 leading-snug break-words">
                    {brand.name}
                  </h3>
                </motion.a>
              ))}
            </div>
          </div>
        );
      })}

    {/* No Results */}
    {Object.values(groupedBrands).flat().filter((brand) =>
      brand.name.toLowerCase().includes(search.toLowerCase())
    ).length === 0 && (
      <p className="text-gray-500 text-lg mt-20">No brands found.</p>
    )}
  </div>
</section>


      <FooterBanner />
      <Footer />
    </>
  );
};

export default BrandsPage;
