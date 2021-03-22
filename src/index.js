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


function submitTask (name, description, date) {

    const newTask = createTask(name, description, date);
    console.log(newTask);
    
    
    const newTaskElement = createTaskElement(newTask);

    //colocar a tarefa no array de tarefas (projeto, array)
    //addTaskToArray(projects[activeProject], newTask);

    
    addTaskToDOM(newTaskElement);
}



export {submitTask}