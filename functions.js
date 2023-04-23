$(function(){


	var indiceAtual = 0;
	var indicemax = $('.slider bnr1').length;
	
	var indiceAtual2 = 0;
	var indicemax2 = $('.slider2 bnr2').length;

	initSlider();
	initSlider2();
	cliq();
	cliq2();
	cliq3();


	var video = document.querySelector('#vi1');
	var video2 = document.querySelector('#vi2');
	var video3 = document.querySelector('#vi3');

	function para(){
			video.pause();
			video.currentTime = 0;
			

			video2.pause();
			video2.currentTime = 0;

			video3.pause();
			video3.currentTime = 0;
	}



	function initSlider(){

		$('.slider .bnr1').eq(0).fadeIn();

	
	}
	function initSlider2(){

		$('.slider2 .bnr2').eq(0).fadeIn();

	
	}


		function cliq(){
		$('.bullets-nav span:nth-child(2)').click(function(){

			console.log(indiceAtual)

			$('.slider .bnr1').eq(indiceAtual).fadeOut();

			indiceAtual = indiceAtual + 1;

			$('.slider .bnr1').eq(indiceAtual).fadeIn();


			console.log(indiceAtual)
			
			if(indiceAtual == 3){
				$('.slider .bnr1').eq(indiceAtual).fadeOut();
				indiceAtual = 0;
				$('.slider .bnr1').eq(indiceAtual).fadeIn();
			}


		});
	}

	function cliq2(){
		$('.bullets-nav span:nth-child(1)').click(function(){

			console.log(indiceAtual)

			$('.slider .bnr1').eq(indiceAtual).fadeOut();

			indiceAtual = indiceAtual - 1;

			$('.slider .bnr1').eq(indiceAtual).fadeIn();

			console.log(indiceAtual)
			
			if(indiceAtual == -3){
				$('.slider .bnr1').eq(indiceAtual).fadeOut();
				indiceAtual = 0;
				$('.slider .bnr1').eq(indiceAtual).fadeIn();
			}


		});
	}














	function cliq3(){

		$('.bullets-nav2 span').click(function(){

			
			


			console.log(indiceAtual2)

			$('.slider2 .bnr2').eq(indiceAtual2).fadeOut();
		

			indiceAtual2 = indiceAtual2 + 1;

			$('.slider2 .bnr2').eq(indiceAtual2).fadeIn();

			console.log(indiceAtual2)
			
			if(indiceAtual2 == 3){
				$('.slider2 .bnr2').eq(indiceAtual2).fadeOut();
				

				indiceAtual2 = 0;
				$('.slider2 .bnr2').eq(indiceAtual2).fadeIn();
			}


		});
	}

		function cliq3(){
		$('.bullets-nav2 span').click(function(){

			para();

			console.log(indiceAtual2)

			$('.slider2 .bnr2').eq(indiceAtual2).fadeOut();
			
			indiceAtual2 = indiceAtual2 - 1;

			$('.slider2 .bnr2').eq(indiceAtual2).fadeIn();

			console.log(indiceAtual2)
			
			if(indiceAtual2 == -3){
				$('.slider2 .bnr2').eq(indiceAtual2).fadeOut();
				

				indiceAtual2 = 0;
				$('.slider2 .bnr2').eq(indiceAtual2).fadeIn();
			}


		});
	}


});