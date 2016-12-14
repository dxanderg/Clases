document.addEventListener("keydown", dibujarTeclado);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var x = aleatorio(0, 420);
var y = aleatorio(0, 420);

var fondo = {
	url: "tile.png",
	cargaOK: false
};

var vaca = {
	url: "vaca.png",
	cargaOK: false
};

var cerdo = {
	url: "cerdo.png",
	cargaOK: false
};

var pollo = {
	url: "pollo.png",
	cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}
function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();
}
function cargarPollos()
{
	pollo.cargaOK = true;
	dibujar();
}
function cargarCerdos()
{
	cerdo.cargaOK = true;
	dibujar();
}

function dibujar()
{
	if(fondo.cargaOK == true)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.cargaOK == true)
	{
		//var cantidad = aleatorio(1,50);
		//for(i=0; i<cantidad; i++)
		{
			var xx = aleatorio(1, 7);
			var yy = aleatorio(1, 7);
			xx = xx * 60;
			yy = yy * 60;
			papel.drawImage(vaca.imagen, xx, yy);
		}
	}
	if(cerdo.cargaOK == true)
	{
		papel.drawImage(cerdo.imagen, x, y);
	}
	if(pollo.cargaOK == true)
	{
		papel.drawImage(pollo.imagen, x, y);
	}
}

function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}

function dibujarTeclado(ev)
{
	var movimiento = 10;
	switch(ev.keyCode)
	{
		case teclas.UP:
			papel.drawImage(cerdo.imagen, x, y);
			y = y - movimiento;
		break;
		case teclas.DOWN:
			papel.drawImage(cerdo.imagen, x, y);
			y = y + movimiento;
		break;
		case teclas.LEFT:
			papel.drawImage(cerdo.imagen, x, y);
			x = x - movimiento;
		break;
		case teclas.RIGHT:
			papel.drawImage(cerdo.imagen, x, y);
			x = x + movimiento;	
		break;
	}
}