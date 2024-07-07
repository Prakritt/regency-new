import React from "react";
import SectionHeading from "../components/SectionHeading";
import StyledCard from "../components/StyledCard";
import StyledNavLink from "../components/StyledNavLink";
import { useTour } from "../context/TourProvider";
function Tours() {
  const { data } = useTour();
  return (
    <div className="py-[5rem] mx-auto bg-blue-gray-50">
      <SectionHeading title="Destinations In Asia" />
      {/* <p className="text-center mb-[1.5rem] md:mb-[2rem]">
        Destinations In Asia
      </p> */}

      <div className="flex flex-col items-center sm:flex-col gap-3 md:flex-row md:justify-around md:px-3 md:flex-wrap md:gap-y-8">
        {data?.asia?.map((tour) => (
          <StyledCard
            to={`/tours/asia/${tour.id}`}
            className="flex flex-col"
            key={tour.name}
            img={`/images/tours/${tour.content.cover[0]}`}
            dest={tour.content.title_main}
            desc={tour.content.summary}
          />
        ))}
      </div>

      <SectionHeading title="Destinations in Europe" className="pt-[5rem]" />
      {/* <p className="text-center mb-[1.5rem] md:mb-[2rem]"></p> */}

      <div className="flex flex-col items-center sm:flex-col gap-3 md:flex-row md:justify-around md:px-3 md:flex-wrap md:gap-y-8">
        {data?.europe?.map((tour) => (
          <StyledCard
            to={`/tours/europe/${tour.id}`}
            className="flex flex-col"
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

{
  /* <Cultural data={data.tourPlanSriLanka} /> */
}

export default Tours;
