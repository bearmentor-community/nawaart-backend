const express = require("express");
const router = express.Router();

const artworks = require("./controllers");
const auth = require("../auth/controllers");
const upload = require("../multer/upload");

router.post("/seed", artworks.seed);
router.get("/", artworks.getAll);
router.post("/", auth.isAuthenticated, upload.single("image"), artworks.add);
router.delete("/", artworks.deleteAll);
router.get("/:slug", artworks.getOneBySlug);
router.delete("/:slug", artworks.deleteOneBySlug);

module.exports = router;
