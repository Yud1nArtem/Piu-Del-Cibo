$(function () {
    $('.header__btn').click(() => {
        $('html, body').animate({
            scrollTop: $('.section__menu').offset().top
        }, 1000);
    });
});