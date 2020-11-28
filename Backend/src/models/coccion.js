const { Schema, model } = require("mongoose");

const coccionSchema = new Schema({
    estado: {
        type: String,
        required: true
    },
    horno: {
        type: Number,
        required: true
    },
    finicio: {
        type: Date,
        required: true
    },
    ffin: {
        type: Date,
        required: true
    }
});

module.exports = model('Coccion', coccionSchema);