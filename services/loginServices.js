const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
//register

exports.Register = async (req, res) => {

  try {
    //1. destructure the req.body
    const { userid, name, email, password } = req.body;
    //2. check if the user exists
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      userid,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }

    const saltRounds = 10;
    const genSalt = await bcrypt.genSalt(saltRounds);
    const bcryptPassword = await bcrypt.hash(password, genSalt);

    const newUser = await pool.query(
      "INSERT INTO users (user_id, user_name, user_email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [userid, name, email, bcryptPassword]
    );
    // res.json(newUser.rows[0]);
    // console.log(req.body);

    const token = jwtGenerator(newUser.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
//login Route

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json("Password or email incorrect");
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    console.log("password", validPassword);
    if (!validPassword) {
      return res.status(401).json("Password or email incorrect");
    }
    const token = jwtGenerator(user.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.isVerify = async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
