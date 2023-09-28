document.addEventListener("DOMContentLoaded", () => {
    const newTaskInput = document.getElementById("newTask") as HTMLInputElement;
    const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
    const taskList = document.getElementById("taskList") as HTMLUListElement;

    //Enable and disable functionality for add button
    newTaskInput.addEventListener("input", () => {
        if (newTaskInput.value.trim() !== "") {
            addTaskBtn.disabled = false;
        } else {
            addTaskBtn.disabled = true;
        }
    });

    //When pres the enter key, new task will add bellow
    newTaskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && newTaskInput.value.trim() !== "") {
            // console.log(newTaskInput.value);
            addTask(newTaskInput.value);
            newTaskInput.value = "";
            addTaskBtn.disabled = true; // Disable the button after adding a task
          
        }
    });

    //The same functionality for the add button
    addTaskBtn.addEventListener("click", () => {
        if (newTaskInput.value.trim() !== "") {
            // console.log(newTaskInput.value);
            addTask(newTaskInput.value);
            newTaskInput.value = "";
            addTaskBtn.disabled = true; // Disable the button after adding a task
        
        }
    });
   
    //Target the delete button to delete the task
    taskList.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target && target.classList.contains("delete-btn")) {
            const taskElement = target.parentElement;
            if (taskElement) {
                deleteTask(taskElement);
            }
        }
    });

    //Appending new text to the todo list
    function addTask(taskText: string) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task">${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
    }

    //Removing the text
    function deleteTask(taskElement: HTMLElement) {
        taskList.removeChild(taskElement);
    }
});
