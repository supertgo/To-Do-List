//criar objeto tarefa
const createTask = (name, description, date, priority) => {

    return {
        name : name,
        description: description,
        date : date,
        priority: priority,
        id: Date.now().toString,
    }
}
//criar elemetno
const createTaskElement  = (task) => {
    
}
//addTask

//addTask to array


export{createTask, createTaskElement}