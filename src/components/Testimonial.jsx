import React from "react";
import SectionHeading from "./SectionHeading";

export default function AboutUs() {
  return (
    <section className="bg-zinc-100 px-4 py-14 font-roboto sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
            About Us
          </p>
          <SectionHeading
            title="Your Trusted Travel Partner Since 2001"
            className="text-left"
            animationDelay={0.3}
          />

          <div className="space-y-5 text-base leading-7 text-gray-700">
            <p>
              Established in <strong>2001</strong>, Regency Nepal Travels has
              been delivering world-class travel services for over two decades.
              As an <strong>IATA Accredited Travel Agency</strong>, we are
              committed to reliable, transparent, and memorable travel planning.
            </p>
            <p>
              From personalized itineraries to group adventures, our expertise
              spans across Nepal and international destinations. We pair local
              knowledge with trusted partnerships, so each journey feels
              organized, comfortable, and cared for from the first conversation.
            </p>
          </div>

          <blockquote className="mt-7 border-l-4 border-green-500 pl-5 text-base font-medium leading-7 text-gray-800">
            For over 20 years, we have helped travelers explore the world with
            confidence, comfort, and care.
          </blockquote>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            { value: "2001", label: "Established in Kathmandu" },
            { value: "IATA", label: "Accredited travel agency" },
            { value: "24/7", label: "Customer service support" },
          ].map((item) => (
            <div
              key={item.value}
              className="rounded-lg border border-zinc-200 bg-white p-6"
            >
              <p className="text-3xl font-bold text-green-700">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-gray-700">
                {item.label}
              </p>
            </div>
          ))}

          <div className="rounded-lg border border-green-100 bg-green-50 p-6 sm:col-span-3 lg:col-span-1">
            <img
              src="/images/tours/iata-logo.png"
              alt="IATA Accredited Agency Logo"
              className="h-16 w-auto"
            />
            <p className="mt-4 text-sm font-medium leading-6 text-gray-700">
              Accredited travel support for tickets, tours, and curated journeys
              across Nepal and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
