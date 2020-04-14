const express = require("express");
const router = express.Router();

const artists = require("./controllers");

router.get("/", artists.getAll);

module.exports = router;
