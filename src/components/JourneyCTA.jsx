import React from "react";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
import StyledNavLink from "./StyledNavLink";

export default function JourneyCTA() {
  return (
    <section className="w-full border-y border-emerald-800 bg-emerald-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-100">
            IATA Accredited | Established 2001 | Kathmandu, Nepal
          </p>
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            Ready to plan your next journey?
          </h2>
          <p className="mt-3 text-base leading-7 text-emerald-50">
            Talk to our travel team for flights, tours, and tailored travel
            support.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:justify-end">
          <a
            href="tel:+9779840069409"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            <span>Call 24-hour service</span>
          </a>

          <StyledNavLink
            to="/tours"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
          >
            <span>Explore tours</span>
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </StyledNavLink>
        </div>
      </div>
    </section>
  );
}
