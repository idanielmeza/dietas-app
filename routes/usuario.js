const {Router} = require('express');
const { acutalizarUsuario,obtenerUsuario,usuariosPost, actualizarComida } = require('../controllers/usuario');
const { validarCampos } = require('../middlewares/validar-campos');
const {validarJWT} = require('../middlewares/validar-jwt');
const {emailExiste} = require('../helpers/dbValidators');
const { check } = require('express-validator');

const router = Router();

router.put('/', validarJWT ,acutalizarUsuario);

router.put('/comida', validarJWT ,actualizarComida);

router.get('/', validarJWT , obtenerUsuario)

router.post('/', [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio y mayor de 6 caracteres').isLength({min: 6}),
    check('correo','El correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    validarCampos
],usuariosPost);


module.exports = router;