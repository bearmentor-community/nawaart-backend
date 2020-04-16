const express = require("express");
const router = express.Router();

const artists = require("./controllers");

// app.js:
// app.use('/artists', artistsMiddleware)
router.get("/", artists.getAll);
router.post("/", artists.add);
router.delete("/", artists.deleteAll);
router.get("/:slug", artists.getOneBySlug);
router.delete("/:slug", artists.deleteOneBySlug);

module.exports = router;
