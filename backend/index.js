const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const goals = require("./routes/goalRoutes.js");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goal", goals);

app.listen(port, () => {
  console.log(`Server on port http://localhost:${port}`);
});
