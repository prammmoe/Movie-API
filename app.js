const express = require("express");

const app = express();
const port = process.env.PORT || 7000;

const movieRoutes = require("./src/routes/movieRoutes");
const genreRoutes = require("./src/routes/genreRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(movieRoutes);
app.use(genreRoutes);

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

module.exports = app;
