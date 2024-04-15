const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getGenre = async (req, res) => {
  const genre = await prisma.genre.findMany();

  res.send(genre);
};

const addGenre = async (req, res) => {
  const newGenreData = req.body;

  const result = await prisma.genre.create({
    data: {
      name: newGenreData.name,
    },
  });
  res.send({
    data: result,
    message: "Create genre success",
  });
};

const deleteGenre = async (req, res) => {
  const genreID = req.params.id;

  await prisma.genre.delete({
    where: {
      id: parseInt(genreID),
    },
  });

  res.send({
    message: "Delete genre success",
  });
};

const updateGenre = async (req, res) => {
  const genreID = req.params.id;
  const genreData = req.body;

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
};

module.exports = { getGenre, addGenre, updateGenre, deleteGenre };
