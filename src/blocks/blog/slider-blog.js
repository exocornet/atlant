$('.slider-blog').slick({
  centerMode: true,
  infinite: true,
  slidesToShow: 2,
  centerPadding: "150px",
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '220px',
        slidesToShow: 1,
        infinite: true,
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
