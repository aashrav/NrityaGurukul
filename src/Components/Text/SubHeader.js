import React from 'react';
import './subheader.css';
// import url(//db.onlinewebfonts.com/c/2246d642275618faa05b6c551ed5685f?family=CutoffW01-Regular);

const SubHeader = (props) => {
  const getTextWidth = (text, font) => {
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
  }
  {console.log(props)}

  return(
    <div className = {`subheader ${props.className}`}> 
      <h3 className = 'subheaderText'>{props.children}</h3>
      <hr className = 'subheaderLine' style = {{width: getTextWidth(props.children.split(' ')[0], "30px CutoffW01-Regular")}}/>
    </div>
  )
}
export default SubHeader;
