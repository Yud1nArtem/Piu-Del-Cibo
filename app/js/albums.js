$(function () {
    $('.albums__box_item.first').on('click', function () {
        $('.albums__header_content-left').addClass('active');
        $('.albums__header_content-left.second').removeClass('active');
        $('.albums__header_content-left.third').removeClass('active');
        $('.albums__header_content-left.fourth').removeClass('active');
        $('.albums__header_content-left').addClass('active__mobile');
        $('.albums__header_content-left.second').removeClass('active__mobile');
        $('.albums__header_content-left.third').removeClass('active__mobile');
        $('.albums__header_content-left.fourth').removeClass('active__mobile');
        $('.albums__box ').addClass('active__mobile');
        $('.header__content_right-title ').addClass('active__mobile');
        $('.albums__header__menu-list').addClass('active__mobile')
    })
    $('.albums__box_item.second').on('click', function () {
        $('.albums__header_content-left').removeClass('active');
        $('.albums__header_content-left.second').addClass('active');
        $('.albums__header_content-left.third').removeClass('active');
        $('.albums__header_content-left.fourth').removeClass('active');
        $('.albums__header_content-left').removeClass('active__mobile');
        $('.albums__header_content-left.second').addClass('active__mobile');
        $('.albums__header_content-left.third').removeClass('active__mobile');
        $('.albums__header_content-left.fourth').removeClass('active__mobile');
        $('.albums__box ').addClass('active__mobile');
        $('.header__content_right-title ').addClass('active__mobile');
        $('.albums__header__menu-list').addClass('active__mobile')
    })
    $('.albums__box_item.third').on('click', function () {
        $('.albums__header_content-left').removeClass('active');
        $('.albums__header_content-left.second').removeClass('active');
        $('.albums__header_content-left.third').addClass('active');
        $('.albums__header_content-left.fourth').removeClass('active');
        $('.albums__header_content-left').removeClass('active__mobile');
        $('.albums__header_content-left.second').removeClass('active__mobile');
        $('.albums__header_content-left.third').addClass('active__mobile');
        $('.albums__header_content-left.fourth').removeClass('active__mobile');
        $('.albums__box ').addClass('active__mobile');
        $('.header__content_right-title ').addClass('active__mobile');
        $('.albums__header__menu-list').addClass('active__mobile')
    })
    $('.albums__box_item.fourth').on('click', function () {
        $('.albums__header_content-left').removeClass('active');
        $('.albums__header_content-left.second').removeClass('active');
        $('.albums__header_content-left.third').removeClass('active');
        $('.albums__header_content-left.fourth').addClass('active');
        $('.albums__header_content-left').removeClass('active__mobile');
        $('.albums__header_content-left.second').removeClass('active__mobile');
        $('.albums__header_content-left.third').removeClass('active__mobile');
        $('.albums__header_content-left.fourth').addClass('active__mobile');
        $('.albums__box ').addClass('active__mobile');
        $('.header__content_right-title ').addClass('active__mobile');
        $('.albums__header__menu-list').addClass('active__mobile')
    })
    $('.btn__close').on('click', function () {
        $('.albums__header_content-left').removeClass('active__mobile');
        $('.albums__header_content-left.second').removeClass('active__mobile');
        $('.albums__header_content-left.third').removeClass('active__mobile');
        $('.albums__header_content-left.fourth').removeClass('active__mobile');
        $('.albums__box ').removeClass('active__mobile');
        $('.header__content_right-title ').removeClass('active__mobile');
        $('.albums__header__menu-list').removeClass('active__mobile')
    })

});