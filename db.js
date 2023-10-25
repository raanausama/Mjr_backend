const Pool = require('mysql');

const pool = Pool.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  port: 3306,
  database: "mjr",
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = pool;
