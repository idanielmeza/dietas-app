const {Router} = require('express');
const { check } = require('express-validator');
const { crearAlimento, obtenerAlimentos , actualizarAlimento, obtenerAlimentoID} = require('../controllers/alimentos');
const {validarCampos} = require('../middlewares/validar-campos');
const {existeAlimento} = require('../helpers/dbValidators');

const router = Router();

router.post('/', [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('proteina','La proteina es obligatorio').not().isEmpty(),
    check('carbohidrato','Los carbohidratos son obligatorio').not().isEmpty(),
    check('grasa','Las grasas son obligatorio').not().isEmpty()
    ,validarCampos
], crearAlimento);

router.get('/', obtenerAlimentos)

router.get('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeAlimento),
    validarCampos
] ,obtenerAlimentoID)

router.put('/:id',[
    check('id','No es un alimento valido').isMongoId(),
    check('id').custom(existeAlimento),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('proteina','La proteina es obligatorio').not().isEmpty(),
    check('carbohidrato','Los carbohidratos son obligatorio').not().isEmpty(),
    check('grasa','Las grasas son obligatorio').not().isEmpty()
    ,validarCampos
] ,actualizarAlimento);


module.exports = router;