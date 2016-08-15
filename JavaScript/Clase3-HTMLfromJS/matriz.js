function boom()
{
    alert("Boom Elegiste una mina.");
    document.write("<h1>Perdiste...</h1>");
}

function ganaste()
{
    document.write("<p>Ganaste</p>");
}
var x, y;

var campo = [ [1 , 0 , 0],
              [0 , 1 , 0],
              [1 , 1 , 1] ];

alert("Estas en un campo minado\n" + "Elije una opcion entre 0 y 2 para X y para Y.");

var textos = ["Cesped" , "Bomba"];

x = prompt("Posicion en X?");
y = prompt("Posicion en Y?");



document.write( campo[x][y] );