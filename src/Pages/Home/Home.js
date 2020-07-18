import React, { Component } from 'react';
import Slideshow from '../../Components/Slideshow/Slideshow';
import './Home.css'
class Home extends Component{
  render(){
    return (
    <div>
      <Slideshow/>
      <h1 className= "about-us">About Us</h1>
    </div> 
    )
  }
}

export default Home;