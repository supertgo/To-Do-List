import {submitTask, submitProject} from '../index';

const projectForm = (() => {

    const projectForm = document.querySelector('.modalProject');
    const submit = document.querySelector('#btnSubmitProject');
    const name = document.querySelector('#inputProjectName');


    const show = () =>  {
        projectForm.style.display = 'flex';
    }

    const _hide = () => {
        projectForm.style.display = 'none';
    }

    submit.addEventListener('click', function (){
        _hide();

        submitProject(name.value);
    });

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


export {projectForm, taskForm}