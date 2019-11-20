const square = document.getElementById('square')

// Mouse Events
square.addEventListener('mouseover', blue)
square.addEventListener('mousedown', red)
square.addEventListener('mouseup', yellow)
square.addEventListener('dblclick', green)
window.addEventListener('scroll', orange)


function blue() {
    square.style.background = 'blue'
}

function red() {
    square.style.background = 'red'
}

function yellow() {
    square.style.background = 'yellow'
}

function green() {
    square.style.background = 'green'
}

function orange() {
    square.style.background = 'orange'
}

// Key Events
document.addEventListener('keydown', function (e) {
    console.log(e.which)
    if (e.which === 66) {
        square.style.background = 'blue'
    } else if (e.which === 82) {
        square.style.backround = 'red'
    } else if (e.which === 89) {
        square.style.background = 'yellow'
    } else if (e.which === 71) {
        square.style.background = 'green'
    } else if (e.which === 89) {
        square.style.background = 'orange'
    }
})