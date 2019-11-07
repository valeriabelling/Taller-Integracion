const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "taller",
  password: "38387446",
  port: "5432"
});

const getComen = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM Comentario ORDER BY idComentario ASC"
  );
  res.status(200).json(response.rows);
};

const getComenById = async (req, res) => {
  const idComen = parseInt(req.params.idComentario);
  const response = await pool.query(
    "SELECT * FROM Comentario WHERE idComentario = $1",
    [idComentario]
  );
  res.json(response.rows);
};

const createComen = async (req, res) => {
  const { idDetalle, descripcion, puntuacion } = req.body;
  const response = await pool.query(
    "INSERT INTO Comentario (idDetalle, descripcion, puntuacion) VALUES ($1, $2, $3)",
    [idDetalle, descripcion, puntuacion]
  );
  res.json({
    message: "Se ha agregado correctamente el comentario.",
    body: {
      user: {
        idDetalle,
        descripcion,
        puntuacion
      }
    }
  });
};

const deleteComen = async (req, res) => {
  const idComentario = parseInt(req.params.idComentario);

  const response = await pool.query(
    "DELETE Comentario WHERE idComentario = $1",
    [idComentario]
  );

  res.json(`El comentario ha sido eliminado correctamente.`);
};

module.exports = {
  getComen,
  getComenById,
  createComen,
  updateComen,
  deleteComen
};
