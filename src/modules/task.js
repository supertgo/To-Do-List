let btnTrashs = document.querySelectorAll('.btnRemove');
let btnPencils = document.querySelectorAll('.btnPencil');
const divTodos = document.querySelector('.todos');
const toDoList = document.querySelector('.todo-list');
const listName = document.querySelector('.select');
const defaultListDiv = document.querySelector('#myList');


let list = createList(listName.textContent);




function taskAdd (){
    defaultListDiv.appendChild(taskCreate());
}

function taskCreate (){

    let li = document.createElement('li');
    let divChecked = document.createElement('div');
    let spanName = document.createElement('span');
    let div = document.createElement('div');
    let btnEdit = document.createElement('button');
    let btnTrash = document.createElement('button');
    let iCircle = document.createElement('i');
    let iPencil = document.createElement('i');
    let iTrash = document.createElement('i');

    spanName.textContent = getValueOfInputTaskAdd();

    li.appendChild(divChecked);
    divChecked.appendChild(btnEdit);
    li.appendChild(spanName);
    li.appendChild(div);
    div.appendChild(btnEdit);
    div.appendChild(btnTrash);

    li.id = Date.now().toString();

    divChecked.classList.add('checked');
    btnTrash.classList.add('btnRemove');
    btnEdit.classList.add('btnPencil');
    iCircle.classList.add('fa', 'fa-circle-o');
    iPencil.classList.add('fa','fa-pencil');
    iTrash.classList.add('fa','fa-trash');

    divChecked.appendChild(iCircle);
    btnEdit.appendChild(iPencil);
    btnTrash.appendChild(iTrash);

    setInputToNone();

    list.tasks.push(li);

    renderTask();
    return li;
}


function renderTask () {
    list.tasks.forEach((task) => {
        const btnEdit = task.children[2].children[0];
    
        btnEdit.addEventListener('click', ()=> {
            openEditor(task);
        })
    });
}


const getValueOfInputTaskAdd = () => {

    return document.querySelector('#inputAddTask').value;
}


function createList (listName) {
    return {id: Date.now(), name: listName, tasks: []}
}

function openEditor (task) {

    let modal = document.querySelector('.modal');

    setModalToBlock(modal);

    editTask(task, modal);

    document.querySelector('#btnSubmitTask').addEventListener('click', () => setModalToNone(modal));

    
    
}

const editTask = (task, modal) => {

    //taskName.textContent = input.value;
    console.log(task);

   

    let date = modal.children[0].children[2].children[0].value;
    

    console.log(date);

    /*if (date != '')
        whatToDoWithDate(date, task);
    
    else 
        divTodos.append(task);

   
    setModalToNone(divModal);*/
    
}

function whatToDoWithDate (date, task) {

    if (!verifyDate(date)) insertNewDiv(date);

    addTaskToContainer(task, date);
}

const addTaskToContainer =  (task, date) => {

    let divTodos = document.querySelector('.todos');

    let index = searchForIdByDiv(divTodos, date);

    if (index != -1)
        divTodos.children[index].appendChild(task);

    else 
        console.log('error');
}

const searchForIdByDiv = (div, date) => {

    for (let i = 0; i < div.childElementCount; i++)
        if (div.children[i].id == date) return i;

    return  -1;
}

const verifyDate = (taskDate) => {

    let divTodos = document.querySelector('.todos');

    for (let i = 0; i < divTodos.childElementCount; i++)
        if (divTodos.children[i].id == taskDate) return true;

    return false;
    
}

const insertNewDiv = (date) => {

    let div = createDiv()
    div.id  = date;
    div.append(insertH4WithDateName(date));

    document.querySelector('.todos').append(div);
}

const insertH4WithDateName = (date) => {
    
    let h4 = document.createElement('h4');
    h4.textContent = date;

    return h4;

}

const setModalToBlock = (modal) => {

    modal.style.display= 'block';
}

const setModalToNone = (modal) => {
    modal.style.display = 'none';
}
const putNameOnModalInputName  = (input, name) => {
    input.value = name.textContent;
}

function taskRemove (btn){

    
    let task = btn.parentNode.parentNode;
    console.log(task);

    btn.addEventListener('click', 
        
        toDoList.remove(task)
    );
    
}

function setInputToNone  () {

    let inputAddText = document.querySelector('#inputAddTask');
    inputAddText.value = ' ';
}

renderTask();

export default taskAdd;