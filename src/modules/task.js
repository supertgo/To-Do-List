function criaTarefa (){

    let li = document.createElement('li');
    let divChecked = document.createElement('div');
    let spanName = document.createElement('span');
    let div = document.createElement('div');
    let btnEdit = document.createElement('button');
    let btnTrash = document.createElement('button');
    let iCircle = document.createElement('i');
    let iPencil = document.createElement('i');
    let iTrash = document.createElement('i');

    li.appendChild(divChecked);
    divChecked.appendChild(btnEdit);
    li.appendChild(spanName);
    li.appendChild(div);
    div.appendChild(btnEdit);
    div.appendChild(btnTrash);

    divChecked.classList.add('checked');
    

    iCircle.classList.add('fa', 'fa-circle-o');
    iPencil.classList.add('fa','fa-pencil');
    iTrash.classList.add('fa','fa-trash');

    divChecked.appendChild(iCircle);
    btnEdit.appendChild(iPencil);
    btnTrash.appendChild(iTrash);

    return li;  
}

export default criaTarefa;