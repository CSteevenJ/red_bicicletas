//Cristian Steeven Jimenez Silva
//20221578020

var express = require('express'); // Importa el módulo 'express' para el enrutamiento web.
var router = express.Router(); // Crea un enrutador de Express.
var bicicletaController = require('../controllers/bicicleta'); // Importa el controlador de bicicletas.

router.get('/', bicicletaController.bicicleta_list); // Define la ruta para obtener la lista de bicicletas.
router.get('/create', bicicletaController.bicicleta_create_get); // Define la ruta para mostrar el formulario de creación de bicicletas.
router.post('/create', bicicletaController.bicicleta_create_post); // Define la ruta para procesar el formulario de creación de bicicletas.
router.get('/:id/update', bicicletaController.bicicleta_update_get); // Define la ruta para mostrar el formulario de actualización de bicicletas.
router.post('/:id/update', bicicletaController.bicicleta_update_post); // Define la ruta para procesar el formulario de actualización de bicicletas.
router.post('/:id/delete', bicicletaController.bicicleta_delete_post); //los dos puntos(:id) es parametro // Define la ruta para procesar la eliminación de una bicicleta.

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
module.exports = router;