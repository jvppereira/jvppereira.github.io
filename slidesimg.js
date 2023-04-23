$(function(){


	var indiceAtual = 0;
	var indicemax = $('.fotos img').length;
	var delay = 5000;
	initSlider();

	function initSlider(){
		$('.fotos img').eq(0).fadeIn();
		setInterval(function(){
			alternarSlider();
		},4000);

	}

	function alternarSlider(){
		$('.fotos img').eq(indiceAtual).fadeOut(1);
		indiceAtual+=1;

		if(indiceAtual == indicemax)
			indiceAtual = 0;
		$('.fotos img').eq(indiceAtual).fadeIn(1000);

		
	}

});