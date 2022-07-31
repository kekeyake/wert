var ww = $(window).width();
var mySwiper = undefined;
var mySwiper2 = undefined;
function initSwiper() {

  if (ww < 768 && mySwiper,mySwiper2 == undefined) {
        mySwiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            spaceBetween: 0,
            freeMode: true,
            observer: true,
            observeParents: true,
        });
        mySwiper2 = new Swiper(".mySwiper2", {
            slidesPerView: "auto",
            spaceBetween: 0,
            freeMode: true,
            observer: true,
            observeParents: true,
        });

  } else if (ww >= 768 && mySwiper,mySwiper2 != undefined) {
        mySwiper.destroy();
        mySwiper = undefined;
        mySwiper2.destroy();
        mySwiper2 = undefined;
  }
}

initSwiper();

$(window).on('resize', function () {
  ww = $(window).width();
  initSwiper();
});
