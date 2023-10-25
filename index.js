const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");
app.use(express.json({ limit: "50mb" }));
const authorize = require("./middleware/authorization.js");

app.use(cors());


const loginRouter = require("./routes/loginRoutes.js");
const adminRouter = require("./routes/dashboard.js");
const homeRouter = require("./routes/homeRoutes.js");

//register and login routes
app.use("/auth", loginRouter);
app.use("/dashboard",adminRouter);

//dashboard routes
// app.use("/home", authorize , homeRouter);
app.use("/home", homeRouter);



app.listen(5000, () => {
  console.log("server is now running at 5000");
});
