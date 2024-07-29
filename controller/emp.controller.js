const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.send("Employee List");
});

module.exports = router;
