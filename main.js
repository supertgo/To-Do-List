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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ \"./src/modules/forms.js\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n\n\n\nconst divProjects = document.querySelector('#projects');\nconst divTasks = document.querySelector('#taks');\nconst btnAddProjects = document.querySelector('#btnAddProject');\nconst btnAddTask = document.querySelector('#btnAddTask');\n\n\nlet projects = []; \nlet activeProject = 0;\n\n//addEventpara ambos os botões em direção ao form.js\n\nbtnAddProjects.addEventListener('click', function (){\n    _modules_forms__WEBPACK_IMPORTED_MODULE_0__.projectForm.show();\n});\n\nbtnAddTask.addEventListener('click', () => _modules_forms__WEBPACK_IMPORTED_MODULE_0__.taskForm.show());\n\n\nfunction sumitTask () {\n\n    //cria tarefa\n    const newTask = (0,_modules_task__WEBPACK_IMPORTED_MODULE_1__.createTask)();\n    \n    (0,_modules_task__WEBPACK_IMPORTED_MODULE_1__.createTaskElement)(newTask);\n    //passa cria tarefa para o DOM Adcionar\n\n    //colocar a tarefa no array de tarefas (projeto, array)\n}\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm),\n/* harmony export */   \"taskForm\": () => (/* binding */ taskForm)\n/* harmony export */ });\n\n\nconst projectForm = (() => {\n\n    const projectForm = document.querySelector('.modalProject');\n\n    const show = () =>  {\n        projectForm.style.display = 'flex';\n    }\n\n    return {show}\n})();\n\n\nconst taskForm = (() => {\n\n    const modalTask = document.querySelector('.modalTask');\n    const submit = document.querySelector('#btnSubmitTask');\n\n\n    const show = () => {\n        modalTask.style.display= 'flex';\n    }\n\n    const _hide = () => {\n        modalTask.style.display= 'none';\n    }\n\n    submit.addEventListener('click', () => {\n        _hide();\n\n        //submeter tarefa\n    });\n\n    return {show}\n})();\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/forms.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"createTaskElement\": () => (/* binding */ createTaskElement)\n/* harmony export */ });\n//criar objeto tarefa\nconst createTask = (name, description, date, priority) => {\n\n    return {\n        name : name,\n        description: description,\n        date : date,\n        priority: priority,\n        id: Date.now().toString,\n    }\n}\n//criar elemetno\nconst createTaskElement  = (task) => {\n    \n}\n//addTask\n\n//addTask to array\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/task.js?");

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