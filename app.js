const express = require("express");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const morgan = require("morgan");
/* const login = require("login"); */

//Levantando BD
mongoose.connect("mongodb://localhost:27017/LaBodeguita", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.listen(5000, function () {
  console.log("Servidor en Puerto 5000");
});


//Seteando Motor de Vistas
app.set("view engine", "ejs");


app.use(morgan("dev"));

//define la carpeta de archivos publicos
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/js"));

//Middlewares para procesar informacion via POST
app.use(express.urlencoded({ extended: false }));
/* app.use(express.json()); */

fs.writeFileSync("logs/prueba.txt", "esto es una prueba");

const users = fs.readFileSync("logs/users.json", "utf-8");
console.log(JSON.parse(users));
app.use(function (req, res, next) {
  console.log("Middlewares para procesar informacion");
  fs.appendFileSync("logs/login.txt", req.originalUrl + "\n");
  return next();
});

//arreglar el error 404
/* app.get("*", function (req, res) {
  res.send("ERROR 404 - no se encuantra la pagina");
}); */

//Seteando el routes de Productos
const rutasProductos = require("./routes/productos");


app.use("/productos", rutasProductos);


app.get("/acerca.ejs", function (req, res) {
  res.render("acerca");
});
app.get("/caracteristicas.ejs", function (req, res) {
  res.render("caracteristicas");
});
app.get("/compra.ejs", function (req, res) {
  res.render("compra");
});
app.get("/ConfirmacionPass.ejs", function (req, res) {
  res.render("ConfirmacionPass");
});

app.get("/preguntas.ejs", function (req, res) {
  res.render("preguntas");
});
app.get("/RecuperarPass.ejs", function (req, res) {
  res.render("RecuperarPass");
});
app.get("/Register.ejs", function (req, res) {
  res.render("Register");
});

app.get("/Signin.ejs", function (req, res) {
  res.render("Signin");
});

app.get("/tyc.ejs", function (req, res) {
  res.render("tyc");
});
app.get("/vinos-blancos.ejs", function (req, res) {
  res.render("vinos-blancos");
});
app.get("/vinos-tintos.ejs", function (req, res) {
  res.render("vinos-tintos");
});

app.get("/espumantes.ejs", function (req, res) {
  res.render("espumantes");
});

app.get("/productos-detalle.ejs", function (req, res) {
  res.render("productos-detalle");
});
app.get("/registroExitoso.ejs", function (req, res) {
  res.render("registroExitoso");
});
app.post("/Register.ejs", function (req, res) {
  res.render("Register");
});
app.get("/SignInbackup.ejs", function (req, res) {
  res.render("SignInbackup");
});
