export const createTask = (name, description, date, priority) => {

    console.log(name);
    return {
        name : name,
        description: description,
        date : date,
        priority: priority,
        id: Date.now().toString(),
    }
}

export const createTaskElement  = (task) => {
    
    const li = document.createElement('li');
    const spanName = document.createElement('span');
    const spanDate = document.createElement('span');
    const divChecked = document.createElement('div');
    const divButtons = document.createElement('div');
    const btnEdit = document.createElement('button');
    const btnRemove = document.createElement('button');
    const btnCheck = document.createElement('button')
    const iCircle = document.createElement('i');
    const iRemove = document.createElement('i');
    const iEdit = document.createElement('i');

    spanName.textContent = task.name;
    spanDate.textContent = task.date;

    divChecked.classList.add('checked');

    iCircle.classList.add('fa','fa-circle-o');
    iEdit.classList.add('fa','fa-pencil');
    iRemove.classList.add('fa','fa-trash');

    btnEdit.classList.add('btnEdit');
    btnRemove.classList.add('btnRemove');
    btnCheck.classList.add('btnCheck');

    divChecked.appendChild(btnCheck);
    btnCheck.appendChild(iCircle);
    divButtons.appendChild(btnEdit);
    divButtons.appendChild(btnRemove);
    btnEdit.appendChild(iEdit);
    btnRemove.appendChild(iRemove);
    li.appendChild(divChecked);
    li.appendChild(spanName);
    li.appendChild(spanDate);
    li.appendChild(divButtons);

    _taskRemove(btnRemove);

    return li;
}

export const addTaskToDOM = (task) => {

    const divTodos = document.querySelector('#todos');
    divTodos.appendChild(task);
}

export const addTaskToArray = (array, task) => {
    array.push(task);
}

const _taskRemove  = (btn) => {

    const task = btn.parentNode.parentNode;

    btn.addEventListener('click', function () {

        const divTodos = document.querySelector('#todos');
        divTodos.removeChild(task);

    });
    
}

