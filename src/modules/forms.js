

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


    const show = () => {
        modalTask.style.display= 'flex';
    }

    const _hide = () => {
        modalTask.style.display= 'none';
    }

    submit.addEventListener('click', () => {
        _hide();

        //submeter tarefa
    });

    return {show}
})();


export {projectForm, taskForm}