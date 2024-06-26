import { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";
import StyledNavLink from "./StyledNavLink";

function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <StyledNavLink to="/home">
        <NavItem onClose={() => setOpenNav(false)} name={"Home"} />
      </StyledNavLink>
      <StyledNavLink to="/tours">
        <NavItem onClose={() => setOpenNav(false)} name={"Tours"} />
      </StyledNavLink>
      {/* <StyledNavLink to="/services">
        <NavItem name={"Services"} />
      </StyledNavLink>
      <StyledNavLink to="/contact">
        <NavItem name={"Contact"} />
      </StyledNavLink> */}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-white text-green-500">
      <div className="flex items-center justify-between text-blue-gray-900">
        <StyledNavLink to="/home">
          <div className="flex gap-5 justify-between">
            <img
              src="/logo.png"
              alt="icon"
              className="h-[2rem] w-[2rem] items-center"
            />
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 text-green-500 font-logo uppercase  md:block"
            >
              Regency Nepal
            </Typography>
          </div>
        </StyledNavLink>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}

export default NavBar;
