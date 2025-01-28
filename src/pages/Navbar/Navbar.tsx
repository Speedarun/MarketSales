import { Sidebar, NavItem, ProfileImg, Logout } from "./NavBar.style";

const Navbar = () => {
  return (
    <Sidebar>
      <ProfileImg src="src/assets/profile.png"/>
      <NavItem>Dashboard</NavItem>
      <NavItem>Products</NavItem>
      <NavItem>Customers</NavItem>
      <NavItem>Reviews</NavItem>
      <NavItem>Settings</NavItem>
      <Logout>Logout</Logout>
    </Sidebar>
  );
};

export default Navbar;
