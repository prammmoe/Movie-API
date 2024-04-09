const db = require("../configs/db"); // Assuming this imports a database connection

const endpoint = (req, res) => {
  res.send("API is running ...");
};

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

module.exports = { endpoint, getMovie };
