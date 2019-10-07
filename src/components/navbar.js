import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
export default function Navbar() {
  return (
    <Nav className="navbar navbar-dark bg-dark">
      <NavItem>
        <NavLink href="#">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Movies</NavLink>
      </NavItem>
    </Nav>
  );
}
