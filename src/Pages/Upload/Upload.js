import React, { Component } from 'react';
import './Upload.css';
import {uploadToS3,getObjectFromS3} from '../../ApiFunctions/S3Bucket';
import Header from '../../Components/Text/Header';
class Upload extends Component{
  constructor(props){
    super(props);
    this.state = {
      success : false,
      url: "",
      selectedFile: null,
      fileName: "",
      temp: null,
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
    uploadToS3({file: this.state.selectedFile, fileName: this.state.fileName})
  }

  temp = async(e) => {
    const response = await getObjectFromS3();
    console.log("nnnnnn", response.data.Body)
    this.setState({
      temp: response.data.Body
    })
  }

  encode(data){
    let buf = Buffer.from(data);
    let base64 = buf.toString('base64');
    return base64;
  }

  render(){
    console.log(this.state.temp)
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
            <button className = 'upload-submit' onClick = {this.temp}>Send</button>
          </div>
          </div>
          {(this.state.temp) ?<img src= {"data:image/jpeg;base64," + this.encode(this.state.temp)}></img> : null }
      </div>
    )
  }
}



export default Upload;
