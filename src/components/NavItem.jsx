import { Typography } from "@material-tailwind/react";
import React from "react";

function NavItem({ name }) {
  return (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a href="#" className="flex items-center">
        {name}
      </a>
    </Typography>
  );
}

export default NavItem;
