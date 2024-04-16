const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genreController");

router.get("/genres", genreController.getGenre);
router.get("/genres/:id", genreController.getGenre);
router.post("/genres", genreController.addGenre);
router.put("/genres/:id", genreController.updateGenre);
router.delete("/genres/:id", genreController.deleteGenre);

module.exports = router;
