import React, { Component } from 'react';
import './LogIn.css';
import {login} from '../../ApiFunctions/User';
class LogIn extends Component{
  state = {
    email: "",
    password: "",
    invalid: false
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
    login({email: this.state.email, password: this.state.password})
      .then((res)=>{
        if(res.data && res.data.isAuthenticated === true){
          this.invalidAuth(false)
          this.props.setAuthenticated(res.data.accessLevel);
          window.localStorage.setItem('jwtToken', res.data.token);
          window.location.reload();
        }else{
          this.invalidAuth(true);
        }
      }).catch((err) => {
        this.invalidAuth(true);
      })
  }

  invalidAuth = (val) =>{
    this.setState({
      invalid: val
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
          {(this.state.invalid) ? <h4>Invalid Email/Password*</h4>: ""}
          <button className = "log-in-button" onClick = {this.submitHandler}>Submit</button>
        </div>
      </div>    
    )
  }
}

export default LogIn;
