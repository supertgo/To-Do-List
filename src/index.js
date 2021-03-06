import criaTarefa from './modules/task.js';




const btn = document.querySelector("#btnAddTask");
const divTodos = document.querySelector('.todos');
const modal = document.querySelector('.modal');


btn.addEventListener('click', ()=> {
    //modal.style.display = 'block';
    divTodos.append(criaTarefa());
});
