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

const {
  OK,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT
} = require('../constants').STATUS_CODES;

users.get('/getUser', (req, res)=>{
  const filter = req.query.email ? {email: req.query.email} : {};
  User.findOne(filter).then(user => res.status(200).send(user));
})

users.get('/getAllUsers', (req, res)=>{
  User.find({}).then(users => res.status(200).send(users));

})

users.post('/verify', (req, res) => {
  const userToken = req.body.token.replace(/^JWT\s/, '');
  let response = false;
  jwt.verify(userToken, process.env.PRIVATE_KEY, (error, decoded) => {
     response = !error && decoded;
  });
  if(!response) {
    res.sendStatus(UNAUTHORIZED);
  }else{
    res.status(OK).send(response);
  }
})

users.get('/login', (req, res)=>{
  const filter = req.query.email ? {email: req.query.email} : {};
  User.findOne(filter)
    .then(user => {
      if(user === null){
        res.status(OK).send(bcrypt.compareSync("", ""));
      }else{
        if(bcrypt.compareSync(req.query.password, user.password)){
          const userToBeSigned = {
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            accessLevel: user.accessLevel,
            group: user.group
          };
          const jwtOptions = {
            expiresIn: '2h'
          };
          const token = jwt.sign(
            userToBeSigned, process.env.PRIVATE_KEY, jwtOptions
          );
          res.status(200).send({isAuthenticated: true, accessLevel: user.accessLevel, token: 'JWT ' +token})
        }else{
          res.status(UNAUTHORIZED).send({isAuthenticated: true, accessLevel: -1});
        }
      }
    })
    .catch((error) => {
      res.status(BAD_REQUEST).send(error);
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

module.exports = users
