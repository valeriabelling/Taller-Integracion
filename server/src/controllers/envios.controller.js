const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "38387446",
    port: "5432"
});

const getEnvio = async(req, res) => {
    const response = await pool.query("SELECT * FROM envio ORDER BY idenvio ASC");
    res.status(200).json(response.rows);
};

const getEnvioById = async(req, res) => {
    const idenvio = parseInt(req.params.id);
    const response = await pool.query("SELECT * FROM envio WHERE idenvio = $1", [idenvio]);
    res.json(response.rows);
};

const createEnvio = async(req, res) => {
    const { iddomicilio, codigotraking, estado, fechaenvio, fechallegada } = req.body;
    const response = await pool.query("INSERT INTO envio (iddomicilio, codigotraking, estado, fechaenvio, fechallegada) VALUES ($1, $2, $3, $4, $5)", [iddomicilio, codigotraking, estado, fechaenvio, fechallegada]);
    res.json({
        message: "Se ha agregado correctamente el envío.",
        body: {
            user: { iddomicilio, codigotraking, estado, fechaenvio, fechallegada }
        }
    });
};

/* Tener en cuenta que esta funcionalidad estara conectada con el correo, para que la actualice automaticamente*/
const updateEnvio = async(req, res) => {
    const idenvio = parseInt(req.params.id);
    const { estado, fechallegada } = req.body;
    const response = await pool.query("UPDATE envio SET estado = $1, fechallegada = $2 WHERE idenvio = $3", [estado, fechallegada, idenvio]);
    res.json("Se ha actualizado correctamente el envío.");
};

/* Tener en cuenta que esta funcionalidad solo ocurre cuando la direccion es incorrecta*/
const deleteEnvio = async(req, res) => {
    const idenvio = parseInt(req.params.id);
    const { estado } = req.body;
    const response = await pool.query("UPDATE envio SET estado = $1 WHERE idenvio = $2", [estado, idenvio]);
    res.json(`Se ha eliminado correctamente el envío.`);
};

module.exports = {
    getEnvio,
    getEnvioById,
    createEnvio,
    updateEnvio,
    deleteEnvio
};