const pokemonRequest = new XMLHttpRequest()
pokemonRequest.open("GET", "https://api.vschool.io/pokemon", true)
pokemonRequest.send()

pokemonRequest.onreadystatechange = () => {
    if(pokemonRequest.readyState === 4 && pokemonRequest.status === 200){
        const JSONdata = pokemonRequest.responseText
        const data = JSON.parse(JSONdata)
        const pokemonArr = data.objects[0].pokemon
        listPokemon(pokemonArr)
    }
}

const listPokemon = (arr) => {
    const pokemonList = document.getElementById("pokemon-list")
    return arr.forEach(pokemon => {
        const pokemonDiv = document.createElement("div")
        const pokemonName = document.createElement("h2")
        pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        pokemonDiv.appendChild(pokemonName)
        pokemonList.appendChild(pokemonDiv)
        pokemonDiv.addEventListener("click", () => {
            pokemonDiv.style.backgroundColor = "yellow"
            pokemonDiv.style.border = "solid 5px yellow"
            pokemonDiv.style.borderRadius = "10px"
        })
    })
}

///// Extra: Highlight Pikachu
const pikachu = document.getElementById("pikachu")
const highlightPikachu = () => {
    pikachu.style.border = "10px solid yellow"
}
pikachu.addEventListener("click", highlightPikachu)

