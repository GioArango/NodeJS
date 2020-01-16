const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    name: { type: String, required: true }, //Obligatorio
    userName: String,
    email: String
});

module.exports = mongoose.model("user", userSchema); //Se exporta el modelo para que se pueda utilizar en express