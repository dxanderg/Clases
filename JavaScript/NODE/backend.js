console.log("Starting Server...");

var basededatos = {
	usuario: "Diego",
	password: "money"
};

var express = require("express");
var parcero = require("body-parser");
var web = express();
web.use(parcero.urlencoded({extended: true}));
var servidor;

servidor = web.listen(8080, function () {
	console.log("Server Up!");
});

web.get("/", function (req, res){
	res.sendfile("formulario.html");
});

web.post("/entrar", function (req, res){
	if (req.body.usuario == basededatos.usuario && req.body.clave == basededatos.password)
	{
		res.send("Bien. Ingresastes!!");
	}
	else
	{
		res.send("Perdistes...")
	}
});





/*Prueba de URL Amigable*/
// web.get("/test", function (req, res){
// 	res.send("Tu avion es el " + req.query.avion + "y tu edad es " + req.query.edad);
// 	//res.send("Good Work!");
// });