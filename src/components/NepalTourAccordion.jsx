import { useState } from "react";
import {
  CalendarDaysIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  FlagIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const difficultyStyles = {
  easy: "bg-green-50 text-green-800 ring-green-200",
  moderate: "bg-zinc-100 text-zinc-800 ring-zinc-200",
  strenuous: "bg-emerald-950 text-white ring-emerald-950",
};

function formatDifficulty(difficulty = "") {
  if (!difficulty) return "Flexible";
  return `${difficulty.charAt(0).toUpperCase()}${difficulty.slice(1)}`;
}

function NepalTourAccordion({ tours = [] }) {
  const [openTourId, setOpenTourId] = useState(null);

  if (!tours.length) return null;

  return (
    <div className="mt-10 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-5 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
          More Nepal tour options
        </p>
        <div className="mt-2 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h3 className="text-xl font-bold leading-tight text-zinc-950 sm:text-2xl">
              Detailed trekking and cultural route library
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600 sm:text-base">
              Compare classic treks, heritage routes, pilgrimage journeys, and
              jungle experiences across Nepal in a simple text-first format.
            </p>
          </div>
          <p className="text-sm font-semibold text-zinc-500">
            {tours.length} {tours.length === 1 ? "route" : "routes"}
          </p>
        </div>
      </div>

      <div className="divide-y divide-zinc-200">
        {tours.map((tour) => {
          const isOpen = openTourId === tour.id;
          const panelId = `nepal-tour-panel-${tour.id}`;
          const buttonId = `nepal-tour-button-${tour.id}`;
          const difficultyClass =
            difficultyStyles[tour.difficulty] || difficultyStyles.moderate;
          const facts = [
            {
              label: "Region",
              value: tour.region,
              icon: MapPinIcon,
            },
            {
              label: "Route",
              value: tour.route,
              icon: FlagIcon,
            },
            {
              label: "Max altitude",
              value: tour.max_altitude,
              icon: FlagIcon,
            },
            {
              label: "Best season",
              value: tour.best_season,
              icon: CalendarDaysIcon,
            },
          ];

          return (
            <article key={tour.id} className="bg-white">
              <h4>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenTourId(isOpen ? null : tour.id)}
                  className="flex w-full flex-col gap-4 px-4 py-5 text-left transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-inset sm:px-6 lg:flex-row lg:items-center lg:justify-between"
                >
                  <span className="min-w-0">
                    <span className="block text-lg font-bold leading-snug text-zinc-950 sm:text-xl">
                      {tour.name}
                    </span>
                    <span className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700">
                        <CalendarDaysIcon
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                        {tour.days} days
                      </span>
                      <span
                        className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${difficultyClass}`}
                      >
                        {formatDifficulty(tour.difficulty)}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-zinc-700 ring-1 ring-inset ring-zinc-200">
                        {tour.max_altitude}
                      </span>
                    </span>
                  </span>

                  <span className="flex items-center justify-between gap-3 text-sm font-semibold text-green-700 lg:justify-end">
                    <span>{isOpen ? "Hide details" : "View details"}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </h4>

              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-4 pb-6 sm:px-6"
                >
                  <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {facts.map(({ label, value, icon: Icon }) => (
                      <div
                        key={label}
                        className="rounded-lg border border-zinc-200 bg-zinc-50 p-4"
                      >
                        <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {label}
                        </dt>
                        <dd className="mt-2 text-sm font-semibold leading-6 text-zinc-900">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6">
                    <p className="text-sm font-bold uppercase tracking-wide text-zinc-950">
                      Itinerary
                    </p>
                    <ol className="mt-4 space-y-4">
                      {tour.itinerary.map((day) => (
                        <li
                          key={`${tour.id}-${day.day}`}
                          className={`border-l-2 pl-4 ${
                            day.highlight
                              ? "border-green-600"
                              : "border-zinc-200"
                          }`}
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <p className="text-sm font-bold text-zinc-950">
                                Day {day.day}: {day.place}
                              </p>
                              <p className="mt-1 text-xs font-semibold text-zinc-500">
                                Altitude: {day.altitude}
                              </p>
                            </div>
                            {day.highlight && (
                              <span className="inline-flex w-fit items-center gap-1 rounded-md bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-800">
                                <CheckCircleIcon
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                                Highlight
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-sm leading-6 text-zinc-700">
                            {day.description}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-bold uppercase tracking-wide text-zinc-950">
                      Useful notes
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {tour.tips.map((tip) => (
                        <li
                          key={tip}
                          className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium leading-6 text-zinc-700"
                        >
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default NepalTourAccordion;
