import React, { Component } from 'react';
import Slideshow from '../../Components/Slideshow/Slideshow';
import './Home.css'
class Home extends Component{
  render(){
    return (
    <div>
      <Slideshow/>
      <h1 className= "about-us">About Us</h1>
      <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">

        <button>hi</button>
      </a>
  
    </div>
    )
  }
}

export default Home;