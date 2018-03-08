/**********************************************************/
/*TODO*/
/**********************************************************/

/*
- stop overscrolling?
- pin title bar to top and fade in nav bar
- fade in tiles
- clean up this file
- rename fadeInTitle functions (fadein1, 2, 3, etc)
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

	setTimeout(fadeInTitleHr, 400);
};
var fadeInTitleHr = function() {
	$(".title-hr").addClass("fade-in-title");
	setTimeout(fadeInTitleHeadingFlair, 400);
};
var fadeInTitleHeadingFlair = function() {
	$(".title-heading-flair").addClass("fade-in-title");
	setTimeout(fadeInTitleHeading, 1700);
};
var fadeInTitleHeading = function() {
	$(".title-heading-noflair").addClass("fade-in-title");
};