const btn = document.querySelector("#btnAddTask");
const divTodos = document.querySelector('.todos');

criaTarefa = () => {

    let li = document.createElement('li');
    let divChecked = document.createElement('div');
    let spanName = document.createElement('span');
    let div = document.createElement('div');
    let btnEdit = document.createElement('button');
    let btnTrash = document.createElement('button');
    let iPencil = document.createElement('i');
    let iTrash = document.createElement('i');

    li.appendChild(divChecked);
    divChecked.appendChild(btnEdit);
    li.appendChild(spanName);
    li.appendChild(div);
    div.appendChild(btnEdit);
    div.appendChild(btnTrash);

    divChecked.classList.add('checked');
    iPencil.classList.add('fa.fa-pencil');
    iTrash.classList.add('fa.fa-trash');


    return li;
}



btn.addEventListener('click', ()=> divTodos.append(criaTarefa()));