$(document).ready(function(){
		$("#fantasy-btn").click(function() {
        $('html, body').animate({
        scrollTop: $("#fantasy").offset().top }, 1000);
    });
	$("#musicals-btn").click(function() {
        $('html, body').animate({
        scrollTop: $("#musicals").offset().top }, 1000);
    });
	$("#comedy-btn").click(function() {
        $('html, body').animate({
        scrollTop: $("#comedy").offset().top }, 1000);
    }); 
	$(".genre").click(function() {
        $('html, body').animate({
        scrollTop: $("#home").offset().top }, 1000);
    });
});