const db = require("../configs/db"); // Assuming this imports a database connection

const getMovie = (req, res) => {
  db.query("SELECT * FROM movies", function (err, results) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        message: "GET all movies success",
        data: results,
      });
    }
  });
};

const addMovie = (req, res) => {
  const { title, released_year, duration, lang, description, id_genre } =
    req.body;

  if (
    !title ||
    !released_year ||
    !duration ||
    !lang ||
    !description ||
    !id_genre
  ) {
    res.status(300).json({
      message: "The values can't be null.",
    });

    console.log(req.body);
  } else {
    db.query(
      "INSERT INTO movies (title, released_year, duration, lang, description, id_genre) values (?, ?, ?, ?, ?, ?)",
      [title, released_year, duration, lang, description, id_genre],
      function (err, results) {
        if (err) {
          console.log(err);
          res.status(400).json({
            message: "Error add data.",
          });
        } else {
          res.status(200).json({
            message: "POST movie success",
            data: req.body,
          });
        }
      }
    );
  }
};

module.exports = { getMovie, addMovie };
