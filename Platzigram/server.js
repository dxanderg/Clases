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

app.get('/api/pictures', function (req, res){
  var pictures = [
    {
      user: {
        username: 'dxanderg',
        avatar: 'https://lh3.googleusercontent.com/2ZxNNt51Eaizw_tmrDT-Tp9hJ1lLBwbcRGhB4_ynb_hcAOm1xBVTFCC7pq9kKUT6fma503V9AA=w1440-h900-rw-no'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'dxanderg',
        avatar: 'https://lh3.googleusercontent.com/2ZxNNt51Eaizw_tmrDT-Tp9hJ1lLBwbcRGhB4_ynb_hcAOm1xBVTFCC7pq9kKUT6fma503V9AA=w1440-h900-rw-no'
      },
      url: 'office.jpg',
      likes: 2,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];

  setTimeout(function () {
  	res.send(pictures);
  }, 2000)
})

app.listen(3000, function(err) {
	if (err) return console.log('Ocurrio un Error'), process.exit(1);

	console.log('Escuchando en el puerto 3000');
})