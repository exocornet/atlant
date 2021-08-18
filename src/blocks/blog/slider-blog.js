$('.slider-blog').slick({
  breakpoint: 1440,
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  centerPadding: "0px",
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
