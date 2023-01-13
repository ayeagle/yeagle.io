

xmas_getGroupObject = (req, res, next) => {

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


    console.log("---------------------- New XMAS Get Group Object Check Cycle --------------------")

    console.log(req.body)

    const xmas_group_name = req.body.xmas_group_name;
    const xmas_group_id = req.body.xmas_group_id;

    console.log("this is in the middle")

    const query = `SELECT * FROM gifts_data LEFT JOIN xmas_groups on xmas_groups.id = gifts_data.group_id WHERE group_id = ($1)`;

    console.log("this shit right here is the group id: " + xmas_group_id)

    const values = [xmas_group_id];

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
        console.log("Successful post nice work pt 2")
        console.log(result.rows)
        console.log("Successful post nice work pt 3")
        console.log(result.values)
        console.log("Successful post nice work pt 4")


        console.log(result.rows[0].unique_id)

        res.send(result.rows)
        // return
    });
    // });
    console.log("this is after the post method on the server")
}

module.exports = xmas_getGroupObject
