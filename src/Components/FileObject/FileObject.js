import React from 'react';
import './FileObject.css';
const FileObject = (props) => {
  return(
    <div onClick={props.click} className = 'file-object-card'>
      <h3 className = 'file-object-title'>
        {props.children}
      </h3>
    </div>
  )
}

export default FileObject;
