import "./NavBar.css";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { FaBell, FaHistory } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { BsBuildingsFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  const navigate = useNavigate();
  return (
    <header>
      <div className="nav-container">
        <a className="logo" href="#">
          ARCE.
        </a>
        <ul className="navBar">
          <NavLink to='/' id="link">Home</NavLink>
          <NavLink to='/viewHomes' id="link">View Homes</NavLink>
          <NavLink to='/aboutUs' id="link">About Us</NavLink>
          <NavLink to='/rentalHistory' id="link">Rental History</NavLink>
          <NavLink to='/contactUs' id="link">Contact Us</NavLink>
        </ul>
        <FaBell id="bell-icon" />
        <button onClick={()=> navigate('/profile')}>Sign Up</button>
      </div>
      {/* Bottom Mobile Nav */}
      <div className="bottom-navbar">
        <NavLink to='/' className="nav-item">
          <AiFillHome className="nav-icon" />
          <span>Home</span>
        </NavLink>

        <NavLink to='/viewHomes' className="nav-item">
          <BsBuildingsFill className="nav-icon" />
          <span>View Homes</span>
        </NavLink>

        <NavLink to='/rentalHistory' className="nav-item">
          <FaHistory className="nav-icon" />
          <span>Rental History</span>
        </NavLink>

        <NavLink to='/profile' className="nav-item">
          <FaCircleUser className="nav-icon" />
          <span>Profile</span>
        </NavLink>
      </div>
    </header>
  );
};

export default NavBar;
