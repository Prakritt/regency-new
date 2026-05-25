import React from "react";
import Cover from "../components/Cover";
import { FaHandsHelping } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiPeaceDove, GiTeacher } from "react-icons/gi";
import SectionHeading from "../components/SectionHeading";

import StyledCard from "../components/StyledCard";
import AnimatedSubtitle from "./../UI/AnimatedSubtitle";
import helicopter_charter from "./../images/helicopter_charter.jpg";
import car_rental from "./../images/car_rental.jpg";
import norwegian_cruise from "./../images/norwegian_cruise.jpg";
import { useTour } from "../context/TourProvider";
import Testimonial from "../components/Testimonial";
import FullWidthSection from "../components/FullWidthSection";
import JourneyCTA from "../components/JourneyCTA";
import CulturalExperienceHero from "../components/CulturalExperienceHero";
import BulletTrainBooking from "../components/BulletTrainBooking";

function Home() {
  const { data } = useTour();

  return (
    <>
      <Cover />
      <JourneyCTA />
      <section className="bg-white py-14 sm:py-16 md:bg-gray-50 md:py-20">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-6">
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
              className="flex min-h-[11rem] flex-col items-center justify-center gap-3 rounded-lg border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <Icon className="text-4xl text-green-500" aria-hidden="true" />
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="bg-blue-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <SectionHeading title="Traveler's Favorites" animationDelay={0.3} />
          <AnimatedSubtitle animationDelay={0.9}>
            Here are some of our most sought-after destinations..
          </AnimatedSubtitle>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data?.asia?.slice(4, 7).map((item) => (
              <StyledCard
                key={item.id}
                to={`/tours/asia/${item.id}`}
                img={`/images/tours/${item.content.cover[0]}`}
                dest={item.content.country}
                desc={item.content.summary}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <SectionHeading title="Explore Nepal With Us" animationDelay={0.3} />
          <AnimatedSubtitle animationDelay={0.9}>
            Discover our internal tours crafted for Nepal's mountains, culture,
            and sacred destinations.
          </AnimatedSubtitle>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {data?.internal?.map((item) => (
              <StyledCard
                key={item.id}
                to={`/tours/internal/${item.id}`}
                img={`/images/tours/${item.content.cover[0]}`}
                dest={item.content.title_main}
                desc={item.content.summary}
              />
            ))}
          </div>
        </div>
      </div>

      <Testimonial />

      <div className="mx-auto py-14 sm:py-20">
        <SectionHeading title="Europe Tour" animationDelay={0.3} />
        <AnimatedSubtitle animationDelay={0.9}>
          Popular Destinations In Europe
        </AnimatedSubtitle>
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {data?.europe?.slice(0, 3).map((item) => (
            <StyledCard
              key={item.id}
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
            desc="Explore Sri CLanka's diverse landscapes, ancient temples, and rich culture. From tea plantations to stunning beaches, adventure awaits."
          /> */}
        </div>
      </div>
      <CulturalExperienceHero className="bg-emerald-950 text-white" />

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
      <BulletTrainBooking />
    </>
  );
}

export default Home;
