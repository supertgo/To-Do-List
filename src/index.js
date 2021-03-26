import {projectForm, taskForm} from './modules/forms';
import {createTask, createTaskElement, addTaskToDOM, addTaskToArray} from './modules/task';
import {createProject, createElementProject, appendNewProjectAtDOM, appendProjectToArray} from './modules/project';


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
    
    const newProject = createProject(name);
    
    let projectElement = createElementProject(name);
    
    const listSelector = document.querySelector('#listsSelect');
    
    appendNewProjectAtDOM(projectElement);

    appendProjectToArray(projects, newProject);


}

function submitTask (name, description, date) {

    const newTask = createTask(name, description, date);
    console.log(newTask);
    
    
    const newTaskElement = createTaskElement(newTask);

    //colocar a tarefa no array de tarefas (projeto, array)
    //addTaskToArray(projects[activeProject].task, newTask);

    
    addTaskToDOM(newTaskElement);

    console.log(getAtualProject())
    console.log(projects)
    console.log(projects.indexOf(getAtualProject()))
}

function getAtualProject () {
    
    let selector = document.querySelector('#listsSelect');

    return selector.options[selector.selectedIndex].value;
}

export {submitTask, submitProject}