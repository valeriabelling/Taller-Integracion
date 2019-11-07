const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "taller",
  password: "38387446",
  port: "5432"
});

const getUsers = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM Usuario ORDER BY idUsuario ASC"
  );
  res.status(200).json(response.rows);
};

const getUsersById = async (req, res) => {
  const idUsuario = parseInt(req.params.idUsuario);
  const response = await pool.query(
    "SELECT * FROM Usuario WHERE idUsuario = $1",
    [idUsuario]
  );
  res.json(response.rows);
};

const createUsers = async (req, res) => {
  const {
    nombre,
    apellido,
    correoElectronico,
    telefono,
    estado,
    registrado
  } = req.body;
  const response = await pool.query(
    "INSERT INTO Usuario (nombre, apellido, correoElectronico, telefono, estado, registrado) VALUES ($1, $2, $3, $4, $5, $6)",
    [nombre, apellido, correoElectronico, telefono, estado, registrado]
  );
  res.json({
    message: "Se ha agregado el usuario correctamente.",
    body: {
      user: {
        nombre,
        apellido,
        correoElectronico,
        telefono,
        estado,
        registrado
      }
    }
  });
};

/* Tener en cuenta que esta funcionalidad la maneja el usuario*/
const updateUsers = async (req, res) => {
  const idUsuario = parseInt(req.params.idUsuario);
  const { correoElectronico, telefono } = req.body;

  const response = await pool.query(
    "UPDATE Usuario SET corroElctronico = $1, telefono = $2 WHERE idUsuario = $3",
    [correoElectronico, telefono, idUsuario]
  );
  res.json("Se ha actualizado de forma correcta los datos del usuario.");
};

/* Tener en cuenta que esta funcionalidad solo la manejara el administrador, 
ocurrira cuandoel administrador crea que el usuario use de forma inapropiada la plataforma*/
const deleteUsers = async (req, res) => {
  const idUsuario = parseInt(req.params.idUsuario);
  const { estado } = req.body;

  const response = await pool.query(
    "UPDATE Usuario SET estado = $1 WHERE idUsuario = $2",
    [estado, idUsuario]
  );

  res.json(`Se ha eliminado correctamente el usuario ${idUsuario}.`);
};

module.exports = {
  getUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers
};
