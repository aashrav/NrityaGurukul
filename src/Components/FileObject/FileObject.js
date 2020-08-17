import React from 'react';
import './FileObject.css';
const FileObject = (props) => {
  return(
    <div onClick={props.click} className = 'file-object-card'>
      <div className = 'file-object-title'>
        {props.children}
      </div>
    </div>
  )
}

export default FileObject;
