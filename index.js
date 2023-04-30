const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something");
    } else {
        // create list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // create span tag to cross/delete
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // empty input box
    inputBox.value = "";
    // saving data to localStorage
    saveData()
}

// Checking & removing list items
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }    
}, false);

// Saving data to local storage
function saveData() {
    localStorage.setItem("inputData", listContainer.innerHTML);
}

// Showing data again after closing/reopening the app
function showTask() {
    listContainer.innerHTML = localStorage.getItem("inputData");
}
showTask();








