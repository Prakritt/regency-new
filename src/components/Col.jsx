import React from "react";

function Col({ children, props }) {
  return (
    <div
      className={`flex flex-col gap-2 items-center mt-2 ${props?.className} `}
    >
      {children}
    </div>
  );
}

export default Col;
