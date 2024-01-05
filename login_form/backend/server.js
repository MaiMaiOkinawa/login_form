const express = require('express');
const mysql = require('mysql');
// cours allows to access API
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'Localhost',
  user: 'root',
  password: '',
  database: 'signup',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL!');
  }
});

app.post('/signup', (req, res) => {
  const sql =
    'INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)';
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json('Error');
    }
    return res.json(data);
  });
});

app.listen(8889, () => {
  console.log('Listening...');
});
