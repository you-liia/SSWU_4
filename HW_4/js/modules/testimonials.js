$(document).ready(function() {
    $('.testimonials__carousel').slick({
        slidesToShow: 2, 
        slidesToScroll: 2, 
        infinite: true,
        prevArrow: $('.testimonials__btn_left'), 
        nextArrow: $('.testimonials__btn_right'), 
        speed: 1500,
    });
});