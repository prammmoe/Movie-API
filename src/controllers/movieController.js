const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMovie = async (req, res) => {
  const movie = await prisma.movie.findMany();

  res.send(movie);
};

const addMovie = async (req, res) => {
  const newMovieData = req.body;

  const result = await prisma.movie.create({
    data: {
      title: newMovieData.title,
      releasedYear: newMovieData.releasedYear,
      duration: newMovieData.duration,
      lang: newMovieData.lang,
      description: newMovieData.description,
      genre: {
        connect: {
          id: newMovieData.id_genre,
        },
      },
    },
  });
  res.send({
    data: result,
    message: "Create movie success",
  });
};

const deleteMovie = async (req, res) => {
  const movieId = req.params.id;

  await prisma.movie.delete({
    where: {
      id: parseInt(movieId),
    },
  });

  res.send({
    message: "Movie deleted",
  });
};

const updateMovie = async (req, res) => {
  const movieId = req.params.id;
  const movieData = req.body;

  const result = await prisma.movie.update({
    where: {
      id: parseInt(movieId),
    },
    data: {
      title: movieData.title,
      releasedYear: movieData.releasedYear,
      duration: movieData.duration,
      lang: movieData.lang,
      description: movieData.description,
      genre: {
        connect: {
          id: movieData.id_genre,
        },
      },
    },
  });

  res.send({
    data: result,
    message: "Edit movie success",
  });
};

module.exports = { getMovie, addMovie, deleteMovie, updateMovie };
