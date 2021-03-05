/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const btn = document.querySelector(\"#btnAddTask\");\nconst divTodos = document.querySelector('.todos');\n\ncriaTarefa = () => {\n\n    let li = document.createElement('li');\n    let divChecked = document.createElement('div');\n    let spanName = document.createElement('span');\n    let div = document.createElement('div');\n    let btnEdit = document.createElement('button');\n    let btnTrash = document.createElement('button');\n    let iCircle = document.createElement('i');\n    let iPencil = document.createElement('i');\n    let iTrash = document.createElement('i');\n\n    li.appendChild(divChecked);\n    divChecked.appendChild(btnEdit);\n    li.appendChild(spanName);\n    li.appendChild(div);\n    div.appendChild(btnEdit);\n    div.appendChild(btnTrash);\n\n    divChecked.classList.add('checked');\n    \n\n    iCircle.classList.add('fa', 'fa-circle-o');\n    iPencil.classList.add('fa','fa-pencil');\n    iTrash.classList.add('fa','fa-trash');\n\n    divChecked.appendChild(iCircle);\n    btnEdit.appendChild(iPencil);\n    btnTrash.appendChild(iTrash);\n\n\n    return li;\n}\n\n\n\nbtn.addEventListener('click', ()=> divTodos.append(criaTarefa()));\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;