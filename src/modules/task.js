//criar objeto tarefa
const createTask = (name, description, date, priority) => {

    return {
        name : name,
        description: description,
        date : date,
        priority: priority,
        id: Date.now().toString,
    }
}
//criar elemetno
const createTaskElement  = (task) => {
    
    const li = document.createElement('li');
    const spanName = document.createElement('span');
    const spanDate = document.createElement('span');
    const divChecked = document.createElement('div');
    const divButtons = document.createElement('div');
    const btnEdit = document.createElement('button');
    const btnRemove = document.createElement('button');
    const iCircle = document.createElement('i');
    const iRemove = document.createElement('i');
    const iEdit = document.createElement('i');


    spanName.textContent = task.name;
    spanDate.textContent = task.date;
    divChecked.classList.add('checked');
    iCircle.classList.add('fa', 'fa-circle-o');
    iEdit.classList.add('fa', 'fa-pencil');
    iRemove.classList.add('fa', 'fa-trash');

    divChecked.appendChild(iCircle);
    divButtons.appendChild(btnEdit);
    divButtons.appendChild(btnRemove);
    li.appendChild(divChecked);
    li.appendChild(spanName);
    li.appendChild(spanDate);
    li.appendChild(divButtons);

    //_taskRemove(btnRemove);

    return li;


}
//addTask
const addTaskToDOM = (task) => {

    const divTodos = document.querySelector('#todos');
    divTodos.appendChild(task);
}

//addTask to array
const addTaskToArray = (array, task) => {
    array.push(task);
}




export{createTask, createTaskElement, addTaskToArray, addTaskToDOM}