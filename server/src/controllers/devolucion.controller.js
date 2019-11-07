const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "taller",
  password: "38387446",
  port: "5432"
});

const getDevolucion = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM Devolucion ORDER BY idDevolucion ASC"
  );
  res.status(200).json(response.rows);
};

const getDevolucionById = async (req, res) => {
  const idDevolucion = parseInt(req.params.idDevolucion);
  const response = await pool.query(
    "SELECT * FROM Devolucion WHERE idDevolucion = $1",
    [idDevolucion]
  );
  res.json(response.rows);
};

const createDevolucion = async (req, res) => {
  const { descripcion, estado } = req.body;
  const response = await pool.query(
    "INSERT INTO Devolucion (descripcion, estado) VALUES ($1, $2)",
    [descripcion, estado]
  );
  res.json({
    message: "La devolucion se realizo correctamente.",
    body: {
      user: {
        descripcion,
        estado
      }
    }
  });
};

/* Tener en cuenta que esta funcionalidad solo la manejara el administrador*/
const updateDevolucion = async (req, res) => {
  const idDevolucion = parseInt(req.params.idDevolucion);
  const { estado } = req.body;

  const response = await pool.query(
    "UPDATE Devolucion SET estado = $1 WHERE idDevolucion = $2",
    [estado, idDevolucion]
  );
  res.json("Se ha actualizado correctamente la devolucion.");
};

/* Tener en cuenta que esta funcionalidad ocurrira solo si el comprador decide quedarse con la herramienta.*/
const deleteDevolucion = async (req, res) => {
  const idDevolucion = parseInt(req.params.idDevolucion);
  const { estado } = req.body;

  const response = await pool.query(
    "UPDATE Devolucion SET estado = $1 WHERE idDevolucion = $2",
    [estado, idDevolucion]
  );

  res.json(`Se ha eliminado correctamente la devolucion.`);
};

module.exports = {
  getDevolucion,
  getDevolucionById,
  createDevolucion,
  updateDevolucion,
  deleteDevolucion
};
