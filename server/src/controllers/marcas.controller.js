const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "",
    port: '5432',
});

const getMarcas = async(req, res) => {
    const response = await pool.query(
        'SELECT * FROM marca ORDER BY idmarca ASC'
    );
    res.status(200).json(response.rows);
};

const getMarcasById = async(req, res) => {
    const idmarca = parseInt(req.params.idmarca);
    const response = await pool.query(
        'SELECT * FROM marca WHERE idmarca = $1', [idmarca]
    );
    res.json(response.rows);
};

const createMarcas = async(req, res) => {
    const {
        nombre,
        estado
    } = req.body;
    const response = await pool.query(
        'INSERT INTO marca (nombre, estado) VALUES ($1, $2)', [nombre, estado]);
    res.json({
        message: 'Se ha agregado correctamente la marca.',
        body: {
            user: {
                nombre,
                estado
            }
        }
    })
};

const updateMarcas = async(req, res) => {
    const idmarca = parseInt(req.params.idmarca);
    const {
        estado
    } = req.body;
    const response = await pool.query(
        'UPDATE marca SET estado = $1 WHERE idmarca = $2', [
            estado,
            idmarca
        ]);
    res.json('Se ha actualizado correctamente la marca.');
};

const deleteMarcas = async(req, res) => {
    const idmarca = parseInt(req.params.idmarca);
    const { estado } = req.body;

    const response = await pool.query('UPDATE marca SET estado = $1 WHERE idmarca = $2', [
        estado,
        idmarca
    ]);
    res.json("Se ha eliminado correctamente la marca.");
};

module.exports = {
    getMarcas,
    getMarcasById,
    createMarcas,
    updateMarcas,
    deleteMarcas
};