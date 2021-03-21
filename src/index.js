import {projectForm, taskForm} from './modules/forms';
import {createTask, createTaskElement, addTaskToDOM, addTaskToArray} from './modules/task';

const divProjects = document.querySelector('#projects');
const divTasks = document.querySelector('#taks');
const btnAddProjects = document.querySelector('#btnAddProject');
const btnAddTask = document.querySelector('#btnAddTask');


let projects = []; 
let activeProject = 0;

//addEventpara ambos os botões em direção ao form.js

btnAddProjects.addEventListener('click', function (){
    projectForm.show();
});

btnAddTask.addEventListener('click', () => taskForm.show());


function submitTask (name) {

    //cria tarefa
    const newTask = createTask(name);
    
    //passa cria tarefa para o DOM Adcionar
    const newTaskElement = createTaskElement(newTask);

    //colocar a tarefa no array de tarefas (projeto, array)
    //addTaskToArray(projects[activeProject], newTask);

    //colocar no DOM
    addTaskToDOM(newTaskElement);
}



export {submitTask}