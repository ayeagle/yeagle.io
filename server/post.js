const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(bodyParser.json());


module.exports = (req, res, next) => {

  console.log("post.js on the server was invoked")


  app.post('/activity', (req, res) => {

    console.log(req.body)

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
}
