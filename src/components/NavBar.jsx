import { useEffect, useState } from "react";
import { Navbar, MobileNav, Typography } from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import StyledNavLink from "./StyledNavLink";

const navLinks = [
  { name: "Home", to: "/home" },
  { name: "Tours", to: "/tours" },
  { name: "Contacts", to: "/contacts" },
];

const getNavLinkClassName = ({ isActive }) =>
  `inline-flex min-h-11 items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${
    isActive
      ? "bg-green-50 text-green-700"
      : "text-zinc-700 hover:bg-zinc-100 hover:text-green-700"
  }`;

function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setOpenNav(false);
  }, [pathname]);

  const navList = navLinks.map((link) => (
    <StyledNavLink key={link.to} to={link.to} className={getNavLinkClassName}>
      {link.name}
    </StyledNavLink>
  ));

  return (
    <Navbar className="sticky top-0 z-50 h-max max-w-full rounded-none border-b border-zinc-200 bg-white/95 px-4 py-2 text-zinc-900 shadow-sm backdrop-blur lg:px-8 lg:py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <StyledNavLink
          to="/home"
          className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
        >
          <div className="flex min-w-0 items-center gap-3">
            <img
              src="/logo.png"
              alt="Regency Nepal Logo"
              className="h-11 w-auto shrink-0 sm:h-12"
            />

            <div className="flex min-w-0 flex-col">
              <Typography
                as="span"
                className="truncate font-logo text-base uppercase leading-tight text-green-600 sm:text-lg"
              >
                Regency Nepal
              </Typography>
              <div className="mt-0.5 flex items-center gap-2">
                <span className="hidden text-xs tracking-wide text-gray-500 sm:inline">
                  Established 2001 |
                </span>
                <img
                  src="/images/tours/iata-logo.png"
                  alt="IATA Logo"
                  className="h-4 w-auto sm:h-5"
                />
              </div>
            </div>
          </div>
        </StyledNavLink>

        <div className="flex items-center gap-2">
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navList}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-200 text-zinc-800 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 lg:hidden"
            onClick={() => setOpenNav((prev) => !prev)}
            aria-label={openNav ? "Close menu" : "Open menu"}
            aria-expanded={openNav}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <MobileNav open={openNav} className="lg:hidden">
        <div className="mx-auto mt-3 max-w-7xl rounded-lg border border-zinc-200 bg-white p-3 shadow-sm">
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {navList}
          </nav>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default NavBar;
