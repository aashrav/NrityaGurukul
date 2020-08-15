require("dotenv/config");
const express = require('express');
const multer = require("multer");
const app = express.Router();
const port = 3000;
const AWS = require('aws-sdk');
const uuid = require("uuid/v4");

const s3 = new AWS.S3({
        accessKeyId:process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET,
        region:'eu-west-1',
        signatureVersion: 'v4'
});
const S3_BUCKET = process.env.AWS_BUCKET_NAME;

app.post('/getS3URL', (req,res)=>{
  const fileName = req.body.fileName;

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: `Group${req.body.group}/` + fileName ,
    Expires: 500,
    ContentType: "multipart/form-data",
    ACL: 'public-read',

  };
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      res.json({success: false, error: err})
    }
    res.json({success:true, data:{data}});

  });
})

app.post('/getS3File', async(req,res) => {
  AWS.config.setPromisesDependency();

  const object = await s3.getObject({
    Bucket: S3_BUCKET,
    Key: req.body.key
  }).promise();
  res.send(object)
})

app.post('/getListOfFiles', async(req,res) => {
  AWS.config.setPromisesDependency();
  const object = await s3.listObjectsV2({
    Bucket: S3_BUCKET,
    Prefix: req.body.prefix
  }).promise();
  res.send(object)
})

module.exports = app

//   s3.getSignedUrl('putObject', s3Params, (err, data) => {
//     if(err){
//       console.log(err);
//       res.json({success: false, error: err})
//     }
//     const returnData = {
//       signedRequest: data,
//       url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
//     };
//     // Send it all back
//     res.json({success:true, data:{returnData}});
//   });
// }

