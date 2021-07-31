const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const validarJWT = async(req,res,next)=>{

    const token = req.header('user-token');

    if(!token){
        return res.redirect('/login')
    }

    try {
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        
        const usuario = await Usuario.findById(uid);

        if(!usuario){
            return res.status(401).json({msg: 'Token no valido - Usuario no existe'})
        }

        //Verificar si el uid esta activo 
        if(!usuario.estado){
            return res.status(401).json({msg: 'Token no valido - Usuario desactivado'})
        }

        req.usuario = usuario;

        next();
    } catch (error) {
        console.log(error)
        return res.redirect('/login')

    }

}

module.exports ={
    validarJWT
}