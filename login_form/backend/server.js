const express = require('express');
const mysql = require('mysql');
// cours allows to access API
const cors = require('cors');

const app = express();
const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
//app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'signup',
});

// MySQL connection checke point
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//   } else {
//     console.log('Connected to MySQL!');
//   }
// });

app.post('/signup', (req, res) => {
  const sql =
    'INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)';
  const values = [req.body.name, req.body.email, req.body.password];
  //Check to see if values are recieved
  //console.log('Received data:', values);

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({
        error: 'Error inserting data into the database',
        details: err.message,
      });
    }
    return res.json(data);
  });
});

app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM login WHERE `email` = ? AND `password` = ?';

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json('Error');
    }
    if (data.length > 0) {
      return res.json('Success');
    } else {
      return res.json('Faile');
    }
  });
});

app.listen(8081, () => {
  console.log('Listening...');
});
