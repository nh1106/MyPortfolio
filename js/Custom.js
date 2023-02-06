$(function () {

// modal

$(".about-btn").click(function(){
  $(".modal").show();
})

$(".close-btn, .modal").click(function(){
  $(".modal").hide();
})



// swiper

  var swiper2 = new Swiper('.swiper-container', {
    speed: 700,
    direction: 'vertical',
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      reachEnd: function () {
        swiper.mousewheel.disable();
      }
    }
  });
  window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
      swiper2.mousewheel.enable();
    } 
    else if (event.deltaY > 0) {
    } 
});



// swiper2
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,  //브라우저가 768보다 클 때
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,  //브라우저가 1024보다 클 때
      spaceBetween: 50,
    },
  },

});

})

