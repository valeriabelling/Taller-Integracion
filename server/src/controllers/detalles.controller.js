const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "38387446",
    port: "5432"
});

const getDetalle = async(req, res) => {
    const response = await pool.query(
        "SELECT * FROM Detalle ORDER BY idDetalle ASC"
    );
    res.status(200).json(response.rows);
};

const getDetalleById = async(req, res) => {
    const idDetalle = parseInt(req.params.idDetalle);
    const response = await pool.query(
        "SELECT * FROM Detalle WHERE idDetalle = $1", [idDetalle]
    );
    res.json(response.rows);
};

const createDetalle = async(req, res) => {
    const {
        idHerramienta,
        idVenta,
        idDevolucion,
        cantidad
    } = req.body;
    const response = await pool.query(
        "INSERT INTO Devolucion (idHerramienta, idVenta, idDevolucion, cantidad) VALUES ($1, $2, $3, $4)", [idHerramienta, idVenta, idDevolucion, cantidad]
    );
    res.json({
        message: "Se ha creado correctamente el detalle.",
        body: {
            user: {
                idHerramienta,
                idVenta,
                idDevolucion,
                cantidad
            }
        }
    });
};

const updateDetalle = async(req, res) => {
    const idDetalle = parseInt(req.params.idDetalle);
    const { cantidad } = req.body;

    const response = await pool.query(
        "UPDATE Detalle SET cantidad = $1 WHERE idDetalle = $2", [cantidad]
    );
    res.json("Se ha actualizado correctamente la cantidad del detalle.");
};

const deleteDetalle = async(req, res) => {
    const idDetalle = parseInt(req.params.idDetalle);

    const response = await pool.query(
        "DELETE Detalle WHERE idDetalle = $1", [idDetalle]
    );

    res.json(`El detalle ha sido eliminado correctamente.`);
};

module.exports = {
    getDetalle,
    getDetalleById,
    createDetalle,
    updateDetalle,
    deleteDetalle
};