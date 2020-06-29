require("dotenv/config");
const express = require('express');
const multer = require("multer");
const app = express.Router();
const port = 3000;
const AWS = require('aws-sdk');
const uuid = require("uuid/v4");

const s3 = new AWS.S3({
        accessKeyId:process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET
});

const S3_BUCKET = process.env.AWS_BUCKET_NAME;

app.get('/sign_s3', (req, res) =>{
  console.log("wat up");
  res.send("hello")
})

module.exports = app;

exports.sign_s3 = (req, res) =>{
  const s3 = new aws.S3();  // Create a new instance of S3
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      res.json({success: false, error: err})
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    // Send it all back
    res.json({success:true, data:{returnData}});
  });
}

// class S3Bucket{
//   constructor(){
//     this.storage = multer.memoryStorage({
//       destination: function(req, file, callback){
//         callback(null,'')
//       }
//     })
//     this.s3 = new AWS.S3({
//       accessKeyId:process.env.AWS_ID,
//       secretAccessKey: process.env.AWS_SECRET
//     })  
//   }
//   uploadFileToBucket(file, fileName){

//   }
// }