const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db.js");

const port = process.env.PORT || 3000;
const goals = require("./routes/goalRoutes.js");

connectDB();
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goal", goals);

app.listen(port, () => {
  console.log(`Server on port http://localhost:${port}`);
});
