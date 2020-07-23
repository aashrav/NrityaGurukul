import React, { Component } from 'react';
import Slideshow from '../../Components/Slideshow/Slideshow';
import './Home.css'
import SubHeader from '../../Components/Text/SubHeader';

class Home extends Component{
  render(){
    return (
    <div>
      <Slideshow/>
      <div className = 'about-us'>
          <img alt = "" className = 'rounded-img' src = {process.env.PUBLIC_URL + '/images/aboutIMG.jpg'}/>
          <div className ='about-us-body'>
            <SubHeader className = 'about-title'>ABOUT NRITYA GURUKUL</SubHeader>
            <p>Nritya Gurukul brings forth the rich culture and heritage of India through dance. The dance forms taught are Bharatanatyam in Thanjavur style and semi classical dances of India.</p> 
            <p>Here utmost priority is given to teach in a friendly, positive environment, and to recognize the strength and potential of every individual. The importance of team work and integrity is understood and implemented by everyone.</p>  
          </div>
      </div>

      <div className = 'meet-teacher'>
        <SubHeader className = 'meet-teacher-title'>MEET THE TEACHER</SubHeader>
        <div className ='meet-teacher-body'>
          <div>
          <p>Nritya Gurukul brings forth the rich culture and heritage of India through dance. The dance forms taught are Bharatanatyam in Thanjavur style and semi classical dances of India.</p> 
          <p>Here utmost priority is given to teach in a friendly, positive environment, and to recognize the strength and potential of every individual. The importance of team work and integrity is understood and implemented by everyone.</p>  
          </div>
          <img alt = "" className = 'rounded-img' src = {process.env.PUBLIC_URL + '/images/DanceTeacher.jpg'}/>
        </div>
      </div>
      {/* <h1 className= "about-us"></h1> */}
    </div> 
    )
  }
}

export default Home;