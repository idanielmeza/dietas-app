const Alimento = require('../models/alimento');

const buscarAlimento = async(req, res)=>{

    const {busqueda} = req.body;

    const regex = new RegExp(busqueda,'i');

    const alimentos = await Alimento.find({nombre:regex});

    res.status(200).json({
        resultados:[alimentos]
    });

}

module.exports ={

    buscarAlimento

}