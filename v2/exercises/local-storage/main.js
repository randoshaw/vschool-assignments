// localStorage.setItem('name', 'Randon')
// localStorage.removeItem('name')
// console.log(localStorage)

// localStorage.setItem('age', '29')
// localStorage.setItem('name', 'Randon')

// console.log(localStorage.key(1));

const inpKey = document.getElementById('inpKey')
const inpValue = document.getElementById('inpValue')
const btnInsert = document.getElementById('btnInsert')
const lsOutput = document.getElementById('lsOutput')

btnInsert.onclick = function () {
    const key = inpKey.value
    const value = inpValue.value

    // console.log(key)
    // console.log(value)

    if (key && value) {
        localStorage.setItem(key, value)
        location.reload()
    }
}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)

    lsOutput.innerHTML += `${key}: ${value} <br />`
}