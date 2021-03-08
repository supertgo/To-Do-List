let btnTrashs = document.querySelectorAll('.btnRemove');

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

    openEditor(btnEdit);
    
    setInputToNone();
    
    return li;  
}

function openEditor (btn) {

    let modal = document.querySelector('.modal');

    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    }); 
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