import React from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import StyledNavLink from "./StyledNavLink";

const QUICK_LINKS = [
  { title: "Home", to: "/home" },
  { title: "Tours", to: "/tours" },
  { title: "Contact", to: "/contacts" },
];

const FEATURED_TOURS = [
  { title: "Annapurna Base Camp", to: "/tours/internal/0" },
  { title: "Mustang and Muktinath", to: "/tours/internal/1" },
  { title: "Cultural India", to: "/tours/asia/0" },
  { title: "Discover France", to: "/tours/europe/0" },
];

const CONTACT_ITEMS = [
  {
    icon: MapPinIcon,
    label: "Hattisar, Kathmandu, Nepal",
    href: null,
  },
  {
    icon: PhoneIcon,
    label: "01-4528818, 01-4533455",
    href: "tel:+977014528818",
  },
  {
    icon: EnvelopeIcon,
    label: "regencyprashant@gmail.com",
    href: "mailto:regencyprashant@gmail.com",
  },
];

const currentYear = new Date().getFullYear();

function FooterLinkList({ title, items }) {
  return (
    <nav aria-label={title}>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-300">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((link) => (
          <li key={link.title}>
            <StyledNavLink
              to={link.to}
              className="text-sm font-medium text-zinc-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
            >
              {link.title}
            </StyledNavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-zinc-700 bg-zinc-900 text-zinc-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr_1fr_1.2fr]">
          <section className="max-w-md">
            <StyledNavLink
              to="/home"
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
            >
              <img
                src="/logo.png"
                alt="Regency Nepal Logo"
                className="h-14 w-auto rounded bg-white p-1"
              />
              <span className="flex flex-col">
                <span className="font-logo text-xl uppercase leading-tight text-white">
                  Regency Nepal
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-green-300">
                  Travels And Tours
                </span>
              </span>
            </StyledNavLink>

            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-300">
              IATA accredited travel support for Nepal, Asia, Europe, and
              curated Himalayan journeys.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-4 py-3">
              <img
                src="/images/tours/iata-logo.jpg"
                alt="IATA Logo"
                className="h-8 w-auto rounded bg-white p-1"
              />
              <span className="text-sm font-medium text-zinc-200">
                IATA Accredited Agency
              </span>
            </div>
          </section>

          <FooterLinkList title="Explore" items={QUICK_LINKS} />
          <FooterLinkList title="Featured Tours" items={FEATURED_TOURS} />

          <section>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-300">
              Contact
            </h3>
            <ul className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex gap-3 text-sm leading-6">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-300"
                    aria-hidden="true"
                  />
                  {href ? (
                    <a
                      href={href}
                      className="break-words font-medium text-zinc-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="font-medium text-zinc-200">{label}</span>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="tel:+9779840069409"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 sm:w-auto"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              Call 24-hour service
            </a>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Regency Nepal Travels And Tours. All rights
            reserved.
          </p>
          <p className="text-center sm:text-right">
            Established 2001 | Kathmandu, Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
