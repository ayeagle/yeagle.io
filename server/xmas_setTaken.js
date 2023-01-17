

xmas_setTaken = (req, res, next) => {

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

    const taken_value = req.body.taken_value;
    const gift_unique_id = req.body.gift_unique_id;
    const giver_name = req.body.giver_name;

    console.log("this is in the middle")

    // const query = `SELECT * FROM xmas_groups WHERE name = ($1)`;

    const query = `UPDATE gifts_data SET taken = ($1), giver_name = ($3) WHERE unique_id = ($2)`;


    const values = [taken_value, gift_unique_id, giver_name];

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
        console.log(result)

        // res.send(result.rows[0])
        // return
    });
    // });
    console.log("this is after the post method on the server")
}

module.exports = xmas_setTaken
