import Swiper from "swiper";
var $ = require("jquery");

import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

$(function () {
  const swiper = new Swiper(".testimonialSwiper", {
    loop: true,
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 20,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var mobileMenuToggle = function () {
    $(".js-menu-toggle").on("click", function (e) {
      e.preventDefault();
      if ($("body").hasClass("mobile-menu-active")) {
        $("body").removeClass("mobile-menu-active");
      } else {
        $("body").addClass("mobile-menu-active");
      }
    });

    $(window)
      .on("resize", function () {
        var $this = $(this);
        if ($this.width() > 768) {
          if ($("body").hasClass("mobile-menu-active")) {
            $("body").removeClass("mobile-menu-active");
          }
        }
      })
      .on("resize");

    $("body").on("click", function () {
      $(this).removeClass("mobile-menu-active");
    });

    $(".js-mobile-close").on("click", function (e) {
      e.preventDefault();
      $("body").removeClass("mobile-menu-active");
    });

    $(".mobile-menu, .js-menu-toggle").on("click", function (event) {
      event.stopPropagation();
    });
  };
  mobileMenuToggle();
});
