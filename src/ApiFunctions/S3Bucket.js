import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:5000'})

export const handleUpload = (props) =>{
  let file = props.file;
  let myFile = props.fileName.split(".");
  const fileType = myFile[myFile.length -1] ; 
  console.log("Props fileName", props.fileName)
  console.log("Props file", props.file)

  api.post("http://localhost:5000/users/getS3URL",{
    fileName : props.fileName,
    fileType : fileType
  })
  .then(response => {
    console.log("wefieowfij", response.data.data);
    console.log("RESPONSE", response);
    var returnData = response.data.data;
    var signedRequest = returnData.data; 
    console.log("Recieved a signed request " + signedRequest);
    alert("bruh");

   // Put the fileType in the headers for the upload
   var options = { headers: { 'Content-Type': "multipart/form-data"}};

    axios.put(signedRequest,file,options)
    .then(result => {
      console.log("Response from s3: ", result)
    })
    .catch(error => {
      console.log("hi")
      alert("ERROR " + JSON.stringify(error));
    })
  })
}