import React from "react";
import { BiLogoShopify } from "react-icons/bi";
import { FaAmazon } from "react-icons/fa";

function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-screen px-4 sm:px-8 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image hero.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="font-bold text-3xl sm:text-5xl font-serif">
            LET'S EXPLORE UNIQUE CLOTHES
          </h1>
          <p className="text-gray-300 mt-4 text-sm sm:text-base font-sans">
            Live for the influential and innovative fashion!
          </p>
          <button className="bg-gray-900 text-white py-2 px-6 mt-6 rounded hover:bg-yellow-500">
            Shop Now
          </button>
        </div>
      </section>

      {/* Brands Section */}
      <section className="my-6">
        <ul className="bg-yellow-400 font-bold flex flex-wrap justify-center gap-9 p-4 text-2xl sm:text-base lg:text-2xl" >
          <li className="flex items-center">
            Shopify <BiLogoShopify className="ml-2" />
          </li>
          <li className="flex items-center">
            Amazon <FaAmazon className="ml-2" />
          </li>
          <li>OBEY</li>
        </ul>
      </section>
    </div>
  );
}

export default Hero;
