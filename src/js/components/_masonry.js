var Masonry = require('masonry-layout');

var masonry = new Masonry('.team__grid', {
  itemSelector: '.team__brick',
  columnWidth: '.team__brick',
  gutter: '.team__gutter-sizer',
  percentPosition: true
});
