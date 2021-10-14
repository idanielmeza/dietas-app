const {Schema,model} = require('mongoose');

const usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [true,'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true,'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true,'El password es obligatorio'],
    },

    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    edad:{
        type: Number
    },
    estatura:{
        type: Number
    },
    peso:{
        type: Number
    },
    sexo:{
        type: String
    },
    actividad:{
        type: Number
    },
    objetivo:{
        type: String
    },
    comida:{
        type: String,
    }

});

usuarioSchema.methods.toJSON = function(){
    const { __v,password,_id,...usuario } = this.toObject();
    usuario['uid'] = _id;
    
    return usuario;
}

module.exports = model('Usuario' , usuarioSchema);