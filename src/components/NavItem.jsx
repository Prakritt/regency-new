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
      <span className="flex items-center nav_item min-w-[4rem] min-h-[2rem]">
        {name}
      </span>
    </Typography>
  );
}

export default NavItem;
