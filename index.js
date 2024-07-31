const express = require("express");
const connection = require("./db");
const empRoutes = require("./controller/emp.controller");
const bodyParser = require("body-parser");
require("body-parser");
require("express-async-errors");
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use("/api/employees", empRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Somethig went wrong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connection
  .query("SELECT 1")
  .then(() => {
    console.log(`Database connected succesfully`);
  })
  .catch(() => {
    console.log(`Some error in database`);
  });
