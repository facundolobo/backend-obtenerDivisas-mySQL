const { Router } = require('express');
const { obtenerDivisas } = require('../controllers/divisas');

const router = Router();

router.get('/',[
] ,obtenerDivisas );

module.exports = router;