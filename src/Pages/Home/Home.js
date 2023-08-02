import React, { Component } from 'react';
import Slideshow from '../../Components/Slideshow/Slideshow';
import './Home.css'
import SubHeader from '../../Components/Text/SubHeader';
import { Grid, Typography } from '@material-ui/core';

class Home extends Component{
  render(){
    return (
      <Grid container >
        <Grid container>

          <Grid item xs = {12}>
            <Slideshow/>
          </Grid>

          <Grid item xs = {12}>
            <Grid container style = {{padding: "20px"}} spacing = {2}>
              <Grid item lg = {6} sm = {0} xs = {0}/>
              <Grid item lg = {6} sm = {12} xs = {12} >
                <SubHeader className = 'meet-teacher-title'>ABOUT NRITYA GURUKUL</SubHeader>
              </Grid>
              <Grid item lg = {6} sm = {12} xs = {12} style = {{textAlign: "center"}}>
                <img alt = "" style={{width: "90%", borderRadius: "15px"}} src = {process.env.PUBLIC_URL + '/images/aboutIMG.jpg'}/>
              </Grid>

              <Grid item lg = {6} sm = {12} xs = {12}>
                <Typography 
                  style = {{fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                            fontWeight: "lighter",
                            fontSize: "25px",
                            // color: "white"
                          }}
                > 
                      Nritya Gurukul brings forth the rich culture and heritage of India through dance. The dance forms taught are Bharatanatyam in Thanjavur style and semi classical dances of India
                </Typography>
                <br></br>
                <Typography 
                  style = {{fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                            fontWeight: "lighter",
                            fontSize: "25px",
                            // color: "white"
                          }}
                > 
                      Here utmost priority is given to teach in a friendly, positive environment, and to recognize the strength and potential of every individual. The importance of team work and integrity is understood and implemented by everyone
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs = {12}>
            <Grid container style = {{padding: "20px"}} spacing = {2}>
              <Grid item lg = {6} sm = {0} xs = {0}/>
              <Grid item lg = {6} sm = {12} xs = {12} >
                <SubHeader className = 'meet-teacher-title'>MEET THE TEACHER</SubHeader>
              </Grid>
              <Grid item lg = {6} sm = {12} xs = {12} style = {{textAlign: "center"}}>
                <img alt = "" style={{width: "90%", borderRadius: "15px"}} src = {process.env.PUBLIC_URL + '/images/DanceTeacher.jpg'}/>
              </Grid>

              <Grid item lg = {6} sm = {12} xs = {12}>
                <Typography 
                  style = {{fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                            fontWeight: "lighter",
                            fontSize: "25px"
                          }}
                > 
                      Nritya Gurukul brings forth the rich culture and heritage of India through dance. The dance forms taught are Bharatanatyam in Thanjavur style and semi classical dances of India
                </Typography>
                <br></br>
                <Typography 
                  style = {{fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                            fontWeight: "lighter",
                            fontSize: "25px"
                          }}
                > 
                      Here utmost priority is given to teach in a friendly, positive environment, and to recognize the strength and potential of every individual. The importance of team work and integrity is understood and implemented by everyone
                </Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>

        {/* <div className = 'meet-teacher'>
            <div>
              <SubHeader className = 'meet-teacher-title'>ABOUT NRITYA GURUKUL</SubHeader>
            </div>
            <div className ='meet-teacher-body'>
              <img alt = "" className = 'rounded-img' src = {process.env.PUBLIC_URL + '/images/aboutIMG.jpg'}/>

              <div>
                <p>Nritya Gurukul brings forth the rich culture and heritage of India through dance. The dance forms taught are Bharatanatyam in Thanjavur style and semi classical dances of India.</p> 
                <p>Here utmost priority is given to teach in a friendly, positive environment, and to recognize the strength and potential of every individual. The importance of team work and integrity is understood and implemented by everyone.</p>  
              </div>

            </div>
        </div> */}

        {/* <div className = 'meet-teacher'>
          <div>
            <SubHeader className = 'meet-teacher-title'>MEET THE TEACHER</SubHeader>
            </div>
          <div className ='meet-teacher-body'>
            <img alt = "" className = 'rounded-img' src = {process.env.PUBLIC_URL + '/images/DanceTeacher.jpg'}/>

            <div>
              <p>Nritya Gurukul brings forth the rich culture and heritage of India through dance. The dance forms taught are Bharatanatyam in Thanjavur style and semi classical dances of India.</p> 
              <p>Here utmost priority is given to teach in a friendly, positive environment, and to recognize the strength and potential of every individual. The importance of team work and integrity is understood and implemented by everyone.</p>  
            </div>
          </div>
        </div> */}
        {/* <h1 className= "about-us"></h1> */}
      </Grid>
    )
  }
}

export default Home;