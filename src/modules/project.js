export const createProject = (name) => {
    return {
        name: name,
        tasks: [],
    }
}

export function createElementProject (name){

    const newProject = document.createElement('option');
    newProject.textContent = name;

   
    return newProject;
}

export const appendNewProjectAtDOM  = (newProject) => {

    const listSelector = document.querySelector('#listsSelect');
    
    listSelector.append(newProject);
}

export const appendProjectToArray = (array, newProject) => {
    array.push(newProject);
} 

export const getActiveProject = () => {

    let select = document.querySelector('#listsSelect');

    return select.options[select.selectedIndex].textContent;
}

export const getIndexOfActiveProject = (array) => {
    let pos = -1;

    array.forEach((item) => {if(item.name == getActiveProject()) pos = array.indexOf(item)})

    return pos
}

