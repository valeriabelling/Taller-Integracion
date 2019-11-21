const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "38387446",
    port: "5432"
});

const getHerr = async(req, res) => {
    const response = await pool.query(
        "SELECT * FROM herramienta ORDER BY idherramienta ASC"
    );
    res.status(200).json(response.rows);
};

const getHerrById = async(req, res) => {
    const idherramienta = parseInt(req.params.idherramienta);
    const response = await pool.query(
        "SELECT * FROM herramienta WHERE idherramienta = $1", [idherramienta]
    );
    res.json(response.rows);
};

const createHerr = async(req, res) => {
    const {
        idmarca,
        nombre,
        categoria,
        precio,
        caracteristica,
        cantidad,
        estado
    } = req.body;
    const response = await pool.query(
        "INSERT INTO herramienta (idmarca, nombre, categoria, precio, caracteristica, cantidad, estado) VALUES ($1, $2, $3, $4, $5, $6, $7)", [idmarca, nombre, categoria, precio, caracteristica, cantidad, estado]
    );
    res.json({
        message: "Se ha agregado correctamente la herramienta",
        body: {
            user: {
                idmarca,
                nombre,
                categoria,
                precio,
                caracteristica,
                cantidad,
                estado
            }
        }
    });
};

const updateHerr = async(req, res) => {
    const idherramienta = parseInt(req.params.idherramienta);
    const { precio, caracteristica, cantidad } = req.body;

    const response = await pool.query(
        "UPDATE herramienta SET precio = $1, caracteristica = $2, cantidad = $3 WHERE idherramienta = $4", [precio, caracteristica, cantidad, idherramienta]
    );
    res.json("Se ha actualizado correctamente la herramienta");
};

const deleteHerr = async(req, res) => {
    const idherramienta = parseInt(req.params.idherramienta);
    const { estado } = req.body;

    const response = await pool.query(
        "UPDATE herramienta SET estado = $1 WHERE idherramienta = $2", [estado, idherramienta]
    );
    res.json("Se ha eliminado correctamente la herramienta.");
};

module.exports = {
    getHerr,
    getHerrById,
    createHerr,
    updateHerr,
    deleteHerr
};