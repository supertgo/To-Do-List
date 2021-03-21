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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitTask\": () => (/* binding */ submitTask)\n/* harmony export */ });\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ \"./src/modules/forms.js\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n\n\n\nconst divProjects = document.querySelector('#projects');\nconst divTasks = document.querySelector('#taks');\nconst btnAddProjects = document.querySelector('#btnAddProject');\nconst btnAddTask = document.querySelector('#btnAddTask');\n\n\nlet projects = []; \nlet activeProject = 0;\n\n//addEventpara ambos os botões em direção ao form.js\n\nbtnAddProjects.addEventListener('click', function (){\n    _modules_forms__WEBPACK_IMPORTED_MODULE_0__.projectForm.show();\n});\n\nbtnAddTask.addEventListener('click', () => _modules_forms__WEBPACK_IMPORTED_MODULE_0__.taskForm.show());\n\n\nfunction submitTask (name) {\n\n    //cria tarefa\n    const newTask = (0,_modules_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(name);\n    \n    //passa cria tarefa para o DOM Adcionar\n    const newTaskElement = (0,_modules_task__WEBPACK_IMPORTED_MODULE_1__.createTaskElement)(newTask);\n\n    //colocar a tarefa no array de tarefas (projeto, array)\n    //addTaskToArray(projects[activeProject], newTask);\n\n    //colocar no DOM\n    (0,_modules_task__WEBPACK_IMPORTED_MODULE_1__.addTaskToDOM)(newTaskElement);\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm),\n/* harmony export */   \"taskForm\": () => (/* binding */ taskForm)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nconst projectForm = (() => {\n\n    const projectForm = document.querySelector('.modalProject');\n\n    const show = () =>  {\n        projectForm.style.display = 'flex';\n    }\n\n    return {show}\n})();\n\n\nconst taskForm = (() => {\n\n    const modalTask = document.querySelector('.modalTask');\n    const submit = document.querySelector('#btnSubmitTask');\n    const name = document.querySelector('#inputTaskName');\n\n\n    const show = () => {\n        modalTask.style.display= 'flex';\n    }\n\n    const _hide = () => {\n        modalTask.style.display= 'none';\n    }\n\n    submit.addEventListener('click', () => {\n        _hide();\n\n        //submeter tarefa\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.submitTask)(name);\n    });\n\n    return {show}\n})();\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/forms.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"createTaskElement\": () => (/* binding */ createTaskElement),\n/* harmony export */   \"addTaskToArray\": () => (/* binding */ addTaskToArray),\n/* harmony export */   \"addTaskToDOM\": () => (/* binding */ addTaskToDOM)\n/* harmony export */ });\n//criar objeto tarefa\nconst createTask = (name, description, date, priority) => {\n\n    return {\n        name : name,\n        description: description,\n        date : date,\n        priority: priority,\n        id: Date.now().toString,\n    }\n}\n//criar elemetno\nconst createTaskElement  = (task) => {\n    \n    const li = document.createElement('li');\n    const spanName = document.createElement('span');\n    const spanDate = document.createElement('span');\n    const divChecked = document.createElement('div');\n    const divButtons = document.createElement('div');\n    const btnEdit = document.createElement('button');\n    const btnRemove = document.createElement('button');\n    const iCircle = document.createElement('i');\n    const iRemove = document.createElement('i');\n    const iEdit = document.createElement('i');\n\n\n    spanName.textContent = task.name;\n    spanDate.textContent = task.date;\n    divChecked.classList.add('checked');\n    iCircle.classList.add('fa', 'fa-circle-o');\n    iEdit.classList.add('fa', 'fa-pencil');\n    iRemove.classList.add('fa', 'fa-trash');\n\n    divChecked.appendChild(iCircle);\n    divButtons.appendChild(btnEdit);\n    divButtons.appendChild(btnRemove);\n    li.appendChild(divChecked);\n    li.appendChild(spanName);\n    li.appendChild(spanDate);\n    li.appendChild(divButtons);\n\n    //_taskRemove(btnRemove);\n\n    return li;\n\n\n}\n//addTask\nconst addTaskToDOM = (task) => {\n\n    const divTodos = document.querySelector('#todos');\n    divTodos.appendChild(task);\n}\n\n//addTask to array\nconst addTaskToArray = (array, task) => {\n    array.push(task);\n}\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/task.js?");

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