var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";


class pakiman
{
	constructor(n, v, a)
	{
		this.imagen = new Image();
		this.nombre = n;
		this.vida = v;
		this.ataque = a;

		this.imagen.src = imagenes[this.nombre];
	}
	hablar()
	{
		alert(this.nombre);
	}
	mostrar()
	{
		document.body.appendChild(this.imagen);
		document.write("<p>");
		document.write("<strong>" + this.nombre + "</strong><br />");
		document.write("Vida: " + this.vida + "<br />");
		document.write("Ataque: " + this.ataque);
		document.write("</p><hr>");
	}
}


// var cauchin = new pakiman("Cauchin", 100, 30);
// var pokacho = new pakiman("Pokacho", 80, 50);
// var tocinauro = new pakiman("Tocinauro", 120, 4);


var coleccion = [];
coleccion.push(new pakiman("Cauchin", 100, 30));
coleccion.push(new pakiman("Pokacho", 80, 50));
coleccion.push(new pakiman("Tocinauro", 120, 4));

//for (var freddito in coleccion);

for (var freddito of coleccion)
{
	freddito.mostrar();
}