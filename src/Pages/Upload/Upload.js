import React, { Component } from 'react';
import './Upload.css';
import {handleUpload} from '../../ApiFunctions/S3Bucket';
import Header from '../../Components/Text/Header';
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
        <Header className = 'upload-title'>UPLOAD FILES</Header>
        <div className = 'upload-form'>
          <div className = 'upload-fileName'>
            <p>File Name: </p>
            <input type = "text" onChange = {this.nameHandler}/>
          </div>
          <input className = 'upload-file' type = "file" onChange = {this.fileHandler} ref = {(ref) => {this.uploadInput = ref;}}/>
          <div className = "upload-submit-wrapper">
            <button className = 'upload-submit' onClick = {this.handleSubmit}>Send</button>
          </div>
          </div>
      </div>
    )
  }
}



export default Upload;
