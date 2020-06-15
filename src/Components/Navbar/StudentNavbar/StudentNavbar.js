import React from 'react';
import {Link} from "react-router-dom";
import './StudentNavbar.css'

const StudentNavbar = () =>{
  return(
      <div className = "student-navbar">
        <img className = "studentnb-logo" alt = "" src = {process.env.PUBLIC_URL + '/images/logoWhite.png'}></img>
        <div className = "studentnb-links">
          <button>
            <Link className = "student-link" to = "/">
              <h3>Home</h3>
            </Link>
          </button>
          {/* <button>
            <h3>About Us</h3>
          </button> */}
          <button>
            <Link className = "student-link" to= "contact">
              <h3>Files</h3>
            </Link>
          </button>
          {/* <button>
            <h3>Gallery  </h3>
          </button> */}
          <button>
            <Link className = "student-link" to = "login">
              <h3>Log Out</h3>
            </Link>
          </button>
        </div>
      </div>
  );
}

export default StudentNavbar;