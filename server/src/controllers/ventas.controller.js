const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "38387446",
    port: "5432"
});

const getVentas = async(req, res) => {
    const response = await pool.query("SELECT * FROM venta ORDER BY idventa ASC");
    res.status(200).json(response.rows);
};

const getVentasById = async(req, res) => {
    const idventa = parseInt(req.params.id);
    const response = await pool.query("SELECT * FROM venta WHERE idventa = $1", [idventa]);
    res.json(response.rows);
};

const createVentas = async(req, res) => {
    const { idvendedor, idcomprador, idenvio, fecha, monto, estado, codigopago, detallepago } = req.body;
    const response = await pool.query("INSERT INTO venta (idvendedor, idcomprador, idenvio, fecha, monto, estado, codigopago, detallepago) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [idvendedor, idcomprador, idenvio, fecha, monto, estado, codigopago, detallepago]);
    res.json({
        message: "Se ha realizado correctamente la venta.",
        body: {
            user: { idvendedor, idcomprador, idenvio, fecha, monto, estado, codigopago, detallepago }
        }
    });
};

/* Tener en cuenta que esta funcionalidad ocurrira cuando se abone la venta*/
const updateVentas = async(req, res) => {
    const idventa = parseInt(req.params.id);
    const { estado, detallepago } = req.body;
    const response = await pool.query("UPDATE venta SET estado = $1, detallepago = $2 WHERE idventa = $3", [estado, detallepago, idventa]);
    res.json("Se ha actualizado correctamente la venta.");
};

/* Tener en cuenta que esta funcionalidad ocurrira despues de 48hs de no abonar la venta*/
const deleteVentas = async(req, res) => {
    const idventa = parseInt(req.params.id);
    const { estado } = req.body;
    const response = await pool.query("UPDATE venta SET estado = $1 WHERE idventa = $2", [estado, idventa]);
    res.json("Se ha eliminado correctamente la venta.");
};

module.exports = {
    getVentas,
    getVentasById,
    createVentas,
    updateVentas,
    deleteVentas
};