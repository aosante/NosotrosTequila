const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const engines = require('consolidate');

const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb://admin:admin123@ds059938.mlab.com:59938/nosotros_tequila';

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true }
);
let db = mongoose.connection;

const port = process.env.PORT || 3000;

//Inicializando el app
const app = express();

//middleware de bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Server start
app.listen(port, () => {
  console.log('Server started on port ' + port);
});

//chequear si hay conexion exitosa
db.once('open', () => {
  console.log('Connected to mongodb');
});

//chequear si hay errores en la conexion
db.on('error', err => {
  console.log(err);
});

let User = require('./models/user.model');
``;

//Cargar los archivos html para poder utilizarlos
app.set('views', path.join(__dirname, 'views'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');

//Seteando el public folder para que estén disponibles los archivos de css, js etc..
app.use(express.static(path.join(__dirname, 'public')));

//Importando los route files
const users = require('./routes/user.route');
app.use('/users', users);

//Ruta del home page
app.get('/', (req, res) => {
  res.render('index.html');
});
