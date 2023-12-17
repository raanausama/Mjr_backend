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

exports.heroSection = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { hero_title, hero_txt, username } = req.body;
    const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    const imagePath = `${filename}`;

    const sql =
      "UPDATE slope SET hero_img = ?, hero_title = ?,  hero_txt= ? WHERE username = ?";
    //   "INSERT into slope (hero_img , hero_title, hero_txt, username) VALUES ( ?, ?, ?, ?) ";
    pool.query(
      sql,
      [imagePath, hero_title, hero_txt, username],
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

exports.aboutResort = (req, res) => {
  const { username, aboutTitle, aboutText } = req.body;
  const sql = "UPDATE slope SET about_title=?, about_text=? WHERE username= ?";
  pool.query(sql, [aboutTitle, aboutText, username], (err, result) => {
    if (err) {
      console.log("Error inserting data", err);
      res.status(500).send("error inserting data into database");
    } else {
      console.log("Data updated successfully");
      res.status(200).send("Data updated successfully");
    }
  });
};

exports.t1 = (req, res) => {
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

    const sql = "UPDATE slope SET tech1_img = ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
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
exports.t2 = (req, res) => {
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

    const sql = "UPDATE slope SET tech2_img = ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
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
exports.t3 = (req, res) => {
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

    const sql = "UPDATE slope SET tech3_img = ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
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
exports.d1 = (req, res) => {
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

    const sql = "UPDATE slope SET ski_img1 = ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
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
exports.d2 = (req, res) => {
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

    const sql = "UPDATE slope SET ski_img2 = ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
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
exports.d3 = (req, res) => {
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

    const sql = "UPDATE slope SET ski_img3 = ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
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
exports.descriptionSection = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { ski_title1, ski_title2, ski_txt, username } = req.body;
    //   const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    //   const imagePath = `${filename}`;

    const sql =
      "UPDATE slope SET ski_title1 = ?, ski_title2 = ?, ski_txt= ? WHERE username = ?";
    //   "INSERT into slope (ski_title1, ski_title2, ski_txt username) VALUES (?, ?, ?, ?) ";
    pool.query(
      sql,
      [ski_title1, ski_title2, ski_txt, username],
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
exports.techSection = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { tech_title, tech_txt, username } = req.body;
    //   const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    //   const imagePath = `${filename}`;

    const sql =
      "UPDATE slope SET tech_title = ?, tech_txt= ? WHERE username = ?";
    //   "INSERT into slope (ski_title1, ski_title2, ski_txt username) VALUES (?, ?, ?, ?) ";
    pool.query(sql, [tech_title, tech_txt, username], (err, result) => {
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
exports.pistonSection = (req, res) => {
  upload.single("image")(req, res, (err) => {
    const { piston_title, piston_txt, username } = req.body;
    //   const filename = req.file.originalname;

    if (err) {
      return res.status(400).send("Error uploading image.");
    }
    // console.log(res);
    // You can save the image to the database here
    // Adjust the database code as per your needs

    //   const imagePath = `${filename}`;

    const sql =
      "UPDATE slope SET piston_title = ?, piston_txt= ? WHERE username = ?";
    //   "INSERT into slope (ski_title1, ski_title2, ski_txt username) VALUES (?, ?, ?, ?) ";
    pool.query(sql, [piston_title, piston_txt, username], (err, result) => {
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
exports.p1 = (req, res) => {
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

    const sql = "UPDATE slope SET piston_img1 = ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
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
exports.p2 = (req, res) => {
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

    const sql = "UPDATE slope SET piston_img2 = ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
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
exports.team = (req, res) => {
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

    const sql = "UPDATE slope SET team_img = ? WHERE username = ?";
    // "INSERT into staycation (hero_img , welcome_txt, heading1_txt, heading2_txt, username) VALUES (?, ?, ?, ?, ?) ";
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
exports.getSlopePageData = (req, res) => {
  const { username } = req.query;
  // Create a SQL query to select data from the 'staycation' table for the given username
  const sql = "SELECT * FROM slope WHERE username = ?";

  // Execute the SQL query with the username as a parameter
  pool.query(sql, [username], (err, results) => {
    if (err) {
      console.error("Error retrieving slope page data:", err);
      res.status(500).send("Error retrieving data from the database.");
    } else {
      // Check if any rows were returned
      if (results.length > 0) {
        // Data retrieved successfully
        const slopeData = results[0]; // Assuming there's only one row for a given username
        res.status(200).json(slopeData);
      } else {
        // No data found for the given username
        res.status(404).send("No data found for the provided username.");
      }
    }
  });
};
