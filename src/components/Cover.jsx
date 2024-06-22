import React from "react";
import cover from "./../../src/images/cover.jpg";

const Cover = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Nepal Explores: Beyond Borders
        </h1>
        <p className="text-xl leading-relaxed md:text-2xl font-cursive">
          Travel far enough, you meet yourself.
        </p>
        {/* Optional Call to Action Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white  font-bold py-2 px-4 mt-4 rounded">
          Explore Destinations
        </button>
      </div>
    </div>
  );
};

export default Cover;
