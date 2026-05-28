import React from "react";
import {
  GlobeAltIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import CustomTourCallout from "../components/CustomTourCallout";
import NepalTourAccordion from "../components/NepalTourAccordion";
import StyledCard from "../components/StyledCard";
import { useTour } from "../context/TourProvider";
import usePageMeta from "../utils/usePageMeta";

function Tours() {
  const { data } = useTour();
  const nepalTourOptions = data?.nepal_tours || [];
  const nepalCatalogueCount =
    (data?.internal?.length || 0) + nepalTourOptions.length;

  const sections = [
    {
      key: "internal",
      eyebrow: "Internal Nepal tours",
      title: "Himalayan journeys close to home",
      description:
        "Explore Annapurna Base Camp, Mustang, Muktinath, Pokhara, and sacred mountain landscapes with practical Nepal-focused itineraries.",
      tours: data?.internal || [],
      route: "internal",
      gridClassName: "grid-cols-1 sm:grid-cols-2",
      sectionClassName: "bg-white",
    },
    {
      key: "asia",
      eyebrow: "Asia tours",
      title: "Culture-rich routes across Asia",
      description:
        "Discover India, Vietnam, Japan, China, Dubai, Maldives, Sri Lanka, and more with curated travel plans for every pace.",
      tours: data?.asia || [],
      route: "asia",
      gridClassName: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      sectionClassName: "bg-zinc-50",
    },
    {
      key: "europe",
      eyebrow: "Europe tours",
      title: "Classic European city and culture tours",
      description:
        "Plan elegant journeys through France, Germany, Greece, and connected European experiences with smooth support from our team.",
      tours: data?.europe || [],
      route: "europe",
      gridClassName: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      sectionClassName: "bg-white",
    },
  ];

  const totalTours =
    sections.reduce((count, section) => count + section.tours.length, 0) +
    nepalTourOptions.length;

  usePageMeta({
    title: "Tour Packages for Nepal, Asia and Europe",
    description:
      "Browse internal Nepal tours, Himalayan treks, Asia itineraries, Europe tours, and custom travel options from Regency Nepal Travels.",
    image: "/images/tours/annapurna_base_camp.jpg",
    path: "/tours",
  });

  return (
    <main className="bg-white">
      <section className="border-b border-emerald-900 bg-emerald-950 py-10 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-200">
            Curated travel catalogue
          </p>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Tours for Nepal, Asia, and Europe
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-emerald-50 sm:text-lg sm:leading-8">
                Browse our most requested travel experiences, from internal
                Himalayan tours to cultural journeys across Asia and Europe.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:max-w-xl lg:justify-self-end">
              {[
                { icon: MapIcon, value: nepalCatalogueCount, label: "Nepal options" },
                { icon: GlobeAltIcon, value: data?.asia?.length || 0, label: "Asia tours" },
                { icon: SparklesIcon, value: totalTours, label: "Total options" },
              ].map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/10 p-4"
                >
                  <Icon
                    className="mb-3 h-5 w-5 text-emerald-200"
                    aria-hidden="true"
                  />
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-sm font-medium text-emerald-100">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section
          key={section.key}
          className={`border-b border-zinc-200 py-10 sm:py-16 ${section.sectionClassName}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
                  {section.eyebrow}
                </p>
                <h2 className="text-[1.625rem] font-bold leading-tight text-gray-950 sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-700">
                  {section.description}
                </p>
              </div>

              <p className="text-sm font-semibold text-zinc-500">
                {section.tours.length} {section.tours.length === 1 ? "tour" : "tours"}
              </p>
            </div>

            <div className={`grid gap-6 ${section.gridClassName}`}>
              {section.tours.map((tour) => (
                <StyledCard
                  key={`${section.key}-${tour.id}`}
                  to={`/tours/${section.route}/${tour.id}`}
                  img={`/images/tours/${tour.content.cover[0]}`}
                  dest={tour.content.title_main}
                  desc={tour.content.summary}
                />
              ))}
            </div>

            {section.key === "internal" && (
              <NepalTourAccordion tours={nepalTourOptions} />
            )}
          </div>
        </section>
      ))}

      <section className="bg-zinc-950 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CustomTourCallout tone="dark" />
        </div>
      </section>
    </main>
  );
}

export default Tours;
