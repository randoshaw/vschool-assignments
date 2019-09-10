axios.get("https://api.vschool.io/randon/todo/")
.then(response => {
    console.log(response.data)
    loadPage(response)
})
.catch(error => console.log(error))

let largeDiv = document.getElementById("largeDiv")

loadPage = (arr) => {
    for (let i = 0; i < arr.data.length; i++) {
        //create
        let todoContain = document.createElement('div')
        let h2 = document.createElement("h2")
        let describe = document.createElement("p")
        let price = document.createElement("p")
        let img = document.createElement("img")
        img.style.width = '55%'

        //edit
        h2.textContent = arr.data[i].title
        describe.textContent = arr.data[i].description
        price.textContent = "$" + arr.data[i].price
        img.src = arr.data[i].imgUrl

        //append
        todoContain.appendChild(h2)
        todoContain.appendChild(describe)
        todoContain.appendChild(price)
        todoContain.appendChild(img)

        largeDiv.appendChild(todoContain)
    }
}