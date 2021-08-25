$('.slider-blog').slick({
  centerMode: true,
  infinite: true,
  slidesToShow: 2,
  centerPadding: "300px",
  focusOnSelect: true,
  arrows: false,
  responsive: [
      {
          breakpoint: 1550,
          settings: {
              centerMode: true,
              infinite: true,
              slidesToShow: 2,
              centerPadding: "150px",
              focusOnSelect: true,
              arrows: false,
          }
      },
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
      breakpoint: 565,
      settings: {
        arrows: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});
