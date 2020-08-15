import React from 'react';
import {Link} from "react-router-dom";
import './StudentNavbar.css'

const StudentNavbar = (props) =>{
  return(
      <div className = "student-navbar">
        <img className = "studentnb-logo" alt = "" src = {process.env.PUBLIC_URL + '/images/logoWhite.png'}></img>
        <div className = "studentnb-links">
        <button>
          <Link className = "student-link" to = "/">
            <h3>HOME</h3>
          </Link>
        </button>
        <button>
          <Link className = "student-link" to = "/">
            <h3>GALLERY</h3>
          </Link>
        </button>
        <button>
          <Link className="student-link" to= "contact">
            <h3>CONTACT</h3>
          </Link>
        </button>
        <button>
          <Link className="student-link" to = 'files'>
            <h3>FILES</h3>
          </Link>
        </button>
        <button>
          <Link className="student-link" to = '/' onClick = {props.handleLogout}>
            <h3>LOG OUT</h3>
          </Link>
        </button>
        </div>
      </div>
  );
}

export default StudentNavbar;