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
    const name = document.querySelector('#inputTaskName');


    const show = () => {
        modalTask.style.display= 'flex';
    }

    const _hide = () => {
        modalTask.style.display= 'none';
    }

    submit.addEventListener('click', () => {
        _hide();

        //submeter tarefa
        submitTask(name);
    });

    return {show}
})();


export {projectForm, taskForm}