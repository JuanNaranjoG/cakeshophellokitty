const {Schema, model} = require("mongoose");

const empresaSchema = new Schema ({
    nit:{
        unique:true,
        type:Number,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    direccion:{
        unique:true,
        type:Number,
        required:true
    }
});

module.exports = model('Empresa', empresaSchema);