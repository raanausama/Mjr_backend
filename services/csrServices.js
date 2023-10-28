const pool = require("../db");
const multer = require("multer");
const express = require("express");
const app = express();

app.use(express.static("uploads"));

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    // You can adjust the file name as needed, e.g., add a timestamp to make it unique
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

exports.Hero = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { title, text, username } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      // "INSERT INTO csr (hero_img, hero_title, hero_txt, username) VALUES (?,?,?,?)";
      "UPDATE csr SET hero_img = ?,  hero_title = ?, hero_txt= ? WHERE username = ?";
    pool.query(sql, [imagePath, title, text, username], (err, result) => {
      if (err) {
        console.error("Error inserting image path:", err);
        res.status(500).send("Error inserting image into the database.");
      } else {
        console.log("Image updated successfully");
        res.status(200).send("Image updated successfully");
      }
    });
  });
};
exports.CSR1 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { title, text, username } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      // "INSERT INTO csr (csr1_img, csr1_title, csr1_txt, username) VALUES (?,?,?,?)";
      "UPDATE csr SET csr1_img = ?,  csr1_title = ?, csr1_txt= ? WHERE username = ?";
    pool.query(sql, [imagePath, title, text, username], (err, result) => {
      if (err) {
        console.error("Error inserting image path:", err);
        res.status(500).send("Error inserting image into the database.");
      } else {
        console.log("Image updated successfully");
        res.status(200).send("Image updated successfully");
      }
    });
  });
};
exports.CSR2 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { title, text, username } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      // "INSERT INTO csr (csr2_img, csr2_title, csr2_txt, username) VALUES (?,?,?,?)";
      "UPDATE csr SET csr2_img = ?,  csr2_title = ?, csr2_txt= ? WHERE username = ?";
    pool.query(sql, [imagePath, title, text, username], (err, result) => {
      if (err) {
        console.error("Error inserting image path:", err);
        res.status(500).send("Error inserting image into the database.");
      } else {
        console.log("Image updated successfully");
        res.status(200).send("Image updated successfully");
      }
    });
  });
};
exports.CSR3 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { title, text, username } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      // "INSERT INTO csr (csr3_img, csr3_title, csr3_txt, username) VALUES (?,?,?,?)";
      "UPDATE csr SET csr3_img = ?,  csr3_title = ?, csr3_txt= ? WHERE username = ?";
    pool.query(sql, [imagePath, title, text, username], (err, result) => {
      if (err) {
        console.error("Error inserting image path:", err);
        res.status(500).send("Error inserting image into the database.");
      } else {
        console.log("Image updated successfully");
        res.status(200).send("Image updated successfully");
      }
    });
  });
};
exports.CSR4 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { title, text, username } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      // "INSERT INTO csr (csr4_img, csr4_title, csr4_txt, username) VALUES (?,?,?,?)";
      "UPDATE csr SET csr4_img = ?,  csr4_title = ?, csr4_txt= ? WHERE username = ?";
    pool.query(sql, [imagePath, title, text, username], (err, result) => {
      if (err) {
        console.error("Error inserting image path:", err);
        res.status(500).send("Error inserting image into the database.");
      } else {
        console.log("Image updated successfully");
        res.status(200).send("Image updated successfully");
      }
    });
  });
};
exports.CSR5 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { title, text, username } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "INSERT INTO csr (csr5_img, csr5_title, csr5_txt, username) VALUES (?,?,?,?)";
    // "UPDATE csr SET csr5_img = ?,  csr5_title = ?, csr5_txt= ? WHERE username = ?";
    pool.query(sql, [imagePath, title, text, username], (err, result) => {
      if (err) {
        console.error("Error inserting image path:", err);
        res.status(500).send("Error inserting image into the database.");
      } else {
        console.log("Image updated successfully");
        res.status(200).send("Image updated successfully");
      }
    });
  });
};
