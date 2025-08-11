import React from "react";
import cover from "./../../src/images/cover.jpg";
import StyledNavLink from "./StyledNavLink";

const Cover = () => (
  <div
    className="relative flex items-center justify-center h-[70vh] sm:h-[80vh] md:h-screen"
    style={{
      backgroundImage: `url(${cover})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Content */}
    <div className="relative text-center text-white px-4 max-w-3xl mx-auto animate-fadeIn">
      <h1
        className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Nepal Explores: Beyond Borders
      </h1>
      <p
        className="text-base sm:text-lg md:text-2xl font-light leading-relaxed mb-8"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Travel far enough, you meet yourself.
      </p>
      <StyledNavLink to="/tours">
        <button
          type="button"
          className="bg-green-600 hover:bg-green-500 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Explore Destinations"
        >
          Explore Destinations
        </button>
      </StyledNavLink>
    </div>
  </div>
);

export default Cover;
