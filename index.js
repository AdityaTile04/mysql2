const express = require("express");
const connection = require("./db");
const empRoutes = require("./controller/emp.controller");
const PORT = 3000;

const app = express();

app.use("/api/employees", empRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
