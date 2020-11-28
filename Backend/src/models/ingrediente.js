const {Schema, model} = require("mongoose");

const ingredienteSchema = new Schema ({
    nombre:{
        type:String,
        required:true
    },
    medida:{
        type:String,
        required:true
    }
});

module.exports = model('Ingrediente', ingredienteSchema);