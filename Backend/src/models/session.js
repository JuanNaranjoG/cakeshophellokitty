const { Schema, model } = require("mongoose");

const sessionSchema = new Schema({
    email: String,
    password: String
});

module.exports = model('session', sessionSchema);