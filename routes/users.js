//Cristian Steeven Jimenez Silva
//20221578020

var express = require('express'); // Importa el módulo 'express' para el enrutamiento web.
var router = express.Router(); // Crea un enrutador de Express.

/* GET users listing. */
// Maneja la solicitud GET a la ruta '/users'.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
module.exports = router;
