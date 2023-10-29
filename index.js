const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");
app.use(express.json({ limit: "50mb" }));
const authorize = require("./middleware/authorization.js");

app.use(cors());

app.use(express.static("./uploads"));

const loginRouter = require("./routes/loginRoutes.js");
const adminRouter = require("./routes/dashboard.js");

const homeRouter = require("./routes/homeRoutes.js");
const dineRouter = require("./routes/dineRoutes.js");
const csrRouter = require("./routes/csrRoutes.js");
const activitiesRouter = require("./routes/activitiesRoutes.js");
const staycationRouter = require("./routes/staycationRoutes.js");
const slopeRouter = require("./routes/slopeRoutes.js");

//register and login routes
app.use("/auth", loginRouter);
app.use("/dashboard", adminRouter);

//dashboard routes
// app.use("/home", authorize , homeRouter);
app.use("/home", homeRouter);
app.use("/dine", dineRouter);
app.use("/csr", csrRouter);
app.use("/activities", activitiesRouter);
app.use("/staycation", staycationRouter);
app.use("/slope", slopeRouter);

app.listen(5000, () => {
  console.log("server is now running at 5000");
});
