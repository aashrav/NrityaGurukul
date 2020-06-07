import React from 'react';
import './UserNavbar.css'
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
          <h3>Home</h3>
        </button>
        {/* <button>
          <h3>About Us</h3>
        </button> */}
        <button>
          <h3>Contact</h3>
        </button>
        <button>
          <h3>Gallery  </h3>
        </button>
        <button>
          <h3>Log In</h3>
        </button>
      </div>
    </div>
  );
}

export default NavBar;