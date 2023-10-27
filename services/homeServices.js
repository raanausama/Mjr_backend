const pool = require("../db");
const multer = require("multer");
const express = require("express");
const app = express();

app.use(express.static("uploads"));

exports.sliderText = async (req, res) => {
    const { text, username } = req.body;
  try {
    const sql = 'INSERT INTO home (header_txt, username) VALUES(?, ?)';
    await pool.query(sql, [text,username], (err, result) => {
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


// const upload = multer({ dest: "public/uploads/" });
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
      // You can adjust the file name as needed, e.g., add a timestamp to make it unique
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage: storage });
  
exports.UploadImage = (req, res) => {
    // const formData = req.body;
    // console.log(formData);

    upload.single("image")(req, res, (err) => {
        const filename = req.file.originalname;
        console.log(filename);
      if (err) {
        return res.status(400).send("Error uploading image.");
      }
    // console.log(res);
      // You can save the image to the database here
      // Adjust the database code as per your needs
  
      const imagePath = `/uploads/${filename}`;
  
      const sql = "INSERT INTO home (hero_img) VALUES (?)";
      pool.query(sql, [imagePath], (err, result) => {
        if (err) {
          console.error("Error inserting image path:", err);
          res.status(500).send("Error inserting image into the database.");
        } else {
          console.log("Image inserted successfully");
          res.status(200).send("Image inserted successfully");
        }
      });
    });
  };

   
exports.heroSection = (req, res) => {
    // const { text, username, formData, files} = req.body;
    // console.log(formData);

    upload.single("image")(req, res, (err) => {
        console.log(req.file.originalname);
        const { text, username } = req.body;
        const filename = req.file.originalname;
        
      if (err) {
        return res.status(400).send("Error uploading image.");
      }
    // console.log(res);
      // You can save the image to the database here
      // Adjust the database code as per your needs
  
      const imagePath = `${filename}`;
  
      const sql = "UPDATE home SET hero_img = ?,  sa_txt = ? WHERE username = ?";
      pool.query(sql, [imagePath, text, username], (err, result) => {
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

  exports.GetImage = (req, res) => {
    const imageId = 4;
    const sql = "SELECT hero_img FROM home WHERE id = ?";
    pool.query(sql, [imageId], (err, result) => {
      if (err) {
        console.error("Error retrieving image:", err);
        res.status(500).send("Error retrieving image from the database.");
      } else {
        if (result.length === 1) {
          res.writeHead(200, { "Content-Type": "image/jpeg" }); // Adjust the content type as needed
          res.end(result[0].data);
        } else {
          res.status(404).send("Image not found");
        }
      }
    });
  };

  exports.summerSection = (req, res) => {
    // const { text, username, formData, files} = req.body;
    // console.log(formData);

    upload.single("image")(req, res, (err) => {
        console.log(req.file.originalname);
        const { text, username } = req.body;
        const filename = req.file.originalname;
        
      if (err) {
        return res.status(400).send("Error uploading image.");
      }
    // console.log(res);
      // You can save the image to the database here
      // Adjust the database code as per your needs
  
      const imagePath = `${filename}`;
  
      const sql = "UPDATE home SET sa_img = ?,  sa_txt = ? WHERE username = ?";
      pool.query(sql, [imagePath, text, username], (err, result) => {
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

  exports.winterSection = (req, res) => {
    // const { text, username, formData, files} = req.body;
    // console.log(formData);

    upload.single("image")(req, res, (err) => {
        console.log(req.file.originalname);
        const { text, username } = req.body;
        const filename = req.file.originalname;
        
      if (err) {
        return res.status(400).send("Error uploading image.");
      }
    // console.log(res);
      // You can save the image to the database here
      // Adjust the database code as per your needs
  
      const imagePath = `${filename}`;
  
      const sql = "UPDATE home SET wa_img = ?,  wa_txt = ? WHERE username = ?";
      pool.query(sql, [imagePath, text, username], (err, result) => {
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

  exports.pastEvent = (req, res) => {
    
    upload.single("image")(req, res, (err) => {
        const { title, description, text, username } = req.body;
        const filename = req.file.originalname;
        
      if (err) {
        return res.status(400).send("Error uploading image.");
      }
    // console.log(res);
      // You can save the image to the database here
      // Adjust the database code as per your needs
  
      const imagePath = `${filename}`;
  
      const sql = "UPDATE home SET pec_img = ?,  pec_title = ?, pec_des= ?, pec_mdes =? WHERE username = ?";
      pool.query(sql, [imagePath, title, description, text, username], (err, result) => {
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

  exports.upcomingEvent = (req, res) => {
    
    upload.single("image")(req, res, (err) => {
        const { title, description, text, username } = req.body;
        const filename = req.file.originalname;
        
      if (err) {
        return res.status(400).send("Error uploading image.");
      }
    // console.log(res);
      // You can save the image to the database here
      // Adjust the database code as per your needs
  
      const imagePath = `${filename}`;
  
      const sql = "UPDATE home SET uec_img = ?,  uec_title = ?, uec_des= ?, uec_mdes =? WHERE username = ?";
      pool.query(sql, [imagePath, title, description, text, username], (err, result) => {
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

  exports.futureEvent = (req, res) => {
    
    upload.single("image")(req, res, (err) => {
        const { title, description, text, username } = req.body;
        const filename = req.file.originalname;
        
      if (err) {
        return res.status(400).send("Error uploading image.");
      }
    // console.log(res);
      // You can save the image to the database here
      // Adjust the database code as per your needs
  
      const imagePath = `${filename}`;
  
      const sql = "UPDATE home SET fec_img = ?,  fec_title = ?, fec_des= ?, fec_mdes =? WHERE username = ?";
      pool.query(sql, [imagePath, title, description, text, username], (err, result) => {
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

  exports.getHomePageData = (req, res) => {
    const { username } = req.body;
  
    // Create a SQL query to select data from the 'home' table for the given username
    const sql = "SELECT * FROM home WHERE username = ?";
    
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