$('.ratk').each(function(ind, item) {
  var id = 'ratk' + ind + Math.random()
  $(item)
    .hide()
    .attr('data-id', id)
    .before('<a class="toggle" href="#" data-target=' + id + '>Näytä/piilota ratkaisu</a>')
})

$('.toggle').click(function(e) {
  e.preventDefault()
  var $id = $(this).attr('data-target')
  $('.ratk[data-id="' + $id + '"]').toggle()
})
