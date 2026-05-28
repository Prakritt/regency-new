import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import cover from "./../../src/images/cover.jpg";
import StyledNavLink from "./StyledNavLink";

const Cover = () => (
  <div
    className="relative flex min-h-[64svh] items-center overflow-hidden py-12 sm:min-h-[74svh] sm:py-16 lg:min-h-[78svh]"
    style={{
      backgroundImage: `url(${cover})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent" />

    <div className="relative mx-auto w-full max-w-7xl px-4 text-white sm:px-6 lg:px-8">
      <div className="max-w-3xl animate-fadeIn">
        {/* <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-100">
          IATA Accredited | Established 2001 | Kathmandu, Nepal
        </p> */}
        <h1 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Regency Nepal Travels
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-100 sm:text-lg sm:leading-8">
          Thoughtfully planned journeys across Nepal, Asia, and Europe with
          reliable ticketing, tours, and travel support from a Kathmandu-based
          team.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <StyledNavLink
            to="/tours"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
          >
            Explore tours
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </StyledNavLink>

          {/* <a
            href="tel:+9779840069409"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Talk to our team
          </a> */}
        </div>

        <div className="mt-8 grid max-w-md grid-cols-2 gap-3 sm:mt-10 sm:max-w-2xl sm:grid-cols-3">
          {[
            ["25 years", "Travel expertise"],
            // ["Nepal tours", "ABC, Mustang, Muktinath"],
            ["Global trips", "Asia and Europe"],
          ].map(([value, label]) => (
            <div key={value} className="border-l border-white/30 pl-4">
              <p className="text-lg font-bold text-white">{value}</p>
              <p className="mt-1 text-sm leading-5 text-zinc-200">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Cover;
