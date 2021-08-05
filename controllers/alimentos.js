const Alimento = require('../models/alimento');

const crearAlimento = async(req,res)=>{

    const {nombre,proteina,carbohidrato,grasa,gramo, ml} = req.body;

    const existe = await Alimento.find({nombre});

    console.log(existe);

    if(existe.length != 0){
        return res.json({msg:'El alimento ya existe'});
    }

    const alimento = new Alimento({nombre,proteina,carbohidrato,grasa,gramo,ml});

    await alimento.save();

    res.status(201).json(alimento)

}

const obtenerAlimentos = async(req,res)=>{

    const alimentos = await Alimento.find();

    res.json(alimentos);

}

const obtenerAlimentoID = async(req,res)=>{

    const id = req.params.id;

    const alimento = await Alimento.findById(id);

    if(!alimento){
        return res.status(400).json({msg:`No existe el id ${id}`});
    }

    res.json(alimento);

}

const actualizarAlimento = async(req,res)=>{

    const id = req.params.id;

    const {nombre,proteina,carbohidrato,grasa,gramo} = req.body;

    const alimento = await Alimento.findByIdAndUpdate(id,{nombre,proteina,carbohidrato,grasa,gramo}, {new:true})

    res.json(alimento);

}

module.exports = {

    crearAlimento,
    obtenerAlimentos,
    actualizarAlimento,
    obtenerAlimentoID

}