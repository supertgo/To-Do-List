import {projects} from '../index';
import * as Task from './task';


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

    array.forEach((item) =>{if(item.name == getActiveProject()) pos = array.indexOf(item)})

    return pos
}

export const updateTasksOfActiveProject = () => {
    
    let project = projects[getIndexOfActiveProject(projects)];
    let divTasks = document.querySelector('#todos');

    for (let child of divTasks.children) child.remove()

    project.tasks.forEach((task) => {Task.addTaskToDOM(Task.createTaskElement(task))})
}

export const render = (array) => {

    array.forEach (project => {
        if (project.name != 'myList')
            appendNewProjectAtDOM(createElementProject(project.name));
    });
}