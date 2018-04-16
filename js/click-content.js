var debounced = _.debounce(whichKey, 1000, true);
function whichKey(e) {
  if(event.which === 65) {
    $('a').on('click', function(e) {
      e.preventDefault();
      currentUrl = $(e.currentTarget).prop('href');
      chrome.runtime.sendMessage({"message": "go_incognito", "url": currentUrl});
    });
  }
}
$(document).keydown(debounced);
$(document).keyup(function (e) {
  $('a').off('click');
});
