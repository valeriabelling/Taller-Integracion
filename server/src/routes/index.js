const { Router } = require("express");
const router = Router();

const {
  getHerr,
  getHerrById,
  createHerr,
  updateHerr,
  deleteHerr
} = require("../controllers/herramientas.controller");

<<<<<<< HEAD
const {
  getUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers
} = require("../controllers/usuario.controller");

=======
>>>>>>> 631f2f23942d11480ddeaea5e0cbf457925c2d41
router.get("/herramienta", getHerr);
router.get("/herramienta/:id", getHerrById);
router.post("/nueva-herramienta", createHerr);
router.put("/herramienta/:id", updateHerr);
router.delete("/herramienta/:id", deleteHerr);

<<<<<<< HEAD
router.get("/usuario", getUsers);
router.get("/usuario/:id", getUsersById);
router.post("/nuevo-usuario", createUsers);
router.put("/usuario/:id", updateUsers);
router.delete("/usuario/:id", deleteUsers);

=======
>>>>>>> 631f2f23942d11480ddeaea5e0cbf457925c2d41
module.exports = router;
