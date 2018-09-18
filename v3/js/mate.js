"use strict";
console.log('mate is here');

// let anime = require('animejs');
let $ = require('jquery');
// Window Object References
var $window = $(window); // Reference the window object
//Target Element References
var $targetElement = $('#moving-card'); // Reference the target element in the DOM 
var $targetClass = $('#moving-card h2:first-child');
// console.log('target class', $targetClass);
// $window.trigger('scroll');


$window.on('scroll', function (event) {
    event.preventDefault();

var $windowHeight = $window.height(); // Get a reference to the current position of the browser window
var $windowTop = $window.scrollTop();
var $windowBottom = $windowTop + $windowHeight;

var $elementTop = $targetElement.offset().top; // Get a reference to the top position of the target element
var $elementHeight = $targetElement.outerHeight();
var $elementBottom = $elementTop + $elementHeight;
    // console.log("scrolling");
    if ( $elementTop < $windowBottom && $elementBottom > $windowTop) {
        // console.log('in view');
        $targetClass.addClass('moving');
    } else {
        // console.log('remeoved the class homes');
        $targetClass.removeClass('moving');
    }        
});

$window.scroll(function(event) {
    // console.log('scrolling');
    if ($targetClass.hasClass('moving')) {
        // console.log('has class is onnn');
        var el = document.querySelector('#moving-card .moving');
        var domNode = anime({
            targets: el,
            backgroundColor: '#A6CFD5',
            easing: 'easeInOutQuad',
            loop: 3,
            duration: 2000
            });

    }
});