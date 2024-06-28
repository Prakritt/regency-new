import React from "react";
import Cover from "../components/Cover";
import { FaHandsHelping } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiPeaceDove, GiTeacher } from "react-icons/gi";
import SectionHeading from "../components/SectionHeading";

import StyledCard from "../components/StyledCard";
import StyledCardHorizontal from "../components/StyledCardHorizontal";

import car_rental from "./../images/car_rental.jpg";
import helicopter_charter from "./../images/helicopter_charter.jpg";
import { useTour } from "../context/TourProvider";

function Home() {
  const { data } = useTour();
  return (
    <>
      <Cover />
      <div className="py-[5rem]">
        <div className="max-w-[1140px] mx-auto flex flex-col justify-between md:flex-row md:gap-3 ">
          <div className="flex flex-col items-center gap-2 py-7 md:py-7 ">
            <GiTeacher className="text-[2rem] text-green-500 mb-4" />
            <p className="font-semibold">Guidance</p>
            <p className="text-justify">Advice tailored to your needs</p>
          </div>
          <div className="flex flex-col items-center gap-2 py-7">
            <FaMoneyBillTrendUp className="text-[2rem] text-green-500 mb-4" />
            <p className="font-semibold">Value</p>
            <p className="text-justify">Affordability you can trust</p>
          </div>
          <div className="flex flex-col items-center gap-2 py-7">
            <GiPeaceDove className="text-[2rem] text-green-500 mb-4" />
            <p className="font-semibold">Peace of Mind</p>
            <p className="text-justify">Reassurance every step of the way</p>
          </div>
          <div className="flex flex-col items-center gap-2 py-7">
            <FaHandsHelping className="text-[2rem] text-green-500 mb-4" />
            <p className="font-semibold">Service</p>
            <p className="text-justify">
              Exceptional care for your satisfaction
            </p>
          </div>
        </div>
      </div>
      <div className="py-[5rem] mx-auto bg-blue-gray-50">
        <SectionHeading title="Traveler's  Favorites " />
        <p className="text-center mb-[1.5rem] md:mb-[2rem]">
          Here are some of our most sought-after destinations..
        </p>
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-around md:px-3">
          {data.slice(1, 4).map((item) => (
            <StyledCard
              to={`/tours/${item.id}`}
              img={`/images/tours/${item.content.cover[1]}`}
              dest={item.content.country}
              desc={item.content.summary}
            />
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

      <div className="py-[5rem]">
        <SectionHeading title="Additional Travel Services" />
        <div className="max-w-[1140px] mx-auto flex flex-col gap-[3rem] px-3">
          <StyledCardHorizontal
            title="Car Rental Services"
            subtitle="Loved by Customers: Our Car Rental Service"
            img={car_rental}
            desc="Enjoy the flexibility of exploring your destination with our reliable and affordable car rental service. Whether you're planning a scenic drive or exploring local attractions, we have the perfect vehicle for your journey. Our fares are in accordance with Natta (Nepal Association of Tour and Travels), ensuring transparent pricing and quality service."
          />
          <StyledCardHorizontal
            title="Helicopter Charter Services"
            subtitle="Preferred by Discerning Travelers: Our Helicopter Charter Service"
            img={helicopter_charter}
            desc="Elevate your journey with our premier helicopter charter services, tailored for discerning travelers seeking luxury and efficiency. Whether for scenic aerial tours, seamless airport transfers, or exclusive event transport, indulge in unparalleled comfort and safety aboard our state-of-the-art helicopters. Our experienced pilots ensure smooth flights and breathtaking aerial views, promising an unforgettable travel experience."
          />
        </div>
      </div>
    </>
  );
}

export default Home;
