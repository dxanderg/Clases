var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));//permisos de carpeta public a todos (Servir Archivos Estaticos)

app.get('/', function (req, res) {
	res.render('index', { title: 'Platzigram'});
})

app.get('/signup', function (req, res) {
	res.render('index');
})

app.get('/signin', function (req, res) {
	res.render('index');
})

app.listen(3000, function(err) {
	if (err) return console.log('Ocurrio un Error'), process.exit(1);

	console.log('Escuchando en el puerto 3000');
})