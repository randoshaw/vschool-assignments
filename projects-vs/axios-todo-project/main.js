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
    const checkMe = document.createElement("input")
    const deleteBtn = document.createElement("button")
    //edit elements (.title, description, etc. from data in axios)
    h2.textContent = todo[i].title
    description.textContent = todo[i].description
    price.textContent = `$${todo[i].price}`
    img.src = todo[i].imgUrl
    checkMe.type = "checkbox"
    deleteBtn.textContent = "Delete"
    if(todo[i].completed) {
        h2.classList.add("completed")
        checkMe.checked = true
    }

    checkMe.addEventListener("click", () => {
        h2.classList.toggle("completed")
        updateChecks(todo[i])
    })

    deleteBtn.addEventListener("click", () =>{
        axios.delete(`https://api.vschool.io/randon/todo/${todo[i]._id}`)
        .then(() => {
            container.style.display = "none"
        }) 
        .catch(error => {
            console.log(error)
        })
    })

    //append elements to the DOM
    container.appendChild(h2)
    container.appendChild(checkMe)
    container.appendChild(description)
    container.appendChild(price)
    container.appendChild(img)
    container.appendChild(deleteBtn)
    largeDiv.appendChild(container)
    }
}

document.todoForm.addEventListener("submit", (e) => {
    // prevent load
    e.preventDefault()
    // add form to todo list w/ an object
    const newTodo = {
        title: document.todoForm.title.value,
        description: document.todoForm.description.value,
        price: document.todoForm.price.value,
        imgUrl: document.todoForm.img.value,
        completed: false
    }

    axios.post('https://api.vschool.io/randon/todo/', newTodo)
    .then()
    .catch(error => {
        console.log(error)
    })
    
})

//Post

const updateToYes = {
    completed: true
}

const updateToNo = {
    completed: false
}

const updateChecks = (todo) => {
    if (todo.completed) {
        axios.put(`https://api.vschool.io/randon/todo/${todo._id}`, updateToNo)
        .then(response => {
            console.log(response)
            todo.completed = false
        })
        .catch(error => {
            console.log(error)
        })
    } else {
        axios.put(`https://api.vschool.io/randon/todo/${todo._id}`, updatetoYes)
        .then(response => {
            console.log(response)
            todo.completed = true
        })
        .catch(error => {
            console.log(error)
        })
    }
}

