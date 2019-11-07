const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "taller",
  password: "38387446",
  port: "5432"
});

const getVentas = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM Venta ORDER BY idVenta ASC"
  );
  res.status(200).json(response.rows);
};

const getVentasById = async (req, res) => {
  const idVenta = parseInt(req.params.idVenta);
  const response = await pool.query(
    "SELECT * FROM Venta WHERE idVenta = $1",
    [idVenta]
  );
  res.json(response.rows);
};

const createVentas = async (req, res) => {
  const {
    idVendedor,
    idComprador,
    idEnvio,
    fecha,
    monto,
    estado,
    codigoPago,
    detallePago
  } = req.body;
  const response = await pool.query(
    "INSERT INTO Venta (idVendedor, idComprador, idEnvio, fecha, monto, estado, codigoPago, detallePago) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [idVendedor, idComprador, idEnvio, fecha, monto, estado, codigoPago, detallePago]
  );
  res.json({
    message: "Venta realizada correctamente.",
    body: {
      user: {
        dVendedor,
    idComprador,
    idEnvio,
    fecha,
    monto,
    estado,
    codigoPago,
    detallePago
      }
    }
  });
};

const updateVentas = async (req, res) => {
  const idventa = parseInt(req.params.idVenta);
  const { estado } = req.body;

  const response = await pool.query(
    "UPDATE Venta SET estado = $1 WHERE idVenta = $2",
    [estado]
  );
  res.json("Se ha actualizado la venta correctamente.");
};

const deleteVentas = async (req, res) => {
  const idVenta = parseInt(req.params.idVenta);
  
    const response = await pool.query(
      "UPDATE Venta SET estado = $1 WHERE id = $2",
      [estado, idVenta]
    );
  
  res.json(`La venta se ha eliminado correctamente.`);
};

module.exports = {
  getVentas,
  getVentasById,
  createVentas,
  updateVentas,
  deleteVentas
};
