const {Schema,model} = require('mongoose');

const alimentoSchema = new Schema({

    nombre:{
        type: String,
        required: true,
    },
    proteina:{
        type: Number,
        required: true
    },
    carbohidrato:{
        type: Number,
        required: true
    },
    grasa:{
        type: Number,
        required: true
    },
    gramo:{
        type: Number,
        required: true
    },
    img:{
        type: String
    },
    ml:{
        type: Boolean,
        default: false
    }

});

alimentoSchema.methods.toJSON = function(){
    const { __v,...data } = this.toObject();    
    return data;
}

module.exports = model('Alimento' , alimentoSchema);