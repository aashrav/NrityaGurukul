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
              <h3>Home</h3> 
            </Link>
          </button>
          <button>
            <Link className = "admin-link" to= "upload">
              <h3>Upload</h3>
            </Link>
          </button>
          <button>
            <Link className = "admin-link" onClick = {props.handleLogout}>
              <h3>Log Out</h3>
            </Link>
          </button>
        </div>
      </div>
  );
}

export default AdminNavbar;