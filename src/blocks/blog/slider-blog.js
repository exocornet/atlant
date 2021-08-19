$('.slider-blog').slick({
  centerMode: true,
  infinite: true,
  slidesToShow: 2,
  centerPadding: "150px",
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
