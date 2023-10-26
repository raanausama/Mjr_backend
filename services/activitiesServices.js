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
exports.Adventure = (req, res) => {
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
        "UPDATE home SET adventure_img = ?,  adventure_title = ?, adventure_txt= ? WHERE username = ?";
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
  exports.Card1 = (req, res) => {
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
        "UPDATE home SET card1_img = ?,  card1_title = ?, card1_txt= ? WHERE username = ?";
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
  exports.Card2 = (req, res) => {
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
        "UPDATE home SET card2_img = ?,  card2_title = ?, card2_txt= ? WHERE username = ?";
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
  exports.Card3 = (req, res) => {
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
        "UPDATE home SET card3_img = ?,  card3_title = ?, card3_txt= ? WHERE username = ?";
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
  exports.Activities1 = (req, res) => {
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
        "UPDATE home SET ac1_img = ?,  ac1_title = ?, ac1_txt= ? WHERE username = ?";
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
  exports.Activities2 = (req, res) => {
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
        "UPDATE home SET ac2_img = ?,  ac2_title = ?, ac2_txt= ? WHERE username = ?";
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
  exports.Activities3 = (req, res) => {
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
        "UPDATE home SET ac3_img = ?,  ac3_title = ?, ac3_txt= ? WHERE username = ?";
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
  exports.Activities4 = (req, res) => {
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
        "UPDATE home SET ac4_img = ?,  ac4_title = ?, ac4_txt= ? WHERE username = ?";
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
  exports.Activities5 = (req, res) => {
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
        "UPDATE home SET ac5_img = ?,  ac5_title = ?, ac5_txt= ? WHERE username = ?";
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
  exports.Activities6 = (req, res) => {
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
        "UPDATE home SET ac6_img = ?,  ac6_title = ?, ac6_txt= ? WHERE username = ?";
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
