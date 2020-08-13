import React from 'react';
import './Slideshow.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slideshow = () =>{
  return(
    <Carousel className = 'slideshow' showArrows = {false} showIndicators = {false} showThumbs = {false} showStatus = {false} autoPlay = {true} infiniteLoop= {true} stopOnHover = {false}>
      <div>
        <img alt = "" className= "groupImg" src = {process.env.PUBLIC_URL + '/images/slideshowIMG2.jpg'}></img> 
      </div>
      <div>
        <img alt = "" className= "groupImg" src = {process.env.PUBLIC_URL + '/images/slideshowIMG.jpg'}></img> 
      </div>
    </Carousel>
  )
}

export default Slideshow;
