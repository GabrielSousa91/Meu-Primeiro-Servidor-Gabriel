const express = require("express");
const router = express();
const { apresentacao } = require("../controller/controlador");

router.get("/", apresentacao);

module.exports = {
  router,
};
