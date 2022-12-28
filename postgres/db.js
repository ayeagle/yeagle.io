const express = require('express');
const app = express();
const { Client } = require('pg');


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000')


    const client = new Client({
        host: 'database-1.chvf8cjpyfew.us-east-1.rds.amazonaws.com',
        user: 'postgres3',
        password: 'r%0k3kS*FT8!kGz0zih',
        database: 'maindb',
    });


    client.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err.stack);
        } else {
            console.log('Successfully connected to the database');
        }
    });


    client.query(`CREATE TABLE user_activity (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    activity VARCHAR(255) NOT NULL,
    time TIMESTAMP NOT NULL
  );`, (err, res) => {
        if (err) {
            console.error('Error creating table:', err.stack);
        } else {
            console.log('Successfully created table')
        }
    }
}
