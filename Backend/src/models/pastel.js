const { Schema, model } = require("mongoose");

const pastelSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
});

module.exports = model('Pastel', pastelSchema);