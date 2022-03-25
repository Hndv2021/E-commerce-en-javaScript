//BASE DE DATOS

const mongoose = require("mongoose");

const schemaProducto = new mongoose.Schema({
  id: Number,
  nombre: String,
  precio: Number,
  categoria: String,
  imagen: String,
  descripcion: String,
});

const modeloProducto = mongoose.model("productos", schemaProducto);

module.exports = modeloProducto;
