const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../Models/User');
users.use(cors());

process.env.SECRET_KEY = 'secret';

users.get('/getUser', (req, res)=>{
  const filter = req.query.email ? {email: req.query.email} : {};
  User.find(filter).then(users => res.status(200).send(users));
})

users.get('/login', (req, res)=>{
  const filter = req.query.email ? {email: req.query.email} : {};
  User.findOne(filter).then(user => {
    res.status(200).send(bcrypt.compareSync(req.query.password, user.password));
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
    group: req.body.group
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

