const express = require("express");

const app = express();
const port = process.env.PORT || 7000;

const routes = require("./src/routes/movieRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

module.exports = app;
