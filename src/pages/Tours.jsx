import React from "react";
import SectionHeading from "../components/SectionHeading";
import StyledCard from "../components/StyledCard";
import { useTour } from "../context/TourProvider";

function Tours() {
  const { data } = useTour();

  return (
    <div className="mx-auto bg-blue-gray-50 py-12 sm:py-16 lg:py-20">
      <SectionHeading title="Internal Tours in Nepal" />

      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6">
        {data?.internal?.map((tour) => (
          <StyledCard
            to={`/tours/internal/${tour.id}`}
            key={tour.name}
            img={`/images/tours/${tour.content.cover[0]}`}
            dest={tour.content.title_main}
            desc={tour.content.summary}
          />
        ))}
      </div>

      <SectionHeading title="Destinations In Asia" className="pt-[5rem]" />
      {/* <p className="text-center mb-[1.5rem] md:mb-[2rem]">
        Destinations In Asia
      </p> */}

      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {data?.asia?.map((tour) => (
          <StyledCard
            to={`/tours/asia/${tour.id}`}
            key={tour.name}
            img={`/images/tours/${tour.content.cover[0]}`}
            dest={tour.content.title_main}
            desc={tour.content.summary}
          />
        ))}
      </div>

      <SectionHeading title="Destinations in Europe" className="pt-[5rem]" />
      {/* <p className="text-center mb-[1.5rem] md:mb-[2rem]"></p> */}

      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {data?.europe?.map((tour) => (
          <StyledCard
            to={`/tours/europe/${tour.id}`}
            key={tour.name}
            img={`/images/tours/${tour.content.cover[0]}`}
            dest={tour.content.title_main}
            desc={tour.content.summary}
          />
        ))}
      </div>
    </div>
  );
}

export default Tours;
