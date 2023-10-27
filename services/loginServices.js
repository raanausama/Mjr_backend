const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validinfo = require("../middleware/validinfo");
const jwt = require("jsonwebtoken");
const authorization = require("../middleware/authorization");
require("dotenv").config();

//register

exports.Register =
  (validinfo,
  async (req, res) => {
    try {
      const sql = "INSERT INTO users (user_name, password, role) VALUES (?)";
      const saltRounds = 10;
      const genSalt = await bcrypt.genSalt(saltRounds);
      const bcryptPassword = await bcrypt.hash(req.body.password, genSalt);
      const values = [req.body.user_name, req.body.password, "content_updater"];

      const user = await pool.query(sql, [values], (err, data) => {
        if (err) {
          console.log(req.body);
          console.log(err.message);
        } else {
          res.json(data);
          console.log(values);
        }
      });
      //1. destructure the req.body
      // const { username, password, role } = req.body;
      // const sql =
      //   "INSERT INTO users (user_name, password, role) VALUES (?, ?, ?)";

      // const user = await pool.query("SELECT * FROM users WHERE user_name = ?", [
      //   username,
      // ]);

      // if (user) {
      // A user with the specified username exists

      // Access user properties like user.id, user.user_name, etc.
      // } else {
      //   // No user with the specified username exists
      //   console.log("User does not exist");
      // }

      // const newUser = await pool.query(sql, [username, bcryptPassword, role]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
//login Route

exports.Login = async (req, res) => {
  try {
    const sql = "SELECT * FROM users WHERE `user_name` = ? AND `password` = ?";
    // const values = [req.body.username, req.body.password];

    const user = pool.query(
      sql,
      [req.body.user_name, req.body.password],
      (err, data) => {
        if (err) {
          return res.json("ERROR");
        }
        console.log(req.body);
        console.log(data.length);
        if (data.length > 0) {
          const username = data[0].user_name;
          // const token = jwt.sign(payload, process.env.jwtSecret, {
          //   expiresIn: "1hr",
          // });
          const token = jwtGenerator(username);
          console.log("here");
          return res.json({ token });
        } else {
          return res.json("FAIL");
        }
      }
    );

    // const { email, password } = req.body;
    // const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
    //   email,
    // ]);
    // if (user.rows.length === 0) {
    //   return res.status(401).json("Password or email incorrect");
    // }
    // const validPassword = await bcrypt.compare(password, user.rows[0].password);
    // console.log("password", validPassword);
    // if (!validPassword) {
    //   return res.status(401).json("Password or email incorrect");
    // }
    // const token = jwtGenerator(user.rows[0].user_name);
    // res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const verifyJwt = (req, res, next) => {
  const jwtToken = req.header("token");
  if (!jwtToken) {
    return res.json("token needed");
  } else {
    jwt.verify(jwtToken, process.env.jwtSecret, (err, decoded) => {
      if (err) {
        res.json("Not authenticated");
      } else {
        req.user = decoded.user;
        console.log("req username", req.user);
        console.log("decoded username", decoded.user);

        next();
      }
    });
  }
};

exports.isVerify =
  (verifyJwt,
  async (req, res) => {
    try {
      res.json("Authenticated");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
