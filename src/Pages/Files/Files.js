import React, { Component } from 'react';
import Slideshow from '../../Components/Slideshow/Slideshow';
import './Files.css';

class Files extends Component{
  render(){
    return( 
      <div>
          <h2 className="files-heading">Your Files</h2>  
          <h2 className="files-heading">Your Videos</h2>  

      </div>
    )
  }
}

export default Files;