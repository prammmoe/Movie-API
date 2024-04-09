const db = require("../configs/db"); // Assuming this imports a database connection

const getGenre = (req, res) => {
  db.query("SELECT * FROM genres", function (err, results) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        message: "GET all genres success",
        data: results,
      });
    }
  });
};

module.exports = { getGenre };
