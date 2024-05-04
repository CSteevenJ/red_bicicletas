//Cristian Steeven Jimenez Silva
//20221578020

var express = require('express'); // Importa el módulo 'express' para el enrutamiento web.
var router = express.Router(); // Crea un enrutador de Express.

/* GET home page. */
// Maneja la solicitud GET a la ruta raíz '/'.
router.get('/', function(req, res, next) {
  // Renderiza la vista 'index' y pasa datos al motor de plantillas, en este caso, solo el título
  res.render('index', { title: 'Express' });
});

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
module.exports = router;
