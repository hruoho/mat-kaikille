// display is the display style the element is assigned after the animation is done
// function fadeIn (el, duration, display) {
//   console.log('FADEIN')
//   var s = el.style,
//     step = 25 / (duration || 300)
//   s.opacity = s.opacity || 0
//   s.display = display || 'block';
//   (function fade () {
//     (s.opacity = parseFloat(s.opacity) + step) > 1 ? s.opacity = 1 : setTimeout(fade, 25)
//   })()
// }

// fadeIn(document.querySelector('.remark-container'), 1000)

window.renderMathInElement(document.body, {
  delimiters: [{
    left: '$$',
    right: '$$',
    display: true
  },
  {
    left: '\\[',
    right: '\\]',
    display: true
  },
  {
    left: '$',
    right: '$',
    display: false
  },
  {
    left: '\\(',
    right: '\\)',
    display: false
  }
  ]
})
