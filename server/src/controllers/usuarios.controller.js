const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "38387446",
    port: '5432',
});

const getHerr = async(req, res) => {
    const response = await pool.query('SELECT * FROM usuario ORDER BY idusuario ASC');
    res.status(200).json(response.rows);
};

const getHerrById = async(req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const response = await pool.query('SELECT * FROM usuario WHERE idherramienta = $1', [idUsuario]);
    res.json(response.rows);
};

const createHerr = async(req, res) => {
    const { nombre, apellido, correoElectronico, telefono, estado, registrado } = req.body;
    const response = await pool.query('INSERT INTO usuario (nombre, apellido, correoElectronico, telefono, estado, registrado) VALUES ($1, $2, $3, $4, $5, $6)', [nombre, apellido, correoElectronico, telefono, estado, registrado]);
    res.json({
        message: 'Usuario Added successfully',
        body: {
            user: { nombre, apellido, correoElectronico, telefono, estado, registrado }
        }
    })
};

const updateHerr = async(req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const { correoElectronico, telefono} = req.body;

    const response = await pool.query('UPDATE herramienta SET correoElectronico = $1, telefono = $2 WHERE idusuario = $3', [
        correoElectronico,
        telefono,
        idUsuario
    ]);
    res.json('User Updated Successfully');
};

const deleteHerr = async(req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    
    
        const response = await pool.query('UPDATE usuario SET estado = $1 WHERE idUsuario = $2', [
            estado,
            idUsuario
        ]);
    
    res.json(`User ${idUsuario} deleted Successfully`);
};

module.exports = {
    getHerr,
    getHerrById,
    createHerr,
    updateHerr,
    deleteHerr
};