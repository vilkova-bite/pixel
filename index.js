let btn_draw = document.querySelector('.button')
let field_container = document.querySelector('.field-container')

function scrollDown(e) {
   e.preventDefault()
   field_container.style.display = 'flex'
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

btn_draw.addEventListener ('click', scrollDown)


let CURRENT_COLOR = 'white'
let DEFAULT_COLOR = 'rgb(255, 255, 255)'

let field =document.querySelector ('.field')

for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement ('div')
    cell.classList.add('cell')
    cell.setAttribute('id', `cell${i}`)
    field.appendChild(cell)
    
}

let IS_CLICKED = false

document.addEventListener ('mousedown', function () {
   IS_CLICKED = true
})

document.addEventListener ('mouseup', function (){
   IS_CLICKED = false
})

let cells = document.querySelectorAll('.cell')
cells.forEach (cell => {

    cell.addEventListener ('mouseover', function() {
      if (IS_CLICKED) {
       cell.style.backgroundColor = CURRENT_COLOR
      }
    })

    cell.addEventListener('mousedown', function() {
       cell.style.backgroundColor = CURRENT_COLOR
    })
})



let red = document.querySelector ('.red')
red.addEventListener ('click', function () {
   CURRENT_COLOR = 'red'
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   red.classList.add('selected')
   selected.style.border = 'none'
   red.style.border = 'solid white 3px'
})

let green = document.querySelector ('.green')
green.addEventListener ('click', function () {
   CURRENT_COLOR = 'green'
   let selected = document.querySelector('.selected')
      selected.classList.remove('selected')
   green.classList.add('selected')
   selected.style.border = 'none'
   green.style.border = 'solid white 3px'
})

let blue = document.querySelector ('.blue')
blue.addEventListener ('click', function () {
   CURRENT_COLOR = 'blue'

   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   selected.style.border = 'none'
   blue.style.border = 'solid white 3px'
   blue.classList.add('selected')
})

let yellow = document.querySelector ('.yellow')
yellow.addEventListener ('click', function () {
   CURRENT_COLOR = 'yellow'
   let selected = document.querySelector('.selected')
   selected.style.border = 'none'
   selected.classList.remove('selected')
   yellow.style.border = 'solid white 3px'
   yellow.classList.add('selected')
})

let blueviolet = document.querySelector ('.blueviolet')
blueviolet.addEventListener ('click', function () {
   CURRENT_COLOR = 'blueviolet'
   let selected = document.querySelector('.selected')
   selected.style.border = 'none'
    blueviolet.style.border = 'solid white 3px'
       selected.classList.remove('selected')
   blueviolet.classList.add('selected')
})

let l = document.querySelector ('.l')
l.addEventListener ('click', function () {
   CURRENT_COLOR = 'white'
   let selected = document.querySelector('.selected')
   selected.style.border = 'none'
   l.style.border = 'solid blue 3px'
          selected.classList.remove('selected')
   l.classList.add('selected')
})

document.querySelector('.c').addEventListener('click', function(){
domtoimage.toJpeg(field)
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
})

