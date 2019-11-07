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
} = require("../controllers/usuario.controller");

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
  updateComen,
  deleteComen
} = require("../controllers/envios.controller");

router.get("/comentario", getComen);
router.get("/comentario/:id", getComenById);
router.post("/nuevo-comentario", createComen);
router.put("/ecomentario/:id", updateComen);
router.delete("/comentario/:id", deleteComen);

const {
  getVentas,
  getVentasById,
  createVentas,
  updateVentas,
  deleteVentas
} = require("../controllers/envios.controller");

router.get("/venta", getVentas);
router.get("/venta/:id", getVentasById);
router.post("/nueva-venta", createVentas);
router.put("/venta/:id", updateVentas);
router.delete("/venta/:id", deleteVentas);

module.exports = router;
