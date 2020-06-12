import React from 'react';
import './UserNavbar.css'

import {Link} from "react-router-dom";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   // NavbarText
// } from 'reactstrap';

const NavBar = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  return (
    <div className = "user-navbar">
      <img className = "usernb-logo" src = {process.env.PUBLIC_URL + '/images/logo.png'}></img>
      <div className = "usernb-links">
        <button>
          <Link to = "/">
            <h3>Home</h3>
          </Link>
        </button>
        {/* <button>
          <h3>About Us</h3>
        </button> */}
        <button>
          <Link to= "contact">Contact</Link>
        </button>
        {/* <button>
          <h3>Gallery  </h3>
        </button> */}
        <button>
          <Link to = "login">Log In</Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;