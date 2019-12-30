const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "38387446",
    port: "5432"
});

const getDetalle = async(req, res) => {
    const response = await pool.query("SELECT * FROM detalle ORDER BY iddetalle ASC");
    res.status(200).json(response.rows);
};

const getDetalleById = async(req, res) => {
    const iddetalle = parseInt(req.params.id);
    const response = await pool.query("SELECT * FROM detalle WHERE iddetalle = $1", [iddetalle]);
    res.json(response.rows);
};

const createDetalle = async(req, res) => {
    const { idherramienta, idventa, iddevolucion, cantidad } = req.body;
    const response = await pool.query("INSERT INTO devolucion (idherramienta, idventa, iddevolucion, cantidad) VALUES ($1, $2, $3, $4)", [idherramienta, idventa, iddevolucion, cantidad]);
    res.json({
        message: "Se ha agregado correctamente el detalle.",
        body: {
            user: { idherramienta, idventa, iddevolucion, cantidad }
        }
    });
};

/* No es necesaria

const updateDetalle = async (req, res) => {
  const idDetalle = parseInt(req.params.idDetalle);
  const { cantidad } = req.body;

  const response = await pool.query(
    "UPDATE Detalle SET cantidad = $1 WHERE idDetalle = $2",
    [cantidad, idDetalle]
  );
  res.json("Se ha actualizado correctamente el detalle.");
};
*/

/* Tener en cuenta que esta funcionalidad ocurrira solo si se elimina una venta.*/
const deleteDetalle = async(req, res) => {
    const iddetalle = parseInt(req.params.id);
    const response = await pool.query("DELETE detalle WHERE iddetalle = $1", [iddetalle]);
    res.json("Se ha eliminado correctamente el detalle.");
};

module.exports = {
    getDetalle,
    getDetalleById,
    createDetalle,
    deleteDetalle
};