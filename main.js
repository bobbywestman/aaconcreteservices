/**********************************************************/
/*TODO*/
/**********************************************************/

/*
- stop overscrolling?
- pin title bar to top and fade in nav bar
- fade in tiles
*/

/**********************************************************/
/*notes*/
/**********************************************************/

/*
- DONT use callback from scrolling: https://johnresig.com/blog/learning-from-twitter/
*/

/**********************************************************/

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

//check scroll position
// var outerPane = $details.find(".details-pane-outer");
    
// var didScroll = false;

// $(window).scroll(function() {
//     didScroll = true;
// });
 
// setInterval(function() {
//     if ( didScroll ) {
//         didScroll = false;
//         // Check your page position and then
//         // Load in more results
//     }
// }, 250);

// $(function(){
// 	var $w = $(window),
// 		$background = $('#background');

// 	$background.css
// });