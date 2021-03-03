$(function () {
    $('.burger__menu').on('click', function () {
        $('body').toggleClass('active');
        $('.header__top_inner').toggleClass('active');
        $('.header__top_info').toggleClass('active');
        $('.header_menu').toggleClass('active');
        $('.burger__menu').toggleClass('active');
    });
});