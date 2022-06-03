$(function () {

    $('.slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        variableWidth: true,

        prevArrow: '<button class="slider__btn slider__btn-left"><svg width="51" height="8" viewBox="0 0 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM51 3.5L1 3.5V4.5L51 4.5V3.5Z" fill="#F402A2"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="slider__btn slider__btn-right"><svg width="51" height="8" viewBox="0 0 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z" fill="#F402A2"/>\n' +
            '</svg>\n</button>',
    });

    $('.menu_btn').on('click', function () {
        $('.menu_btn').toggleClass('menu_btn--active');
        $('.header_menu-item').toggleClass('header_menu-item--active');
    });

    $('.header_menu-link').on('click', function () {
        $('.menu_btn').removeClass('menu_btn--active');
        $('.header_menu-item').removeClass('menu_list--active');
    });

});