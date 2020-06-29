import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:5000'})

export const handleUpload = (props) =>{
  console.log("PROPS", props);
  let file = props.file;
  let myFile = props.fileName.split(".");
  const fileName = myFile[0];
  const fileType = myFile[myFile.length -1] ; 
  
  console.log("FILETYPE", fileType)
  api.get("http://localhost:5000/users/getS3URL",{
    fileName : fileName,
    fileType : fileType
  })
  .then(response => {
    console.log("RESPONSE", response);
    var returnData = response.data.data;
    var signedRequest = returnData.data; 
    var url = returnData.url;
    // this.setState({url: url})
    console.log("Recieved a signed request " + signedRequest);
    // console.log(fileType)
   // Put the fileType in the headers for the upload
   var options = { headers: { 'Content-Type': "multipart/form-data"}};

    axios.put(signedRequest,file,options)
    .then(result => {
      console.log("Response from s3: ", result)
      // this.setState({success: true});
    })
    .catch(error => {
      console.log("hi")
      alert("ERROR " + JSON.stringify(error));
    })
  })
  .catch(error => {
    console.log("bye")
    alert(JSON.stringify(error));
  })
}