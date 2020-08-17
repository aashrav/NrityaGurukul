import React, { Component } from 'react';
import {getFileFromS3, getListOfFiles} from '../../ApiFunctions/S3Bucket';
import FileObject from '../../Components/FileObject/FileObject';
import Tabs from '../../Components/Tabs/Tabs';
import Header from '../../Components/Text/Header';
import './Dashboard.css';

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
      <div className = 'dashboard'>
        <Header>DASHBOARD</Header>
        <div className = 'dashboard-tab-container'>
          <Tabs>
            <div label="Files">
              <div className = 'files-container'>
                {(this.state.files) ? 
                  (this.state.files.map((file, index) => {
                    if(file.Size === 0) return;
                    const name = file.Key.substring(file.Key.lastIndexOf('/') + 1);
                    return <FileObject key = {index} click = {this.downloadFile.bind(this,file.Key,name)}>{name}</FileObject>
                  })): null}

            </div>
            </div>
            <div label="Videos">
              After 'while, <em>Crocodile</em>!
            </div>
          </Tabs>
        </div>
          

      </div>
    )
  }
}

export default Files;
