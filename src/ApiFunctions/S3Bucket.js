import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:5000'})

export const uploadToS3 = (props) =>{
  let file = props.file;
  let myFile = props.fileName.split(".");
  const fileType = myFile[myFile.length -1] ; 

  api.post("S3/getS3URL",{
    fileName : props.fileName,
    fileType : fileType
  })
  .then(response => {
    var returnData = response.data.data;
    var signedRequest = returnData.data; 
    var options = { headers: { 'Content-Type': "multipart/form-data"}};

    axios.put(signedRequest,file,options)
    .then(_ => {
      alert("Uplaod Sucessfull")
    })
    .catch(_ => {
      alert("Uplaod Failed")

    })
  })
}



export const getObjectFromS3 = async(props) => {
  console.log("woefijewiofjweofwofj")
  return api.post("S3/getS3Object")
    .then((res) =>{
      console.log(res)
      return res;
    })
    .catch((error) => {
      console.log(error)

      return error;
    })
}
