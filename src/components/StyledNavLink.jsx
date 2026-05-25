import React from "react";
import { NavLink } from "react-router-dom";

function StyledNavLink({ to, children, onClick, ...props }) {
  return (
    <NavLink to={to} onClick={onClick} {...props}>
      {children}
    </NavLink>
  );
}

export default StyledNavLink;
