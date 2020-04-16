const express = require("express");
const router = express.Router();

const artworks = require("./controllers");

router.get("/", artworks.getAll);
router.post("/", artworks.add);
router.delete("/", artworks.deleteAll);
router.get("/:slug", artworks.getOneBySlug);
router.delete("/:slug", artworks.deleteOneBySlug);

module.exports = router;
