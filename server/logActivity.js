

logActivity = (req, res, next) => {

  next()

  const express = require('express');
  const app = express();
  const axios = require('axios');
  const pg = require('pg');
  const cors = require('cors');
  const bodyParser = require('body-parser');


  function done() {
    // Close the connection to the database
  }

  // app.use(express.urlencoded({ extended: true }));
  // app.use(express.json());


  // app.use(cors({
  //   origin: 'http://localhost:3000/*',
  //   credentials: true
  // }));

  // app.use(bodyParser.json());

  console.log("---------------------- New Post Cycle --------------------")
  console.log("post.js on the server was invoked")


  // app.post('/activity', (req, res) => {
    // res.send("POST Request Called")
    console.log(req.body)

    const user_id = req.body.userId;
    const activity = req.body.activity;
    const time = req.body.timestamp;

    console.log("this is in the middle")

    const query = "INSERT INTO user_activity (user_id, activity, time) VALUES ($1, $2, $3)";
    const values = [user_id, activity, time];

    global.client.query(query, values, (err, result) => {
      console.log("the query function is running Pt1 ")

      done();
      console.log("the query function is running Pt2 ")

      if (err) {
        console.error('Error running query' + err);
        res.status(500).send('Error running query');
        return;
      }

      console.log("Successful post nice work")
      // if (!responseSent) {
      //   res.status(200).send('Activity recorded');
      // }
    });
  // });


  console.log("this is after the post method on the server")

  // app.listen(5432, () => {
  //   console.log('post file listening on port 5432');
  // });

}

module.exports = logActivity
