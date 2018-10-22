import slick from 'slick-carousel';

var slider = $('.testimonials__list');

$(slider).on({
  'init': function(event, slick) {
    decorateSlider(slick.activeBreakpoint);
  }
});
$(slider).on({
  'breakpoint': function(event, slick, breakpoint) {
    decorateSlider(slick.activeBreakpoint);
  }
});

function decorateSlider(activeBreakpoint) {
  $('.slick-slide:not(.slick-cloned) > div > .testimonials__item').each(function(index) {
    $(this).removeClass('testimonials__item_active');
    if (activeBreakpoint === null) {
      if (index === 1 || index === 4 || index === 7) {
        $(this).addClass('testimonials__item_active');
      }
    } else {
      $(this).addClass('testimonials__item_active');
    }
  });
}


$(slider).slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]
});
