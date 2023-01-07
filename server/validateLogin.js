

validateLogin = (req, res, next) => {

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


    console.log("---------------------- New User Login Cycle --------------------")

    console.log(req.body)

    const username = req.body.userName;
    const password = req.body.password;


    console.log("this is in the middle")

    const query = `SELECT * FROM users WHERE username = ($1) AND upassword = ($2)`;

    const values = [username, password];

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
        console.log(result.rows[0])

        res.send(result.rows[0])
        // return
    });
    // });
    console.log("this is after the post method on the server")
}

module.exports = validateLogin
