$('.img-clickable').click(function () {
  var $url = $(this).attr('src')
  openInNewTab($url)
})

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
