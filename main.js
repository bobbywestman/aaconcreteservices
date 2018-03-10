/**********************************************************/
/*TODO*/
/**********************************************************/

/*
- stop overscrolling?
- pin title bar to top and fade in nav bar
- fade in tiles
- clean up this file
*/

/**********************************************************/
/*notes*/
/**********************************************************/

/*
- DONT use callback from scrolling: https://johnresig.com/blog/learning-from-twitter/
*/

/**********************************************************/

$(window).on('load', function () {
	setTimeout(fadeInTitle, 300);
});

//use this to add a delay to the animation, only after window loads
var fadeInTitle = function() {
	$(".title-name").addClass("fade-in-title");
	$(".title-subheader").addClass("fade-in-title");
	$(".title-hr").addClass("fade-in-title");
	setTimeout(fadeInTitleHeaderFlair, 700);
};
var fadeInTitleHeaderFlair = function() {
	$(".title-header-flair").addClass("fade-in-title");
	setTimeout(fadeInTitleHeaderNoFlair, 2000);
};
var fadeInTitleHeaderNoFlair = function() {
	$(".title-header-noflair").addClass("fade-in-title");
};