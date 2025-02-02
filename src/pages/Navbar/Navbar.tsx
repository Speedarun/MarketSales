import { ProfileImg } from "./Components/SideBar/styles";
import data from "../../DummyDetails/users";
import { NavItems } from "./Components/NavItem";
import { LogOut } from "./Components/Logout";
import { SideBar } from "./Components/SideBar";

export const NavBar = () => {
  const user = data.find((user) => user.id === 1);
  return (
    <SideBar>
      <ProfileImg src={user?.logo} />
      <NavItems />
      <LogOut />
    </SideBar>
  );
};
