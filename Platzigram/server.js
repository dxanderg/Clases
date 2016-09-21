var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture');

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

  setTimeout(function () {//esperar 2 segundos antes de cargar las imagenes
  	res.send(pictures);
  }, 2000)
});

app.post('/api/pictures', function (req, res){
  upload(req, res, function (err){
    if (err){
      return res.send(500, "Error uploading file");
    }
    res.send('File Uploaded');
  })
})

app.get('/api/user/:username', (req, res) =>  {
  const user = {
    username:  'dxanderg',
    avatar: 'https://lh3.googleusercontent.com/2ZxNNt51Eaizw_tmrDT-Tp9hJ1lLBwbcRGhB4_ynb_hcAOm1xBVTFCC7pq9kKUT6fma503V9AA=w1440-h900-rw-no',
    pictures: [
      {
        id: 1,
        src: "http://cdn.mntm.me/81/77/b6/Honeymoon-Like-Jennifer-Aniston-and-Justin-Theroux-in-Bora-Bora-8177b6fec5674cc694e97e669883ac88.jpeg",
        likes: 3
      },
      {
        id: 2,
        src: "http://www.tahiti.com/images1/gallery/BOBILM_Breakfast_1000x600_29636.jpg",
        likes: 4
      },
      {
        id: 3,
        src: "http://z.cdrst.com/foto/hotel-sf/13c00/granderesp/hilton-bora-bora-nui-resort-spa-general-19bddb1.jpg",
        likes: 51
      },
      {
        id: 4,
        src: "http://iappfind.com/images/_fullsize/c/clever-destination-four-seasons-resort-bora-bora-georgiapapadon-toger-plus-twobedroom-overwater_four-seasons-resort-bora-bora.jpg",
        likes: 5
      },
      {
        id: 5,
        src: "http://www.voyages-exotiques.com/files/lq/Tahiti-Moorea-Bora-Bora_1289504620.jpg",
        likes: 10
      },
      {
        id: 16,
        src: "http://www.adashofluxury.com/wp-content/uploads/four-seasons-bora-bora-grounds-1-1024x683.jpg",
        likes: 7
      }
    ]    
  }
  res.send(user);
})

app.get('/:username', function (req, res) {
  res.render('index', { title: `Platzigram - ${req.params.username}` })
})

app.get('/:username/:id', function (req, res) {
  res.render('index', { title: `Platzigram - ${req.params.username}` })
})

app.listen(3000, function(err) {
	if (err) return console.log('Ocurrio un Error'), process.exit(1);

	console.log('Escuchando en el puerto 3000');
})