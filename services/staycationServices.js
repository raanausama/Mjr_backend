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
      "UPDATE staycation SET hero_img = ?, welcome_txt = ?, heading1_txt= ?, heading2_txt= ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
    pool.query(
      sql,
      [imagePath, title, heading1, heading2, username],
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
exports.w1 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { username } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE staycation SET w1 = ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
    pool.query(
      sql,
      [imagePath, username],
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
exports.w2 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { username } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE staycation SET w2 = ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
    pool.query(
      sql,
      [imagePath, username],
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
exports.w3 = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { username } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE staycation SET w3 = ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
    pool.query(
      sql,
      [imagePath, username],
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
      "UPDATE staycation SET room1_img = ?,  room1_title = ?, room1_txt= ? WHERE username = ?";
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
      "UPDATE staycation SET room2_img = ?,  room2_title = ?, room2_txt= ? WHERE username = ?";
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
      "UPDATE staycation SET room3_img = ?,  room3_title = ?, room3_txt= ? WHERE username = ?";
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
      "UPDATE staycation SET room4_img = ?,  room4_title = ?, room4_txt= ? WHERE username = ?";
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
      "UPDATE staycation SET room5_img = ?,  room5_title = ?, room5_txt= ? WHERE username = ?";
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
      "UPDATE staycation SET room6_img = ?,  room6_title = ?, room6_txt= ? WHERE username = ?";
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
      "UPDATE staycation SET room7_img = ?,  room7_title = ?, room7_txt= ? WHERE username = ?";
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
      "UPDATE staycation SET room8_img = ?,  room8_title = ?, room8_txt= ? WHERE username = ?";
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
exports.Room9 = (req, res) => {
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
      "UPDATE staycation SET room9_img = ?,  room9_title = ?, room9_txt= ? WHERE username = ?";
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

exports.accomodation1 = (req, res) => {
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
      "UPDATE staycation SET accomodation1_img = ?,  accomodation1_title = ?, accomodation1_txt= ? WHERE username = ?";
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
exports.accomodation2 = (req, res) => {
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
      "UPDATE staycation SET accomodation2_img = ?,  accomodation2_title = ?, accomodation2_txt= ? WHERE username = ?";
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
exports.accomodation3 = (req, res) => {
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
      "UPDATE staycation SET accomodation3_img = ?,  accomodation3_title = ?, accomodation3_txt= ? WHERE username = ?";
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
exports.accomodation4 = (req, res) => {
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
      "UPDATE staycation SET accomodation4_img = ?,  accomodation4_title = ?, accomodation4_txt= ? WHERE username = ?";
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
exports.getStaycationPageData = (req, res) => {
  const { username } = req.query;
  // Create a SQL query to select data from the 'staycation' table for the given username
  const sql = "SELECT * FROM staycation WHERE username = ?";

  // Execute the SQL query with the username as a parameter
  pool.query(sql, [username], (err, results) => {
    if (err) {
      console.error("Error retrieving staycation page data:", err);
      res.status(500).send("Error retrieving data from the database.");
    } else {
      // Check if any rows were returned
      if (results.length > 0) {
        // Data retrieved successfully
        const staycationData = results[0]; // Assuming there's only one row for a given username
        res.status(200).json(staycationData);
      } else {
        // No data found for the given username
        res.status(404).send("No data found for the provided username.");
      }
    }
  });
};
