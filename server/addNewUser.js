

addNewUser = (req, res, next) => {

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


    console.log("---------------------- New User Creation Cycle --------------------")

    console.log(req.body)

    const username = req.body.username;
    const upassword = req.body.password;
    const time = req.body.timestamp;
    let uid = Math.floor(Math.random()*1000000)

    console.log("this is in the middle")

    const query = "INSERT INTO users (uid, username, upassword, created_date) VALUES ($1, $2, $3, $4)";
    const values = [uid, username, upassword, time];

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


    console.log("this is after the post method on the server")


}

module.exports = addNewUser
