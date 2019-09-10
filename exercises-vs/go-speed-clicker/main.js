let display = document.getElementById("number")
let btn = document.getElementById("btn")
let reset = document.getElementById("reset")

reset.addEventListener("click", () => {
    // localStorage.removeItem("count")
    localStorage.setItem("count", 0)
    let zero = localStorage.getItem("count")
    display.textContent = zero
})


let count = localStorage.getItem("count")
console.log(count)


display.textContent = count


    btn.addEventListener("click", () => {
        count = Number( localStorage.getItem("count"))
        console.log(count)
        localStorage.setItem("count", count += 1)
        let currentCount = localStorage.getItem("count")
        display.textContent = currentCount
    })

// btn.addEventListener("click", () => {
//     count++
//     display.textContent = count
// })

// Set a local key and value at zero.
// Set up value to change on click
// Have value displayed on reload