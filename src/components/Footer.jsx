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
    <footer className="relative w-full pt-[5rem] bg-white">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Typography
              variant="h5"
              className="mb-2 font-logo text-center md:text-left"
            >
              Regency Nepal Travels
            </Typography>

            <Typography
              variant="h6"
              color="gray"
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start">
                <HiLocationMarker
                  className="text-green-500 mr-1"
                  style={{ width: 16, height: 16 }}
                  aria-hidden="true"
                />
                Hattisar, Kathmandu, Nepal
              </div>
            </Typography>

            <Typography variant="h6" color="gray" className="mt-2">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <PhoneIcon
                  className="text-green-500 mr-1"
                  style={{ width: 16, height: 16 }}
                  aria-hidden="true"
                />
                <div className="flex flex-col text-center md:text-left">
                  <p>01-4528818, 01-4533455,</p>
                  <p>01-4516620, 01-4580845</p>
                </div>
              </div>
            </Typography>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 md:mt-0">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <StyledNavLink key={link.title} to={link.to}>
                    <li>
                      <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
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

        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} Regency Nepal Travels And Tours. All Rights
            Reserved.
          </Typography>

          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="https://www.facebook.com/RegencyNepal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                />
              </svg>
            </Typography>
            {/* Add other social icons here similarly if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
