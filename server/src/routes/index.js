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
  updateEvio,
  deleteEnvio
} = require("../controllers/envios.controller");

router.get("/envio", getEnvio);
router.get("/envio/:id", getEnvioById);
router.post("/nuevo-envio", createEnvio);
router.put("/envio/:id", updateEnvio);
router.delete("/envio/:id", deleteEnvio);

module.exports = router;
