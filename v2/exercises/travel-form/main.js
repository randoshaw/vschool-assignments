const info = document.info

document.info.addEventListener('submit', (e) => {
    e.preventDefault()

    let fName = info.first.value
    let lName = info.last.value
    let age = info.age.value
    let gender = info.gender.value
    let location = info.location.value
    let diet = []

    let checkedBoxes = document.querySelectorAll('input[name=dietary]: checked')
    for (let i = 0; i < checkedBoxes.length; i++) {
        diet.push(checkedBoxes[i].value)
    }

    let infoAlert = `First Name: ${fName}\n Last Name: ${lName}\n Age: ${age}\n Gender: ${gender}\n Location: ${location}\n Dietary Restrictions: ${diet}`

    alert(infoAlert)
})

