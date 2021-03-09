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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task.js */ \"./src/modules/task.js\");\n\n\nlet inputAddText = document.querySelector('#inputAddTask');\nconst btn = document.querySelector(\"#btnAddTask\");\nconst divTodos = document.querySelector('.todos');\nconst modal = document.querySelector('.modal');\n\n\n\nbtn.addEventListener('click', ()=> {\n\n    if (inputAddText.value != '')\n        divTodos.append((0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__.default)(inputAddText.value));\n    \n});\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet btnTrashs = document.querySelectorAll('.btnRemove');\n//let divTodos = document.querySelector('.todos');\n\nfunction taskAdd (nameTask){\n\n    let li = document.createElement('li');\n    let divChecked = document.createElement('div');\n    let spanName = document.createElement('span');\n    let div = document.createElement('div');\n    let btnEdit = document.createElement('button');\n    let btnTrash = document.createElement('button');\n    let iCircle = document.createElement('i');\n    let iPencil = document.createElement('i');\n    let iTrash = document.createElement('i');\n\n    spanName.textContent = nameTask;\n\n    li.appendChild(divChecked);\n    divChecked.appendChild(btnEdit);\n    li.appendChild(spanName);\n    li.appendChild(div);\n    div.appendChild(btnEdit);\n    div.appendChild(btnTrash);\n\n    divChecked.classList.add('checked');\n    btnTrash.classList.add('btnRemove');\n    iCircle.classList.add('fa', 'fa-circle-o');\n    iPencil.classList.add('fa','fa-pencil');\n    iTrash.classList.add('fa','fa-trash');\n\n    divChecked.appendChild(iCircle);\n    btnEdit.appendChild(iPencil);\n    btnTrash.appendChild(iTrash);\n\n    taskRemove(btnTrash);\n\n    openEditor(btnEdit, spanName);\n    \n    setInputToNone();\n    \n    return li;  \n}\n\nfunction createDiv () {\n    return document.createElement('div');\n}\n\n\n\nfunction openEditor (btnEdit, spanTaskName) {\n\n    let modal = document.querySelector('.modal');\n    let inputNameTaskModal = modal.children[0].children[0].children[0];\n    let btnSubmitTask  = document.querySelector('#btnSubmitTask');\n\n    btnEdit.addEventListener('click', () => {\n\n        setModalToBlock(modal);\n        putNameOnModalInputName(inputNameTaskModal, spanTaskName);\n\n\n    }); \n    \n\n    btnSubmitTask.addEventListener('click', () => editTask(spanTaskName, inputNameTaskModal));\n\n    \n}\n\nfunction editTask (taskName, input){\n\n    taskName.textContent = input.value;\n\n    let divModal = input.parentNode.parentNode.parentNode;\n    let date = divModal.children[0].children[2].children[0].value;\n\n    let task = taskName.parentNode;\n\n    let divTodos = document.querySelector('.todos');\n\n    //verficar \n    \n    //criar \n    if (date != '')\n        whatToDoWithDate(date, task);\n    \n    else \n        divTodos.children[0].appendChild(task);\n\n    setModalToNone(divModal);\n}\n\nfunction whatToDoWithDate (date, task) {\n\n    if (!verifyDate(date)) insertNewDiv(date);\n\n    addTaskToContainer(task, date);\n}\n\nconst addTaskToContainer =  (task, date) => {\n\n    let divTodos = document.querySelector('.todos');\n\n    let index = searchForIdByDiv(divTodos, date);\n\n    if (index != -1)\n        divTodos.children[index].appendChild(task);\n\n    else \n        console.log('error');\n}\n\nconst searchForIdByDiv = (div, date) => {\n\n    for (let i = 0; i < div.childElementCount; i++)\n        if (div.children[i].id == date) return i;\n\n    return  -1;\n}\n\nconst verifyDate = (taskDate) => {\n\n    let divTodos = document.querySelector('.todos');\n\n    for (let i = 0; i < divTodos.childElementCount; i++)\n        if (divTodos.children[i].id == taskDate) return true;\n\n    return false;\n    \n}\n\nconst insertNewDiv = (date) => {\n\n    let div = createDiv()\n    div.id  = date;\n    div.append(insertH4WithDateName(date));\n\n    document.querySelector('.todos').append(div);\n}\n\nconst insertH4WithDateName = (date) => {\n    \n    let h4 = document.createElement('h4');\n    h4.textContent = date;\n\n    return h4;\n\n}\n\nconst setModalToBlock = (modal) => {\n\n    modal.style.display= 'block';\n}\n\nconst setModalToNone = (modal) => {\n    modal.style.display = 'none';\n}\nconst putNameOnModalInputName  = (input, name) => {\n    input.value = name.textContent;\n}\n\nfunction taskRemove (btn){\n\n    let task = btn.parentNode.parentNode;\n\n    btn.addEventListener('click', () => {\n\n        let todos = document.querySelector('.todos');\n        todos.removeChild(task);\n\n    });\n    \n}\n\nfunction setInputToNone  () {\n\n    let inputAddText = document.querySelector('#inputAddTask');\n    inputAddText.value = ' ';\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskAdd);\n\n//# sourceURL=webpack://to-do-list/./src/modules/task.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;