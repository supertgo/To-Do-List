import taskAdd from './modules/task.js';

let inputAddText = document.querySelector('#inputAddTask');
const btn = document.querySelector("#btnAddTask");
const divTodos = document.querySelector('.todos');
const modal = document.querySelector('.modal');



btn.addEventListener('click', ()=> {

    if (inputAddText.value != '')
        divTodos.append(taskAdd(inputAddText.value));
    
});




