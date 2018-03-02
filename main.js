/**********************************************************/
/*TODO*/
/**********************************************************//*

- stop overscrolling?
- pin title bar to top and fade in nav bar

*//**********************************************************/

//scroll to element on click
/*$(document).ready(function (){
	$("#clickthis").click(function (){
		$('html, body').animate({
			scrollTop: $("#scrolltothis").offset().top
		}, 1500);
	});
});*/

$(window).on('load', function () {
	setTimeout(fadeInTitle, 700);
});

//use this to add a delay to the animation, only after window loads
var fadeInTitle = function() {
	$("#title").addClass("fade-in-title");
};
