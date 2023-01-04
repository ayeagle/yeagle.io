// const express = require('express');
// const app = express();
// const axios = require('axios');

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// console.log('The server file is running');
// console.log('This is the req: VVVV');


const express = require('express');
const app = express();
const axios = require('axios');
const pg = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(bodyParser.json());

const connectionString = "postgres://postgres3:r%0k3kS*FT8!kGz0zih@database-1.chvf8cjpyfew.us-east-1.rds.amazonaws.com:5432/database-1";

const client = new pg.Client(connectionString);
console.log("<><><><><> This is the connection string:    " + connectionString)



app.post('/activity', (req, res) => {

  console.log(req.body)
  // console.log("session id value is " +req.body.sessionId  + " and the type of this "+ typeof(req.body.sessionId))
  // console.log("activity value is " +req.body.activity + " and the type of this " + typeof(req.body.activity))
  // console.log("timestamp value is " +req.body.timestamp + " and the type of this " + typeof(req.body.timestamp))

  const sessionId = req.body.sessionId;
  const activity = req.body.activity;
  const timestamp = req.body.timestamp;

  console.log("this is in the middle")

  const query = "INSERT INTO user_activity (session_id, activity, timestamp) VALUES ($1, $2, $3)";
  const values = [sessionId, activity, timestamp];

  client.query(query, values, (err, result) => {
    console.log("the query function is running Pt1 ")

    done();
    console.log("the query function is running Pt2 ")

    if (err) {
      console.error('Error running query' + err);
      res.status(500).send('Error running query');
      return;
    }

    res.status(200).send('Activity recorded');
  });
});

app.listen(5432, () => {
  console.log('Server listening on port 5432');
  console.log('The server file is running');

});

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
