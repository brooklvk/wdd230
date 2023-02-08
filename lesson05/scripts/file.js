
const input = document.querySelector("input");

const button = document.querySelector("button");

const list = document.querySelector("#list");


button.onclick = function() {
    // make sure the input is not blank before doing the following remaining tasks in this list
    let chapter = input.value;
    if (chapter != "") {
        // create an li element 
        const listChapter = document.createElement("li");
        const listSpan = document.createElement("span");

        // create a delete button
        const deleteButton = document.createElement("button");

        listChapter.appendChild(listSpan);

        // populate the li elements textContent or innerHTML with the input
        listSpan.textContent = chapter;
        listChapter.appendChild(deleteButton);
        deleteButton.textContent = "X";
        list.appendChild(listChapter);


        // add an event listener to the delete button that removes the li element when clicked
        deleteButton.onclick = function(e) 
        {list.removeChild(listChapter)}

        
        // populate the button textContent with an X

        // append the li element with the delete button
        

        // append the list element with the li element just created and appended with text and the delete button
        

        // send the focus to the input element
        // input.value = "";
    }
    input.focus();
}