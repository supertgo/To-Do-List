import {projectForm, taskForm} from './modules/forms';
import {createTask, createTaskElement, addTaskToDOM, addTaskToArray} from './modules/task';
import {createProject, createElementProject, appendNewProjectAtDOM} from './modules/project';


const divProjects = document.querySelector('#projects');
const divTasks = document.querySelector('#taks');
const btnAddProjects = document.querySelector('#btnAddProject');
const btnAddTask = document.querySelector('#btnAddTask');
const newListBtn = document.querySelector('#newList');

let projects = []; 
let activeProject = 0;

//addEventpara ambos os botões em direção ao form.js

newListBtn.addEventListener('click', () => projectForm.show());

btnAddTask.addEventListener('click', () => taskForm.show());

function submitProject (name){
    
    const newProject = createProject();
    
    const projectElement = createElementProject(name);
    
    const listSelector = document.querySelector('#listsSelect');
    
    listSelector.appendChild(projectElement);


}

function submitTask (name, description, date) {

    const newTask = createTask(name, description, date);
    console.log(newTask);
    
    
    const newTaskElement = createTaskElement(newTask);

    //colocar a tarefa no array de tarefas (projeto, array)
    //addTaskToArray(projects[activeProject], newTask);

    
    addTaskToDOM(newTaskElement);
}



export {submitTask, submitProject}