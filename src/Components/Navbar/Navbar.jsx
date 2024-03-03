import "./Navbar.css";
import {
  menuIcon,
  logo,
  searchIcon,
  uploadIcon,
  notificationIcon,
  profileIcon,
} from "./index";
import { Link } from "react-router-dom";
const Navbar = ({setSidebar}) => {

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img onClick={() => setSidebar(prev => !prev)} className="menu-icon" src={menuIcon} alt="menu-icon" />
        <Link to = '/'><img className="logo" src={logo} alt="" /></Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
            <img src={searchIcon} alt="search" />           
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={uploadIcon} alt="" />
        <img src={notificationIcon} alt="" />
        <img src={profileIcon} className="profile-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
