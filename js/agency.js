/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

var anchors = $("a.page-scroll");
var currentPos = 0;
var nextPos = 0;
var current = window.location.hash.slice(1); //get current hash;

$('#navbar').scrollspy();

/*$(document).ready(function(){       
    $(document).keyup(function(e){
        e.preventDefault();
        
        currentActiveIndex = $(".navbar-nav li").index($(".navbar-nav li.active"));

        currentPos = anchors.index(currentActiveIndex);
        //currentPos = anchors.index($('a[href$="' + current + '"]'));
         if(e.keyCode === 38){
            scrollUp(currentPos);
         } else if (e.keyCode === 40){
            scrollDown(currentPos);
         }

    });

    function scrollUp(pos){
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