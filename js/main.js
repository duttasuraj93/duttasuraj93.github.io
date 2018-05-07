$(document).ready(function(){
	// Sticky Navigation
	$(".js-services").waypoint(function(direction) {
		if (direction == "down") {
			$("nav").addClass("sticky");
			$("nav").addClass("navopa");
		} else {
			$("nav").removeClass("sticky");
			$("nav").removeClass("navopa");
		}
	}, {
		offset: "600px;"
	});



	$("#to-port").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#main-port").offset().top
	    }, 1000);
	});

	$("#nav-port").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#main-port").offset().top
	    }, 1000);
	});

	$("#to-services").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#services").offset().top
	    }, 1000);
	});

	$("#to-about").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#main-about").offset().top
	    }, 1000);
	});

	$("#to-contact").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#main-contact").offset().top
	    }, 1000);
	});







	$(".js-row").waypoint(function(direction) {
		$(".js-row").addClass("animated bounceInDown");
	}, {
		offset: "50%"
	});

	$(".js-col").waypoint(function(direction) {
		$(".js-col").addClass("animated bounceInUp");
	}, {
		offset: "50%"
	});

	$(".js-me").waypoint(function(direction) {
		$(".js-me").addClass("animated bounceInLeft");
	}, {
		offset: "50%"
	});

	$(".js-port1").waypoint(function(direction) {
		$(".js-port1").addClass("animated bounceInLeft");
	}, {
		offset: "50%"
	});

	$(".js-port2").waypoint(function(direction) {
		$(".js-port2").addClass("animated bounceInUp");
	}, {
		offset: "50%"
	});

	$(".js-port3").waypoint(function(direction) {
		$(".js-port3").addClass("animated bounceInRight");
	}, {
		offset: "50%"
	});


});


