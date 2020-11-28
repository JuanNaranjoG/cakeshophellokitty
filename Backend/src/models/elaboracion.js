const { Schema, model } = require("mongoose");

const elaboracionSchema = new Schema({
    decorador: {
        type: String,
        required: true,
    },

    finicio: {
        type: Date,
        required: true
    },
    ffin: {
        type: Date,
        required: true
    },
    peso: {
        type: String,
        required: true,
    }
});

module.exports = model('Elaboracion', elaboracionSchema);