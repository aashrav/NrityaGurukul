import React, { Component } from 'react';
import './LogIn.css';
import {getUser} from '../../ApiFunctions/User';
import { compareSync } from 'bcrypt';
class LogIn extends Component{
  state = {
    email: "",
    password: ""
  }

  emailHandler = (event) =>{
    this.setState({
      email: event.target.value
    });
  }

  passwordHandler = (event) =>{
    this.setState({
      password: event.target.value
    });
  }

  submitHandler = () =>{
    console.log("hi")
    getUser({email: this.state.email, password: this.state.password}).then((res) =>{
      console.log(res)
      if(res === true){
        this.props.setAuthenticated(1);
        console.log(this.props.authenticated)
      }
    })
  }

  render(){
    return(
      <div>
        <div className = "log-in-container"> 
        <h1 className= "log-in-text">Log In</h1>

        <img className = "usernb-logo" alt = "" src = {process.env.PUBLIC_URL + '/images/logo.png'}></img>
          <input className = "log-in-username" onChange = {this.emailHandler}  type= "email" placeholder= "Email"></input>
          <input className = "log-in-password" onChange = {this.passwordHandler} type = "password" placeholder= "Password"></input>
          <button className = "log-in-button" onClick = {this.submitHandler}>Submit</button>
        </div>
      </div>    
    )
  }
}

export default LogIn;