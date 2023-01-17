

xmas_addGift = (req, res, next) => {

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

    console.log("---------------------- New gift add Creation Cycle --------------------")
    console.log(req.body)
    // const username = req.body.username;
    // const upassword = req.body.password;
    // const time = req.body.timestamp;

    const user=         req.body.user
    const group_id=     req.body.group_id
    const giftName=     req.body.giftName
    const giftURL=      req.body.giftURL
    const giftCost=     req.body.giftCost
    const giftDetails=  req.body.giftDetails
    const taken= false;



    let uid = Math.floor(Math.random()*1000000)
    
    console.log("this is in the middle")
    const query = "INSERT INTO gifts_data (requester_name, group_id, gift_name, url, cost, details, taken) VALUES ($1, $2, $3, $4, $5, $6, $7)";
    const values = [user, group_id, giftName, giftURL, giftCost, giftDetails, taken];

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

module.exports = xmas_addGift
