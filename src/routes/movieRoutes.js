const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/movies", movieController.getMovie);
router.get("/movies/:id", movieController.getMovie);
router.post("/movies", movieController.addMovie);
router.delete("/movies/:id", movieController.deleteMovie);
router.put("/movies/:id", movieController.updateMovie);

module.exports = router;
