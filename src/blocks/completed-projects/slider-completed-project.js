$('.slider-completed-project').slick({
  centerMode: true,
  slidesToShow: 1,
  centerPadding: '200px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
