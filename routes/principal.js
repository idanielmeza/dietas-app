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

router.get('/agregar-alimentos', [
    // validarJWT
    // ,validarCampos
],(req, res) => {
    return res.render('alimentos');
});
router.get('/singup', [
    // validarJWT
    // ,validarCampos
],(req, res) => {
    return res.render('singup');
});

module.exports = router;