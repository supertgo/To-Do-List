import {submitTask} from '../index';

const projectForm = (() => {

    const projectForm = document.querySelector('.modalProject');

    const show = () =>  {
        projectForm.style.display = 'flex';
    }

    return {show}
})();


const taskForm = (() => {

    const modalTask = document.querySelector('.modalTask');
    const submit = document.querySelector('#btnSubmitTask');
    const inputTask = document.querySelector('#inputTask');
    const name = document.querySelector('#inputTaskName');
    const date = document.querySelector('#date');
    const description = document.querySelector('#description');
   
    
    const show = () => {
        _setInputName();
        modalTask.style.display= 'flex';
    }

    const _hide = () => {
        modalTask.style.display= 'none';
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


export {projectForm, taskForm}