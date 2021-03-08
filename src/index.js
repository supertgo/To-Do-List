import taskAdd from './modules/task.js';


const btn = document.querySelector("#btnAddTask");
const divTodos = document.querySelector('.todos');
const modal = document.querySelector('.modal');
let inputAddText = document.querySelector('#inputAddTask');


btn.addEventListener('click', ()=> {
    //modal.style.display = 'block';
    divTodos.append(taskAdd(inputAddText.value));
    
});




