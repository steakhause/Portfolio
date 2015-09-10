var main = function(){
	var currentSlide=$('.active-slide');
	var nextSlide= currentSlide.next();
	$('.down-button').click(function(){
		currentSlide=$('.active-slide');
		nextSlide= currentSlide.next();
			if(nextSlide.length === 0){
				nextSlide= $('.slide').first();
			}
		
	currentSlide.fadeOut(900).slideUp(1500,function(){
		currentSlide.removeClass('active-slide');
	});
	nextSlide.slideDown(1500).addClass('active-slide');
	});
	
	$('.slider').mousewheel(function(){
		
		currentSlide=$('.active-slide');
		nextSlide= currentSlide.next();
			if(nextSlide.length === 0){
			nextSlide= $('.slide').first();
			}
		currentSlide.fadeOut(900).slideUp(1000,function(){
			currentSlide.clearQueue().removeClass('active-slide');
		});
		nextSlide.clearQueue().slideDown(1000).addClass('active-slide');
	});
	$('.slider').unmousewheel(function(){
		alert('working');
		currentSlide.clearQueue();
		nextSlide.clearQueue();
	});
};
$(document).ready(main);