import React from "react";
import SectionHeading from "./SectionHeading";

export default function AboutUs() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 max-w-6xl mx-auto rounded-lg shadow-lg font-roboto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h3 className="text-green-600 uppercase tracking-widest mb-3 font-semibold text-sm md:text-base">
            About Us
          </h3>
          <SectionHeading
            title="Your Trusted Travel Partner Since 2001"
            animationDelay={0.3}
          />
          {/* <h2 className="text-4xl font-semibold mb-6 text-gray-900 leading-tight">
            Your Trusted Travel Partner Since 2001
          </h2> */}
          <p className="text-gray-700 leading-relaxed text-lg max-w-xl mx-auto md:mx-0 mb-6 text-justify">
            Established in <strong>2001</strong>, Regency Nepal Travels has been
            delivering world-class travel services for over two decades. As an{" "}
            <strong>IATA Accredited Travel Agency</strong>, we are committed to
            the highest global standards in the travel industry, ensuring every
            journey is safe, reliable, and unforgettable.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg max-w-xl mx-auto md:mx-0 mb-6 text-justify">
            From personalized itineraries to group adventures, our expertise
            spans across Nepal and international destinations. We pride
            ourselves on our deep local knowledge, trusted partnerships, and
            long-standing dedication to making travel dreams a reality.
          </p>
          <p className="text-gray-600 italic max-w-lg mx-auto md:mx-0 text-justify">
            “For over 20 years, we’ve been helping travelers explore the world
            with confidence, comfort, and care. Travel smart, travel with
            Regency Nepal.”
          </p>
        </div>

        {/* IATA Logo */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-[50%_50%_50%_0] border-4 border-green-500 bg-white overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-300">
            <img
              src="/images/tours/iata-logo.png"
              alt="IATA Accredited Agency Logo"
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
