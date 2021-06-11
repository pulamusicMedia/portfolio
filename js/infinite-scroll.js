// adapted from https://dev.to/sakun/a-super-simple-implementation-of-infinite-scrolling-3pnd

$(document).ready(function() {
  $(window).on("scroll", function() {
    var scrollHeight = $(document).height()
    var scrollPos = $(window).height() +$(window).scrollTop()
    if ((scrollHeight - 300) >= scrollPos) / scrollHeight == 0) {
      $('.load-more-btn').click()
      console.log("You've hit bottom.")
    }
  })
})

/* var listElm = document.querySelector('#infinite-list');

// Add 20 items.
var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 20; i++) {
    var item = document.createElement('li');
    item.innerText = 'Item ' + nextItem++;
    listElm.appendChild(item);
  }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

// Initially load some items.
loadMore(); */
