$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
    
    
});

// Can also be included with a regular script tag

//Typed
var options = {
    strings: ['will look perfect in every way','will be more powerfull','Will Have Incredible Business Feature'],
    typeSpeed: 100,
    backSpeed:100,
    loop: true,
    smartBackspace: true,
};
  
var typed = new Typed('#hero-typed-header', options);

$(document).ready(function () {
    $('.counter').countUp();
});


// Owl-carousel

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});