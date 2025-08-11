import React from "react";
import { Typography } from "@material-tailwind/react";
import StyledNavLink from "./StyledNavLink";
import { PhoneIcon } from "@heroicons/react/16/solid";
import { HiLocationMarker } from "react-icons/hi";

const LINKS = [
  {
    title: "SITE LINKS",
    items: [
      { title: "Home", to: "/home" },
      { title: "Tours", to: "/tours" },
      { title: "Contacts", to: "/contacts" },
    ],
  },
  {
    title: "DESTINATION",
    items: [
      { title: "India", to: "/tours/asia/0" },
      { title: "France", to: "/tours/europe/0" },
      { title: "Germany", to: "/tours/europe/1" },
      { title: "Greece", to: "/tours/europe/2" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full pt-[5rem] bg-gray-900 text-gray-300">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Typography
              variant="h5"
              className="mb-2 font-logo text-center md:text-left text-white"
            >
              Regency Nepal Travels
            </Typography>

            <Typography
              variant="h6"
              className="text-center md:text-left flex items-center justify-center md:justify-start gap-1 text-green-400"
            >
              <HiLocationMarker
                aria-hidden="true"
                style={{ width: 16, height: 16 }}
              />
              Hattisar, Kathmandu, Nepal
            </Typography>

            <Typography
              variant="h6"
              className="mt-2 flex flex-col md:flex-row items-center md:items-start gap-1 text-green-400"
            >
              <PhoneIcon aria-hidden="true" style={{ width: 16, height: 16 }} />
              <div className="flex flex-col text-center md:text-left">
                <p>01-4528818, 01-4533455,</p>
                <p>01-4516620, 01-4580845</p>
              </div>
            </Typography>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 md:mt-0">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  className="mb-3 font-medium opacity-60 text-gray-400"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <StyledNavLink key={link.title} to={link.to}>
                    <li>
                      <Typography
                        as="a"
                        href="#"
                        className="py-1.5 font-normal transition-colors hover:text-white"
                      >
                        {link.title}
                      </Typography>
                    </li>
                  </StyledNavLink>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-gray-700 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal md:mb-0 text-gray-400"
          >
            &copy; {currentYear} Regency Nepal Travels And Tours. All Rights
            Reserved.
          </Typography>

          <div className="flex gap-4 text-gray-400 sm:justify-center">
            <Typography
              as="a"
              href="https://www.facebook.com/RegencyNepal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="opacity-80 transition-opacity hover:opacity-100 hover:text-white"
            >
              {/* Facebook SVG icon */}
            </Typography>
            {/* Add other social icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
