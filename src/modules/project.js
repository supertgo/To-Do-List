const createProject = (name) => {
    return {
        name: name,
        tasks: [],
    }
}


function createElementProject (name){

    const newProject = document.createElement('option');
    newProject.textContent = name;

   
    return newProject;
}


const appendNewProjectAtDOM  = (newProject) => {

    const listSelector = document.querySelector('#listsSelect');
    
    listSelector.append(newProject);
}


const appendProjectToArray = (array, newProject) => {
    array.push(newProject);
} 
export {createProject, createElementProject, appendNewProjectAtDOM, appendProjectToArray}