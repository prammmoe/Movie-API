const prisma = require("../configs/prismaConfig");

const getMovieById = async (prisma, movieId) => {
  try {
    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    return movie;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getAllMovies = async (prisma) => {
  try {
    const movies = await prisma.movie.findMany({
      include: {
        genres: true,
      },
    });
    return movies;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getMovie = async (req, res) => {
  const movieId = parseInt(req.params.id);

  try {
    if (movieId) {
      const movie = await getMovieById(prisma, movieId);
      if (movie) {
        res.status(200).send(movie);
      } else {
        res.status(404).send({ message: "Movie not found" });
      }
    } else {
      const movies = await getAllMovies(prisma);
      res.status(200).send(movies);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const addMovie = async (req, res) => {
  const newMovieData = req.body;

  try {
    if (Array.isArray(newMovieData)) {
      const createdMovies = await prisma.movie.createMany({
        data: newMovieData,
      });
      res.status(200).send({
        data: createdMovies,
        message: "Created movies successfully",
      });
    } else {
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
      res.status(200).send({
        data: result,
        message: "Create movie success",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const deleteMovie = async (req, res) => {
  const movieId = req.params.id;

  try {
    await prisma.movie.delete({
      where: {
        id: parseInt(movieId),
      },
    });

    res.status(200).send({
      message: "Movie deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const updateMovie = async (req, res) => {
  const movieId = req.params.id;
  const movieData = req.body;

  try {
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

    res.status(200).send({
      data: result,
      message: "Edit movie success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { getMovie, addMovie, deleteMovie, updateMovie };
