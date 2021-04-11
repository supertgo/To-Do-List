import { submitTask, submitProject } from "../index";
import { returnTaskByName } from "./task";

export const projectForm = (() => {
  const projectForm = document.querySelector(".modalProject");
  const submit = document.querySelector("#btnSubmitProject");
  const name = document.querySelector("#inputProjectName");
  const close = document.querySelector("#modalprojectbtnclose");

  const show = () => {
    projectForm.style.display = "flex";
  };

  const _hide = () => {
    projectForm.style.display = "none";
  };

  submit.addEventListener("click", () => {
    _hide();

    if (name != " ") submitProject(name.value);
  });

  close.addEventListener('click', ()=> _hide());

  return { show };
})();

export const taskForm = (() => {
  const modalTask = document.querySelector(".modalTask");
  const submit = document.querySelector("#btnSubmitTask");
  const inputTask = document.querySelector("#inputTask");
  const name = document.querySelector("#inputTaskName");
  const date = document.querySelector("#taskDate");
  const description = document.querySelector("#description");
  const close = document.querySelector("#modaltaskbtnclose");

  const _setInputName = () => {
    name.value = inputTask.value;
  };

  const show = () => {
    _setInputName();
    modalTask.style.display = "flex";
  };

  const _resetInput = () => {
    inputTask.value = "";
  };

  const _hide = () => {
    _resetInput();
    modalTask.style.display = "none";
  };
  submit.addEventListener("click", () => {
    _hide();

    if (name.value != "") submitTask(name.value, description.value, date.value);
  });

  close.addEventListener('click', ()=> _hide());

  return { show };
})();

export const editForm = (taskName) => {
  const div = document.querySelector(".modalEdit");
  const submit = document.querySelector("#btnSubmitNewTask");
  const name = document.querySelector("#inputNewTaskName");
  const date = document.querySelector("#newTaskDate");
  const description = document.querySelector("#newDescription");
  const close = document.querySelector("#modaleditbtnclose");

  const _setInputs = (task) => {
    name.value = task.name;
    description.value = task.description;
    date.value = task.date;
  };

  const show = () => {
    _setInputs(returnTaskByName(taskName.textContent));
    div.style.display = "flex";
  };

  const _hide = () => {
    div.style.display = "none";
  };

  const _copyValues = (task) => {
    task.name = name.value;
    task.description = description.value;
    task.date = date.value;
  };
  const _updateTask = (name) => {
    _copyValues(returnTaskByName(name));
  };

  const _updateElement = (task) => {
    if (name != "") task.children[1].textContent = name.value;
    task.children[2].textContent = date.value;
  };

  submit.addEventListener("click", () => {
    _updateTask(taskName.textContent);
    _updateElement(taskName.parentNode);
    _hide();
  });

  close.addEventListener("click", ()=> _hide());

  return { show };
};
