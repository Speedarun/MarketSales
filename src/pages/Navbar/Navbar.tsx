import  profile  from "../../assets/profile.png";
import dashboard from '../../assets/dashboard.png'
import { Sidebar, NavItem, ProfileImg, Logout, NavImg, NavTitle } from "./NavBar.style";

const Navbar = () => {
  return (
    <Sidebar>
      <ProfileImg src={profile}/>
      <NavItem>
        <NavImg src={dashboard}/>
        <NavTitle>Dashboard</NavTitle>
        </NavItem>
        <NavItem>
        <NavImg src={dashboard}/>
        <NavTitle>Products</NavTitle>
        </NavItem>
        <NavItem>
        <NavImg src={dashboard}/>
        <NavTitle>Customers</NavTitle>
        </NavItem>
        <NavItem>
        <NavImg src={dashboard}/>
        <NavTitle>Reviews</NavTitle>
        </NavItem>
        <NavItem>
        <NavImg src={dashboard}/>
        <NavTitle>Settings</NavTitle>
        </NavItem>
      
      <Logout>Logout</Logout>
    </Sidebar>
  );
};

export default Navbar;
