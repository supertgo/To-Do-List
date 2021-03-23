const createProject = () => {return []}


const createElementProject = (name) => {

    const newProject = document.createElement('option');
    newProject.value = name;

    return newProject;
}


const appendNewProjectAtDOM  = newProject => {

    const listSelector = document.querySelector('#listsSelect');
    listSelector.add(newProject);
}

export {createProject, createElementProject, appendNewProjectAtDOM}