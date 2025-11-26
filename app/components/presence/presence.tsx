import Image from "next/image";
import map from "../../assets/images/india.svg";
import Link from "next/link";

const states = [
  "Patna",
  "Bangaluru",
  "Lucknow",
  "Delhi",
  "Darbhanga",
  "Gorakhpur",
  "Goa",
  "Gurugram",
  "Bhilwara",
  "Siliguri",
  "Silchar",
  "Kolkata",
  "Raipur",
  "Ranchi",
  "Prayagraj",
  "Ahmedabad",
  "Mumbai",
  "+420 more"
]

const Presence = () => {
  return (
    <section className="w-full relative bg-app text-white">
      <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl pt-20 pb-20 text-left z-20 relative">
        <p className="text-left text-3xl font-semibold font-epilogue mt-6">
          Our Presence PAN India
        </p>
        <p className="text-left text-sm mt-6 ">
          Sneak peek into our presence across the country
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-8 md:gap-y-20 mt-20">
          {states.map((state, index) => (
            <Link href={`https://www.google.com/search?q=${state === "+420 more"? "India" : state}`} key={index} className="font-medium" target="__blank">{state}</Link>
          ))}
        </div>
      </section>
      <Image src={map} alt="map" className="absolute right-0 top-0 h-full opacity-20 invert z-10"/>
    </section>
  )
}

export default Presence