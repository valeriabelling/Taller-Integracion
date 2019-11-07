const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "taller",
    password: "38387446",
    port: "5432"
});

const getDom = async(req, res) => {
    const response = await pool.query(
        "SELECT * FROM domicilio ORDER BY iddomicilio ASC"
    );
    res.status(200).json(response.rows);
};

const getDomById = async(req, res) => {
    const iddomicilio = parseInt(req.params.iddomicilio);
    const response = await pool.query(
        "SELECT * FROM Usuario WHERE iddomicilio = $1", [iddomicilio]
    );
    res.json(response.rows);
};

const createDom = async(req, res) => {
    const {
        idusuario,
        cp,
        localidad,
        calle,
        numero,
        descripcion
    } = req.body;
    const response = await pool.query(
        "INSERT INTO iddomicilio (idusuario, cp, localidad, calle, numero, descripcion) VALUES ($1, $2, $3, $4, $5, $6)", [idusuario, cp, localidad, calle, numero, descripcion]
    );
    res.json({
        message: "Se ha agregado el domicilio correctamente.",
        body: {
            user: {
                idusuario,
                cp,
                localidad,
                calle,
                numero,
                descripcion
            }
        }
    });
};

const updateDom = async(req, res) => {
    const iddomicilio = parseInt(req.params.iddomicilio);
    const { cp, localidad, calle, numero, descripcion } = req.body;

    const response = await pool.query(
        "UPDATE domicilio SET cp = $1, localidad = $2, calle = $3, numero = $4, descripcion = $5 WHERE iddomicilio = $6", [cp, localidad, calle, numero, descripcion, iddomicilio]
    );
    res.json("Se ha actualizado correctamente el domicilio.");
};

const deleteDom = async(req, res) => {
    const iddomicilio = parseInt(req.params.iddomicilio);

    const response = await pool.query(
        "DELETE domicilio WHERE iddomicilio = $1", [iddomicilio]
    );

    res.json("Se ha eliminado correctamente el domicilio.");
};

module.exports = {
    getDom,
    getDomById,
    createDom,
    updateDom,
    deleteDom
};