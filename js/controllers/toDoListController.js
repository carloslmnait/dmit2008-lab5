import { addToDo } from "../models/toDoListModel";

// addToDo Controller
export function addToDoController() {
    //  create form dialog, close button and show
    const createFormDialog = document.querySelector('#create-to-do');
    const closeButton = createFormDialog.querySelector('button[id="close"]');
    createFormDialog.showModal();

    // close button event listener
    closeButton.addEventListener('click', () => {
        createFormDialog.close(); 
    });

    // declare and add event listener to create todo form
    // it prevents the user to upload in the database if input fields are left empty
    const createForm = document.querySelector('#create-form');
    createForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // extract values from the form
        const category = event.target.elements.category.value.trim();
        const status = event.target.elements.status.value.trim();
        const todo = event.target.elements.todo.value.trim();

        // Check if any of the fields are empty
        if (!category || !status || !todo) {
            alert("Fields cannot be empty. Please fill in all fields.");
            return; // Stop the function if empty
        }

        const addedToDo = { category, status, todo };

        addToDo(addedToDo); 
        createForm.reset(); 
    });
}
