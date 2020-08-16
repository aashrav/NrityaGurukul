import React, { Component } from 'react';
import './Upload.css';
import {uploadToS3} from '../../ApiFunctions/S3Bucket';
import Header from '../../Components/Text/Header';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond/dist/filepond.min.css';
import $ from 'jquery';

registerPlugin(FilePondPluginImagePreview);

class Upload extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: null,
      success: null,
      group: null
    }
  }
  
  handleSubmit = async(e) => {
    e.preventDefault();
    const response = await uploadToS3({files: this.state.files, group: this.state.group})
    this.setState({
      success: !response
    })
    return false;
  }

  handleGroupChange = (e) => {
    this.setState({
      group: e.target.value
    });
  }
  
  render(){
    return(
      <div className = 'upload-wrapper'>
        <Header className = 'upload-title'>UPLOAD FILES</Header>
        <form id = 'upload-form' className = 'upload-form' onSubmit = {this.handleSubmit}>
        {/* <div className = 'upload-form'> */}
          {/* <div className = 'upload-fileName'>
            <p>File Name: </p>
            <input type = "text" onChange = {this.nameHandler}/>
          </div> */}
          {/* <input className = 'upload-file' type = "file" onChange = {this.fileHandler} ref = {(ref) => {this.uploadInput = ref;}}/> */}
          <label>Select Group: </label>
          <input className = 'upload-group' type = "number" min = {1} max = {17} onChange = {this.handleGroupChange} required/>

            <FilePond
              required
              allowMultiple = {true}
              onupdatefiles={(fileItems) => {
                const files = fileItems.map((fileItem) => fileItem.file);
                this.setState({
                  files: files,
                });
              }}
            />
            <button className = 'upload-submit'  type = 'submit'>Upload</button>
            {(this.state.success != null && this.state.success)? 
              <div className = 'upload-success'>
                <h2 >Successful</h2>
               
                <svg x="0px" y="0px" width="92px" height="92px" viewBox="0 0 92 92" enable-background="new 0 0 92 92">
                  <path xmlns="http://www.w3.org/2000/svg" id="XMLID_712_" d="M34.4,72c-1.2,0-2.3-0.4-3.2-1.3L11.3,50.8c-1.8-1.8-1.8-4.6,0-6.4c1.8-1.8,4.6-1.8,6.4,0l16.8,16.7  l39.9-39.8c1.8-1.8,4.6-1.8,6.4,0c1.8,1.8,1.8,4.6,0,6.4l-43.1,43C36.7,71.6,35.6,72,34.4,72z"/>
                </svg>
              </div>: null}
            {(this.state.success != null && !this.state.success)? <h2 className = 'upload-failed'>Failed</h2>: null}

          </form>
        </div>        
    )
  }
}



export default Upload;
