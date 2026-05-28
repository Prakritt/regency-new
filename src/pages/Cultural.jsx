import React from "react";
import { CarouselDefault } from "../components/CarouselDefault";
import { useParams } from "react-router-dom";
import { useTour } from "../context/TourProvider";
import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import StyledNavLink from "../components/StyledNavLink";
import usePageMeta from "../utils/usePageMeta";

const categoryLabels = {
  asia: "Asia tour",
  europe: "Europe tour",
  internal: "Internal Nepal tour",
};

function Cultural() {
  const { data, isLoading } = useTour();
  const { dest, id } = useParams();
  const tourEntry = data?.[dest]?.[id];
  const currentTour = tourEntry?.content;

  usePageMeta({
    title: currentTour?.title_main || "Tour Details",
    description:
      currentTour?.summary ||
      "Explore detailed tour itineraries, destinations, and travel highlights from Regency Nepal Travels.",
    image: currentTour?.cover?.[0]
      ? `/images/tours/${currentTour.cover[0]}`
      : "/logo.png",
    path: `/tours/${dest}/${id}`,
    type: "article",
  });

  if (isLoading) {
    return (
      <main className="grid min-h-[55svh] place-items-center bg-white px-4 py-16 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Loading tour details
          </p>
          <p className="mt-3 text-base font-medium text-zinc-600">
            Preparing the itinerary...
          </p>
        </div>
      </main>
    );
  }

  if (!currentTour) {
    return (
      <p className="text-center py-10 text-red-500">Tour data not available.</p>
    );
  }

  const itinerary = currentTour.itenary || [];
  const destinations = currentTour.destinations || [];
  const categoryLabel = categoryLabels[dest] || "Curated tour";
  const durationLabel = itinerary.length
    ? `${itinerary.length} ${itinerary.length === 1 ? "day" : "days"}`
    : `${destinations.length} highlighted stops`;
  const leadImage = currentTour.cover?.[0];
  const fallbackImageSrc = leadImage ? `/images/tours/${leadImage}` : "";
  const handleImageError = (event) => {
    if (
      fallbackImageSrc &&
      !event.currentTarget.src.endsWith(`/${leadImage}`)
    ) {
      event.currentTarget.src = fallbackImageSrc;
    }
  };

  return (
    <main className="bg-white">
      <section
        aria-label="Tour overview"
        className="border-b border-emerald-900 bg-emerald-950 py-8 text-white sm:py-14 lg:py-16"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <StyledNavLink
              to="/tours"
              className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-100 transition hover:text-white sm:mb-6"
            >
              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
              Back to tours
            </StyledNavLink>

            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-200">
              {categoryLabel}
            </p>
            <h1 className="max-w-3xl text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {currentTour.title_main}
            </h1>
            {currentTour.title_sub && (
              <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-emerald-100 sm:text-lg sm:leading-8">
                {currentTour.title_sub}
              </p>
            )}
            <p className="mt-5 max-w-3xl text-base leading-7 text-emerald-50">
              {currentTour.summary}
            </p>

            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3">
              {[
                {
                  icon: MapPinIcon,
                  label: "Destination",
                  value: currentTour.country || categoryLabel,
                },
                {
                  icon: CalendarDaysIcon,
                  label: "Suggested plan",
                  value: durationLabel,
                },
                {
                  icon: SparklesIcon,
                  label: "Experience",
                  value: `${destinations.length} key highlights`,
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/10 p-4"
                >
                  <Icon
                    className="mb-3 h-5 w-5 text-emerald-200"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-100">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/10 p-2 shadow-xl">
            <div className="h-60 overflow-hidden rounded-md sm:h-96 lg:h-[30rem]">
              <CarouselDefault images={currentTour.cover || []} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <aside className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              Tour snapshot
            </p>
            <dl className="mt-5 space-y-4">
              {[
                ["Region", currentTour.country || categoryLabel],
                ["Route style", categoryLabel],
                ["Main stops", `${destinations.length} destinations`],
                ["Itinerary", itinerary.length ? durationLabel : "Flexible"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 border-b border-zinc-100 pb-4 last:border-b-0 last:pb-0"
                >
                  <dt className="text-sm font-medium text-gray-600">{label}</dt>
                  <dd className="text-right text-sm font-semibold text-gray-950">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href="tel:+9779840069409"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              Talk to our travel team
            </a>
          </aside>

          <article>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
              Trip overview
            </p>
            <h2 className="max-w-3xl text-[1.625rem] font-bold leading-tight text-gray-950 sm:text-3xl">
              A complete look at this journey
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-7 text-gray-700">
              {currentTour.description}
            </p>

            {leadImage && (
              <img
                src={`/images/tours/${leadImage}`}
                alt={currentTour.title_main}
                className="mt-8 aspect-[16/8] w-full rounded-lg object-cover"
                loading="lazy"
                onError={handleImageError}
              />
            )}
          </article>
        </div>
      </section>

      {itinerary.length > 0 && (
        <section
          id="tour-itinerary"
          aria-label="Tour itinerary"
          className="bg-white py-10 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
                Itinerary
              </p>
              <h2 className="text-[1.625rem] font-bold leading-tight text-gray-950 sm:text-3xl">
                Follow the journey day by day
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {itinerary.map((item, index) => (
                <article
                  key={`${item.day}-${index}`}
                  className="grid gap-5 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm sm:grid-cols-[11rem_1fr] sm:p-5"
                >
                  <img
                    src={`/images/tours/${item.image || leadImage}`}
                    alt={item.day}
                    className="aspect-[16/10] w-full rounded-md object-cover sm:h-full"
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-green-700">
                      Day {index + 1}
                    </p>
                    <h3 className="text-xl font-bold leading-tight text-gray-950">
                      {item.day}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        aria-label="Tour destinations"
        className="border-t border-zinc-200 bg-zinc-100 py-10 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
              Highlights
            </p>
            <h2 className="text-[1.625rem] font-bold leading-tight text-gray-950 sm:text-3xl">
              Places you will experience
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((place) => (
              <article
                key={place.id}
                className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
              >
                <figure className="relative aspect-[16/11] overflow-hidden bg-zinc-200">
                  <img
                    className="h-full w-full object-cover"
                    src={`/images/tours/${place.image || leadImage}`}
                    alt={place.name}
                    loading="lazy"
                    onError={handleImageError}
                  />
                </figure>

                <div className="p-5">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-green-50 px-3 py-1 text-sm font-semibold text-green-800">
                    <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                    <span>
                      {place.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold leading-tight text-gray-950">
                    {place.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    {place.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cultural;
