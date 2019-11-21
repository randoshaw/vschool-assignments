const addAnswer = document.getElementById('addAnswer')
const subtractAnswer = document.getElementById('subtractAnswer')
const multiplyAnswer = document.getElementById('multiplyAnswer')

const addForm = document.add
const subtractForm = document.subtract
const multiplyForm = document.multiply


addForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let addResult = Number(addForm.addOne.value) + Number(addForm.addTwo.value)
    addAnswer.textContent = addResult
})

subtractForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let subtractResult = Number(subtractForm.subtractOne.value) - Number(subtractForm.subtractTwo.value)
    subtractAnswer.textContent = subtractResult 
})

multiplyForm.addEventListener('submit', (e) => {    e.preventDefault()
    let multiplyResult = Number(multiplyForm.multiplyOne.value) * Number(multiplyForm.multiplyTwo.value)
    multiplyAnswer.textContent = multiplyResult
})