import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import SectionHeading from "./SectionHeading";

const railBenefits = [
  "Instant booking with real-time seat availability",
  "Flexible travel dates and easy ticket modifications",
  "Access to early-bird discounts and seasonal offers",
  "24/7 multilingual customer support for smooth travel",
];

function BulletTrainBooking() {
  return (
    <section className="border-t border-emerald-100 bg-emerald-50 px-4 py-14 font-roboto sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
            European High-Speed Rail
          </p>

          <SectionHeading
            title="Explore Europe with High-Speed Rail Travel"
            className="text-left"
            animationDelay={0.3}
          />

          <p className="max-w-2xl text-base leading-7 text-gray-700">
            Book high-speed train tickets across Europe with direct connections
            between cities like Paris, Berlin, Rome, and Amsterdam. Travel
            comfortably on Europe's rail network with planning support from our
            team.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {railBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-3 rounded-lg border border-zinc-200 bg-white p-4 text-sm font-medium leading-6 text-gray-700"
              >
                <CheckCircleIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                  aria-hidden="true"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img
            src="/images/tours/euro-train.png"
            alt="European High Speed Train"
            className="aspect-[16/11] w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default BulletTrainBooking;
