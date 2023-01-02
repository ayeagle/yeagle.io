// // const express = require('express');
// // const app = express();
// const { Client } = require('pg');
// // const portNum = 3001
// // const fs = require('fs');



// // app.get('/', (req, res) => {
// //     res.send('Hello, World!');
// // });


// const client = new Client({
//     host: 'database-1.chvf8cjpyfew.us-east-1.rds.amazonaws.com',
//     user: 'postgres3',
//     password: 'r%0k3kS*FT8!kGz0zih',
//     database: 'maindb',
// });

// function StartDatabaseConnection() {
//     // app.listen(portNum, () => {
//     //     console.log('Server listening on port: ' + portNum);

//         // client.connect((err) => {
//         //     if (err) {
//         //         console.error('Error connecting to the database:', err.stack);
//         //     } else {
//         //         console.log('Successfully connected to the database');

//         //         client.query(`
//         //       CREATE TABLE user_activity (
//         //         id SERIAL PRIMARY KEY,
//         //         user_id INTEGER NOT NULL,
//         //         activity VARCHAR(255) NOT NULL,
//         //         time TIMESTAMP NOT NULL
//         //       );
//         //             ``, (err, res) => {
//         //             if (err) {
//         //                 console.error('Error creating table:', err.stack);
//         //             } else {
//         //                 console.log('Successfully created table');
//         //             }
//         //         });
//         //     }
//         // });
//     // });
//     const total = 1

// }

// // function insertActivity(userId, activity, time, client) {
// //     client.query(
// //         `INSERT INTO user_activity (user_id, activity, time) VALUES ($1, $2, $3)`,
// //         [userId, activity, time],
// //         (err, res) => {
// //             if (err) {
// //                 console.error('Error inserting row:', err.stack);
// //             } else {
// //                 console.log('Successfully inserted row');
// //             }
// //         }
// //     );
// // }

// export {StartDatabaseConnection}








// // removed from the package.json file
//   // "net": false,
//     // "dns": false,
//     // "tls": false,
//     // "pg-native": false


const express = require('express');
const pg = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Connection string for AWS RDS instance
const connectionString = `postgresql://postgres3:r%0k3kS*FT8!kGz0zih@database-1.chvf8cjpyfew.us-east-1.rds.amazonaws.com:5432/maindb`;

app.post('/api/insert', (req, res) => {
  // Get the data from the request body
  const data = req.body;
  console.log("Api insert thing has been invoked")

  // Connect to the database
  pg.connect(connectionString, (error, client, done) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error });
    } else {
      // Insert the data into the database
      client.query('SELECT * FROM user_activity', [data.column1, data.column2], (error, result) => {
        //'INSERT INTO user_activity (user_id, activity, time) VALUES ($1, $2, $3)'
        done(); // release the client back to the pool
        if (error) {
          console.error(error);
          res.status(500).json({ error });
        } else {
          res.json(result);
        }
      });
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
