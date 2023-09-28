"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const newTaskInput = document.getElementById("newTask");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    newTaskInput.addEventListener("input", () => {
        if (newTaskInput.value.trim() !== "") {
            addTaskBtn.disabled = false;
        }
        else {
            addTaskBtn.disabled = true;
        }
    });
    newTaskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && newTaskInput.value.trim() !== "") {
            addTask(newTaskInput.value);
            newTaskInput.value = "";
            addTaskBtn.disabled = true;
        }
    });
    addTaskBtn.addEventListener("click", () => {
        if (newTaskInput.value.trim() !== "") {
            addTask(newTaskInput.value);
            newTaskInput.value = "";
            addTaskBtn.disabled = true;
        }
    });
    taskList.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.classList.contains("delete-btn")) {
            const taskElement = target.parentElement;
            if (taskElement) {
                deleteTask(taskElement);
            }
        }
    });
    function addTask(taskText) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task">${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
    }
    function deleteTask(taskElement) {
        taskList.removeChild(taskElement);
    }
});
//# sourceMappingURL=main.js.map