/* Прокручивает страницу вверх при нажатии на кнопку */
$(function () {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function () {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop: 0
        }, 300);
    })
})
// при прокрутке окна (window)
$(window).scroll(function () {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 400) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.scrollup').fadeOut();
    }
});

$(document).ready(function () {
    $('.slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 700,
      easing: 'linear',
      infinite: true,
      initialSlide: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      rows: 1,
      slidesPerRows: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ],
    });
  });