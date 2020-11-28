const { Schema, model } = require("mongoose");

const ordenSchema = new Schema({
    pastel: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    fsolicitud: {
        type: Date,
        required: true
    },
    fentrega: {
        type: Date,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    empleado: {
        type: String,
        required: true
    },
    elaboracion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
});

module.exports = model('Orden', ordenSchema);