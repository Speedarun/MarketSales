
import { Sidebar, NavItem, ProfileImg, Logout } from "./SideBar/styles";
import {
  FiHome,
  FiPackage,
  FiUser,
  FiSettings,
  FiStar,
  FiLogOut,
} from "react-icons/fi";
import data from "../../DummyDetails/users";

const user = data.find((user) => user.id === 1);
export const NavBar = () => {
  return (
    <Sidebar>
      <ProfileImg src={user?.logo} />
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
      <Logout>
        <FiLogOut />
        Logout
      </Logout>
    </Sidebar>
  );
};


