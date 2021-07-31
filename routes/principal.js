const {Router} = require('express');
const {validarCampos} = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

router.get('/', [
    // validarJWT
    // ,validarCampos
],(req, res) => {
    return res.render('index');
});

module.exports = router;