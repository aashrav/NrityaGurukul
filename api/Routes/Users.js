require("dotenv/config");
const AWS = require('aws-sdk');


const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../Models/User');
const { default: Axios } = require("axios");
users.use(cors());

process.env.SECRET_KEY = 'secret';

const S3_BUCKET = process.env.AWS_BUCKET_NAME;

// const s3 = new AWS.S3({
//   accessKeyId:process.env.AWS_ID,
//   secretAccessKey: process.env.AWS_SECRET
// });

users.get('/getUser', (req, res)=>{
  const filter = req.query.email ? {email: req.query.email} : {};
  User.findOne(filter).then(user => res.status(200).send(user));
})

users.get('/getAllUsers', (req, res)=>{
  User.find({}).then(users => res.status(200).send(users));
})

users.get('/login', (req, res)=>{
  const filter = req.query.email ? {email: req.query.email} : {};
  User.findOne(filter).then(user => {
    console.log("USERRRR",user)
    if(user === null){
      console.log("woeifjeowij")
      res.status(200).send(bcrypt.compareSync("", ""));
    }else{
      res.status(200).send(bcrypt.compareSync(req.query.password, user.password));
    }
    // bcrypt.hash(req.query.password, 10, (err, hash) => {
    //   console.log(hash, user.password);
    //   if(hash === user.password){
    //     return res.status(200).send(true);
    //   }else{
    //     return res.status(200).send(false);
    //   }
    // }))
  })
})


users.post('/createUser', (req, res) =>{
  const newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    group: req.body.group,
    accessLevel: req.body.accessLevel
  }
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          newUser.password = hash
          User.create(newUser)
            .then(user => {
              res.json({ status: user.email + ' Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: ' User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/getS3URL', (req,res)=>{
  const s3 = new AWS.S3({
    accessKeyId:process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
    region:'eu-west-1',
    signatureVersion: 'v4'
  });
  console.log("BWOEIFJO" , req);
  const fileName = "bruh.png"
  const fileType = ".png";

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName ,
    Expires: 500,
    ContentType: "multipart/form-data",
    ACL: 'public-read',

  };
  // res.send("bruh")
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      res.json({success: false, error: err})
    }
    // const returnData = {
    //   signedRequest: data,
    //   url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    // };
    // Send it all back
    // var options = {
    //   headers: {
    //     'Content-Type': fileType
    //   }
    // };
    res.json({success:true, data:{data}});

  });

})

module.exports = users

