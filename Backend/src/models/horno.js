const {Schema, model} = require("mongoose");

const hornoSchema = new Schema ({
    temperatura:{
        type:String,
        required:true
    },
    fecha:{
        type:Date,
        required:true
    }
});

module.exports = model('Horno', hornoSchema);