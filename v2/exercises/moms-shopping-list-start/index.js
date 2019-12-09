// pt. 1
// A user will be able to add list items to the pre-built ul using the pre-built form
// New list items should have the same format as the li's that came with the git repo

const shoppingList = document.getElementById("list");
const addItemForm = document.addItem;

addItemForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.getElementById("title");
    const newListItem = document.createElement("li");
    newListItem.classList.add("list-item");
    const itemName = document.createElement("div");
    itemName.textContent = input.value;
    input.value = "";
    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.classList.add("edit-button");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("x-button");
    newListItem.appendChild(itemName);
    newListItem.appendChild(editBtn);
    newListItem.appendChild(deleteBtn);
    shoppingList.appendChild(newListItem);
    deleteBtn.addEventListener("click", function(e) {
        e.target.parentNode.remove();
    });
});

//pt. 2
// A user will be able to delete items using an items delete button

const xButtons = document.getElementsByClassName("x-button");

for (let i = 0; i < xButtons.length; i++) {
    xButtons[i].addEventListener("click", function(e) {
        e.target.parentNode.remove();
    });
}
