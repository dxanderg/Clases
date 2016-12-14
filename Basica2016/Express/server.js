var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, respuesta)
{
	respuesta.send("Este es el <strong>home</strong>");
}

function cursos(peticion, respuesta)
{
	respuesta.send("Estos son los <strong>Cursos</strong>");
}

aplicacion.listen(8080);