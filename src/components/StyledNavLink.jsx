import React from "react";
import { NavLink } from "react-router-dom";

function StyledNavLink({ to, children, onClick }) {
  return (
    <NavLink to={to} onClick={onClick}>
      {children}
    </NavLink>
  );
}

export default StyledNavLink;
