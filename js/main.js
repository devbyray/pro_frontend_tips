$(document).ready( function() {
	console.log('Document is ready baby!');

	WebFontConfig = {
      google: { families: [ 'Droid+Sans:400,700:latin' ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();

	// $('body').css('background-color', '#000');
	var windowHeight = $(window).outerHeight();

	fullScreenTitle(windowHeight);
	targetFirstImage();
	headerParallaxEffect();
	setTitleInHeader(windowHeight);
	toggleNav();


	$('.scroll_down').click( function() {
		$('html, body').animate({
	        scrollTop: $("#content").offset().top
	    }, 1000);
	});

});

function fullScreenTitle(windowHeight) {

	$('.header').css({
		height: windowHeight
	});

	var logoHeight = $('.content-wrap').outerHeight()/ 2,
		logoWidth = $('.content-wrap').outerWidth()/ 2 - 34;

	$('.header .content-wrap').css({
		position: 'absolute',
		top: '50%',
		marginTop: '-'+logoHeight + 'px',
	});

}

function targetFirstImage() {
	var image = $('#content img').first(),
		image_src = image.attr( "src" );
	
	if(image && image_src) {
		image.hide();
		$('.header').css('background-color', 'none');
		$('.header').css('background-image', 'url(' + image_src + ')');
	}
}

function headerParallaxEffect() {
	var header = $('.header');
	var speed = -5;

	$(window).scroll( function() {
	  var yOffset = window.pageYOffset;
	  header.css('backgroundPosition', "center " + (yOffset / speed) + "px");	
	});
}

function setTitleInHeader(windowHeight) {
	$('.top_title').hide();

	var titleText = $('.logo h1').text(),
		authorText = $('.logo .author a').text();
	$('.top_title .title').html(titleText);

	$(window).scroll( function() {
	  if($(this).scrollTop() > windowHeight-100) {
	  	$('.top_title').slideDown('slow');
	  } else {
	  	$('.top_title').slideUp('slow');
	  }
	});
}

function toggleNav() {
	var nav = $('.toggle_nav'),
		navbar = $('.nav_bar'),
		toggle = $('.toggle span');

	nav.click( function() {
		navbar.slideToggle('slow');
		toggle.toggleClass('rotate');
	});
}