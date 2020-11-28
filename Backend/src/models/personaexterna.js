const {Schema,model} = require("mongoose");

const personaexternaSchema = new Schema ({
cedula:{
    type:Number,
    required:true,
    unique:true,
},
nombre:{
    type:String,
    required:true,

},
direccion:{
    type:String,
    required:true,
   
},
fecha: {
    type: Date,
    required: true
}
});

module.exports = model('Personaexterna',personaexternaSchema);