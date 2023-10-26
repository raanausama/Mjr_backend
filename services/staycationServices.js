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
    const { title, username, heading1, heading2 } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE home SET hero_img = ?, welcome_txt = ?, heading1_txt= ?, heading2_txt= ? WHERE username = ?";
    pool.query(sql, [imagePath, title, heading1, heading2, username], (err, result) => {
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

exports.Room1 = (req, res) => {
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
        "UPDATE home SET room1_img = ?,  room1_title = ?, room1_txt= ? WHERE username = ?";
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
  exports.Room2 = (req, res) => {
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
        "UPDATE home SET room2_img = ?,  room2_title = ?, room2_txt= ? WHERE username = ?";
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
  exports.Room3 = (req, res) => {
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
        "UPDATE home SET room3_img = ?,  room3_title = ?, room3_txt= ? WHERE username = ?";
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
  
  exports.Room4 = (req, res) => {
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
        "UPDATE home SET room4_img = ?,  room4_title = ?, room4_txt= ? WHERE username = ?";
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
  exports.Room5 = (req, res) => {
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
        "UPDATE home SET room5_img = ?,  room5_title = ?, room5_txt= ? WHERE username = ?";
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
  exports.Room6 = (req, res) => {
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
        "UPDATE home SET room8_img = ?,  room8_title = ?, room8_txt= ? WHERE username = ?";
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
  exports.Room7 = (req, res) => {
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
        "UPDATE home SET room7_img = ?,  room7_title = ?, room7_txt= ? WHERE username = ?";
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
  exports.Room8 = (req, res) => {
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
        "UPDATE home SET room8_img = ?,  room8_title = ?, room8_txt= ? WHERE username = ?";
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
