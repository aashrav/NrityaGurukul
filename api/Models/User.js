const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  first_name:{
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required: true
  },
  group:{
    type: Number,
    required: true
  },
  accessLevel:{
    type: Number,
    required: true
  }
})

module.exports = User = mongoose.model('users', UserSchema)

