const express = require('express');
const app = express();
const { Client } = require('pg');
const portNum = 3001


app.get('/', (req, res) => {
    res.send('Hello, World!');
});


const client = new Client({
    host: 'database-1.chvf8cjpyfew.us-east-1.rds.amazonaws.com',
    user: 'postgres3',
    password: 'r%0k3kS*FT8!kGz0zih',
    database: 'maindb',
});


app.listen(portNum, () => {
    console.log('Server listening on port: ' + portNum);

    client.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err.stack);
        } else {
            console.log('Successfully connected to the database');

            client.query(`
              CREATE TABLE user_activity (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                activity VARCHAR(255) NOT NULL,
                time TIMESTAMP NOT NULL
              );
            `, (err, res) => {
                if (err) {
                    console.error('Error creating table:', err.stack);
                } else {
                    console.log('Successfully created table');
                }
            });
        }
    });
});
