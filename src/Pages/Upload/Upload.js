import React, { Component } from 'react';
import './Upload.css';
import {handleUpload} from '../../ApiFunctions/S3Bucket';
class Upload extends Component{
  constructor(props){
    super(props);
    this.state = {
      success : false,
      url: "",
      selectedFile: null,
      fileName: ""
    }
  }

  fileHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  nameHandler = (e) =>{
    this.setState({
      fileName:e.target.value
    });
  }

  handleSubmit = (e) => {
    // console.log(this.state.selectedFile)
    // const data = new FormData();
    // data.append('file', this.state.selectedFile);
    // console.log(data);
    console.log("handleSubmit file: ",this.state.selectedFile);
    console.log("handleSubmit fileName: ",this.state.fileName);
    handleUpload({file: this.state.selectedFile, fileName: this.state.fileName})
  }

  render(){
    return(
      <div className = 'upload-wrapper'>

        {/* <form className = 'upload-form'> */}
        <div className = 'upload-form'>
          <h1 className = 'upload-title'>Upload File</h1>
          <div className = 'upload-fileName'>
            <p>File Name: </p>
            <input type = "text" onChange = {this.nameHandler}/>
          </div>
          <input className = 'upload-file' type = "file" onChange = {this.fileHandler} ref = {(ref) => {this.uploadInput = ref;}}/>
          <div className = "upload-submit-wrapper">
            <button className = 'upload-submit' onClick = {this.handleSubmit}>Send</button>
          </div>
          </div>
        {/* </form> */}
        {/* <button onClick={this.chooseFiles}>Choose files</button> */}
        {/* <input className = 'upload-file' type = "file" onChange = {this.handleChange} ref = {(ref) => {this.uploadInput = ref;}}/>
        <button onClick = {this.handleSubmit}>Upload</button> */}
      </div>
    )
  }
}



export default Upload;
