const express = require("express");
const {
  calcualate_squeeze_momentum,
} = require("../functions/calculate_squeeze_momentum");
const router = express.Router();

router.get("/", calcualate_squeeze_momentum);

module.exports = router;
