const express = require("express");
const router = express.Router();

const artists = require("./controllers");
const auth = require("../auth/controllers");

router.get("/", artists.getAll);
router.post("/", auth.isAuthenticated, artists.add);
router.delete("/", auth.isAuthenticated, artists.deleteAll);
router.get("/:slug", artists.getOneBySlug);
router.delete("/:slug", auth.isAuthenticated, artists.deleteOneBySlug);
router.post("/seed", artists.seed);

module.exports = router;
