//Cristian Steeven Jimenez Silva
//20221578020

var createError = require('http-errors'); // Importa el módulo 'http-errors' para manejar errores HTTP.
var express = require('express'); // Importa el módulo 'express' para la creación de la aplicación web.
var path = require('path'); // Importa el módulo 'path' para manejar rutas de archivos y directorios.
var cookieParser = require('cookie-parser'); // Importa el módulo 'cookie-parser' para analizar las cookies de la solicitud HTTP.
var logger = require('morgan'); // Importa el módulo 'morgan' para el registro de solicitudes HTTP.

// Importa los enrutadores definidos en otros archivos.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bicicletasRouter = require('./routes/bicicletas');
var bicicletasAPIRouter = require('./routes/api/bicicletas');

// Crea la aplicación Express.
var app = express();

// Configura el motor de vistas y el directorio de vistas.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Configura los middleware para el registro, el análisis de solicitudes JSON y la gestión de URL codificadas.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Configura el middleware para servir archivos estáticos desde el directorio 'public'.

// Configura los enrutadores para manejar diferentes rutas.
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bicicletas', bicicletasRouter);
app.use('/api/bicicletas', bicicletasAPIRouter);

// Middleware para manejar errores 404 (no encontrado).
app.use(function(req, res, next) {
  next(createError(404));
});

// Middleware para manejar errores.
app.use(function(err, req, res, next) {
  // Establece las variables locales 'message' y 'error' para la plantilla de error.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderiza la página de error con el código de estado HTTP y los datos del error.
  res.status(err.status || 500);
  res.render('error');
});

// Exporta la aplicación para que pueda ser utilizada en otros archivos.
module.exports = app;
