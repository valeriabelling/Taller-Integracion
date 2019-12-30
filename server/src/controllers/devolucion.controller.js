const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "38387446",
    port: "5432"
});

const getDevolucion = async(req, res) => {
    const response = await pool.query("SELECT * FROM devolucion ORDER BY iddevolucion ASC");
    res.status(200).json(response.rows);
};

const getDevolucionById = async(req, res) => {
    const iddevolucion = parseInt(req.params.id);
    const response = await pool.query("SELECT * FROM devolucion WHERE iddevolucion = $1", [iddevolucion]);
    res.json(response.rows);
};

const createDevolucion = async(req, res) => {
    const { descripcion, estado } = req.body;
    const response = await pool.query("INSERT INTO devolucion (descripcion, estado) VALUES ($1, $2)", [descripcion, estado]);
    res.json({
        message: "Se ha agregado correctamente la devolución.",
        body: {
            user: { descripcion, estado }
        }
    });
};

/* Tener en cuenta que esta funcionalidad solo la manejara el administrador*/
const updateDevolucion = async(req, res) => {
    const iddevolucion = parseInt(req.params.id);
    const { estado } = req.body;
    const response = await pool.query("UPDATE devolucion SET estado = $1 WHERE iddevolucion = $2", [estado, iddevolucion]);
    res.json("Se ha actualizado correctamente la devolución.");
};

/* Tener en cuenta que esta funcionalidad ocurrira solo si el comprador decide quedarse con la herramienta.*/
const deleteDevolucion = async(req, res) => {
    const iddevolucion = parseInt(req.params.id);
    const { estado } = req.body;
    const response = await pool.query("UPDATE devolucion SET estado = $1 WHERE iddevolucion = $2", [estado, iddevolucion]);
    res.json("Se ha eliminado correctamente la devolución.");
};

module.exports = {
    getDevolucion,
    getDevolucionById,
    createDevolucion,
    updateDevolucion,
    deleteDevolucion
};