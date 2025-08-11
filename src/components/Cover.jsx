import React from "react";
import cover from "./../../src/images/cover.jpg";
import StyledNavLink from "./StyledNavLink";

const Cover = () => (
  <div
    className="bg-cover bg-center h-screen flex items-center justify-center"
    style={{ backgroundImage: `url(${cover})` }}
  >
    <div className="text-center text-white px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Nepal Explores: Beyond Borders
      </h1>
      <p className="text-base sm:text-lg md:text-xl font-cursive leading-relaxed max-w-xl mx-auto">
        Travel far enough, you meet yourself.
      </p>
      <StyledNavLink to="/tours">
        <button
          type="button"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 mt-6 rounded transition-colors duration-300"
          aria-label="Explore Destinations"
        >
          Explore Destinations
        </button>
      </StyledNavLink>
    </div>
  </div>
);

export default Cover;
