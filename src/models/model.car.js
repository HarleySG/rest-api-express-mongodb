const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    marca: String,
    modelo: Number,
    precio: Number,
});

module.exports = mongoose.model('car', carSchema);