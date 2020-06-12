import React, { Component } from 'react';
import './LogIn.css';
import UserNavbar from '../../Components/UserNavbar/UserNavbar';
class LogIn extends Component{
  render(){
    return(
      <div>
        <div className = "log-in-container"> 
        <h1 className= "log-in-text">Log In</h1>

        <img className = "usernb-logo" src = {process.env.PUBLIC_URL + '/images/logo.png'}></img>
          <input className = "log-in-username" type= "email" placeholder= "Email"></input>
          <input className = "log-in-password" type = "password" placeholder= "Password"></input>
          <button className = "log-in-button">Submit</button>
        </div>
      </div>    
    )
  }
}

export default LogIn;