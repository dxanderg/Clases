console.log("Iniciando Server Node");

var arDrone = require("ar-drone");

var express = require("express");
var web = express();
var servidor;


servidor = web.listen(8080, function ()
{
	console.log("Servidor Up!");
});

web.get("/", function (req, res)
{
	console.log("Raiz")
	res.sendfile("opciones.html");
});

web.get("/despegar", function (req, res)
{
	console.log("Despegando")
	res.sendfile("opciones.html");
});

web.get("/aterrizar", function (req, res)
{
	console.log("Aterizando")
	res.sendfile("opciones.html");
});