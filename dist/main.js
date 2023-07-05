/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AllTasks.js":
/*!*************************!*\
  !*** ./src/AllTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AllTasks)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");


class AllTasks extends _Project__WEBPACK_IMPORTED_MODULE_0__["default"]{
    name = "All"
    repopulateTasksOfProject(project){ 
        //remove all tasks belonging to the project
        this.tasks = this.tasks.filter(item => item.project !== project)

        //insert all tasks belgonging to the project
        this.tasks = this.tasks.concat(project.tasks)

    }
}

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOM)
/* harmony export */ });
class DOM{



    static populateTodayDate(){

    }

    static populateProjectNameHeader(){

    }

    static populateProjectList(projects){
        for (const project of projects){
            let parent =  projectBrowser;
            let child = document.createElement("div");
            child.className = "projectItem"
            parent.appendChild(child);

            parent = child;
            child = document.createElement("div");
            child.className = "projectIcon"
            parent.appendChild(child);

            child = document.createElement("div");
            child.className = "projectItemName"
            child.innerHTML = project.name;
            parent.appendChild(child);

            child = document.createElement("div");
            child.className = "deleteProject"
            parent.appendChild(child);




        }
    }
    static clearProjectNameInput(){
        projectNameInput.value = ""
    }

    static clearProjectList(){
        while (projectBrowser.firstChild) {
            projectBrowser.firstChild.remove()
        };
    }

    static clearTaskNameInput(){
        taskNameInput.value = ""
    }

    static populateTasks(){

    }


    static showAddTaskInputs(){

    }

    static showAddProjectInputs(){

    }

    static removeTask(){

    }

    static showNewProjectDiv(){
        newProjectInputDiv.style.display = "flex"
        addProjectBtn.style.display= "none"
        projectNameInput.focus();
    }
    static showNewTaskDiv(){
        newTaskInputDiv.style.display = "flex"
        addTaskBtn.style.display= "none"
        taskNameInput.focus();
    }

    static hideNewProjectDiv(){
        newProjectInputDiv.style.display = "none"
        addProjectBtn.style.display= "block"
    }
    static hideNewTaskDiv(){
        newTaskInputDiv.style.display = "none"
        addTaskBtn.style.display= "block"
    }
}

/***/ }),

/***/ "./src/ErrorCheck.js":
/*!***************************!*\
  !*** ./src/ErrorCheck.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorCheck)
/* harmony export */ });
class ErrorCheck{
    static alertIfStringEmpty(string){
        if (string == ""){
            alert("Name cannot be empty");
            thisIsErrorLineToStopDebugger
        }
        
    }
    static alertIfPastDate(){
    }
    static alartIfDuplicateProjectName(){

    }
    static alertIfDuplicateTaskName(){

    }
}


/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });

class Project {
    tasks = [];
    constructor(name){
        this.name = name;
    }

    addTask(task){
        this.tasks.push(task);
    }
    removeTask(task){
        this.tasks = this.tasks.filter(item => item !== task)
    }

    sortByDueDate(){
        //use lodash
        // _.sortBy(tasks,"dueDate")
    }
}

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {

    constructor(name, dueDate, project){
        this.name = name;
        this.dueDate = dueDate;
        this.project = project;
    }    
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _AllTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllTasks */ "./src/AllTasks.js");
/* harmony import */ var _ErrorCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorCheck */ "./src/ErrorCheck.js");






const projects = [];

document.addEventListener("click",e =>{
    if (e.target == addProjectBtn){_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].showNewProjectDiv();}
    else if (e.target == addTaskBtn ){_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].showNewTaskDiv();}
    else if (e.target == projectNameOkay){
        _ErrorCheck__WEBPACK_IMPORTED_MODULE_4__["default"].alertIfStringEmpty(projectNameInput.value);
        projects.push(new _Project__WEBPACK_IMPORTED_MODULE_2__["default"](projectNameInput.value));
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectList()
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateProjectList(projects)
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectNameInput()
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewProjectDiv();
    }
    else if (e.target == taskNameOkay){}
    else if (e.target.className == "projectName"){}
    else if (e.target.className == "taskname"){}
    else if (e.target.className == "dueDate"){}
    else if (e.target.className == "taskRadioBtn"){}
    else if (e.target.className == "taskRadioBtn"){}
    else {}

    if (document.activeElement != projectNameInput){
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectNameInput();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewProjectDiv();
    };
    if (document.activeElement != taskNameInput && document.activeElement != dueDateInput ){_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewTaskDiv();};
})

projectNameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        projectNameOkay.click();
    }
}); 

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectNameInput();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewProjectDiv();

        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTaskNameInput();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewTaskDiv();
    }
}); 

document.addEventListener("dblclick",e=>{
    if (e.target.className = "projectName"){
        
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7O0FBRWhCLHVCQUF1QixnREFBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWmU7Ozs7QUFJZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4RmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnVCO0FBQ0U7QUFDTTtBQUNFO0FBQ0k7O0FBRXJDOztBQUVBO0FBQ0EsbUNBQW1DLDRDQUFHO0FBQ3RDLHNDQUFzQyw0Q0FBRztBQUN6QztBQUNBLFFBQVEsbURBQVU7QUFDbEIsMEJBQTBCLGdEQUFPO0FBQ2pDLFFBQVEsNENBQUc7QUFDWCxRQUFRLDRDQUFHO0FBQ1gsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7QUFDWDtBQUNBLDRGQUE0Riw0Q0FBRztBQUMvRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7O0FBRVgsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL0FsbFRhc2tzLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvRXJyb3JDaGVjay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxsVGFza3MgZXh0ZW5kcyBQcm9qZWN0e1xuICAgIG5hbWUgPSBcIkFsbFwiXG4gICAgcmVwb3B1bGF0ZVRhc2tzT2ZQcm9qZWN0KHByb2plY3QpeyBcbiAgICAgICAgLy9yZW1vdmUgYWxsIHRhc2tzIGJlbG9uZ2luZyB0byB0aGUgcHJvamVjdFxuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnByb2plY3QgIT09IHByb2plY3QpXG5cbiAgICAgICAgLy9pbnNlcnQgYWxsIHRhc2tzIGJlbGdvbmdpbmcgdG8gdGhlIHByb2plY3RcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuY29uY2F0KHByb2plY3QudGFza3MpXG5cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9Ne1xuXG5cblxuICAgIHN0YXRpYyBwb3B1bGF0ZVRvZGF5RGF0ZSgpe1xuXG4gICAgfVxuXG4gICAgc3RhdGljIHBvcHVsYXRlUHJvamVjdE5hbWVIZWFkZXIoKXtcblxuICAgIH1cblxuICAgIHN0YXRpYyBwb3B1bGF0ZVByb2plY3RMaXN0KHByb2plY3RzKXtcbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RzKXtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSAgcHJvamVjdEJyb3dzZXI7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NOYW1lID0gXCJwcm9qZWN0SXRlbVwiXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXG4gICAgICAgICAgICBwYXJlbnQgPSBjaGlsZDtcbiAgICAgICAgICAgIGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTmFtZSA9IFwicHJvamVjdEljb25cIlxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcblxuICAgICAgICAgICAgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NOYW1lID0gXCJwcm9qZWN0SXRlbU5hbWVcIlxuICAgICAgICAgICAgY2hpbGQuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcblxuICAgICAgICAgICAgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NOYW1lID0gXCJkZWxldGVQcm9qZWN0XCJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cblxuXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY2xlYXJQcm9qZWN0TmFtZUlucHV0KCl7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFyUHJvamVjdExpc3QoKXtcbiAgICAgICAgd2hpbGUgKHByb2plY3RCcm93c2VyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2plY3RCcm93c2VyLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJUYXNrTmFtZUlucHV0KCl7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgfVxuXG4gICAgc3RhdGljIHBvcHVsYXRlVGFza3MoKXtcblxuICAgIH1cblxuXG4gICAgc3RhdGljIHNob3dBZGRUYXNrSW5wdXRzKCl7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd0FkZFByb2plY3RJbnB1dHMoKXtcblxuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVUYXNrKCl7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd05ld1Byb2plY3REaXYoKXtcbiAgICAgICAgbmV3UHJvamVjdElucHV0RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXk9IFwibm9uZVwiXG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgc3RhdGljIHNob3dOZXdUYXNrRGl2KCl7XG4gICAgICAgIG5ld1Rhc2tJbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5PSBcIm5vbmVcIlxuICAgICAgICB0YXNrTmFtZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVOZXdQcm9qZWN0RGl2KCl7XG4gICAgICAgIG5ld1Byb2plY3RJbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5PSBcImJsb2NrXCJcbiAgICB9XG4gICAgc3RhdGljIGhpZGVOZXdUYXNrRGl2KCl7XG4gICAgICAgIG5ld1Rhc2tJbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5PSBcImJsb2NrXCJcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JDaGVja3tcbiAgICBzdGF0aWMgYWxlcnRJZlN0cmluZ0VtcHR5KHN0cmluZyl7XG4gICAgICAgIGlmIChzdHJpbmcgPT0gXCJcIil7XG4gICAgICAgICAgICBhbGVydChcIk5hbWUgY2Fubm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgdGhpc0lzRXJyb3JMaW5lVG9TdG9wRGVidWdnZXJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgc3RhdGljIGFsZXJ0SWZQYXN0RGF0ZSgpe1xuICAgIH1cbiAgICBzdGF0aWMgYWxhcnRJZkR1cGxpY2F0ZVByb2plY3ROYW1lKCl7XG5cbiAgICB9XG4gICAgc3RhdGljIGFsZXJ0SWZEdXBsaWNhdGVUYXNrTmFtZSgpe1xuXG4gICAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICB0YXNrcyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzayl7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgcmVtb3ZlVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFzaylcbiAgICB9XG5cbiAgICBzb3J0QnlEdWVEYXRlKCl7XG4gICAgICAgIC8vdXNlIGxvZGFzaFxuICAgICAgICAvLyBfLnNvcnRCeSh0YXNrcyxcImR1ZURhdGVcIilcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlLCBwcm9qZWN0KXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9ICAgIFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IERPTSBmcm9tICcuL0RPTSdcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzaydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCdcbmltcG9ydCBBbGxUYXNrcyBmcm9tICcuL0FsbFRhc2tzJ1xuaW1wb3J0IEVycm9yQ2hlY2sgZnJvbSAnLi9FcnJvckNoZWNrJ1xuXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlID0+e1xuICAgIGlmIChlLnRhcmdldCA9PSBhZGRQcm9qZWN0QnRuKXtET00uc2hvd05ld1Byb2plY3REaXYoKTt9XG4gICAgZWxzZSBpZiAoZS50YXJnZXQgPT0gYWRkVGFza0J0biApe0RPTS5zaG93TmV3VGFza0RpdigpO31cbiAgICBlbHNlIGlmIChlLnRhcmdldCA9PSBwcm9qZWN0TmFtZU9rYXkpe1xuICAgICAgICBFcnJvckNoZWNrLmFsZXJ0SWZTdHJpbmdFbXB0eShwcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlKSk7XG4gICAgICAgIERPTS5jbGVhclByb2plY3RMaXN0KClcbiAgICAgICAgRE9NLnBvcHVsYXRlUHJvamVjdExpc3QocHJvamVjdHMpXG4gICAgICAgIERPTS5jbGVhclByb2plY3ROYW1lSW5wdXQoKVxuICAgICAgICBET00uaGlkZU5ld1Byb2plY3REaXYoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS50YXJnZXQgPT0gdGFza05hbWVPa2F5KXt9XG4gICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwicHJvamVjdE5hbWVcIil7fVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2tuYW1lXCIpe31cbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJkdWVEYXRlXCIpe31cbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJ0YXNrUmFkaW9CdG5cIil7fVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2tSYWRpb0J0blwiKXt9XG4gICAgZWxzZSB7fVxuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gcHJvamVjdE5hbWVJbnB1dCl7XG4gICAgICAgIERPTS5jbGVhclByb2plY3ROYW1lSW5wdXQoKTtcbiAgICAgICAgRE9NLmhpZGVOZXdQcm9qZWN0RGl2KCk7XG4gICAgfTtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPSB0YXNrTmFtZUlucHV0ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gZHVlRGF0ZUlucHV0ICl7RE9NLmhpZGVOZXdUYXNrRGl2KCk7fTtcbn0pXG5cbnByb2plY3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHByb2plY3ROYW1lT2theS5jbGljaygpO1xuICAgIH1cbn0pOyBcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIERPTS5jbGVhclByb2plY3ROYW1lSW5wdXQoKTtcbiAgICAgICAgRE9NLmhpZGVOZXdQcm9qZWN0RGl2KCk7XG5cbiAgICAgICAgRE9NLmNsZWFyVGFza05hbWVJbnB1dCgpO1xuICAgICAgICBET00uaGlkZU5ld1Rhc2tEaXYoKTtcbiAgICB9XG59KTsgXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLGU9PntcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID0gXCJwcm9qZWN0TmFtZVwiKXtcbiAgICAgICAgXG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=