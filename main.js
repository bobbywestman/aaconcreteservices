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

// var lastHeight = '';

// $(window).on('resize', function () {
//     // remove height when normal resize event is fired and content redrawn
//     if (lastHeight) {
//         $('#bg').height(lastHeight = '');
//     }
// }).on('touchmove', function () {
//     // when window height changes adjust height of the div
//     if (lastHeight != window.innerHeight) {
//         $('#bg').height(lastHeight = window.innerHeight);
//     }
// });

(function() {
    function size() {
      // you can change here what you prefer
      if (/android|webos|iphone|ipad|ipod|blackberry|nokia|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase())) {
        var theminheight = Math.min(document.documentElement.clientHeight, window.screen.height, window.innerHeight);
        //now apply height ... if needed...add html & body ... i need and i use it
        $('html body #bg').css('height', theminheight);
      }
    }
    window.addEventListener('resize orientationchange', function() {
      size();
    }, false);
    size();
  }());
