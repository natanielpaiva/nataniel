var mongoose = require('mongoose');

var ExemploSchema = new mongoose.Schema({
  exemplo:String,
  exemploNumero:Number
});

module.exports = mongoose.model('Exemplo', ExemploSchema);
