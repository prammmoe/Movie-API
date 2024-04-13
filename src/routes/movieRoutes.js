const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/movies", movieController.getMovie);
router.post("/movies", movieController.addMovie);

module.exports = router;
