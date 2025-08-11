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
      <section aria-label="Tour overview" className="bg-gray-50 py-12">
        <SectionHeading title={current_tour.title_main} />
        <div className="flex flex-col items-center px-6 md:flex-row md:items-center gap-8 max-w-7xl mx-auto md:px-12">
          <div className="w-full max-w-md h-64 md:h-96 md:max-w-4xl overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <CarouselDefault images={current_tour.cover} />
          </div>
          <article className="flex-1 min-w-[15rem] prose prose-green max-w-none text-center md:text-left">
            <p>{current_tour.description}</p>
          </article>
        </div>
      </section>

      <section
        aria-label="Tour destinations"
        className="max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-16"
      >
        <p className="mb-16 text-center text-lg text-gray-600 max-w-3xl mx-auto">
          {current_tour.summary}
        </p>

        {current_tour.destinations.map((place) => (
          <article
            key={place.id}
            className="pb-12 border-b border-gray-200 last:border-0"
          >
            <h3 className="ml-2 mb-4 text-2xl font-semibold text-gray-800">
              {place.name}
            </h3>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <figure className="min-w-[16rem] h-64 relative rounded-lg shadow-lg overflow-hidden flex-shrink-0">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  src={`/images/tours/${place.image}`}
                  alt={place.name}
                  loading="lazy"
                />
              </figure>
              <div className="flex flex-col justify-between flex-1 prose prose-green max-w-none">
                <p className="text-justify text-gray-700">
                  {place.description}
                </p>
                <div className="flex gap-3 items-center mt-6 md:mt-auto text-green-600 font-semibold text-lg">
                  <FaLocationDot />
                  <span>{place.location}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Cultural;
