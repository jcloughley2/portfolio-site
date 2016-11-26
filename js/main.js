// main.js

$(document).ready(function() {

	// Masthead Rotator

	var rotateDegree = 360;

	$(".tagline-scroll").on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.tagline-wheel').css("transform", "rotate(" + rotateDegree + "deg)");
		rotateDegree = rotateDegree + 360;
	}).on('init', function(event, slick){
    	$('.tagline').addClass('make-visible');
	}).slick({
		dots: false,
		nextArrow: '.tagline-wheel',
		infinite: true,
		fade: true,
		autoplay: true,
	});

	// Make Tiles Clickable

	$(".project-list article").click(function() {
		console.log('article clicked');
  		window.location = $(this).find("a").attr("href"); 
  		return false;
	});

	// Smooth Scroll Script

	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
}); 
