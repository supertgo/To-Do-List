let btnTrashs = document.querySelectorAll('.btnRemove');
//let divTodos = document.querySelector('.todos');

function taskAdd (nameTask){

    let li = document.createElement('li');
    let divChecked = document.createElement('div');
    let spanName = document.createElement('span');
    let div = document.createElement('div');
    let btnEdit = document.createElement('button');
    let btnTrash = document.createElement('button');
    let iCircle = document.createElement('i');
    let iPencil = document.createElement('i');
    let iTrash = document.createElement('i');

    spanName.textContent = nameTask;

    li.appendChild(divChecked);
    divChecked.appendChild(btnEdit);
    li.appendChild(spanName);
    li.appendChild(div);
    div.appendChild(btnEdit);
    div.appendChild(btnTrash);

    divChecked.classList.add('checked');
    btnTrash.classList.add('btnRemove');
    iCircle.classList.add('fa', 'fa-circle-o');
    iPencil.classList.add('fa','fa-pencil');
    iTrash.classList.add('fa','fa-trash');

    divChecked.appendChild(iCircle);
    btnEdit.appendChild(iPencil);
    btnTrash.appendChild(iTrash);

    taskRemove(btnTrash);

    openEditor(btnEdit, spanName);
    
    setInputToNone();
    
    return li;  
}



function createDiv () {
    return document.createElement('div');
}

function openEditor (btnEdit, spanTaskName) {

    let modal = document.querySelector('.modal');
    let inputNameTaskModal = modal.children[0].children[0].children[0];
    let btnSubmitTask  = document.querySelector('#btnSubmitTask');

    btnEdit.addEventListener('click', () => {

        setModalToBlock(modal);
        putNameOnModalInputName(inputNameTaskModal, spanTaskName);


    }); 
    

    btnSubmitTask.addEventListener('click', () => editTask(spanTaskName, inputNameTaskModal));

    console.log(btnEdit, spanTaskName);

    
}

function editTask (taskName, input){

    taskName.textContent = input.value;
    console.log(taskName);

    let divModal = input.parentNode.parentNode.parentNode;
    console.log(divModal);

    let date = divModal.children[0].children[2].children[0].value;
    console.log(date);

    let task = taskName.parentNode;
    console.log(task);

    let divTodos = document.querySelector('.todos');

    //verficar 
    
    //criar 
    if (date != '')
        whatToDoWithDate(date, task);
    
    else 
        divTodos.children[0].appendChild(task);

    setModalToNone(divModal);

    taskName = ' ';
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

    btn.addEventListener('click', () => {

        let todos = document.querySelector('.todos');
        todos.removeChild(task);

    });
    
}

function setInputToNone  () {

    let inputAddText = document.querySelector('#inputAddTask');
    inputAddText.value = ' ';
}



export default taskAdd;