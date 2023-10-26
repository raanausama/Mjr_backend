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
      "UPDATE home SET hero_img = ?,  hero_title = ?, hero_txt= ? WHERE username = ?";
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
        "UPDATE home SET csr_img = ?,  csr_title = ?, csr_txt= ? WHERE username = ?";
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
        "UPDATE home SET csr_img = ?,  csr_title = ?, csr_txt= ? WHERE username = ?";
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
        "UPDATE home SET csr_img = ?,  csr_title = ?, csr_txt= ? WHERE username = ?";
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
        "UPDATE home SET csr_img = ?,  csr_title = ?, csr_txt= ? WHERE username = ?";
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
        "UPDATE home SET csr_img = ?,  csr_title = ?, csr_txt= ? WHERE username = ?";
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
