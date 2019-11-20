// CLEAR MESSAGES

let messageBox = document.getElementsByClassName('messages')
let messages = messageBox[0].children

function clearMessages(){
    for(i = 0; i < messages.length; i++){
        messages[i].textContent = ""
        messages[i].style.display = "none"
    }
}
let clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click',e => {
    e.preventDefault() 
    clearMessages()
})