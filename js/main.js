$(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    // arrows: false,
    prevArrow: '<button class="prev-arrow slick-arrow"><img class="prev-img" src="svg/prev-arrow.svg" alt="prev"></button>',
    nextArrow: '<button class="next-arrow slick-arrow"><img class="next-img" src="svg/next-arrow.svg" alt="next"></button>',
  });
})