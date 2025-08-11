import React from "react";
import Cover from "../components/Cover";
import { FaHandsHelping } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiPeaceDove, GiTeacher } from "react-icons/gi";
import SectionHeading from "../components/SectionHeading";

import StyledCard from "../components/StyledCard";
import StyledCardHorizontal from "../components/StyledCardHorizontal";
import AnimatedSubtitle from "./../UI/AnimatedSubtitle";
import helicopter_charter from "./../images/helicopter_charter.jpg";
import car_rental from "./../images/car_rental.jpg";
import norwegian_cruise from "./../images/norwegian_cruise.jpg";
import { useTour } from "../context/TourProvider";
import Testimonial from "../components/Testimonial";
import FullWidthSection from "../components/FullWidthSection";
import JourneyCTA from "../components/JourneyCTA";

function Home() {
  const { data } = useTour();

  return (
    <>
      <Cover />
      <JourneyCTA />
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row md:gap-8 justify-between">
          {[
            {
              Icon: GiTeacher,
              title: "Guidance",
              desc: "Advice tailored to your needs",
            },
            {
              Icon: FaMoneyBillTrendUp,
              title: "Value",
              desc: "Affordability you can trust",
            },
            {
              Icon: GiPeaceDove,
              title: "Peace of Mind",
              desc: "Reassurance every step of the way",
            },
            {
              Icon: FaHandsHelping,
              title: "Service",
              desc: "Exceptional care for your satisfaction",
            },
          ].map(({ Icon, title, desc }) => (
            <article
              key={title}
              className="flex flex-col items-center gap-3 p-8 bg-white rounded-lg shadow-md text-center md:w-1/4"
            >
              <Icon className="text-4xl text-green-500" aria-hidden="true" />
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="py-20 bg-blue-gray-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <SectionHeading title="Traveler's Favorites" animationDelay={0.3} />
          <AnimatedSubtitle animationDelay={0.9}>
            Here are some of our most sought-after destinations..
          </AnimatedSubtitle>

          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {data?.asia?.slice(4, 7).map((item) => (
              <StyledCard
                key={item.id} // <-- add key here
                to={`/tours/asia/${item.id}`}
                img={`/images/tours/${item.content.cover[0]}`}
                dest={item.content.country}
                desc={item.content.summary}
                className="max-w-sm md:max-w-xs"
              />
            ))}
          </div>
        </div>
      </div>

      <Testimonial />

      <div className="py-[5rem] mx-auto ">
        <SectionHeading title="Europe Tour" animationDelay={0.3} />
        <AnimatedSubtitle animationDelay={0.9}>
          Popular Destinations In Europe
        </AnimatedSubtitle>
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-around md:px-3">
          {data?.europe?.slice(0, 3).map((item) => (
            <StyledCard
              to={`/tours/europe/${item.id}`}
              img={`/images/tours/${item.content.cover[0]}`}
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

      <div className="py-[5rem] bg-blue-gray-50">
        <SectionHeading title="Additional Travel Services" />

        <FullWidthSection
          title="Car Rental Services"
          subtitle="Loved by Customers: Our Car Rental Service"
          img={car_rental}
          desc={
            <>
              Enjoy the flexibility of exploring your destination with our
              reliable and affordable car rental service. Whether you're
              planning a scenic drive or exploring local attractions, we have
              the perfect vehicle for your journey. Our fares comply with Natta
              (Nepal Association of Tour and Travels) guidelines, ensuring
              transparent pricing and quality service you can trust.
            </>
          }
        />

        <FullWidthSection
          title="Helicopter Charter Services"
          subtitle="Preferred by Discerning Travelers: Our Helicopter Charter Service"
          img={helicopter_charter}
          desc={
            <>
              Elevate your journey with our premier helicopter charter services,
              tailored for discerning travelers seeking luxury and efficiency.
              Whether for scenic aerial tours, seamless airport transfers, or
              exclusive event transport, indulge in unparalleled comfort and
              safety aboard our state-of-the-art helicopters. Our experienced
              pilots guarantee smooth flights and breathtaking aerial views,
              promising an unforgettable travel experience.
            </>
          }
        />
        <FullWidthSection
          title="Cruise Services"
          subtitle="Experience Luxury at Sea with Our Cruise Partners"
          img={norwegian_cruise}
          desc={
            <>
              Set sail on an unforgettable journey with our exclusive cruise
              offerings. We proudly partner with top cruise liners including{" "}
              <strong>Resorts World Cruises </strong> and{" "}
              <strong>Norwegian Cruise Line</strong>, ensuring you enjoy
              world-class amenities, exceptional dining, and breathtaking
              destinations. Whether you're seeking a romantic getaway, family
              adventure, or luxury escape, our cruise packages cater to every
              traveler’s dream. Let the ocean be your next destination.
            </>
          }
          // Optional: pass any Tailwind bg color class here
        />
      </div>
    </>
  );
}

export default Home;
