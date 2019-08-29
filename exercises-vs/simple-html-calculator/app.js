document.calculator.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(e)
    let addX = calculator.addX.valueAsNumber
    let addY = calculator.addY.valueAsNumber
    let subX = calculator.subX.valueAsNumber
    let subY = calculator.subY.valueAsNumber
    let multX = calculator.multX.valueAsNumber
    let multY = calculator.multY.valueAsNumber

    resultAdd = addX + addY
    resultSub = subX - subY
    resultMult = multX * multY

    console.log(resultAdd)
    console.log(resultSub)
    console.log(resultMult)

    calculator.addResult.value = resultAdd
    calculator.subResult.value = resultSub
    calculator.multResult.value = resultMult
})
