//Cristian Steeven Jimenez Silva
//20221578020

// Definición del constructor de objetos Bicicleta con propiedades id, color, modelo y ubicación.
var Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

// Método toString para imprimir información básica de la bicicleta.
Bicicleta.prototype.toString = function () {
    return 'id: ' + this.id + " | color: " + this.color;
}

// Array para almacenar todas las bicicletas creadas.
Bicicleta.allBicis = [];

// Función para añadir una bicicleta al array allBicis.
Bicicleta.add =  function(aBici){
    Bicicleta.allBicis.push(aBici);
}

// Función para encontrar una bicicleta por su ID en el array allBicis.
Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if (aBici)
        return aBici
    else
        throw new Error(`No existe una bicicleta con el id ${aBici}`);
}

// Función para eliminar una bicicleta por su ID del array allBicis.
Bicicleta.removeById = function(aBici){
    // var aBici = Bicicleta.findById(aBici);
    for(var i = 0; i < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBici){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}
/*
// Creación de dos instancias de bicicletas y adición al array allBicis.
var a = new Bicicleta(1, 'rojo', 'urbana', [4.587067826932398, -74.16080334293196]);
var b =  new Bicicleta(2, 'blanca', 'urbana', [4.580993341635696, -74.15413000710157]);

Bicicleta.add(a);
Bicicleta.add(b);
*/
// Exportación del constructor Bicicleta para su uso en otros archivos.
module.exports = Bicicleta;