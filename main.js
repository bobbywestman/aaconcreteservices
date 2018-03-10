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
	$(".title-subheading").addClass("fade-in-title");
	$(".title-hr").addClass("fade-in-title");
	setTimeout(fadeInTitleHeadingFlair, 700);
};
var fadeInTitleHeadingFlair = function() {
	$(".title-heading-flair").addClass("fade-in-title");
	setTimeout(fadeInTitleHeadingNoFlair, 2000);
};
var fadeInTitleHeadingNoFlair = function() {
	$(".title-heading-noflair").addClass("fade-in-title");
};