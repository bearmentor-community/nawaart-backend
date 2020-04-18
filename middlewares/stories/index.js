const express = require("express");
const router = express.Router();

const stories = require("./controllers");

router.post("/seed", stories.seed);
router.get("/", stories.getAll);
router.post("/", stories.add);
router.delete("/", stories.deleteAll);
router.get("/:slug", stories.getOneBySlug);
router.delete("/:slug", stories.deleteOneBySlug);

module.exports = router;
