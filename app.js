const express = require("express");

const app = express();
const port = process.env.PORT || 7000;

// Init routing
const movieRoutes = require("./src/routes/movieRoutes");
const genreRoutes = require("./src/routes/genreRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(movieRoutes);
app.use(genreRoutes);

// Index endpoint
app.get("/", (req, res) => {
  res.send("Woi!");
});

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

module.exports = app;
