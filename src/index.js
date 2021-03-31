import {projectForm, taskForm} from './modules/forms';
import * as Task from './modules/task';
import * as Project  from './modules/project';


const divProjects = document.querySelector('#projects');
const divTasks = document.querySelector('#taks');
const btnAddProjects = document.querySelector('#btnAddProject');
const btnAddTask = document.querySelector('#btnAddTask');
const newListBtn = document.querySelector('#newList');

let projects = []; 
Project.appendProjectToArray(projects,Project.createProject('myList'));



newListBtn.addEventListener('click', () => projectForm.show());
btnAddTask.addEventListener('click', () => taskForm.show());

export function submitProject (name){
    
    const newProject = Project.createProject(name);
    let projectElement = Project.createElementProject(name);
    const listSelector = document.querySelector('#listsSelect');
    
    Project.appendNewProjectAtDOM(projectElement);
    Project.appendProjectToArray(projects, newProject);
}

export function submitTask (name, description, date) {

    const newTask = Task.createTask(name, description, date);
    const newTaskElement = Task.createTaskElement(newTask);

    Task.addTaskToDOM(newTaskElement);
    Task.addTaskToArray(projects[Project.getIndexOfActiveProject(projects)].tasks, newTask);
}

export {projects}
