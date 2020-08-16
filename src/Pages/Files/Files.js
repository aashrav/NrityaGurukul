import React, { Component } from 'react';
import './Files.css';
import {getFileFromS3, getListOfFiles} from '../../ApiFunctions/S3Bucket';
import FileObject from '../../Components/FileObject/FileObject';
class Files extends Component{
  constructor(props){
    super(props)
  }
  state = {
    files: null
  }
  encode(data){
    let buf = Buffer.from(data);
    let base64 = buf.toString('base64');
    return base64;
  }


  downloadFile = async(key, name) =>  {
    const response = await getFileFromS3(key);
    let buf = Buffer.from(response.data.Body);
    let base64 = buf.toString('base64');
    const linkSource = `data:${response.data.ContentType};base64,${base64}`;
    const downloadLink = document.createElement("a");
    const fileName = name;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  getAllFiles = async() => {
    const files = await getListOfFiles(`Group${this.props.user.group}`);
    this.setState({
      files: files.data.Contents
    });
  }

  componentDidMount = () => {
    this.getAllFiles();
  }
  render(){
    
    return( 
      <div>
          <h2 className="files-heading">Your Files</h2>  
          <div className = 'files-container'>
            {(this.state.files) ? 
              (this.state.files.map((file, index) => {
                if(file.Size === 0) return;
                const name = file.Key.substring(file.Key.lastIndexOf('/') + 1);
                return <FileObject key = {index} click = {this.downloadFile.bind(this,file.Key,name)}>{name}</FileObject>
              })): null}
          </div>
          <h2 className="files-heading">Your Videos</h2>  

      </div>
    )
  }
}

export default Files;
