import taskAdd from './modules/task.js';

let inputAddText = document.querySelector('#inputAddTask');
const btn = document.querySelector("#btnAddTask");
const divTodos = document.querySelector('.todos');
const modal = document.querySelector('.modal');
let btnPencils = document.querySelector('.btnPencil');



btn.addEventListener('click', ()=> {

    if (inputAddText.value != '')
        divTodos.append(taskAdd(inputAddText.value));
        
    console.log(btnPencils)
    
    
});


btnPencils.forEach(btn => btn.addEventListener('click', () => console.log('alou')));

