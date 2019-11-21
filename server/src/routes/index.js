const { Router } = require("express");
const router = Router();

const {
    getHerr,
    getHerrById,
    createHerr,
    updateHerr,
    deleteHerr
} = require("../controllers/herramientas.controller");

router.get("/herramienta", getHerr);
router.get("/herramienta/:id", getHerrById);
router.post("/nueva-herramienta", createHerr);
router.put("/herramienta/:id", updateHerr);
router.delete("/herramienta/:id", deleteHerr);

const {
    getUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers
} = require("../controllers/usuarios.controllers");

router.get("/usuario", getUsers);
router.get("/usuario/:id", getUsersById);
router.post("/nuevo-usuario", createUsers);
router.put("/usuario/:id", updateUsers);
router.delete("/usuario/:id", deleteUsers);

const {
    getEnvio,
    getEnvioById,
    createEnvio,
    updateEnvio,
    deleteEnvio
} = require("../controllers/envios.controller");

router.get("/envio", getEnvio);
router.get("/envio/:id", getEnvioById);
router.post("/nuevo-envio", createEnvio);
router.put("/envio/:id", updateEnvio);
router.delete("/envio/:id", deleteEnvio);

const {
    getComen,
    getComenById,
    createComen,
    deleteComen
} = require("../controllers/comentarios.controller");

router.get("/comentario", getComen);
router.get("/comentario/:id", getComenById);
router.post("/nuevo-comentario", createComen);
router.delete("/comentario/:id", deleteComen);

const {
    getVentas,
    getVentasById,
    createVentas,
    updateVentas,
    deleteVentas
} = require("../controllers/ventas.controller");

router.get("/venta", getVentas);
router.get("/venta/:id", getVentasById);
router.post("/nueva-venta", createVentas);
router.put("/venta/:id", updateVentas);
router.delete("/venta/:id", deleteVentas);

const {
    getDevolucion,
    getDevolucionById,
    createDevolucion,
    updateDevolucion,
    deleteDevolucion
} = require("../controllers/devolucion.controller");

router.get("/devolucion", getDevolucion);
router.get("/devolucion/:id", getDevolucionById);
router.post("/nueva-devolucion", createDevolucion);
router.put("/devolucion/:id", updateDevolucion);
router.delete("/devolucion/:id", deleteDevolucion);

const {
    getDetalle,
    getDetalleById,
    createDetalle,
    deleteDetalle
} = require("../controllers/detalles.controller");

router.get("/detalle", getDetalle);
router.get("/detalle/:id", getDetalleById);
router.post("/nuevo-detalle", createDetalle);
router.delete("/detalle/:id", deleteDetalle);

const {
    getMarcas,
    getMarcasById,
    createMarcas,
    updateMarcas,
    deleteMarcas
} = require('../controllers/marcas.controller');

router.get('/marca', getMarcas);
router.get('/marca/:id', getMarcasById);
router.post('/nueva-marca', createMarcas);
router.put('/marca/:id', updateMarcas);
router.delete('/marca/:id', deleteMarcas);

const {
    getPreg,
    getPregById,
    createPreg,
    deletePreg
} = require('../controllers/preguntas.controller');

router.get('/pregunta', getPreg);
router.get('/pregunta/:id', getPregById);
router.post('/nueva-pregunta', createPreg);
router.delete('/pregunta/:id', deletePreg);

const {
    getDom,
    getDomById,
    createDom,
    updateDom,
    deleteDom
} = require('../controllers/domicilio.controller');

router.get('/domicilio', getDom);
router.get('/domicilio/:id', getDomById);
router.post('/nuevo-domicilio', createDom);
router.put('/domicilio/:id', updateDom);
router.delete('/domicilio/:id', deleteDom);

module.exports = router;