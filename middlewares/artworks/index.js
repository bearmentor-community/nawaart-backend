const express = require("express");
const router = express.Router();

const artworks = require("./controllers");
const auth = require("../auth/controllers");
const upload = require("../multer/upload");

router.post("/seed", artworks.seed);
router.get("/", artworks.getAll);
router.post("/", auth.isAuthenticated, upload.single("image"), artworks.add);
router.get("/:slug", artworks.getOneBySlug);
router.delete("/", auth.isAuthenticated, artworks.deleteAll);
router.delete("/:slug", auth.isAuthenticated, artworks.deleteOneBySlug);

module.exports = router;
