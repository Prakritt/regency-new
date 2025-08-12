import React from "react";

function CulturalExperienceHero() {
  return (
    <section
      className="w-full text-white font-roboto"
      style={{
        backgroundColor: "#064e3b", // deep emerald green
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-12 px-6 md:px-8 py-8 md:py-16">
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-6"
            style={{
              letterSpacing: "0.3px",
              lineHeight: "1.2",
            }}
          >
            Experience the World with{" "}
            <span className="text-green-300 font-semibold">
              Regency Nepal Travels
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-gray-100 mb-6 text-justify">
            We craft journeys that go beyond the ordinary — from serene escapes
            to grand adventures, each trip is tailored to your unique desires.
            With our expertise, you can explore new horizons without the stress
            of planning.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-100 mb-8 md:mb-0">
            Let Regency Nepal Travels handle the details, so you can focus on
            creating memories that last a lifetime.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="images/tours/hike.jpg"
            alt="Travel Adventure"
            className="w-full h-64 md:h-[450px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default CulturalExperienceHero;
