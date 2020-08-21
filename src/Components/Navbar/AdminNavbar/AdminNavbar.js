import React from 'react';
import {Link} from "react-router-dom";
import './AdminNavbar.css'

const AdminNavbar = (props) =>{
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
          <Link className = "admin-link" to = "/">
            <h3>GALLERY</h3>
          </Link>
        </button>
        <button>
          <Link className="admin-link" to= "contact">
            <h3>CONTACT</h3>
          </Link>
        </button>
          <button>
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
          </button>
        </div>
      </div>
  );
}

export default AdminNavbar;