const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "38387446",
    port: "5432"
});

const getVentas = async(req, res) => {
    const response = await pool.query("SELECT * FROM Venta ORDER BY idVenta ASC");
    res.status(200).json(response.rows);
};

const getVentasById = async(req, res) => {
    const idVenta = parseInt(req.params.idVenta);
    const response = await pool.query("SELECT * FROM Venta WHERE idVenta = $1", [idVenta]);
    res.json(response.rows);
};

const createVentas = async(req, res) => {
    const { idVendedor, idComprador, idEnvio, fecha, monto, estado, codigoPago, detallePago } = req.body;
    const response = await pool.query("INSERT INTO Venta (idVendedor, idComprador, idEnvio, fecha, monto, estado, codigoPago, detallePago) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [idVendedor, idComprador, idEnvio, fecha, monto, estado, codigoPago, detallePago]);
    res.json({
        message: "Se ha realizado correctamente la venta.",
        body: {
            user: { dVendedor, idComprador, idEnvio, fecha, monto, estado, codigoPago, detallePago }
        }
    });
};

/* Tener en cuenta que esta funcionalidad ocurrira cuando se abone la venta*/
const updateVentas = async(req, res) => {
    const idVenta = parseInt(req.params.idVenta);
    const { estado, detallePago } = req.body;
    const response = await pool.query("UPDATE Venta SET estado = $1, detallePago = $2 WHERE idVenta = $3", [estado, detallePago, idVenta]);
    res.json("Se ha actualizado correctamente la venta.");
};

/* Tener en cuenta que esta funcionalidad ocurrira despues de 48hs de no abonar la venta*/
const deleteVentas = async(req, res) => {
    const idVenta = parseInt(req.params.idVenta);
    const { estado } = req.body;
    const response = await pool.query("UPDATE Venta SET estado = $1 WHERE idVenta = $2", [estado, idVenta]);
    res.json("Se ha eliminado correctamente la venta.");
};

module.exports = {
    getVentas,
    getVentasById,
    createVentas,
    updateVentas,
    deleteVentas
};