var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');//creamos una variable y asignamos lo que devuelva requeire, que busca en nodemodules y lo que exporte babalify
var source = require('Vinyl-source-stream');
var watchify = require('watchify');

gulp.task('styles', function () {
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))//renombra el index.css en app.css
		.pipe(gulp.dest('public'));//mueve el app.css a la carpeta public
})

gulp.task('assets', function() {//crea carpeta public y copia el contenido de assets
	gulp
		.src('assets/*')//seleccion la ruta y los archivos
		.pipe(gulp.dest('public'));//mueve los archivos a la ruta escojida
})

function compile(watch){
	var bundle = browserify('./src/index.js', {debug: true});

	if (watch){
		bundle = watchify(bundle);
		bundle.on('update', function (){
			console.log('--> Bundling...');
			rebundle();
		})
	}	

	function rebundle(){
		bundle
			.transform(babel, { presets: ['es2015'], plugins: ['syntax-async-functions', 'transform-regenerator']})//que transforme el archivos con la libreria de babel
			.bundle()//procesa el archivo y lo genera
			.on('error', function(err) { console.log(err); this.emit('end') }) //manejador de errores, muestra mensaje en caso de error
			.pipe(source('index.js'))//transforme lo que devuelva bundle a algo que entienda gulp con Vinyl-source-stream
			.pipe(rename('app.js'))//renombra el archivo terminado a app.js
			.pipe(gulp.dest('public'));//mueve el archivo terminado a public
	}	
	rebundle();
}

gulp.task('build', function() {
	return compile();
});

gulp.task('watch', function() {
	return compile(true);
});


gulp.task('default', ['styles', 'assets', 'build'])//tareas que se ejecutan, se colocan los nombre de las tareas y el las ejecuta.