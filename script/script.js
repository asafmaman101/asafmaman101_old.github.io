$(document).ready(() => {
    $('.menu-btn').on('click', () => {
        $('.nav-menu').slideToggle(300);
    });
    
    $('.js--scroll-to-about-me').click(() => {
        $('html, body').animate({scrollTop: $('.js--about-me').offset().top-100}, 1000);
    });
    
    $('.js--scroll-to-my-pictures').click(() => {
        $('html, body').animate({scrollTop: $('.js--my-pictures').offset().top-50}, 1000);
    });
    
    $('.js--scroll-to-contact-me').click(() => {
        $('html, body').animate({scrollTop: $('.js--contact-me').offset().top}, 1000);
    });
});