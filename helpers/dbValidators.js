const Alimento = require('../models/alimento');
const Usuario = require('../models/usuario');

const existeAlimento = async(id)=>{

    const existe = await Alimento.findById(id);

    if(!existe){
        throw new Error('El alimento no existe')
    }

}

const emailExiste = async(correo)=>{
    const existe = await Usuario.findOne({correo});
    if(existe){
        throw new Error (`El correo ${correo} ya esta en uso`);
    }
}

module.exports ={

    existeAlimento,
    emailExiste

}