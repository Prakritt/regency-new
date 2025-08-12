import React from "react";
import SectionHeading from "./SectionHeading";

function BulletTrainBooking() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 max-w-6xl mx-auto rounded-lg shadow-lg font-roboto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h3 className="text-green-600 uppercase tracking-widest mb-3 font-semibold text-sm md:text-base">
            European High-Speed Rail
          </h3>

          <SectionHeading
            title="Explore Europe with High-Speed Rail Travel"
            animationDelay={0.3}
          />
          {/* <h2 className="text-4xl font-semibold mb-6 text-gray-900 leading-tight">
            Explore Europe with High-Speed Rail Travel
          </h2> */}
          <p className="text-gray-700 leading-relaxed text-lg max-w-xl mx-auto md:mx-0 mb-6 text-justify">
            Book your high speed train tickets across Europe with ease. Enjoy
            fast direct connections between vibrant cities like Paris Berlin
            Rome and Amsterdam. Travel comfortably and stress free on Europe’s
            state of the art rail network your perfect way to explore the
            continent.
          </p>
          <ul className="list-disc list-inside text-gray-700 max-w-xl mx-auto md:mx-0 space-y-2 mb-6 text-justify">
            <li>Instant booking with real-time seat availability</li>
            <li>Flexible travel dates and easy ticket modifications</li>
            <li>Access to exclusive early-bird discounts and offers</li>
            <li>24/7 multilingual customer support for smooth travel</li>
          </ul>
          {/* Uncomment below if you want the button */}
          {/* <button className="bg-green-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-green-700 transition">
            Book Your Train
          </button> */}
        </div>

        {/* Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="images/tours/euro-train.png"
            alt="European High Speed Train"
            className="rounded-lg shadow-lg object-cover w-full max-h-80"
          />
        </div>
      </div>
    </section>
  );
}

export default BulletTrainBooking;
