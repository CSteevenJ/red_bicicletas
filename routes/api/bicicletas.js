//Cristian Steeven Jimenez Silva
//20221578020

var express = require('express'); // Importa el módulo 'express' para el enrutamiento web.
var router = express.Router(); // Crea un enrutador de Express.
var bicicletaController = require('../../controllers/api/bicicletaControllerAPI'); // Importa el controlador de la API de bicicletas.

router.get('/', bicicletaController.bicicleta_list); // Define la ruta para obtener la lista de bicicletas.
router.post('/create', bicicletaController.bicicleta_create); // Define la ruta para crear una nueva bicicleta.
router.delete('/delete', bicicletaController.bicicleta_delete); // Define la ruta para eliminar una bicicleta existente.

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
module.exports = router;
