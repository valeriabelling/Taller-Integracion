const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "38387446",
    port: "5432"
});

const getUsers = async(req, res) => {
    const response = await pool.query("SELECT * FROM usuario ORDER BY idusuario ASC");
    res.status(200).json(response.rows);
};

const getUsersById = async(req, res) => {
    const idusuario = parseInt(req.params.id);
    const response = await pool.query("SELECT * FROM usuario WHERE idusuario = $1", [idusuario]);
    res.json(response.rows);
};

const createUsers = async(req, res) => {
    const { nombre, apellido, correoelectronico, telefono, estado, registrado } = req.body;
    const response = await pool.query("INSERT INTO usuario (nombre, apellido, correoelectronico, telefono, estado, registrado) VALUES ($1, $2, $3, $4, $5, $6)", [nombre, apellido, correoelectronico, telefono, estado, registrado]);
    res.json({
        message: "Se ha agregado correctamente el usuario.",
        body: {
            user: { nombre, apellido, correoelectronico, telefono, estado, registrado }
        }
    });
};

/* Tener en cuenta que esta funcionalidad la maneja el usuario*/
const updateUsers = async(req, res) => {
    const idusuario = parseInt(req.params.id);
    const { correoelectronico, telefono } = req.body;
    const response = await pool.query("UPDATE usuario SET correoelectronico = $1, telefono = $2 WHERE idusuario = $3", [correoelectronico, telefono, idusuario]);
    res.json("Se ha actualizado correctamente el usuario.");
};

/* Tener en cuenta que esta funcionalidad solo la manejara el administrador, 
ocurrira cuandoel administrador crea que el usuario use de forma inapropiada la plataforma*/
const deleteUsers = async(req, res) => {
    const idusuario = parseInt(req.params.id);
    const { estado } = req.body;
    const response = await pool.query("UPDATE usuario SET estado = $1 WHERE idusuario = $2", [estado, idusuario]);
    res.json("Se ha eliminado correctamente el usuario.");
};

module.exports = {
    getUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers
};