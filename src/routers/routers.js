const express = require("express");
const router = express();
const { apresentar } = require("../controller/controlador");

router.get("/", apresentar);

module.exports = {
  router,
};
