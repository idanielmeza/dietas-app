const {Router} = require('express');
const {buscarAlimento} = require('../controllers/search')

const router = Router();

router.post('/', buscarAlimento);

module.exports = router;