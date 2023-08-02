import React, { Component } from 'react';
import Header from '../../Components/Text/Header';
import PhotoGallery from "react-photo-gallery";
import { photos } from "./Photos";
//import {getFileFromS3, getListOfFiles} from '../../ApiFunctions/S3Bucket';
import './Gallery.css';
var fs = require('fs');
class Gallery extends Component{
  
  state = {
    photos: null
  }

  encode(data){
    let buf = Buffer.from(data);
    let base64 = buf.toString('base64');
    return base64;
  }

  getImageDimensions(file) {
    return new Promise (function (resolved, rejected) {
      var i = new Image()
      i.onload = function(){
        console.log(i.width);
        resolved({w: i.width, h: i.height})
      };
      i.src = file
    })
  }

  // async componentDidMount(){
  //   // console.log('bruhhhhhhh',fs);

  //   const files = await getListOfFiles('Gallery')
  //   files.data.Contents.map(async(file, index) => {
  //     if(file.Size === 0) return;
  //     const fileData = await getFileFromS3(file.Key);
  //     console.log(fileData)
  //     // const file64 = this.encode(fileData.data.Body);
  //     // var dimensions = await this.getImageDimensions(file64)
  //     // console.log(dimensions);
  //   }) 
  // }

  render(){
    return(
      <div className = 'gallery-container'>
        <Header>GALLERY</Header>
      
        <PhotoGallery id = 'photo-gallery' photos = {photos}></PhotoGallery>
      </div>
    )
  }
}

export default Gallery;
