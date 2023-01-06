

checkUser = (req, res, next) => {

    // next()

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
    //     origin: 'http://localhost:3000/*',
    //     credentials: true
    // }));

    // app.use(bodyParser.json());

    console.log("---------------------- New User Check Cycle --------------------")

    // app.post('/activity', (req, res) => {
    // res.send("POST Request Called")
    console.log(req.body)

    const username = req.body.userName;

    console.log("this is in the middle")

    const query = `SELECT username FROM users WHERE username = ($1)`;
    // const query = `SELECT * FROM users`;

    const values = [username];

    global.client.query(query, values, (err, result) => {
        console.log("the query function is running Pt1 ")
        done();
        console.log("the query function is running Pt2 ")

        if (err) {
            console.error('Error running query' + err);
            res.status(500).send('Error running query');
            console.log("this is the result: ")
            return
        }
        console.log("Successful post nice work")
        console.log(result.rows[0].username)

        res.send(result.rows[0].username)
        // return
    });
    // });
    console.log("this is after the post method on the server")
}

module.exports = checkUser
