import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import { Hamburger, Menu, MenuLink, Nav } from "./Navbar.style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)







  return (
    <Nav x="space-between">
      <div>
        <MenuLink href="/">
          <i>{" Burak's "}</i>
          <span> Kitchen</span>
        </MenuLink>
      </div>
      <Hamburger>
        <GiHamburgerMenu onClick={()=>setIsOpen(!isOpen)} />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={()=>setIsOpen(false)} >
        <MenuLink
          to="/"
          style={({ isActive }) => ({ color: isActive && "red" })}
        >
          Home
        </MenuLink>
        <MenuLink
          to="about"
          style={({ isActive }) => ({ color: isActive && "red" })}
        >
          About
        </MenuLink>
        <MenuLink
          to="register"
          style={({ isActive }) => ({ color: isActive && "red" })}
        >
          Register
        </MenuLink>
        <MenuLink
          to="login"
          style={({ isActive }) => ({ color: isActive && "red" })}
          target="true"
        >
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
// style={({ isActive }) => ({color: isActive && "red"})}
