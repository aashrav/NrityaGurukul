import React from 'react';
import {Link} from "react-router-dom";
import './AdminNavbar.css'
import ProfileDropdown from '../../ProfileDropdown/ProfileDropdown';
const AdminNavbar = (props) =>{
  const dropdownLinks = [
    {
      label:'Overview',
      to: 'overview',
      click: null
    },
    {
      label:'Upload',
      to: 'upload',
      click: null
    },
    {
      label: 'Log Out',
      to: '/',
      click: props.handleLogout
    }
  ]
  return(
      <div className = "admin-navbar">
        <img className = "adminnb-logo" alt = "" src = {process.env.PUBLIC_URL + '/images/logo.png'}></img>
        <div className = "adminnb-links">
          <button>
            <Link className = "admin-link" to = "/">
              <h3>HOME</h3> 
            </Link>
          </button>
          <button>
          <Link className = "admin-link" to = "/gallery">
            <h3>GALLERY</h3>
          </Link>
          </button>
          <button>
            <Link className="admin-link" to= "contact">
              <h3>CONTACT</h3>
            </Link>
          </button>
          {/* <button>
            <Link className = "admin-link" to= "upload">
              <h3>UPLOAD</h3>
            </Link>
          </button>
          <button>
            <Link className = "admin-link" to= "overview">
              <h3>OVERVIEW</h3>
            </Link>
          </button>
          <button>
            <Link className = "admin-link" to = '/' onClick = {props.handleLogout}>
              <h3>LOG OUT</h3>
            </Link>
          </button> */}
          <ProfileDropdown links = {dropdownLinks} handleLogout = {props.handleLogout} user = {props.user}></ProfileDropdown>
        </div>
      </div>
  );
}

export default AdminNavbar;
