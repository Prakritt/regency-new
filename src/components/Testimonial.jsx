import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 max-w-6xl mx-auto rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h3 className="text-green-600 uppercase tracking-widest mb-3 font-semibold text-sm md:text-base">
            About Us
          </h3>
          <h2 className="text-4xl font-serif font-semibold mb-6 text-gray-900 leading-tight">
            Your Trusted Travel Partner
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-xl mx-auto md:mx-0 mb-6">
            Regency Nepal Travels is dedicated to crafting unforgettable
            journeys through Nepal and beyond. With personalized service and
            deep local expertise, we bring culture, nature, and adventure
            together for travel experiences you’ll cherish forever.
          </p>
          <p className="text-gray-600 italic max-w-lg mx-auto md:mx-0">
            “Our mission is to empower you to explore the world with confidence,
            comfort, and care. Travel smart, travel with Regency Nepal.”
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-[50%_50%_50%_0] border-4 border-green-500 overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-300">
            <img
              src="/images/tours/yosemite.jpg"
              alt="Beautiful travel destination"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
