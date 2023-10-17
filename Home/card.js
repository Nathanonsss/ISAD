var elem = document.getElementById('carrusel')

// ARROWS

var right = document.getElementById('carrousel-right')

var left = document.getElementById('carrousel-left')

right.addEventListener('click', function(){
  elem.scrollLeft += 800
})

left.addEventListener('click', function(){
  elem.scrollLeft -= 800
})

