const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "38387446",
    port: "5432"
});

const getComen = async(req, res) => {
    const response = await pool.query("SELECT * FROM comentario ORDER BY idcomentario ASC");
    res.status(200).json(response.rows);
};

const getComenById = async(req, res) => {
    const idComentario = parseInt(req.params.id);
    const response = await pool.query("SELECT * FROM comentario WHERE idcomentario = $1", [idComentario]);
    res.json(response.rows);
}

const createComen = async(req, res) => {
    const { iddetalle, descripcion, puntuacion } = req.body;
    const response = await pool.query("INSERT INTO comentario (iddetalle, descripcion, puntuacion) VALUES ($1, $2, $3)", [iddetalle, descripcion, puntuacion]);
    res.json({
        message: "Se ha agregado correctamente el comentario.",
        body: {
            user: { iddetalle, descripcion, puntuacion }
        }
    });
};

/* Tener en cuenta que esta funcionalidad ocurrira solo si el administrador cree que el comentario es inapropiado*/
const deleteComen = async(req, res) => {
    const idcomentario = parseInt(req.params.id);
    const response = await pool.query("DELETE * FROM comentario WHERE idcomentario = $1", [idcomentario]);
    res.json(`Se ha eliminado correctamente el comentario.`);
};

module.exports = {
    getComen,
    getComenById,
    createComen,
    deleteComen
};