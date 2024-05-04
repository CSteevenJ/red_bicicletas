//Cristian Steeven Jimenez Silva
//20221578020

var Bicicleta = require('../models/bicicleta');

// Lista todas las bicicletas en la vista "index" utilizando el modelo Bicicleta.
exports.bicicleta_list = function(req, res){
    res.render('bicicletas/index', {bicis: Bicicleta.allBicis});
}

// Renderiza el formulario para crear una nueva bicicleta.
exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create');
}

// Crea una nueva bicicleta con los datos recibidos del formulario y redirige a la lista de bicicletas.
exports.bicicleta_create_post = function(req, res){
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];
    Bicicleta.add(bici);

    res.redirect('/bicicletas');
}

// Renderiza el formulario para actualizar una bicicleta específica.
exports.bicicleta_update_get = function(req, res){
    var bici = Bicicleta.findById(req.params.id);

    res.render('bicicletas/update', {bici});
}

// Actualiza los datos de una bicicleta específica con la información recibida del formulario y redirige a la lista de bicicletas.
exports.bicicleta_update_post = function(req, res){
    var bici = Bicicleta.findById(req.params.id);
    bici.id = req.body.id;
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.lng];

    res.redirect('/bicicletas');
}

// Elimina una bicicleta específica según el ID recibido y redirige a la lista de bicicletas.
exports.bicicleta_delete_post = function(req, res){
    Bicicleta.removeById(req.body.id);

    res.redirect('/bicicletas');
}