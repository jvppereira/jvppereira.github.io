$(function(){

	var chave = true;

	$(window).scroll(function(){

			var windowOffY = $(window).scrollTop();
			var windowHeight = $(window).height();

		$('.input-container').each(function(){

			var elOffY = $(this).offset().top;

			if(elOffY < (windowOffY + windowHeight) && elOffY+$(this).height() > windowOffY){

				$('.menu1 .contatow').css('color','white');

				
		

				return;
			}
			else{
				$('.menu1 .contatow').css('color','');

				
	
			}
		});

	})


	$(window).scroll(function(){

			var windowOffY = $(window).scrollTop();
			var windowHeight = $(window).height();

		$('.container').each(function(){

			var elOffY = $(this).offset().top;

			if(elOffY < (windowOffY + windowHeight) && elOffY+$(this).height() > windowOffY){

				$('.menu1 .Pg').css('color','white');
				
				
		

				return;
			}
			else{
				$('.menu1 .Pg').css('color','black');
				chave = false;

				
	
			}
		});

	})


	$(window).scroll(function(){

			var windowOffY = $(window).scrollTop();
			var windowHeight = $(window).height();

		$('.container31').each(function(){

			var elOffY = $(this).offset().top;

			if(elOffY < (windowOffY + windowHeight) && elOffY+$(this).height() > windowOffY ){

				$('.menu1 .Prop').css('color','white');

				
		

				return;
			}
			else{
				$('.menu1 .Prop').css('color','black');

				
	
			}
		});

	})
		$(window).scroll(function(){

			var windowOffY = $(window).scrollTop();
			var windowHeight = $(window).height();

		$('.container3').each(function(){

			var elOffY = $(this).offset().top;

			if(elOffY < (windowOffY + windowHeight) && elOffY+$(this).height() > windowOffY){

				$('.menu1 .contriw').css('color','white');

				
		

				return;
			}
			else{
				$('.menu1 .contriw').css('color','black');

				
	
			}
		});

	})


	$(window).scroll(function(){

			var windowOffY = $(window).scrollTop();
			var windowHeight = $(window).height();

		$('.container2').each(function(){

			var elOffY = $(this).offset().top;

			if(elOffY < (windowOffY + windowHeight) && elOffY+$(this).height() > windowOffY && chave == false){

				$('.menu1 .Qsomos').css('color','white');
				chave = true;
				
		

				return;
			}
			else{
				$('.menu1 .Qsomos').css('color','black');
				
				

				
	
			}
		});

	})



});