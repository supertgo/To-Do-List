import {projectForm, taskForm} from './modules/forms';
import {createTask, createTaskElement} from './modules/task';

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


function sumitTask () {

    //cria tarefa
    const newTask = createTask();
    
    createTaskElement(newTask);
    //passa cria tarefa para o DOM Adcionar

    //colocar a tarefa no array de tarefas (projeto, array)
}