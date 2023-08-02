import React, { useState } from 'react';
import Header from '../../Components/Text/Header';
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import { photos } from "./Photos";
import './Gallery.css';
import "react-image-lightbox/style.css";

const GalleryGrid = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = photos[index];
  const nextIndex = (index + 1) % photos.length;
  const nextImage = photos[nextIndex] || currentImage;
  const prevIndex = (index + photos.length - 1) % photos.length;
  const prevImage = photos[prevIndex] || currentImage;

  const handleClick = (index) => {setIndex(index); console.log(index)};
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);


  return(
    <div className = 'gallery-container'>
      <Header>GALLERY</Header>
      <div style={{width: "75%"}}>
        <Gallery 
          rowHeight={"10em"}
          id = 'photo-gallery' 
          images = {photos}
          onClick={handleClick}
          enableImageSelection={false}
          margin = {8}
        />

        {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.src}
            nextSrc={nextImage.src}
            prevSrc={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
    </div>
  )
  
}

export default GalleryGrid;
