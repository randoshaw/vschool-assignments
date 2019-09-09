const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        const pokemonList = data.objects[0].pokemon

        listDataToDom(pokemonList)
        console.log(pokemonList)
    } else if (xhr.readystate === 4 && xhr.status !== 200) {
        console.log("not applicable")
    }
}

const listDataToDom = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const p = document.createElement("p")
        p.textContent = arr[i].name
        document.body.appendChild(p)
    }
}

// const listData = (arr) => {
//     const h1 = document.createElement("h1")
//     h1.textContent = arr
// }