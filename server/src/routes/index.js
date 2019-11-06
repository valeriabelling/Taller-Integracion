const { Router } = require('express');
const router = Router();

const { getHerr, getHerrById, createHerr, updateHerr, deleteHerr } = require('../controllers/herramientas.controller');

router.get('/herramienta', getHerr);
router.get('/herramienta/:id', getHerrById);
router.post('/nueva-herramienta', createHerr);
router.put('/herramienta/:id', updateHerr)
router.delete('/herramienta/:id', deleteHerr);

module.exports = router;