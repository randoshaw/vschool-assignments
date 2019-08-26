// Colors

const purpleBtn = document.getElementById("purple")
const greenBtn = document.getElementById("green")
const blueBtn = document.getElementById("blue")
const redBtn = document.getElementById("red")

purple.addEventListener("click", function() {
    document.body.style.backgroundColor = "rebeccapurple"
})

green.addEventListener("click", function () {
    document.body.style.backgroundColor = "forestgreen"
})

blue.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue"
})

red.addEventListener("click", function() {
    document.body.style.backgroundColor = "firebrick"
})

white.addEventListener("click", function() {
    document.body.style.backgroundColor = "white"
})

// Counter

let count = 0;
let subtractBtn = document.getElementById("subtract")
let addBtn = document.getElementById("add")

subtractBtn.addEventListener("click", function() {
    count--
    document.getElementById("counter").innerText = count;
})

addBtn.addEventListener("click", function() {
    count++
    document.getElementById("counter").innerText = count;
})