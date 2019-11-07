const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "",
    port: "5432"
});

const getEnvio = async(req, res) => {
    const response = await pool.query("SELECT * FROM Envio ORDER BY idEnvio ASC");
    res.status(200).json(response.rows);
};

const getEnvioById = async(req, res) => {
    const idEnvio = parseInt(req.params.idEnvio);
    const response = await pool.query("SELECT * FROM Envio WHERE idEnvio = $1", [
        idEnvio
    ]);
    res.json(response.rows);
};

const createEnvio = async(req, res) => {
    const {
        idDomicilio,
        codigoTraking,
        estado,
        fechaEnvio,
        fechaLlegada
    } = req.body;
    const response = await pool.query(
        "INSERT INTO envio (idDomicilio, codigoTraking, estado, fechaEnvio, fechaLlegada) VALUES ($1, $2, $3, $4, $5)", [idDomicilio, codigoTraking, estado, fechaEnvio, fechaLlegada]
    );
    res.json({
        message: "Se ha agregado correctamente el envío.",
        body: {
            user: {
                idDomicilio,
                codigoTraking,
                estado,
                fechaEnvio,
                fechaLlegada
            }
        }
    });
};

/* Tener en cuenta que esta funcionalidad estara conectada con el correo, para que la actualice automaticamente*/
const updateEnvio = async(req, res) => {
    const idEnvio = parseInt(req.params.idEnvio);
    const { estado, fechaLlegada } = req.body;

    const response = await pool.query(
        "UPDATE Envio SET estado = $1, fechaLlegada = $2 WHERE idEnvio = $3", [estado, fechaLlegada, idEnvio]
    );
    res.json("Se ha actualizado correctamente el envío.");
};

/* Tener en cuenta que esta funcionalidad solo ocurre cuando la direccion es incorrecta*/
const deleteEnvio = async(req, res) => {
    const idEnvio = parseInt(req.params.idEnvio);
    const { estado } = req.body;

    const response = await pool.query(
        "UPDATE Envio SET estado = $1 WHERE idEnvio = $2", [estado, idEnvio]
    );

    res.json(`Se ha eliminado correctamente el envío.`);
};

module.exports = {
    getEnvio,
    getEnvioById,
    createEnvio,
    updateEnvio,
    deleteEnvio
};