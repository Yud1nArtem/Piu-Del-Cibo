$(function () {
    $('.burger__menu').on('click', function () {
        $('body').toggleClass('active');
        $('.header__top_inner').toggleClass('active');
        $('.header__top_info').toggleClass('active');
        $('.header_menu').toggleClass('active');
        $('.burger__menu').toggleClass('active');
    });
});

$(function () {
    $('.album__burger_menu').on('click', function () {
        $('body').toggleClass('active');
        $('.albums__header__menu-list').toggleClass('active');
        $('.album__burger_menu').toggleClass('active');
    });
});