var main = function(){
	var click = 0;
	$(function(){
  	$('body').css({ height: $(window).innerHeight() });
  	$(window).resize(function(){
  		$('body').css({ height: $(window).innerHeight() });
  		});
	});
	$('#arrow-next').click(function(){
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();
		if(nextSlide.length === 0) {
		  nextSlide = $('.slide').first();
		  nextDot = $('.dot').first();
		}
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(1000).addClass('active-slide');
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
	});


	$('#arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();
    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();
		if(prevSlide.length === 0) {
		  prevSlide = $('.slide').last();
		  prevDot = $('.dot').last();
		}
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(1000).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
	});
	
	$("#box-two").click(function(){
	var move = $('.move');
	var boxOne = $('#box-one');
	var boxThree = $('#box-three');
	var boxFour = $('#box-four');
	var boxFive = $('#box-five');
		
		if (click === 0){
			move.animate({height:'+=100px'},'400');
			move.animate({width:'+=100px'},'400');
			move.animate({top:'+=60px'},'400');
			boxOne.animate({left:'-=50px'},'400');
			boxThree.animate({left:'+=60px'},'400');
			boxFour.animate({left:'+=170px'},'400');
			boxFive.animate({left:'+=280px'},'200');
			move.animate({fontSize:'1.5em'},'400');
			click = 1;
		}else if(click === 1){
			move.animate({fontSize:'0em'},'400');
			boxOne.animate({left:'+=50px'},'200');
			boxThree.animate({left:'-=60px'},'200');
			boxFour.animate({left:'-=170px'},'200');
			boxFive.animate({left:'-=280px'},'200');	
			move.animate({height:'-=100px'},'200');
			move.animate({width:'-=100px'},'200');
			move.animate({top:'-=60px'},'200');
			click = 0;
		}
	});
};

$(document).ready(main);