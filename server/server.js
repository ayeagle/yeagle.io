
global.client = null;


var date = new Date();
var timestamp = date.getFullYear() + '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
  ('0' + date.getDate()).slice(-2) + ' ' +
  ('0' + date.getHours()).slice(-2) + ':' +
  ('0' + date.getMinutes()).slice(-2) + ':' +
  ('0' + date.getSeconds()).slice(-2);

  function done() {
    // Close the connection to the database
  }


console.log("---------------------- New Server Cycle --------------------")
console.log(timestamp + ' log message');


const express = require('express');
const app = express();
const axios = require('axios');
const pg = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

global.app = app;


///////////////////////////////
const logActivity = require('./logActivity');
const checkUser = require('./checkUser');
const addNewUser = require('./addNewUser');
const validateLogin = require('./validateLogin');

const xmas_checkUser = require('./xmas_checkUser');
const xmas_addNewUser = require('./xmas_addNewUser');
const xmas_validateLogin = require('./xmas_validateLogin');
const xmas_getGroupObject = require('./xmas_getGroupObject');
const xmas_setTaken = require('./xmas_setTaken');  //this one is incomplete
const xmas_addGift = require('./xmas_addGift');     
const xmas_postGroupObject = require('./xmas_postGroupObject');

///////////////////////////////
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(bodyParser.json());

// app.use('/activity', post);


const connectionString = "postgres://postgres3:diet..pepsi@database-1.chvf8cjpyfew.us-east-1.rds.amazonaws.com:5432/maindb";

const client = new pg.Client(connectionString);
console.log("Connection: " + connectionString)

client.connect((err, res) => {
  console.log("the connect function is running")
  if (err) {
    console.error('Error fetching client from pool', err)
    console.log("start of the error data")
    Object.keys(err).map(function (key) {
      console.log(key + ': ' + err[key]);
    });
    // console.log(err.response.data)
    console.log("end of the error data")

    res.status(500).send('Error connecting to database');
    return;
  } else {
    console.log("FUCK YEAH WE'RE CONNECTED TO THE DB")
  }

  global.client = client;

})

app.listen(5432, () => {
  console.log('Server listening on port 5432');
});

// app.use('/activity', post);


app.use('/checkUser',  (req, res, next) => {
  checkUser(req, res, next);
});

app.use('/logActivity',  (req, res, next) => {
  logActivity(req, res, next);
});

app.use('/addNewUser',  (req, res, next) => {
  addNewUser(req, res, next);
});

app.use('/validateLogin',  (req, res, next) => {
  validateLogin(req, res, next);
});

app.use('/xmas_checkUser',  (req, res, next) => {
  xmas_checkUser(req, res, next);
});

app.use('/xmas_addNewUser',  (req, res, next) => {
  xmas_addNewUser(req, res, next);
});

app.use('/xmas_validateLogin',  (req, res, next) => {
  xmas_validateLogin(req, res, next);
});

app.use('/xmas_getGroupObject',  (req, res, next) => {
  xmas_getGroupObject(req, res, next);
});

app.use('/xmas_setTaken',  (req, res, next) => {
  xmas_setTaken(req, res, next);
});


app.use('/xmas_addGift',  (req, res, next) => {
  xmas_addGift(req, res, next);
});

app.use('/xmas_postGroupObject',  (req, res, next) => {
  xmas_postGroupObject(req, res, next);
});



