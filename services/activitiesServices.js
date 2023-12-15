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

    const sql = "UPDATE activities SET hero_img = ? WHERE username = ?";
    // "INSERT into Activities (hero_img, username) VALUES (?,?)";
    pool.query(sql, [imagePath, username], (err, result) => {
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
      "UPDATE activities SET adventure_img = ?,  adventure_title = ?, adventure_txt= ? WHERE username = ?";
    // "INSERT into activities (adventure_img, adventure_title, adventure_txt, username) VALUES (?,?,?,?)";
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
    const {
      title,
      text,
      username,
      card1_hourlyrate,
      card1_halfdayrate,
      card1_fulldayrate,
    } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE activities SET card1_img = ?,  card1_title = ?, card1_txt= ?, card1_hourlyrate= ?, card1_halfdayrate= ?, card1_fulldayrate= ? WHERE username = ?";
    // "INSERT into activities (card1_img, card1_title, card1_txt, username) VALUES (?,?,?,?)";
    pool.query(
      sql,
      [
        imagePath,
        title,
        text,
        card1_hourlyrate,
        card1_halfdayrate,
        card1_fulldayrate,
        username,
      ],
      (err, result) => {
        if (err) {
          console.error("Error inserting image path:", err);
          res.status(500).send("Error inserting image into the database.");
        } else {
          console.log("Image updated successfully");
          res.status(200).send("Image updated successfully");
        }
      }
    );
  });
};
exports.Card2 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const {
      title,
      text,
      username,
      card2_hourlyrate,
      card2_halfdayrate,
      card2_fulldayrate,
    } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE activities SET card2_img = ?,  card2_title = ?, card2_txt= ?, card2_hourlyrate= ?, card2_halfdayrate= ?, card2_fulldayrate= ? WHERE username = ?";
    // "INSERT into activities (card2_img, card2_title, card2_txt, username) VALUES (?,?,?,?)";
    pool.query(
      sql,
      [
        imagePath,
        title,
        text,
        card2_hourlyrate,
        card2_halfdayrate,
        card2_fulldayrate,
        username,
      ],
      (err, result) => {
        if (err) {
          console.error("Error inserting image path:", err);
          res.status(500).send("Error inserting image into the database.");
        } else {
          console.log("Image updated successfully");
          res.status(200).send("Image updated successfully");
        }
      }
    );
  });
};
exports.Card3 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { title, text, username, card3_ticketRate } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE activities SET card3_img = ?,  card3_title = ?, card3_txt= ?, card3_ticketRate=? WHERE username = ?";
    // "INSERT into activities (card3_img, card3_title, card3_txt, username) VALUES (?,?,?,?)";
    pool.query(
      sql,
      [imagePath, title, text, card3_ticketRate, username],
      (err, result) => {
        if (err) {
          console.error("Error inserting image path:", err);
          res.status(500).send("Error inserting image into the database.");
        } else {
          console.log("Image updated successfully");
          res.status(200).send("Image updated successfully");
        }
      }
    );
  });
};
exports.Card4 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const {
      title,
      text,
      username,
      card4_hourlyrate,
      card4_halfdayrate,
      card4_fulldayrate,
    } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE activities SET card4_img = ?,  card4_title = ?, card4_txt= ?, card4_hourlyrate= ?, card4_halfdayrate= ?, card4_fulldayrate= ? WHERE username = ?";
    // "INSERT into activities (card4_img, card4_title, card4_txt, username) VALUES (?,?,?,?)";
    pool.query(
      sql,
      [
        imagePath,
        title,
        text,
        card4_hourlyrate,
        card4_halfdayrate,
        card4_fulldayrate,
        username,
      ],
      (err, result) => {
        if (err) {
          console.error("Error inserting image path:", err);
          res.status(500).send("Error inserting image into the database.");
        } else {
          console.log("Image updated successfully");
          res.status(200).send("Image updated successfully");
        }
      }
    );
  });
};
exports.Activities1 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { title, text, username, ticketPrice, hiketozip } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE activities SET ac1_img = ?,  ac1_title = ?, ac1_txt= ?,ticketPrice=?,hiketozip=?  WHERE username = ?";
    pool.query(
      sql,
      [imagePath, title, text, ticketPrice, hiketozip, username],
      (err, result) => {
        if (err) {
          console.error("Error inserting image path:", err);
          res.status(500).send("Error inserting image into the database.");
        } else {
          console.log("Image updated successfully");
          res.status(200).send("Image updated successfully");
        }
      }
    );
  });
};
exports.Activities2 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { title, text, ticketPrice, username } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE activities SET ac2_img = ?,  ac2_title = ?, ac2_txt= ?,ticketPrice=? WHERE username = ?";
    pool.query(
      sql,
      [imagePath, title, text, ticketPrice, username],
      (err, result) => {
        if (err) {
          console.error("Error inserting image path:", err);
          res.status(500).send("Error inserting image into the database.");
        } else {
          console.log("Image updated successfully");
          res.status(200).send("Image updated successfully");
        }
      }
    );
  });
};
exports.Activities3 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { title, text, username, ticketPrice } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE activities SET ac3_img = ?,  ac3_title = ?, ac3_txt= ?,ticketPrice=? WHERE username = ?";
    pool.query(
      sql,
      [imagePath, title, text, ticketPrice, username],
      (err, result) => {
        if (err) {
          console.error("Error inserting image path:", err);
          res.status(500).send("Error inserting image into the database.");
        } else {
          console.log("Image updated successfully");
          res.status(200).send("Image updated successfully");
        }
      }
    );
  });
};
exports.Activities4 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { title, text, username, ticketPrice } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE activities SET ac4_img = ?,  ac4_title = ?, ac4_txt= ?,ticketPrice=? WHERE username = ?";
    pool.query(
      sql,
      [imagePath, title, text, ticketPrice, username],
      (err, result) => {
        if (err) {
          console.error("Error inserting image path:", err);
          res.status(500).send("Error inserting image into the database.");
        } else {
          console.log("Image updated successfully");
          res.status(200).send("Image updated successfully");
        }
      }
    );
  });
};
exports.Activities5 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const {
      title,
      text,
      username,
      ticketPrice,
      quickchairlift,
      hikechairlift,
    } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE activities SET ac5_img = ?,  ac5_title = ?, ac5_txt= ?,ticketPrice=?,quickchairlift=?,hikechairlift=? WHERE username = ?";
    pool.query(
      sql,
      [
        imagePath,
        title,
        text,
        ticketPrice,
        quickchairlift,
        hikechairlift,
        username,
      ],
      (err, result) => {
        if (err) {
          console.error("Error inserting image path:", err);
          res.status(500).send("Error inserting image into the database.");
        } else {
          console.log("Image updated successfully");
          res.status(200).send("Image updated successfully");
        }
      }
    );
  });
};
exports.Activities6 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { title, text, username } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }

    const imagePath = `${filename}`;

    const sql =
      "UPDATE activities SET ac6_img = ?, ac6_title = ?, ac6_txt = ? WHERE username = ?";
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

exports.getActivitiesPageData = (req, res) => {
  const { username } = req.query;
  // Create a SQL query to select data from the 'home' table for the given username
  const sql = "SELECT * FROM activities WHERE username = ?";

  // Execute the SQL query with the username as a parameter
  pool.query(sql, [username], (err, results) => {
    if (err) {
      console.error("Error retrieving home page data:", err);
      res.status(500).send("Error retrieving data from the database.");
    } else {
      // Check if any rows were returned
      if (results.length > 0) {
        // Data retrieved successfully
        const homeData = results[0]; // Assuming there's only one row for a given username
        res.status(200).json(homeData);
      } else {
        // No data found for the given username
        res.status(404).send("No data found for the provided username.");
      }
    }
  });
};
