const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const acutalizarUsuario = async(req, res)=>{

    const {_id} = req.usuario;

    const {edad,estatura,peso,sexo,actividad,objetivo} = req.body;

    Number(edad)
    Number(estatura)
    Number(peso)
    Number(actividad)

    const usuario = await Usuario.findByIdAndUpdate(_id,{edad,estatura,peso,sexo,actividad,objetivo});

    res.status(201).json(usuario);
    
}

const obtenerUsuario = (req, res)=>{

    res.json(req.usuario);

}


const usuariosPost = async(req,res)=>{
    
    const {nombre,correo,password} = req.body;

    const usuario = new Usuario({nombre,correo,password});

    //Encrypter password
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en base de datos
    await usuario.save();

    res.status(201).json({
        usuario
    });
};

const actualizarComida = async(req, res)=>{

    const {_id} = req.usuario;

    const {comida} = req.body;

    const usuario = await Usuario.findByIdAndUpdate(_id,{comida: JSON.stringify(comida)});

    res.status(201).json(usuario);

}

module.exports={

    acutalizarUsuario,
    obtenerUsuario,
    usuariosPost,
    actualizarComida

}