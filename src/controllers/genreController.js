const prisma = require("../configs/prismaConfig");

const getGenreById = async (prisma, genreId) => {
  try {
    const genre = await prisma.genre.findUnique({
      where: {
        id: genreId,
      },
    });
    return genre;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllGenres = async (prisma) => {
  try {
    const genres = await prisma.genre.findMany({
      include: {
        movies: true,
      },
    });
    return genres;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getGenre = async (req, res) => {
  const genreId = parseInt(req.params.id);
  try {
    if (genreId) {
      const genre = await getGenreById(prisma, genreId);
      if (genre) {
        res.status(200).send(genre);
      } else {
        res.status(404).send({
          message: "Genre not found",
        });
      }
    } else {
      const genres = await getAllGenres(prisma);
      res.status(200).send(genres);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const addGenre = async (req, res) => {
  const newGenreData = req.body;

  try {
    // Check if request body is an array of genres
    if (Array.isArray(newGenreData)) {
      const createdGenres = await prisma.genre.createMany({
        data: newGenreData,
      });
      res.status(200).send({
        data: createdGenres,
        message: "Created genres successfully",
      });
    } else {
      // Create single genre using create
      const result = await prisma.genre.create({
        data: newGenreData,
      });
      res.status(200).send({
        data: result,
        message: "Created genre successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const deleteGenre = async (req, res) => {
  const genreID = req.params.id;

  try {
    await prisma.genre.delete({
      where: {
        id: parseInt(genreID),
      },
    });

    res.send({
      message: "Delete genre success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const updateGenre = async (req, res) => {
  const genreID = req.params.id;
  const genreData = req.body;

  try {
    const result = await prisma.genre.update({
      where: {
        id: parseInt(genreID),
      },
      data: {
        name: genreData.name,
      },
    });

    res.send({
      data: result,
      message: "Update genre success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { getGenre, addGenre, updateGenre, deleteGenre };
