var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
const mongoose = require('mongoose');
var port = process.env.PORT || 5000;
app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended:false
  })
)

const mongoURI = "mongodb://localhost:27017";

mongoose
  .connect(
    mongoURI,
    {useNewUrlParser: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var User = require('./api/Routes/Users');
var S3 = require('./api/Routes/S3Bucket');

app.use('/user', User);
app.use('/s3', S3)

app.listen(port,function(){
  console.log('Server is running on port: ' + port);
});
