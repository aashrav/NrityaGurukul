import React from 'react';
import './Slideshow.css';
const Slideshow = () =>{
  return(
    <div className = "slideshow">
      <img className= "groupImg" src = {process.env.PUBLIC_URL + '/images/groupImg.jpg'}></img> 
    </div>
  )
}

export default Slideshow;
