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


//GOAL
//Interact with axios cdn to add, edit, put new things on, and delete said content.

//GET - be able to access content

//POST - be able to post inputed content 

//PUT - be able to CHANGE content

//DELETE - destroy content

let largeDiv = document.getElementById("largeDiv")

const getInfo = () => {
    axios.get('https://api.vschool.io/randon/todo/')
    .then(response => {
        console.log(response.data)
        const todo = response.data
        displayDom(todo)
    })
    .catch(error =>{
        console.log(error)
    })
}
getInfo()

//Display data to the DOM

const displayDom = (todo) => {
    for (let i = 0; i < todo.length; i++) {
    //create elements
    const container = document.createElement("div")
    const h2 = document.createElement("h2")
    const description = document.createElement("p")
    const price = document.createElement("p")
    const img = document.createElement("img")
    //edit elements (.title, description, etc. from data in axios)
    h2.textContent = todo[i].title
    description.textContent = todo[i].description
    price.textContent = `$${todo[i].price}`
    img.src = todo[i].imgUrl

    if(todo.completed) {
        h2.classList.add("completed")
    }
    //append elements to the DOM
    container.appendChild(h2)
    container.appendChild(description)
    container.appendChild(price)
    container.appendChild(img)
    largeDiv.appendChild(container)
    }
}
