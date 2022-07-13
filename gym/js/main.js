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

$(".icon-filter").click(function () {
  $("body").toggleClass("openFilter");
});

$(".mask").click(function () {
  $("body").removeClass("open");
  $("body").removeClass("openFilter");
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

// show more

$(".show-more").click(function () {
  $(this).prev().slideToggle(200);
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(this).text("Rút gọn");
  } else {
    $(this).text("Xem thêm");
  }
});

// details

$(function () {
  $("#aniimated-thumbnials").lightGallery({
    thumbnail: true,
    thumbWidth: 80,
    thumbHeight: 110,
    thumbMargin: 15,
    actualSize: false,
    zoom: false,
    fullScreen: false,
    toogleThumb: false,
    currentPagerPosition: "left",
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
    infinite: false,
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    infinite: false,
  });
});

//scroll

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
