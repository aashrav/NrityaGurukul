import React from 'react';
import './header.css';
// import url(//db.onlinewebfonts.com/c/2246d642275618faa05b6c551ed5685f?family=CutoffW01-Regular);

const Header = (props) => {
  const getTextWidth = (text, font) => {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
  }
  return(
    <div className = {`header ${props.children}`}>
      {/* <h1>woeifjweoij</h1> */}
    <h3 className = 'headerText'>{props.children}</h3>
    {/* {console.log()} */}
    <hr className = 'headerLine' style = {{width: getTextWidth(props.children.split(' ')[0], "45px CutoffW01-Regular")}}/>
    </div>
  )
}
export default Header;
