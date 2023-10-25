const pool = require("../db");

exports.Hero = async (req, res) => {
    const text = req.body.text;
  try {
    
    //2. check if the user exists
    const sql = 'INSERT INTO home (header_txt) VALUES (?)';
    await pool.query(sql, [text], (err, result) => {
        if (err) {
          console.error('Error inserting text:', err);
          res.status(500).send('Error inserting text into the database.');
        } else {
          console.log('Text inserted successfully');
          res.status(200).send('Text inserted successfully');
        }
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};