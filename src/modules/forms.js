import {submitTask, submitProject} from '../index';
import returnTaskByName from './task';


export const projectForm = (() => {

    const projectForm = document.querySelector('.modalProject');
    const submit = document.querySelector('#btnSubmitProject');
    const name = document.querySelector('#inputProjectName');


    const show = () =>  {
        projectForm.style.display = 'flex';
    }

    const _hide = () => {
        projectForm.style.display = 'none';
    }

    submit.addEventListener('click', () =>{
        _hide();
        submitProject(name.value);
    });

    return {show}
})();


export const taskForm = (() => {

    const modalTask = document.querySelector('.modalTask');
    const submit = document.querySelector('#btnSubmitTask');
    const inputTask = document.querySelector('#inputTask');
    const name = document.querySelector('#inputTaskName');
    const date = document.querySelector('#taskDate');
    const description = document.querySelector('#description');
   
    
    const show = () => {
        _setInputName();
        modalTask.style.display= 'flex';
    }

    const _hide = () => {

        _resetInput();
        modalTask.style.display= 'none';
    }

    const _resetInput = () => {
        inputTask.value = '';
    }

    const _setInputName = () => {
        name.value = inputTask.value;
    }
    submit.addEventListener('click', () => {
        _hide();
        submitTask(name.value, description.value, date.value);
    });

    return {show}
})();

export const editForm = (taskName) => {

    const div = document.querySelector('.modalEdit');
    const submit = document.querySelector('#btnSubmitNewTask');
    const inputTask = document.querySelector('#inputNewTask');
    const name = document.querySelector('#inputNewTaskName');
    const date = document.querySelector('#newTaskDate');
    const description = document.querySelector('#newDescription');
   
    
    console.log(taskName)

    const show = () => {
        _setInputName(taskName.textContent);
        div.style.display= 'flex';
    }

    const _hide = () => {
        //_resetInput();
        div.style.display= 'none';
    }

    const _resetInput = () => {
        inputTask.value = '';
    }

    const _setInputName = (taskName) => {
        name.value = taskName;
    }

    const _copyValues =  () => {

        task.name = name;
        task.description = description;
        task.date = date;

    }
    const _updateTask = () => {
      let a = returnTaskByName();

      console.log(a);
    }

    const _updateElement = () => {

        task.children[1].textContent = name;
        task.children[2].textContent = date.value;
    }
    //mudar no objeto e no elemento
    submit.addEventListener('click', () => {
        
        console.log(taskName)
        _updateTask(taskName);


        _updateElement();
        _hide();
    });

    return {show}
};


