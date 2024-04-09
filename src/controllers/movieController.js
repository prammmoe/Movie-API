const db = require("../configs/db");

const endpoint = (req, res) => {
  res.send("API is running ...");
};

const getMovie = (req, res) => {
  try {
    const data = db.query(`
      SELECT movies.id, title, released_year, duration, lang, description
      FROM movies
      INNER JOIN genre ON movies.id_genre = genre.id;
    `);

    res.json({
      message: "GET all movies success",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data film." });
  }
};

module.exports = { endpoint, getMovie };
