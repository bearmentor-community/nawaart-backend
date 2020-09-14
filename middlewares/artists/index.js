const express = require("express");
const router = express.Router();

const artists = require("./controllers");
const auth = require("../auth/controllers");
const upload = require("../multer/upload");

router.get("/", artists.getAll);
router.post("/", auth.isAuthenticated, upload.single("photo"), artists.add);
router.delete("/", auth.isAuthenticated, artists.deleteAll);
router.get("/:slug", artists.getOneBySlug);
router.delete("/:slug", auth.isAuthenticated, artists.deleteOneBySlug);
router.post("/seed", artists.seed);

module.exports = router;
