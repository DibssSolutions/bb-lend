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
$(slider).on({
  'afterChange': function(event, slick) {
    decorateSlider(slick.activeBreakpoint);
  }
});

$(slider).on({
  'beforeChange': function(event, slick, currentSlider, nextSlider) {
    if (currentSlider !== nextSlider && slick.activeBreakpoint === null) {
      $($('.slick-active:not(.slick-cloned) > div > .testimonials__item').get(1)).removeClass('testimonials__item_active');
    }
  }
});


function decorateSlider(activeBreakpoint) {
  if (activeBreakpoint === null) {
    $('.slick-active:not(.slick-cloned) > div > .testimonials__item').each(function(index) {
      $(this).removeClass('testimonials__item_active');

      if (index === 1) {
        $(this).addClass('testimonials__item_active');
      }
    });
  } else {
    $('.slick-slide:not(.slick-cloned) > div > .testimonials__item').each(function() {
      $(this).addClass('testimonials__item_active');
    });
  }
}


$(slider).slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToScroll: 1,
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
