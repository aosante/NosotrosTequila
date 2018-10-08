const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://admin:admin123@ds059938.mlab.com:59938/nosotros_tequila', {useNewUrlParser: true});
let db = mongoose.connection;

const port = 3000;

//Inicializando el app
const app = express();

//Server start
app.listen(port, () => {
    console.log('Server started on port ' + port);
})

//chequear si hay conexion exitosa
db.once('open', () => {
    console.log('Connected to mongodb');
})

//chequear si hay errores en la conexion
db.on('error', err => {
    console.log(err)
}) 

let User = require('./models/user.model');

//Cargar los archivos html para poder utilizarlos
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Importando los route files
let users = require('./routes/user.route');
app.use('/users', users);

//middleware de bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Seteando el public folder para que estén disponibles los archivos de css, js etc..
app.use(express.static(path.join(__dirname, 'public')));

//Ruta del home page
app.get('/', (req, res) => {
    res.render('index.html');
})