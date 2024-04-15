const db = require("../configs/db"); // Assuming this imports a database connection
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getGenre = async (req, res) => {
  const genre = await prisma.genre.findMany();

  res.send(genre);
};

module.exports = { getGenre };
