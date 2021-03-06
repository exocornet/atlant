function setProgress(index) {
  const calc = index + 1;

  // $progressBar
  //   .css('background-size', `${calc}% 100%`)
  //   .attr('aria-valuenow', calc);

  $progressBarLabel.text(`${calc} / ${$slider.slick('getSlick').slideCount}`);
}

const $slider = $('.slider-blog');
const $progressBar = $('.progress-num');
const $progressBarLabel = $('.slider__num-label');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  setProgress(nextSlide);
});



$($slider).slick({
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
        slidesToShow: 1,
        prevArrow: `<svg class="slick-prev-custom" width="56" height="8" viewBox="0 0 56 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.646446 3.64644C0.451183 3.8417 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02368 4.53553 6.82842L1.70711 4L4.53553 1.17157C4.7308 0.976306 4.7308 0.659724 4.53553 0.464462C4.34027 0.269199 4.02369 0.269199 3.82843 0.464462L0.646446 3.64644ZM56 3.5L1 3.5L1 4.5L56 4.5L56 3.5Z" fill="currentColor"/>
</svg>
`,
        nextArrow: `
<svg class="slick-next-custom" width="56" height="8" viewBox="0 0 56 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M55.3536 4.35355C55.5488 4.15829 55.5488 3.84171 55.3536 3.64645L52.1716 0.464466C51.9763 0.269204 51.6597 0.269204 51.4645 0.464466C51.2692 0.659728 51.2692 0.976311 51.4645 1.17157L54.2929 4L51.4645 6.82843C51.2692 7.02369 51.2692 7.34027 51.4645 7.53553C51.6597 7.7308 51.9763 7.7308 52.1716 7.53553L55.3536 4.35355ZM0 4.5H55V3.5H0V4.5Z" fill="currentColor"/>
</svg>`
      }
    }
  ]
});

setProgress(0);
