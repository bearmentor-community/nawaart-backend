const express = require("express");
const router = express.Router();

const artists = require("./controllers");

// app.js:
// app.use('/artists', artistsMiddleware)
router.get("/", artists.getAll);
router.post("/", artists.addArtist);
router.delete("/", artists.deleteAll);

module.exports = router;
