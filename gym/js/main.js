var menu = $(".header-section");
$(window).bind("scroll", function (e) {
  if ($(window).scrollTop() > 140) {
    if (!menu.hasClass("openNav")) {
      menu.addClass("openNav");
    }
  } else {
    if (menu.hasClass("openNav")) {
      menu.removeClass("openNav");
    }
  }
});

// header

$(".burgerBtn").click(function () {
  $("body").toggleClass("open");
});

$(".cart").click(function () {
  $("body").toggleClass("openCart");
});

$(".closeCart").click(function () {
  $("body").removeClass("openCart");
});

$(".search-mb").click(function () {
  $("body").toggleClass("openSearch");
});

$(".mask").click(function () {
  $("body").removeClass("open");
  $("body").removeClass("openCart");
  $(".navigation").removeClass("show");
});

$(".navigation li.dropdown").hover(
  function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(200);
  },
  function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(200);
  }
);
$(".side_promotion").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
  ],
});

$(".side_main").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});

$(".brands").slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 7,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});
