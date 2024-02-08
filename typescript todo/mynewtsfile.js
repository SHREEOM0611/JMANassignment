// alert("hello");
// import type { AbortSignal } from "";
window.addEventListener("load", function () {
    var form = document.getElementById("new-task-form");
    var input = document.getElementById("new-task-input");
    var list_element = document.getElementById("tasks");
    //   console.log(form);  check if form available or not
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var taskValue = input.value;
        // console.log(taskValue);
        if (taskValue === "") {
            alert("Please add the task before submission");
            return;
        }
        var task_element = document.createElement("div");
        task_element.classList.add("task");
        var task_element_content = document.createElement("div");
        task_element_content.classList.add("content");
        // task_element_content.innerText = taskValue;
        var task_element_content_input = document.createElement("input");
        task_element_content_input.classList.add("text");
        task_element_content_input.type = "text";
        task_element_content_input.value = taskValue;
        task_element_content_input.setAttribute("readonly", "readonly");
        task_element_content.appendChild(task_element_content_input);
        var task_action_element = document.createElement("div");
        task_action_element.classList.add("actions");
        var task_edit_button = document.createElement("button");
        task_edit_button.classList.add("edit");
        task_edit_button.innerHTML = "Edit";
        var task_delete_button = document.createElement("button");
        task_delete_button.classList.add("delete");
        task_delete_button.innerHTML = "Delete";
        // adding edit and delete button in the div actions
        task_action_element.appendChild(task_edit_button);
        task_action_element.appendChild(task_delete_button);
        task_element.appendChild(task_element_content);
        task_element.appendChild(task_action_element);
        list_element.appendChild(task_element);
        input.value = "";
        task_edit_button.addEventListener("click", function () {
            if (task_edit_button.innerText.toLowerCase() === "edit") {
                task_element_content_input.removeAttribute("readonly");
                task_element_content_input.focus();
                task_edit_button.innerText = "Save";
            }
            else {
                task_element_content_input.setAttribute("readonly", "readonly");
                task_edit_button.innerText = "Edit";
            }
        });
        task_delete_button.addEventListener("click", function () {
            list_element.removeChild(task_element);
        });
    });
});
