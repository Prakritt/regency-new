import React from "react";
import SectionHeading from "../components/SectionHeading";
import StyledCard from "../components/StyledCard";
import StyledNavLink from "../components/StyledNavLink";
import { useTour } from "../context/TourProvider";
function Tours() {
  const { data } = useTour();
  return (
    <div className="py-[5rem] mx-auto bg-blue-gray-50">
      <SectionHeading title="Popular Tours " />
      <p className="text-center mb-[1.5rem] md:mb-[2rem]">
        Here are some of our most sought-after packages..
      </p>

      <div className="flex flex-col items-center sm:flex-col gap-3 md:flex-row md:justify-around md:px-3 md:flex-wrap md:gap-y-8">
        {data.map((tour) => (
          <StyledNavLink to={`/tours/${tour.id}`}>
            <StyledCard
              className="flex flex-col"
              key={tour.name}
              img={`/images/tours/${tour.content.cover[0]}`}
              dest={tour.content.title_main}
              desc={tour.content.summary}
            />
          </StyledNavLink>
        ))}
        {/* <StyledCard
          img={dubai}
          dest="Dubai"
          desc="Discover Dubai's stunning skyline, luxury shopping, and cultural landmarks. Enjoy vibrant nightlife and desert adventures."
        />
        <StyledCard
          img={maldives}
          dest="Maldives"
          desc="Relax in the Maldives with its crystal-clear waters, white-sand beaches, and luxurious overwater bungalows. Perfect for a serene getaway."
        />
        <StyledCard
          img={sri_lanka}
          dest="Sri Lanka"
          desc="Explore Sri Lanka's diverse landscapes, ancient temples, and rich culture. From tea plantations to stunning beaches, adventure awaits."
        /> */}
      </div>
    </div>
  );
}

{
  /* <Cultural data={data.tourPlanSriLanka} /> */
}

export default Tours;
