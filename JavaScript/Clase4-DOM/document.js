function Pokemon(n,v,a)
{
    this.grito = "Pika!";
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.gritar = function ()
    {
        alert(this.grito);
    }
}

function inicio()
{
    var rattata = new Pokemon("Rattata", 40, 2);
    rattata.vida = rattata.vida - 13;
    rattata.grito = "Paredes!!";
    nombrePokemon.textContent = rattata.nombre;
    datosPokemon.textContent = rattata.vida;

    var charizard = new Pokemon("Charizard", 100, 65);
    
}