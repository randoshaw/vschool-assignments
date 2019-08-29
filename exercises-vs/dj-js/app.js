// Mouse Events
let bigOlSquare = document.getElementById("square")

bigOlSquare.addEventListener("mouseover", function (){
    this.style.backgroundColor ='blue';
})
bigOlSquare.addEventListener("mousedown", function (){
    this.style.backgroundColor = 'red';
})
bigOlSquare.addEventListener("mouseup", function (){
    this.style.backgroundColor ='yellow';
})
bigOlSquare.addEventListener("dblclick", function (){
    this.style.backgroundColor ='green';
})

// Scroll Event
window.addEventListener('scroll', function(e) {
    document.getElementById('square').style.backgroundColor ='orange';
  })

// Key Events
document.addEventListener("keydown", function (event) {
    console.log(event.which);
    if(event.which === 66){
        bigOlSquare.style.backgroundColor = 'blue';
    } else if(event.which === 82){
        bigOlSquare.style.background = 'red';
    } else if(event.which === 79){
        bigOlSquare.style.background = 'orange';
    } else if(event.which === 71){
        bigOlSquare.style.background = 'green';
    } else if(event.which === 89){
        bigOlSquare.style.background = 'yellow';
    }
})