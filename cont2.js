$(function(){

		$('header .Prop').click(function(){
			var href = $(this).attr('href'); 
			var offSetTop = $(href).offset().top;
			
			$('	html,body').animate({'scrollTop':offSetTop-100},450);
		})

})