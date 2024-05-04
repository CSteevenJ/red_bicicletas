var Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function () {
    return 'id: ' + this.id + " | color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add =  function(aBici){
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if (aBici)
        return aBici
    else
        throw new Error(`No existe una bicicleta con el id ${aBici}`);
}

Bicicleta.removeById = function(aBici){
    // var aBici = Bicicleta.findById(aBici);
    for(var i = 0; i < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBici){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}

var a = new Bicicleta(1, 'rojo', 'urbana', [4.587067826932398, -74.16080334293196]);
var b =  new Bicicleta(2, 'blanca', 'urbana', [4.580993341635696, -74.15413000710157]);

Bicicleta.add(a);
Bicicleta.add(b);




module.exports = Bicicleta;