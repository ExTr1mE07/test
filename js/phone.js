let phonePrevArrow = document.getElementById('phone-arrow-prev')
let phoneNextArrow = document.getElementById('phone-arrow-next')

$('.phone-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: phonePrevArrow,
    nextArrow: phoneNextArrow
});