$(function() {
	var $tvShowContainer = $('#app-body').find('.tv-shows');

	function renderShows(shows){
		shows.forEach(function (show) {
				var article = template
					.replace(':name:', show.name)
					.replace(':img:', show.image.medium)
					.replace(':summary:', show.summary)
					.replace(':img alt:', show.name + " logo")

					var $article = $(article)
					$article.hide();
					$tvShowContainer.append($article.show())
		})
	}

	$('#app-body')
		.find('form')
		.submit(function (ev) {
			ev.preventDefault();
			var busqueda = $(this)
				.find('input[type="submit"]')
				.val();
			$.ajax({
				url: 'http://api.tvmaze.com/search/shows',
				data: { q:busqueda },
				success: function (shows, textStatus, xhr) {
					$tvShowContainer.find('.tv-show').remove();
					var shows = res.map(function(el) {
						return el.show;
					})
					renderShows(shows);
				}
			})
		})

	var template = '<article class="tv-show">' +
					'<div class="left img-container">' +
						'<img src=":img:" alt=":img alt:">' + 
					'</div>' +
					'<div class="right info">' +
						'<h1>:name:</h1>' +
						'<p>:summary:</p>' +
					'</div>' +
				'</article>';

	$.ajax({
		url: 'http://api.tvmaze.com/shows',
		success: function (shows, textStatus, xhr) {
			
			$tvShowContainer.find('.loader').remove();
			renderShows(shows);
		}

	})
})






















// //http://learn.shayhowe.com/advanced-html-css/jquery/

// // $(document).ready(function () {
// // 	alert('ready')
// // })

// $(function(){
// 	//var header = document.getElementById('app-header') -> seleccion en javascript
// 	//var seleccion = $([ document, header]); -> seleccion en jquery
// 	//$('header[data-title="TVify"]') -> Seleccion por elemento data title de un elemnto con ID
// 	//$('#app-header').find('h1') -> filtra por los h1 dentro de un elemento.
// 	//$('#app-header').has('.title') -> filtra por clases  (.not() los que no tengan)
// 	//$('p').filter('.text') -> filtra los <p> que tengan clases text
// 	//$('p').filter('.clase').first() -> filtra por el primer elemento. (.eq(1)) por indice de elento

// 	// var a = $('<a>', {
// 	// 	href: 'http://www.platzi.com',
// 	// 	target: '_blank',
// 	// 	html: 'Ir a Platzi.com'
// 	// })
// 	// $('#app-body').append(a);  //-> crear un elemento a con un href y agregarlo por jqyery

// 	// a
// 	// 	.attr('href', 'https://www.google.com')
// 	// 	.attr('html', 'https://www.google.com')// -> setter para insertar valor a un elemento

// 	//console.log(a.attr('href')); // -> getter para saber el valor href de un elemento

// 	// $('#app-header h1').addClass('danger'); // -> añadir clases a un elemento

// 	// setTimeout(function () {
// 	// 	$('#app-header h1').removeClass('danger'); // -> quitar clase o con toogle para cambiar por la que no tenga.
// 	// }, 1500);

// 	// $('header#app-header')
// 	// 	.append($('<p>', { html: 'Me acaban de crear'})) // -> crear e insertar elementos en el DOM

// 	// $('<p>', { html: 'Me acaban de crear'})
// 	// 	.appendTo($('header#app-header')) // -> otra manera de crear nuevos objects.

// })