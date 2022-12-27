const slider = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})

// Disable context menu
/*
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}
*/
function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    // https://css-tricks.com/using-requestanimationframe/
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

//Augusto
let btnAugusto = document.getElementById('btnAugusto')
let swipe1 = document.getElementById('swipe1')


btnAugusto.addEventListener('click', function() {
    let audio = document.getElementById('soundAugusto')
    audio.play()
    document.getElementById('btnAugusto').setAttribute("style", "box-shadow: 0 0 0")
    btnAugusto.style.backgroundColor = 'chartreuse'
    btnAugusto.style.color = 'red'
    setTimeout(function(){
        document.getElementById('btnAugusto').setAttribute("style", "box-shadow: 2px 2px 10px dodgerblue")
        swipe1.style.visibility = 'visible'
    }, 4000)

    if (swipe1.style.visibility = 'visible') {
        setTimeout(function(){
            swipe1.style.visibility = 'hidden'
        }, 4000)
    }
})

//Daddy
let btnDaddy = document.getElementById('btnDaddy')
let swipe2 = document.getElementById('swipe2')


btnDaddy.addEventListener('click', function() {
    let audio = document.getElementById('soundDaddy')
    audio.play()
    document.getElementById('btnDaddy').setAttribute("style", "box-shadow: 0 0 0")
    btnDaddy.style.backgroundColor = 'chartreuse'
    btnDaddy.style.color = 'red'
    setTimeout(function(){
        document.getElementById('btnDaddy').setAttribute("style", "box-shadow: 2px 2px 20px dodgerblue")
        swipe2.style.visibility = 'visible'
    }, 4000)

    if (swipe2.style.visibility = 'visible') {
        setTimeout(function(){
            swipe2.style.visibility = 'hidden'
        }, 4000)
    }
})



