import React from 'react';
import './UserNavbar.css'
import {Link} from "react-router-dom";
const UserNavBar = (props) => {
  return (
    <div className = "user-navbar">
      <img className = "usernb-logo" alt = "" src = {process.env.PUBLIC_URL + '/images/logo.png'}></img>
      <div className = "usernb-links">
        <button>
          <Link className = "user-link" to = "/">
            <h3>HOME</h3>
          </Link>
        </button>
        <button>
          <Link className = "user-link" to = "/">
            <h3>GALLERY</h3>
          </Link>
        </button>
        <button>
          <Link className="user-link" to= "contact">
            <h3>CONTACT</h3>
          </Link>
        </button>
        <button>
          <Link className="user-link" to = "login">
            <h3>LOG IN</h3>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default UserNavBar;