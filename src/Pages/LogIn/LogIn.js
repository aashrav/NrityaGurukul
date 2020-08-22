import React, { Component } from 'react';
import './LogIn.css';
import {login} from '../../ApiFunctions/User';
import Header from '../../Components/Text/Header';
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

  submitHandler = (e) =>{
    e.preventDefault()
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
    return false
  }

  invalidAuth = (val) =>{
    this.setState({
      invalid: val
    })
  }

  render(){
    return(
      <div className = 'log-in'>
        <Header className = 'log-in-title'>LOG IN</Header>
        <div className = "log-in-container"> 
          <img className = "log-in-logo" alt = "" src = {process.env.PUBLIC_URL + '/images/logo.png'}></img>
          <form onSubmit = {this.submitHandler}>
            <input required className = "log-in-username" onChange = {this.emailHandler}  type= "email" placeholder= "Email"></input>
            <input required className = "log-in-password" onChange = {this.passwordHandler} type = "password" placeholder= "Password"></input>
            {(this.state.invalid) ? <h5 className = 'log-in-invalid'>Invalid Email or Password*</h5>: ""}
            <button className = "log-in-button" type = 'submit'>Submit</button>
          </form>
        </div>
      </div>    
    )
  }
}

export default LogIn;
