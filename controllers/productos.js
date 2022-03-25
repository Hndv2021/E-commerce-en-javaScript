//CONTROLADORES

const Producto = require("../models/productos");

const controller = {
  raiz: async function (req, res) {
    const productosDeDB = await Producto.find({ });

    return res.render("productos", {
      listado: productosDeDB,
    });
  },

  crear: async function (req, res) {
    return res.render("productos-crear");
  },

  guardar: async function (req, res) {
    const productoGuardado = await Producto.create({
      nombre: req.body.nombre,
      precio: req.body.precio,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion,
      imagen: req.file.filename,
      colores: ["Blanco", "Celeste", "Amarillo"],
    });
    console.log(productoGuardado);
    return res.redirect("/productos");
  },

  detalle: async function (req, res) {
    const idProducto = req.params.id;
    const productoDeDB = await Producto.findById(idProducto);
    return res.render("productos-detalle", { elProducto: productoDeDB });
  },

  borrar: async function (req, res) {
    const idProducto = req.params.id;
    const productoBorrado = await Producto.findOneAndDelete(idProducto, {});
    console.log(productoBorrado);
    return res.redirect("/productos");
  },

  editar: async function (req, res) {
    const idProducto = req.params.id;
    const productoEditado = await Producto.findOneAndUpdate(idProducto, {
      nombre: req.body.nombre,
      precio: req.body.precio,
    });
    return res.redirect("/productos");
  },

 /*  carga: async function (req, res) {
    const cargaPagina = await user;
  }, */
};

module.exports = controller;
