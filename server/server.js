
// const express = require('express');
// const app = express();
// const axios = require('axios');
// const pg = require('pg');
// const cors = require('cors');
// const bodyParser = require('body-parser');


// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));

// app.use(bodyParser.json());

// const connectionString = "postgres://postgres3:r%0k3kS*FT8!kGz0zih@database-1.chvf8cjpyfew.us-east-1.rds.amazonaws.com:5432/database-1";

// const client = new pg.Client(connectionString);
// console.log("Connection string:    " + connectionString)


// app.post('/activity', (req, res) => {

//   console.log(req.body)

//   const sessionId = req.sessionId;
//   const activity = req.activity;
//   const timestamp = req.timestamp;

//   // console.log("this is in the middle")

//   const query = "INSERT INTO user_activity (session_id, activity, timestamp) VALUES ($1, $2, $3)";
//   const values = [sessionId, activity, timestamp];

//   client.query(query, values, (err, result) => {
//     console.log("the query function is running Pt1 ")

//     done();
//     console.log("the query function is running Pt2 ")

//     if (err) {
//       console.error('Error running query' + err);
//       res.status(500).send('Error running query');
//       return;
//     }

//     res.status(200).send('Activity recorded');
//   });
// });

// app.listen(5432, () => {
//   console.log('Server listening on port 5432');

// });

// client.connect((err,res) => {
//   console.log("the connect function is running")
//   if (err) {
//     console.error('Error fetching client from pool', err)
//     console.log("start of the error data")
//     console.log(err.response.data)
//     console.log("end of the error data")

//     res.status(500).send('Error connecting to database');
//     return;
//   } else {
//     console.log("FUCK YEAH WE'RE CONNECTED TO THE DB")
//   }
// })


const express = require('express');
const app = express();
const axios = require('axios');
const pg = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');



///////////////////////////////
const post = require('./post');

app.use('/', (req, res, next) => {
  post(req, res, next);
});
///////////////////////////////



app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(bodyParser.json());

const connectionString = "postgres://postgres3:r%0k3kS*FT8!kGz0zih@database-1.chvf8cjpyfew.us-east-1.rds.amazonaws.com:5432/database-1";

const client = new pg.Client(connectionString);
console.log("Connection: " + connectionString)

client.connect((err) => {
  console.log("the connect function is running")
  if (err) {
    console.error('Error fetching client from pool', err)
    console.log("start of the error data")
    console.log(err.response.data)
    console.log("end of the error data")

    res.status(500).send('Error connecting to database');
    return;
  } else {
    console.log("FUCK YEAH WE'RE CONNECTED TO THE DB")
  }
})

app.listen(5432, () => {
  console.log('Server listening on port 5432');
});
