// PROBLEM 2
// When the user clicks the "Add to the List!" button:
// 1) Add a new li to the .todos ul
// 2) Fill in the li with the text from the input field
// 3) Reset the value of the input field to be empty

function addNewItem(){
    let text = document.querySelector("#new-todo").value;
    const newItem = document.createElement("li");
    newItem.innerText = text;
    newItem.addEventListener("click", function () {
        newItem.style["textDecoration"] = "line-through";
    });
    document.querySelector(".todos").appendChild(newItem);
    document.querySelector("#new-todo").value = null;
}

document.querySelector("#generate-todo").onclick = addNewItem;

// PROBLEM 3
// When the user clicks any of the li items you've added, cross it out (add styling to create the line through effect)
// This will involve attaching a listener to each <li> as you add them
// You will have to modify the code you've written above!
