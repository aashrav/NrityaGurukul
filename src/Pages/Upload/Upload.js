import React, { Component } from 'react';
import './Upload.css';
import {handleUpload} from '../../ApiFunctions/S3Bucket';
class Upload extends Component{
  constructor(props){
    super(props);
    this.state = {
      success : false,
      url: "",
      selectedFile: null
    }
  }

  handleChange = (e) => {
    
    this.setState({
      selectedFile: e.target.files[0],
      loaded: 0
    })
  }

  handleSubmit = (e) => {
    console.log(this.state.selectedFile)
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    console.log(data);
    handleUpload({file: this.state.selectedFile, fileName: this.state.selectedFile.name})
  }

  render(){
    return(
      <React.Fragment>
        <h1 className = 'upload-title'>Upload Files</h1>
        {/* <button onClick={this.chooseFiles}>Choose files</button> */}
        <input className = 'upload-file' type = "file" onChange = {this.handleChange} ref = {(ref) => {this.uploadInput = ref;}}/>
        <button onClick = {this.handleSubmit}>Upload</button>
      </React.Fragment>
    )
  }
}



export default Upload;
