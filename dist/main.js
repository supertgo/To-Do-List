/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitProject\": () => (/* binding */ submitProject),\n/* harmony export */   \"submitTask\": () => (/* binding */ submitTask),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ \"./src/modules/forms.js\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n\n\n\n\n\nconst divProjects = document.querySelector('#projects');\nconst divTasks = document.querySelector('#taks');\nconst btnAddProjects = document.querySelector('#btnAddProject');\nconst btnAddTask = document.querySelector('#btnAddTask');\nconst newListBtn = document.querySelector('#newList');\n\nlet projects = []; \n_modules_project__WEBPACK_IMPORTED_MODULE_2__.appendProjectToArray(projects,_modules_project__WEBPACK_IMPORTED_MODULE_2__.createProject('myList'));\n\n\n\nnewListBtn.addEventListener('click', () => _modules_forms__WEBPACK_IMPORTED_MODULE_0__.projectForm.show());\nbtnAddTask.addEventListener('click', () => _modules_forms__WEBPACK_IMPORTED_MODULE_0__.taskForm.show());\n\nfunction submitProject (name){\n    \n    const newProject = _modules_project__WEBPACK_IMPORTED_MODULE_2__.createProject(name);\n    let projectElement = _modules_project__WEBPACK_IMPORTED_MODULE_2__.createElementProject(name);\n    const listSelector = document.querySelector('#listsSelect');\n    \n    _modules_project__WEBPACK_IMPORTED_MODULE_2__.appendNewProjectAtDOM(projectElement);\n    _modules_project__WEBPACK_IMPORTED_MODULE_2__.appendProjectToArray(projects, newProject);\n}\n\nfunction submitTask (name, description, date) {\n\n    const newTask = _modules_task__WEBPACK_IMPORTED_MODULE_1__.createTask(name, description, date);\n    const newTaskElement = _modules_task__WEBPACK_IMPORTED_MODULE_1__.createTaskElement(newTask);\n\n    _modules_task__WEBPACK_IMPORTED_MODULE_1__.addTaskToDOM(newTaskElement);\n    _modules_task__WEBPACK_IMPORTED_MODULE_1__.addTaskToArray(projects[_modules_project__WEBPACK_IMPORTED_MODULE_2__.getIndexOfActiveProject(projects)].tasks, newTask);\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm),\n/* harmony export */   \"taskForm\": () => (/* binding */ taskForm),\n/* harmony export */   \"editForm\": () => (/* binding */ editForm)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\n\n\nconst projectForm = (() => {\n\n    const projectForm = document.querySelector('.modalProject');\n    const submit = document.querySelector('#btnSubmitProject');\n    const name = document.querySelector('#inputProjectName');\n\n\n    const show = () =>  {\n        projectForm.style.display = 'flex';\n        \n    }\n\n    const _hide = () => {\n        projectForm.style.display = 'none';\n    }\n\n    submit.addEventListener('click', () =>{\n        _hide();\n\n        if (name != ' ')\n            (0,_index__WEBPACK_IMPORTED_MODULE_0__.submitProject)(name.value);\n    });\n\n    return {show}\n})();\n\n\nconst taskForm = (() => {\n\n    const modalTask = document.querySelector('.modalTask');\n    const submit = document.querySelector('#btnSubmitTask');\n    const inputTask = document.querySelector('#inputTask');\n    const name = document.querySelector('#inputTaskName');\n    const date = document.querySelector('#taskDate');\n    const description = document.querySelector('#description');\n   \n    \n    const show = () => {\n        _setInputName();\n        modalTask.style.display= 'flex';\n    }\n\n    const _hide = () => {\n\n        _resetInput();\n        modalTask.style.display= 'none';\n    }\n\n    const _resetInput = () => {\n        inputTask.value = '';\n    }\n\n    const _setInputName = () => {\n        name.value = inputTask.value;\n    }\n    submit.addEventListener('click', () => {\n        _hide();\n        \n\n        if (name.value != '')\n            (0,_index__WEBPACK_IMPORTED_MODULE_0__.submitTask)(name.value, description.value, date.value);\n    });\n\n    return {show}\n})();\n\nconst editForm = (taskName) => {\n\n    const div = document.querySelector('.modalEdit');\n    const submit = document.querySelector('#btnSubmitNewTask');\n    const inputTask = document.querySelector('#inputNewTask');\n    const name = document.querySelector('#inputNewTaskName');\n    const date = document.querySelector('#newTaskDate');\n    const description = document.querySelector('#newDescription');\n   \n    \n    console.log(taskName)\n\n    const show = () => {\n        _setInputName(taskName.textContent);\n        div.style.display= 'flex';\n    }\n\n    const _hide = () => {\n        //_resetInput();\n        div.style.display= 'none';\n    }\n\n    const _resetInput = () => {\n        inputTask.value = '';\n    }\n\n    const _setInputName = (taskName) => {\n        name.value = taskName;\n    }\n\n    const _copyValues =  (task) => {\n\n        task.name = name.value;\n        task.description = description.value;\n        task.date = date.value;\n\n        console.log(task);\n\n    }\n    const _updateTask = (name) => {\n        _copyValues((0,_task__WEBPACK_IMPORTED_MODULE_1__.returnTaskByName)(name));\n    }\n\n    const _updateElement = (task) => {\n\n        if (name != '')\n            task.children[1].textContent = name.value;\n        task.children[2].textContent = date.value;\n\n    }\n    \n    submit.addEventListener('click', () => {\n\n        _updateTask(taskName.textContent);\n        _updateElement(taskName.parentNode);\n        _hide();\n\n    });\n\n    return {show}\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/forms.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createElementProject\": () => (/* binding */ createElementProject),\n/* harmony export */   \"appendNewProjectAtDOM\": () => (/* binding */ appendNewProjectAtDOM),\n/* harmony export */   \"appendProjectToArray\": () => (/* binding */ appendProjectToArray),\n/* harmony export */   \"getActiveProject\": () => (/* binding */ getActiveProject),\n/* harmony export */   \"getIndexOfActiveProject\": () => (/* binding */ getIndexOfActiveProject)\n/* harmony export */ });\nconst createProject = (name) => {\n    return {\n        name: name,\n        tasks: [],\n    }\n}\n\nfunction createElementProject (name){\n\n    const newProject = document.createElement('option');\n    newProject.textContent = name;\n\n   \n    return newProject;\n}\n\nconst appendNewProjectAtDOM  = (newProject) => {\n\n    const listSelector = document.querySelector('#listsSelect');\n    \n    listSelector.append(newProject);\n}\n\nconst appendProjectToArray = (array, newProject) => {\n    array.push(newProject);\n} \n\nconst getActiveProject = () => {\n\n    let select = document.querySelector('#listsSelect');\n\n    return select.options[select.selectedIndex].textContent;\n}\n\nconst getIndexOfActiveProject = (array) => {\n    let pos = -1;\n\n    array.forEach((item) =>{if(item.name == getActiveProject()) pos = array.indexOf(item)})\n\n    return pos\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"createTaskElement\": () => (/* binding */ createTaskElement),\n/* harmony export */   \"addTaskToDOM\": () => (/* binding */ addTaskToDOM),\n/* harmony export */   \"addTaskToArray\": () => (/* binding */ addTaskToArray),\n/* harmony export */   \"returnTaskByName\": () => (/* binding */ returnTaskByName)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ \"./src/modules/forms.js\");\n\n\n\n\nconst createTask = (name, description, date, priority) => {\n\n    return {\n        name : name,\n        description: description,\n        date : date,\n        priority: priority,\n        checked: false,\n        id: Date.now().toString(),\n    }\n}\n\nconst createTaskElement  = (task) => {\n    \n    const li = document.createElement('li');\n    const spanName = document.createElement('span');\n    const spanDate = document.createElement('span');\n    const divChecked = document.createElement('div');\n    const divButtons = document.createElement('div');\n    const btnEdit = document.createElement('button');\n    const btnRemove = document.createElement('button');\n    const btnCheck = document.createElement('button')\n    const iCircle = document.createElement('i');\n    const iRemove = document.createElement('i');\n    const iEdit = document.createElement('i');\n\n    spanName.textContent = task.name;\n    spanDate.textContent = task.date;\n\n    //divChecked.classList.add('checked');\n\n    iCircle.classList.add('fa','fa-circle-o');\n    iEdit.classList.add('fa','fa-pencil');\n    iRemove.classList.add('fa','fa-trash');\n\n    btnEdit.classList.add('btnEdit');\n    btnRemove.classList.add('btnRemove');\n    btnCheck.classList.add('btnCheck');\n\n    divChecked.appendChild(btnCheck);\n    btnCheck.appendChild(iCircle);\n    divButtons.appendChild(btnEdit);\n    divButtons.appendChild(btnRemove);\n    btnEdit.appendChild(iEdit);\n    btnRemove.appendChild(iRemove);\n    li.appendChild(divChecked);\n    li.appendChild(spanName);\n    li.appendChild(spanDate);\n    li.appendChild(divButtons);\n\n    _taskRemove(btnRemove);\n    _checkBtn(btnCheck);\n    _editTask(btnEdit);\n\n    return li;\n}\n\nconst addTaskToDOM = (task) => {\n\n    const divTodos = document.querySelector('#todos');\n    divTodos.appendChild(task);\n}\n\nconst addTaskToArray = (array, task) => {\n    array.push(task);\n}\n\nconst _taskRemove  = (btn) => {\n\n    const task = btn.parentNode.parentNode;\n\n    btn.addEventListener('click', function () {\n\n        const divTodos = document.querySelector('#todos');\n        divTodos.removeChild(task);\n\n    });\n    \n}\nconst _checkTask = (taskElement, task) => {\n\n    task.checked = true;\n    taskElement.classList.add('checked');\n    taskElement.classList.remove('unchecked');\n}\n\nconst _uncheckTask = (taskElement, task) => {\n\n    task.checked = false;\n    taskElement.classList.add('unchecked');\n    taskElement.classList.remove('checked');\n}\n\nconst _checkBtn = (btn) => {\n\n    let taskElement = btn.parentNode.parentNode;\n\n    btn.addEventListener('click', () => {\n\n        let task = returnTaskByName(taskElement.children[1].textContent);\n\n        if(task != null){\n            if (task.checked == false) _checkTask(taskElement, task);\n            else _uncheckTask(taskElement, task);\n        }\n        \n    })\n}\n\nconst returnTaskByName = (name) => {\n\n    let task = null;\n    _index__WEBPACK_IMPORTED_MODULE_0__.projects[_project__WEBPACK_IMPORTED_MODULE_1__.getIndexOfActiveProject(_index__WEBPACK_IMPORTED_MODULE_0__.projects)].tasks.forEach((item) => {if (item.name == name) {task = item}})\n\n    return task;\n\n}\n\nconst _editTask = (btn) => {\n\n    let taskElement = btn.parentNode.parentNode;\n\n    console.log(taskElement);\n    btn.addEventListener('click', () => {\n        (0,_forms__WEBPACK_IMPORTED_MODULE_2__.editForm)(taskElement.children[1]).show();\n\n    });\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;