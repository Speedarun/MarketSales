import { FiHome, FiPackage, FiSettings, FiStar, FiUser } from "react-icons/fi";
import { NavItem } from "./styles";
import React from "react";

export const NavItems = () => {
  return (
    <React.Fragment>
      <NavItem>
        <FiHome />
        Dashboard
      </NavItem>
      <NavItem>
        <FiPackage />
        Products
      </NavItem>
      <NavItem>
        <FiUser />
        Customers
      </NavItem>
      <NavItem>
        <FiStar />
        Reviews
      </NavItem>
      <NavItem>
        <FiSettings />
        Settings
      </NavItem>
    </React.Fragment>
  );
};
