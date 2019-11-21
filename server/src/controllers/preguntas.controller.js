const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "38387446",
    port: "5432"
});

const getPreg = async(req, res) => {
    const response = await pool.query("SELECT * FROM pregunta ORDER BY idpregunta ASC");
    res.status(200).json(response.rows);
};

const getPregById = async(req, res) => {
    const idpregunta = parseInt(req.params.idpregunta);
    const response = await pool.query("SELECT * FROM pregunta WHERE idpregunta = $1", [idpregunta]);
    res.json(response.rows);
};

const createPreg = async(req, res) => {
    const { idcomprador, idvendedor, idherramienta, pregunta, respuesta } = req.body;
    const response = await pool.query("INSERT INTO pregunta (idcomprador, idvendedor, idherramienta, pregunta, respuesta) VALUES ($1, $2, $3, $4, $5)", [idcomprador, idvendedor, idherramienta, pregunta, respuesta]);
    res.json({
        message: "Se ha agregado correctamente la pregunta.",
        body: {
            user: { idcomprador, idvendedor, idherramienta, pregunta, respuesta }
        }
    });
};

const deletePreg = async(req, res) => {
    const idpregunta = parseInt(req.params.idpregunta);
    const response = await pool.query("DELETE pregunta WHERE idpregunta = $1", [idpregunta]);
    res.json("Se ha sido eliminado correctamente la pregunta.");
};

module.exports = {
    getPreg,
    getPregById,
    createPreg,
    deletePreg
};