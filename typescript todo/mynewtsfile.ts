// alert("hello");

// import type { AbortSignal } from "";
window.addEventListener("load", () => {
  const form = document.getElementById("new-task-form") as HTMLFormElement;
  const input = document.getElementById("new-task-input") as HTMLInputElement;
  const list_element = document.getElementById("tasks") as HTMLDivElement;

  //   console.log(form);  check if form available or not

  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const taskValue = input.value;
    // console.log(taskValue);

    if (taskValue === "") {
      alert("Please add the task before submission");
      return;
    }

    const task_element = document.createElement("div");
    task_element.classList.add("task");

    const task_element_content = document.createElement("div");
    task_element_content.classList.add("content");

    // task_element_content.innerText = taskValue;

    const task_element_content_input = document.createElement("input");
    task_element_content_input.classList.add("text");
    task_element_content_input.type = "text";
    task_element_content_input.value = taskValue;
    task_element_content_input.setAttribute("readonly", "readonly");

    task_element_content.appendChild(task_element_content_input);

    const task_action_element = document.createElement("div");
    task_action_element.classList.add("actions");

    const task_edit_button = document.createElement("button");
    task_edit_button.classList.add("edit");
    task_edit_button.innerHTML = "Edit";

    const task_delete_button = document.createElement("button");
    task_delete_button.classList.add("delete");
    task_delete_button.innerHTML = "Delete";

    // adding edit and delete button in the div actions
    task_action_element.appendChild(task_edit_button);
    task_action_element.appendChild(task_delete_button);

    task_element.appendChild(task_element_content);

    task_element.appendChild(task_action_element);

    list_element.appendChild(task_element);
    input.value = "";

    task_edit_button.addEventListener("click", () => {
      if (task_edit_button.innerText.toLowerCase() === "edit") {
        task_element_content_input.removeAttribute("readonly");
        task_element_content_input.focus();
        task_edit_button.innerText = "Save";
      } else {
        task_element_content_input.setAttribute("readonly", "readonly");
        task_edit_button.innerText = "Edit";
      }
    });

    task_delete_button.addEventListener("click", () => {
      list_element.removeChild(task_element);
    });
  });
});
