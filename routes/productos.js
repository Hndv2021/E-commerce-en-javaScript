const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const router = express.Router();

//traigo el controlador
const controller = require("../controllers/productos");

//middleware
const mdTest = require("../middlewares/mdTest");

const storageConfiguration = multer.diskStorage({
  destination: function (request, file, callback) {
    if (
      !fs.existsSync(
        path.join(__dirname, "../public/uploads/" + request.body.categoria)
      )
    ) {
      fs.mkdirSync(
        path.join(__dirname, "../public/uploads/" + request.body.categoria)
      );
    }
    callback(null, "public/uploads/" + request.body.categoria);
  },
  filename: function (request, file, callback) {
    callback(null, Date.now() + "_" + file.originalname);
  },
});




const uploadFile = multer({ storage: storageConfiguration });
// http://localhost:3000/productos/
router.get("/", mdTest, controller.raiz);

// http://localhost:3000/productos/crear
router.get("/crear", controller.crear);

// http://localhost:3000/productos/detalle/NNN
router.get("/detalle/:id", controller.detalle);

// http://localhost:3000/productos/guardar
router.post("/guardar", uploadFile.single("imagen"), controller.guardar);

// http://localhost:3000/productos/borrar/NNN
router.post("/borrar/:id", controller.borrar);

// http://localhost:3000/productos/editar/NNN
router.post("/editar/:id", controller.editar);

// http://localhost:3000/productos/editar/NNN
router.post("/editar/:id", controller.editar);

module.exports = router;
