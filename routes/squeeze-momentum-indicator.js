const express = require("express");
const {
  calcualate_squeeze_momentum,
} = require("../controllers/squeeze_momentum_route_controller");
const router = express.Router();

router.get("/", calcualate_squeeze_momentum);

module.exports = router;
