
const input = document.querySelector("input");

const button = document.querySelector("button");

const list = document.querySelector("#list");


button.onclick = function() {
    // make sure the input is not blank before doing the following remaining tasks in this list
    let chapter = input.value;
    if (chapter != "") {
        // create an li element 
        const li = document.createElement("li");
        const liSpan = document.createElement("span");

        // create a delete button
        const deleteButton = document.createElement("button");

        li.appendChild(liSpan);

        // populate the li elements textContent or innerHTML with the input
        liSpan.textContent = chapter;

        // append the li element with the delete button
        li.appendChild(deleteButton);

        // populate the button textContent with an X
        deleteButton.textContent = "X";

        // append the list element with the li element just created and appended with text and the delete button
        list.appendChild(li);


        // add an event listener to the delete button that removes the li element when clicked
        deleteButton.onclick = function(e) 
        {list.removeChild(li)}

        // send the focus to the input element
        input.value = "";
    }
    input.focus();
}