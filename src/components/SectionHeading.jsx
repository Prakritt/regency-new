import React from "react";

function SectionHeading({ title, className = "" }) {
  return (
    <h2
      className={`text-[1.3rem] md:text-[1.6rem] lg:text-[1.8rem] text-center font-bold mb-[1.5rem] md:mb-[2rem] ${className} `}
    >
      {title}
    </h2>
  );
}

export default SectionHeading;
