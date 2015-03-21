/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

var anchors = $(".navbar a.page-scroll");
var current = window.location.hash.slice(1); //get current hash;

$('#navbar').scrollspy();

/*$(document).ready(function(){       
	$(document).keydown(function(e){
		e.preventDefault();
		
		currentActiveIndex = $(".navbar li").index($(".navbar li.active"));

		currentPos = anchors.index(currentActiveIndex);
		 if(e.keyCode === 38){
			if ( currentActiveIndex > 0 ) {
				$($(anchors).get( currentActiveIndex - 1 )).trigger("click");
			}
		 } else if (e.keyCode === 40){
		 	if ( currentActiveIndex < $(anchors).length - 1 ) {
		 		$($(anchors).get( currentActiveIndex + 1 )).trigger("click");
		 	} else {
		 		$($(anchors).get(0)).trigger("click");
		 	}
		 }

	});

	/*function scrollUp(pos){
		console.log(pos);
		console.log(anchors);
		currentHash = anchors.get(pos-1);
		if(!(currentHash===undefined) && (pos-1) >= 0){
			current = currentHash.hash;
		}
		 $('html, body').stop().animate({
			scrollTop: $(currentHash.hash).offset().top
		}, 1500, 'easeInOutExpo');

	}

	function scrollDown(pos){
		currentHash = anchors.get(pos+1);
		if(!(currentHash===undefined)){
			current = currentHash.hash;
		}
		 $('html, body').stop().animate({
			scrollTop: $(currentHash.hash).offset().top
		}, 1500, 'easeInOutExpo');
	}
});*/

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
	target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	$('.navbar-toggle:visible').click();
});