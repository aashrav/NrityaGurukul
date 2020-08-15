import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:5000'})

export const uploadToS3 = (props) =>{
  let error = false;
  props.files.map((file) => {
    let myFile = file.name.split(".");
    const fileType = myFile[myFile.length -1] ; 
    api.post("S3/getS3URL",{
      fileName : file.name,
      fileType : fileType,
      group: props.group
    })
    .then(response => {
      var returnData = response.data.data;
      var signedRequest = returnData.data; 
      var options = { headers: { 'Content-Type': "multipart/form-data"}};
      axios.put(signedRequest,file,options) 
    })
    .catch(_ => {
      error = true;
    })

  })  
  return error;
  
}



export const getFileFromS3 = async(key) => {
  return api.post("S3/getS3File", {key})
    .then((res) =>{
      return res;
    })
    .catch((error) => {
      return error;
    })
}

export const getListOfFiles = async(prefix) => {
  console.log('bruh', prefix)
  return api.post("S3/getListOfFiles", {prefix})
    .then((res) =>{    
      return res;
    })
    .catch((error) => {
      return error;
    })
}
