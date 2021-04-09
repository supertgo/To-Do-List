import { projectForm, taskForm } from "./modules/forms";
import * as Task from "./modules/task";
import * as Project from "./modules/project";

const btnAddTask = document.querySelector("#btnAddTask");
const newListBtn = document.querySelector("#newList");
const select = document.querySelector("#listsSelect");

let projects = [];

select.addEventListener("change", () => {
  Project.updateTasksOfActiveProject();
});

newListBtn.addEventListener("click", () => projectForm.show());
btnAddTask.addEventListener("click", () => taskForm.show());

export function saveStorage() {
  localStorage.setItem("MyList", JSON.stringify(projects));
}

export function submitProject(name) {
  const newProject = Project.createProject(name);
  const projectElement = Project.createElementProject(name);

  Project.appendNewProjectAtDOM(projectElement);
  Project.appendProjectToArray(projects, newProject);

  saveStorage();
}

export function submitTask(name, description, date) {
  const newTask = Task.createTask(name, description, date);
  const newTaskElement = Task.createTaskElement(newTask);

  Task.addTaskToDOM(newTaskElement);
  Task.addTaskToArray(
    projects[Project.getIndexOfActiveProject(projects)].tasks,
    newTask
  );

  saveStorage();
}


function getStorage() {
  return JSON.parse(localStorage.getItem("MyList"));
}

function storage() {
  if (localStorage.MyList) {
    projects = getStorage();
    Project.sortTaskByDate(
      projects[Project.getIndexOfActiveProject(projects)].tasks
    );
    Project.updateTasksOfActiveProject();
    Project.render(projects);
  } else {
    Project.appendProjectToArray(projects, Project.createProject("myList"));
  }
}

storage();

export { projects };
