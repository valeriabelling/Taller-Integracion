const { Router } = require("express");
const router = Router();

const {
  getHerr,
  getHerrById,
  createHerr,
  updateHerr,
  deleteHerr
} = require("../controllers/herramientas.controller");

const {
  getHerr,
  getHerrById,
  createHerr,
  updateHerr,
  deleteHerr
} = require("../controllers/usuario.controller");

router.get("/herramienta", getHerr);
router.get("/herramienta/:id", getHerrById);
router.post("/nueva-herramienta", createHerr);
router.put("/herramienta/:id", updateHerr);
router.delete("/herramienta/:id", deleteHerr);

router.get("/usuario", getHerr);
router.get("/usuario/:id", getHerrById);
router.post("/nuevo-usuario", createHerr);
router.put("/usuario/:id", updateHerr);
router.delete("/usuario/:id", deleteHerr);

module.exports = router;
