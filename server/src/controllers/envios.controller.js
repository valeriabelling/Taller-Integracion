const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "taller",
  password: "38387446",
  port: "5432"
});

const getEnvio = async (req, res) => {
  const response = await pool.query("SELECT * FROM Envio ORDER BY idEnvio ASC");
  res.status(200).json(response.rows);
};

const getEnvioById = async (req, res) => {
  const idEnvio = parseInt(req.params.idEnvio);
  const response = await pool.query("SELECT * FROM Envio WHERE idEnvio = $1", [
    idEnvio
  ]);
  res.json(response.rows);
};

const createEnvio = async (req, res) => {
  const {
    idDomicilio,
    codigoTraking,
    estado,
    fechaEnvio,
    fechaLlegada
  } = req.body;
  const response = await pool.query(
    "INSERT INTO envio (idDomicilio, codigoTraking, estado, fechaEnvio, fechaLlegada) VALUES ($1, $2, $3, $4, $5)",
    [idDomicilio, codigoTraking, estado, fechaEnvio, fechaLlegada]
  );
  res.json({
    message: "Se ha agregado el envio correctamente.",
    body: {
      user: { idDomicilio, codigoTraking, estado, fechaEnvio, fechaLlegada }
    }
  });
};

const updateEnvio = async (req, res) => {
  const idEnvio = parseInt(req.params.idEnvio);
  const { estado, fechaLlegada } = req.body;

  const response = await pool.query(
    "UPDATE Envio SET estado = $1, fechaLlegada = $2 WHERE idEnvio = $3",
    [estado, fechaLlegada, idEnvio]
  );
  res.json("Se ha actualizado de forma correcta los datos del envio.");
};

const deleteEvio = async (req, res) => {
  const idEnvio = parseInt(req.params.idEnvio);

  const response = await pool.query(
    "UPDATE Envio SET estado = $1 WHERE idEnvio = $2",
    [estado, idEnvio]
  );

  res.json(`Se ha eliminado correctamente el envio.`);
};

module.exports = {
  getEnvio,
  getEnvioById,
  createEnvio,
  updateEnvio,
  deleteEnvio
};
