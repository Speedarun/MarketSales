import { Sidebar, NavItem, ProfileImg, Logout } from "./NavBar.style";
import profile from '../../assets/profile.png';
import { FiHome, FiPackage, FiUser, FiSettings, FiStar, FiLogOut } from "react-icons/fi";
const Navbar = () => {
  return (
    <Sidebar>
      <ProfileImg src={profile}/>
      <NavItem>
        <FiHome />
        Dashboard</NavItem>
      <NavItem><FiPackage />Products</NavItem>
      <NavItem><FiUser />Customers</NavItem>
      <NavItem><FiStar />Reviews</NavItem>
      <NavItem><FiSettings/>Settings</NavItem>
      <Logout><FiLogOut/>Logout</Logout>
    </Sidebar>
  );
};

export default Navbar;
