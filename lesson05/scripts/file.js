
const input = document.querySelector(input.value);

const button = document.querySelector(button);

const list = document.querySelector("#list");


button.addEventListener('click', function() {
    // make sure the input is not blank before doing the following remaining tasks in this list
    if (input == "") {
        // create an li element 
        // populate the li elements textContent or innerHTML with the input
        const li = document.createElement(li).textContent = input;

        // create a delete button
        // populate the button textContent with an X
        const deleteButton = document.createElement(button).textContent = "X";

        // append the li element with the delete button
        li.append(deleteButton);

        // append the list element with the li element just created and appended with text and the delete button
        list.appendChild(li);

        // add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener("click", () => list.removeChild(li))

        // send the focus to the input element
        input.focus();
    }
})
