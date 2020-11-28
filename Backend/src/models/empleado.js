const { Schema, model } = require("mongoose");

const empleadoSchema = new Schema({
    cedula: {
        type: Number,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,

    },
    contraseña: {
        type: Number,
        required: true,
    },
    salario: {
        type: Number,
        required: true,

    },
    cargo: {
        type: String,
        required: true,

    },
    passaporte: {
        type: Number,
        required: true,
        unique: true,
    },
    pais: {
        type: String,
        required: true,

    },
    experiencia: {
        type: Number,
        required: true,
    }
});

module.exports = model('Empleado', empleadoSchema);