import { addToDo } from "../models/toDoListModel";

export function addToDoController() {
    const createFormDialog = document.querySelector('#create-to-do');
    const closeButton = createFormDialog.querySelector('button[id="close"]');
    const exitButton = createFormDialog.querySelector('button[id="exit"]');
    createFormDialog.showModal();

    closeButton.addEventListener('click', () => {
        createFormDialog.close(); 
    });

    exitButton.addEventListener('click', () => {
        createFormDialog.close();
    });

    const createForm = document.querySelector('#create-form');
    createForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const category = event.target.elements.category.value.trim();
        const status = event.target.elements.status.value.trim();
        const todo = event.target.elements.todo.value.trim();

        if (!category || !status || !todo) {
            alert("Fields cannot be empty. Please fill in all fields.");
            return;
        }

        const addedToDo = { category, status, todo };

        addToDo(addedToDo); 
        createForm.reset();
        //call toast
        showToast();
    });
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 5000);
}
