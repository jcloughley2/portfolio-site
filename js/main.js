// main.js

$(document).ready(function() {

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
