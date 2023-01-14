

xmas_checkUser = (req, res, next) => {

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


    console.log("---------------------- New XMAS User Check Cycle --------------------")

    console.log(req.body)

    const xmas_group_name = req.body.xmas_group_name;

    console.log("this is in the middle")

    const query = `SELECT * FROM xmas_groups WHERE name = ($1)`;

    const values = [xmas_group_name];

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
        console.log(result.rows[0].name)

        res.send(result.rows[0])
        // return
    });
    // });
    console.log("this is after the post method on the server")
}

module.exports = xmas_checkUser
