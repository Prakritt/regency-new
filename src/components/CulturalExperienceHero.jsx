import React from "react";

function CulturalExperienceHero() {
  return (
    <section
      className="w-full font-roboto text-white"
      style={{
        backgroundColor: "#064e3b",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 md:flex-row md:px-8">
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            Experience the World with{" "}
            <span className="text-green-300">Regency Nepal Travels</span>
          </h2>

          <p className="mb-5 text-base leading-7 text-emerald-50">
            We craft journeys that go beyond the ordinary, from serene escapes
            to grand adventures, each trip is tailored to your unique desires.
            With our expertise, you can explore new horizons without the stress
            of planning.
          </p>

          <p className="text-base leading-7 text-emerald-100">
            Let Regency Nepal Travels handle the details, so you can focus on
            creating memories that last a lifetime.
          </p>
        </div>

        <div className="flex w-full justify-center md:w-1/2">
          <img
            src="/images/tours/hike.jpg"
            alt="Travel Adventure"
            className="h-64 w-full rounded-2xl object-cover shadow-lg md:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}

export default CulturalExperienceHero;
