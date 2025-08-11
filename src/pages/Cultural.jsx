import React from "react";
import { CarouselDefault } from "../components/CarouselDefault";
import SectionHeading from "../components/SectionHeading";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useTour } from "../context/TourProvider";

function Cultural() {
  const { data } = useTour();
  const { dest, id } = useParams();

  if (!data || !data[dest] || !data[dest][id]) {
    return (
      <p className="text-center py-10 text-red-500">Tour data not available.</p>
    );
  }

  const current_tour = data[dest][id].content;

  return (
    <main>
      {/* Hero / Tour Overview */}
      <section aria-label="Tour overview" className="bg-gray-50 py-12">
        <SectionHeading title={current_tour.title_main} />
        <div className="flex flex-col items-center px-6 md:flex-row md:items-center gap-8 max-w-7xl mx-auto md:px-12">
          <div className="w-full max-w-md h-64 md:h-96 md:max-w-4xl overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <CarouselDefault images={current_tour.cover} />
          </div>
          <article className="flex-1 min-w-[15rem] max-w-prose text-center md:text-left">
            <p className="text-lg font-light leading-relaxed tracking-wide text-gray-700 text-justify">
              {current_tour.description}
            </p>
          </article>
        </div>
      </section>

      {/* Destinations */}
      <section
        aria-label="Tour destinations"
        className="bg-gray-50 py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="mb-16 text-center text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {current_tour.summary}
          </p>

          <div className="space-y-16">
            {current_tour.destinations.map((place, index) => (
              <article
                key={place.id}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-sm rounded-xl p-6 bg-white"
              >
                {/* Alternate image position for zig-zag layout */}
                <figure
                  className={`min-w-[16rem] h-64 relative rounded-lg shadow-md overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={`/images/tours/${place.image}`}
                    alt={place.name}
                    loading="lazy"
                  />
                </figure>

                {/* Text Content */}
                <div className="flex-1 min-w-[15rem]">
                  {/* Location Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <FaLocationDot className="text-green-600" />
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {place.location}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold text-gray-900 tracking-tight">
                    {place.name}
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-justify">
                    {place.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cultural;
