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
    name = "All Tasks"

    repopulateTasks(projects){ 
        //remove all tasks belonging to the project
        this.tasks = []

        for (const project of projects){
            this.tasks = this.tasks.concat(project.tasks)
        }

        //insert all tasks belgonging to the project
        

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
    static populateProjectList(projects){
        for (const project of projects){
            let projectItem = document.createElement("div");
            projectItem.className = "projectItem"
            projectBrowser.appendChild(projectItem);

            let projectIcon = document.createElement("div");
            projectIcon.className = "projectIcon"
            projectItem.appendChild(projectIcon);

            let projectItemName = document.createElement("div");
            projectItemName.className = "projectItemName"
            projectItemName.innerHTML = project.name;
            projectItem.appendChild(projectItemName);

            let nameReplaceDiv = document.createElement("div");
            nameReplaceDiv.className = "nameReplaceDiv"
            projectItem.appendChild(nameReplaceDiv);

            let projectItemNameReplaceInput = document.createElement("input");
            projectItemNameReplaceInput.className = "projectItemNameReplaceInput"
            nameReplaceDiv.appendChild(projectItemNameReplaceInput);

            let projectNameOkay = document.createElement("div");
            projectNameOkay.className = "projectNameOkay"
            nameReplaceDiv.appendChild(projectNameOkay);

            let deleteProject = document.createElement("div");
            deleteProject.className = "deleteProject"
            projectItem.appendChild(deleteProject);
        }
    }
    static clearProjectNameInput(){
        projectNameInput.value = ""
    }
    static showRenameProjectDiv(e){
        e.target.nextElementSibling.style.display = "flex";
        e.target.style.display = "none";
        e.target.nextElementSibling.firstElementChild.focus()
    }
    static hideRenameProjectDiv(){
        
        document.querySelectorAll("div.nameReplaceDiv").forEach((div)=>div.style.display = "none");
        document.querySelectorAll("div.projectItemName").forEach((div)=>div.style.display = "block");

    }
    static clearProjectRenameInput(){
        let inputs = document.getElementsByClassName("projectItemNameReplaceInput")
        
        for (const input of inputs){
            input.value = "";
        }

    }
    static clearProjectList(){
        while (projectBrowser.firstChild) {
            projectBrowser.firstChild.remove()
        };
    }

    static clearTaskNameInput(){
        taskNameInput.value = ""
    }

    static clearProjectHeader(){
        projectHeader.innerHTML = ""
    }

    static populateProjectHeader(projectName){
        projectHeader.innerHTML = projectName;
    }

    static clearTasks(){
        while (taskList.firstChild) {
            taskList.firstChild.remove()
        };
    }

    static populateTasks(projectObj){
        for (const task of projectObj.tasks){
            taskList.innerHTML = taskList.innerHTML +'<div class="taskDiv">' +
            '<div class="circleIcon"></div>' +
            `<div class="taskName">${task.name}</div>`+
            `<div class="dueDate"> 2023.01.04</div>` +
            '</div>'

        }
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

    constructor(name, dueDate){
        this.name = name;
        this.dueDate = dueDate;
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
const project1 = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]("Project 1");
project1.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("task 1", "2024-01-01" ));
project1.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("task 2", "2024-01-01" ));
projects.push(project1);

const project2 = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]("Project 2");
project2.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("task 3", "2024-01-01" ));
project2.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("task 4", "2024-01-01" ));
projects.push(project2);

const allTasks = new _AllTasks__WEBPACK_IMPORTED_MODULE_3__["default"]()
_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectList()
_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateProjectList(projects)

let currentProject = allTasks
allTasks.repopulateTasks(projects)


document.addEventListener("click",e =>{
    if (e.target == addProjectBtn){_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].showNewProjectDiv();}
    else if (e.target.className == "projectItem"  ){
        let projectName = e.target.children[1].innerHTML;
        if (projectName == "All Tasks"){
            currentProject = allTasks
        }else{
            currentProject =  projects.find(project => project.name == projectName)
        }
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectHeader();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateProjectHeader(projectName);
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTasks();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateTasks(currentProject);
    }else if (e.target.className == "projectItemName"){
        let projectName = e.target.innerHTML;
        if (projectName == "All Tasks"){
            currentProject = allTasks
        }else{
            currentProject =  projects.find(project => project.name == projectName)
        }
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectHeader();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateProjectHeader(projectName);
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTasks();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateTasks(currentProject);
    }else if (e.target.className == "projectIcon"){
        let projectName = e.target.nextSibling.innerHTML;
        if (projectName == "All Tasks"){
            currentProject = allTasks
        }else{
            currentProject =  projects.find(project => project.name == projectName)
        }
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectHeader();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateProjectHeader(projectName);
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTasks();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateTasks(currentProject);
    }

    else if (e.target == addTaskBtn ){_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].showNewTaskDiv();}
    else if (e.target == newProjectNameOkay){
        _ErrorCheck__WEBPACK_IMPORTED_MODULE_4__["default"].alertIfStringEmpty(projectNameInput.value);
        projects.push(new _Project__WEBPACK_IMPORTED_MODULE_2__["default"](projectNameInput.value));
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectList()
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateProjectList(projects)
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectNameInput()
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewProjectDiv();

        
    }
    else if (e.target.className == "projectNameOkay"){
        let existingProjectItemName = e.target.parentNode.previousElementSibling.innerHTML;
        let replaceProjectnameInput = e.target.previousElementSibling;

        _ErrorCheck__WEBPACK_IMPORTED_MODULE_4__["default"].alertIfStringEmpty(replaceProjectnameInput.value);

        let projectObj = projects.find(project => project.name == existingProjectItemName)
        projectObj.name = replaceProjectnameInput.value
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectList()
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateProjectList(projects)
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectNameInput()
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewProjectDiv()

        projectHeader.innerHTML = replaceProjectnameInput.value
    }
    else if (e.target.className == "deleteProject"){
        let projectItem = e.target.parentNode;
        let projectName = projectItem.innerHTML;

        let projectObj =  projects.find(project => project.name == projectName)
        projects.splice(projects.indexOf(projectObj),1)

        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectList()
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateProjectList(projects)

        allTasks.repopulateTasks(projects);

        allTasksDiv.click();
    }

    else if (e.target == newTaskNameOkay){
        
        _ErrorCheck__WEBPACK_IMPORTED_MODULE_4__["default"].alertIfStringEmpty(projectNameInput.value);
        projects.push(new task(projectNameInput.value));
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectList()
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateProjectList(projects)
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectNameInput()
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewProjectDiv();
    }
    
    else if (e.target.className == "taskname"){}
    else if (e.target.className == "dueDate"){}
    else if (e.target.className == "taskRadioBtn"){}
    else if (e.target.className == "taskRadioBtn"){}
    else {}

    if (document.activeElement != projectNameInput){
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectNameInput();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewProjectDiv();
    };
    if (document.activeElement != taskNameInput && document.activeElement != dueDateInput ){
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewTaskDiv();};
    if (document.activeElement.className != "projectItemNameReplaceInput"){
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectRenameInput();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideRenameProjectDiv();
    };
})

document.addEventListener("keypress", function(event) {
    if (document.activeElement.id =="projectNameInput" && event.key === "Enter") {
        newProjectNameOkay.click();
    }

    if (document.activeElement.className =="projectItemNameReplaceInput" && event.key === "Enter") {
        document.activeElement.nextSibling.click();
    }

}); 

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectNameInput();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewProjectDiv();

        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTaskNameInput();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewTaskDiv();

        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectRenameInput();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideRenameProjectDiv();
    }
}); 

document.addEventListener("dblclick",e=>{
    if (e.target.className == "projectItemName"){
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].showRenameProjectDiv(e);    
    };
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtBQUNsQiwwQkFBMEIsZ0RBQU87QUFDakMsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7QUFDWCxRQUFRLDRDQUFHO0FBQ1gsUUFBUSw0Q0FBRzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsbURBQVU7O0FBRWxCO0FBQ0E7QUFDQSxRQUFRLDRDQUFHO0FBQ1gsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7QUFDWCxRQUFRLDRDQUFHOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLDRDQUFHO0FBQ1gsUUFBUSw0Q0FBRzs7QUFFWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLG1EQUFVO0FBQ2xCO0FBQ0EsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7QUFDWCxRQUFRLDRDQUFHO0FBQ1gsUUFBUSw0Q0FBRztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7QUFDWDtBQUNBO0FBQ0EsUUFBUSw0Q0FBRztBQUNYO0FBQ0EsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLFFBQVEsNENBQUc7QUFDWCxRQUFRLDRDQUFHOztBQUVYLFFBQVEsNENBQUc7QUFDWCxRQUFRLDRDQUFHOztBQUVYLFFBQVEsNENBQUc7QUFDWCxRQUFRLDRDQUFHO0FBQ1g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxRQUFRLDRDQUFHO0FBQ1g7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9BbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL0Vycm9yQ2hlY2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsbFRhc2tzIGV4dGVuZHMgUHJvamVjdHtcbiAgICBuYW1lID0gXCJBbGwgVGFza3NcIlxuXG4gICAgcmVwb3B1bGF0ZVRhc2tzKHByb2plY3RzKXsgXG4gICAgICAgIC8vcmVtb3ZlIGFsbCB0YXNrcyBiZWxvbmdpbmcgdG8gdGhlIHByb2plY3RcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RzKXtcbiAgICAgICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmNvbmNhdChwcm9qZWN0LnRhc2tzKVxuICAgICAgICB9XG5cbiAgICAgICAgLy9pbnNlcnQgYWxsIHRhc2tzIGJlbGdvbmdpbmcgdG8gdGhlIHByb2plY3RcbiAgICAgICAgXG5cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9Ne1xuXG5cblxuICAgIHN0YXRpYyBwb3B1bGF0ZVRvZGF5RGF0ZSgpe1xuICAgIH1cbiAgICBzdGF0aWMgcG9wdWxhdGVQcm9qZWN0TGlzdChwcm9qZWN0cyl7XG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0cyl7XG4gICAgICAgICAgICBsZXQgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJvamVjdEl0ZW0uY2xhc3NOYW1lID0gXCJwcm9qZWN0SXRlbVwiXG4gICAgICAgICAgICBwcm9qZWN0QnJvd3Nlci5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcm9qZWN0SWNvbi5jbGFzc05hbWUgPSBcInByb2plY3RJY29uXCJcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcblxuICAgICAgICAgICAgbGV0IHByb2plY3RJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcm9qZWN0SXRlbU5hbWUuY2xhc3NOYW1lID0gXCJwcm9qZWN0SXRlbU5hbWVcIlxuICAgICAgICAgICAgcHJvamVjdEl0ZW1OYW1lLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtTmFtZSk7XG5cbiAgICAgICAgICAgIGxldCBuYW1lUmVwbGFjZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuYW1lUmVwbGFjZURpdi5jbGFzc05hbWUgPSBcIm5hbWVSZXBsYWNlRGl2XCJcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKG5hbWVSZXBsYWNlRGl2KTtcblxuICAgICAgICAgICAgbGV0IHByb2plY3RJdGVtTmFtZVJlcGxhY2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHByb2plY3RJdGVtTmFtZVJlcGxhY2VJbnB1dC5jbGFzc05hbWUgPSBcInByb2plY3RJdGVtTmFtZVJlcGxhY2VJbnB1dFwiXG4gICAgICAgICAgICBuYW1lUmVwbGFjZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbU5hbWVSZXBsYWNlSW5wdXQpO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdE5hbWVPa2F5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lT2theS5jbGFzc05hbWUgPSBcInByb2plY3ROYW1lT2theVwiXG4gICAgICAgICAgICBuYW1lUmVwbGFjZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZU9rYXkpO1xuXG4gICAgICAgICAgICBsZXQgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LmNsYXNzTmFtZSA9IFwiZGVsZXRlUHJvamVjdFwiXG4gICAgICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY2xlYXJQcm9qZWN0TmFtZUlucHV0KCl7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgfVxuICAgIHN0YXRpYyBzaG93UmVuYW1lUHJvamVjdERpdihlKXtcbiAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuZm9jdXMoKVxuICAgIH1cbiAgICBzdGF0aWMgaGlkZVJlbmFtZVByb2plY3REaXYoKXtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYubmFtZVJlcGxhY2VEaXZcIikuZm9yRWFjaCgoZGl2KT0+ZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYucHJvamVjdEl0ZW1OYW1lXCIpLmZvckVhY2goKGRpdik9PmRpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKTtcblxuICAgIH1cbiAgICBzdGF0aWMgY2xlYXJQcm9qZWN0UmVuYW1lSW5wdXQoKXtcbiAgICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0SXRlbU5hbWVSZXBsYWNlSW5wdXRcIilcbiAgICAgICAgXG4gICAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgaW5wdXRzKXtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHN0YXRpYyBjbGVhclByb2plY3RMaXN0KCl7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0QnJvd3Nlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwcm9qZWN0QnJvd3Nlci5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFyVGFza05hbWVJbnB1dCgpe1xuICAgICAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gXCJcIlxuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhclByb2plY3RIZWFkZXIoKXtcbiAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgfVxuXG4gICAgc3RhdGljIHBvcHVsYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0TmFtZSl7XG4gICAgICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFyVGFza3MoKXtcbiAgICAgICAgd2hpbGUgKHRhc2tMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRhc2tMaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9wdWxhdGVUYXNrcyhwcm9qZWN0T2JqKXtcbiAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3RPYmoudGFza3Mpe1xuICAgICAgICAgICAgdGFza0xpc3QuaW5uZXJIVE1MID0gdGFza0xpc3QuaW5uZXJIVE1MICsnPGRpdiBjbGFzcz1cInRhc2tEaXZcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2lyY2xlSWNvblwiPjwvZGl2PicgK1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YXNrTmFtZVwiPiR7dGFzay5uYW1lfTwvZGl2PmArXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImR1ZURhdGVcIj4gMjAyMy4wMS4wNDwvZGl2PmAgK1xuICAgICAgICAgICAgJzwvZGl2PidcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dBZGRUYXNrSW5wdXRzKCl7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd0FkZFByb2plY3RJbnB1dHMoKXtcblxuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVUYXNrKCl7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd05ld1Byb2plY3REaXYoKXtcbiAgICAgICAgbmV3UHJvamVjdElucHV0RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXk9IFwibm9uZVwiXG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgc3RhdGljIHNob3dOZXdUYXNrRGl2KCl7XG4gICAgICAgIG5ld1Rhc2tJbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5PSBcIm5vbmVcIlxuICAgICAgICB0YXNrTmFtZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVOZXdQcm9qZWN0RGl2KCl7XG4gICAgICAgIG5ld1Byb2plY3RJbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5PSBcImJsb2NrXCJcbiAgICB9XG4gICAgc3RhdGljIGhpZGVOZXdUYXNrRGl2KCl7XG4gICAgICAgIG5ld1Rhc2tJbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5PSBcImJsb2NrXCJcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JDaGVja3tcbiAgICBzdGF0aWMgYWxlcnRJZlN0cmluZ0VtcHR5KHN0cmluZyl7XG4gICAgICAgIGlmIChzdHJpbmcgPT0gXCJcIil7XG4gICAgICAgICAgICBhbGVydChcIk5hbWUgY2Fubm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgdGhpc0lzRXJyb3JMaW5lVG9TdG9wRGVidWdnZXJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgc3RhdGljIGFsZXJ0SWZQYXN0RGF0ZSgpe1xuICAgIH1cbiAgICBzdGF0aWMgYWxhcnRJZkR1cGxpY2F0ZVByb2plY3ROYW1lKCl7XG5cbiAgICB9XG4gICAgc3RhdGljIGFsZXJ0SWZEdXBsaWNhdGVUYXNrTmFtZSgpe1xuXG4gICAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICB0YXNrcyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzayl7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgcmVtb3ZlVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFzaylcbiAgICB9XG5cbiAgICBzb3J0QnlEdWVEYXRlKCl7XG4gICAgICAgIC8vdXNlIGxvZGFzaFxuICAgICAgICAvLyBfLnNvcnRCeSh0YXNrcyxcImR1ZURhdGVcIilcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9ICAgIFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IERPTSBmcm9tICcuL0RPTSdcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzaydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCdcbmltcG9ydCBBbGxUYXNrcyBmcm9tICcuL0FsbFRhc2tzJ1xuaW1wb3J0IEVycm9yQ2hlY2sgZnJvbSAnLi9FcnJvckNoZWNrJ1xuXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcIlByb2plY3QgMVwiKTtcbnByb2plY3QxLmFkZFRhc2sobmV3IFRhc2soXCJ0YXNrIDFcIiwgXCIyMDI0LTAxLTAxXCIgKSk7XG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKFwidGFzayAyXCIsIFwiMjAyNC0wMS0wMVwiICkpO1xucHJvamVjdHMucHVzaChwcm9qZWN0MSk7XG5cbmNvbnN0IHByb2plY3QyID0gbmV3IFByb2plY3QoXCJQcm9qZWN0IDJcIik7XG5wcm9qZWN0Mi5hZGRUYXNrKG5ldyBUYXNrKFwidGFzayAzXCIsIFwiMjAyNC0wMS0wMVwiICkpO1xucHJvamVjdDIuYWRkVGFzayhuZXcgVGFzayhcInRhc2sgNFwiLCBcIjIwMjQtMDEtMDFcIiApKTtcbnByb2plY3RzLnB1c2gocHJvamVjdDIpO1xuXG5jb25zdCBhbGxUYXNrcyA9IG5ldyBBbGxUYXNrcygpXG5ET00uY2xlYXJQcm9qZWN0TGlzdCgpXG5ET00ucG9wdWxhdGVQcm9qZWN0TGlzdChwcm9qZWN0cylcblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gYWxsVGFza3NcbmFsbFRhc2tzLnJlcG9wdWxhdGVUYXNrcyhwcm9qZWN0cylcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlID0+e1xuICAgIGlmIChlLnRhcmdldCA9PSBhZGRQcm9qZWN0QnRuKXtET00uc2hvd05ld1Byb2plY3REaXYoKTt9XG4gICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwicHJvamVjdEl0ZW1cIiAgKXtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZS50YXJnZXQuY2hpbGRyZW5bMV0uaW5uZXJIVE1MO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT0gXCJBbGwgVGFza3NcIil7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGFsbFRhc2tzXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSAgcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSlcbiAgICAgICAgfVxuICAgICAgICBET00uY2xlYXJQcm9qZWN0SGVhZGVyKCk7XG4gICAgICAgIERPTS5wb3B1bGF0ZVByb2plY3RIZWFkZXIocHJvamVjdE5hbWUpO1xuICAgICAgICBET00uY2xlYXJUYXNrcygpO1xuICAgICAgICBET00ucG9wdWxhdGVUYXNrcyhjdXJyZW50UHJvamVjdCk7XG4gICAgfWVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInByb2plY3RJdGVtTmFtZVwiKXtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT0gXCJBbGwgVGFza3NcIil7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGFsbFRhc2tzXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSAgcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSlcbiAgICAgICAgfVxuICAgICAgICBET00uY2xlYXJQcm9qZWN0SGVhZGVyKCk7XG4gICAgICAgIERPTS5wb3B1bGF0ZVByb2plY3RIZWFkZXIocHJvamVjdE5hbWUpO1xuICAgICAgICBET00uY2xlYXJUYXNrcygpO1xuICAgICAgICBET00ucG9wdWxhdGVUYXNrcyhjdXJyZW50UHJvamVjdCk7XG4gICAgfWVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInByb2plY3RJY29uXCIpe1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5uZXh0U2libGluZy5pbm5lckhUTUw7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PSBcIkFsbCBUYXNrc1wiKXtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gYWxsVGFza3NcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9ICBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKVxuICAgICAgICB9XG4gICAgICAgIERPTS5jbGVhclByb2plY3RIZWFkZXIoKTtcbiAgICAgICAgRE9NLnBvcHVsYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0TmFtZSk7XG4gICAgICAgIERPTS5jbGVhclRhc2tzKCk7XG4gICAgICAgIERPTS5wb3B1bGF0ZVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBlbHNlIGlmIChlLnRhcmdldCA9PSBhZGRUYXNrQnRuICl7RE9NLnNob3dOZXdUYXNrRGl2KCk7fVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0ID09IG5ld1Byb2plY3ROYW1lT2theSl7XG4gICAgICAgIEVycm9yQ2hlY2suYWxlcnRJZlN0cmluZ0VtcHR5KHByb2plY3ROYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHByb2plY3ROYW1lSW5wdXQudmFsdWUpKTtcbiAgICAgICAgRE9NLmNsZWFyUHJvamVjdExpc3QoKVxuICAgICAgICBET00ucG9wdWxhdGVQcm9qZWN0TGlzdChwcm9qZWN0cylcbiAgICAgICAgRE9NLmNsZWFyUHJvamVjdE5hbWVJbnB1dCgpXG4gICAgICAgIERPTS5oaWRlTmV3UHJvamVjdERpdigpO1xuXG4gICAgICAgIFxuICAgIH1cbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJwcm9qZWN0TmFtZU9rYXlcIil7XG4gICAgICAgIGxldCBleGlzdGluZ1Byb2plY3RJdGVtTmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUw7XG4gICAgICAgIGxldCByZXBsYWNlUHJvamVjdG5hbWVJbnB1dCA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgRXJyb3JDaGVjay5hbGVydElmU3RyaW5nRW1wdHkocmVwbGFjZVByb2plY3RuYW1lSW5wdXQudmFsdWUpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0T2JqID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSBleGlzdGluZ1Byb2plY3RJdGVtTmFtZSlcbiAgICAgICAgcHJvamVjdE9iai5uYW1lID0gcmVwbGFjZVByb2plY3RuYW1lSW5wdXQudmFsdWVcbiAgICAgICAgRE9NLmNsZWFyUHJvamVjdExpc3QoKVxuICAgICAgICBET00ucG9wdWxhdGVQcm9qZWN0TGlzdChwcm9qZWN0cylcbiAgICAgICAgRE9NLmNsZWFyUHJvamVjdE5hbWVJbnB1dCgpXG4gICAgICAgIERPTS5oaWRlTmV3UHJvamVjdERpdigpXG5cbiAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSByZXBsYWNlUHJvamVjdG5hbWVJbnB1dC52YWx1ZVxuICAgIH1cbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJkZWxldGVQcm9qZWN0XCIpe1xuICAgICAgICBsZXQgcHJvamVjdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0SXRlbS5pbm5lckhUTUw7XG5cbiAgICAgICAgbGV0IHByb2plY3RPYmogPSAgcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSlcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YocHJvamVjdE9iaiksMSlcblxuICAgICAgICBET00uY2xlYXJQcm9qZWN0TGlzdCgpXG4gICAgICAgIERPTS5wb3B1bGF0ZVByb2plY3RMaXN0KHByb2plY3RzKVxuXG4gICAgICAgIGFsbFRhc2tzLnJlcG9wdWxhdGVUYXNrcyhwcm9qZWN0cyk7XG5cbiAgICAgICAgYWxsVGFza3NEaXYuY2xpY2soKTtcbiAgICB9XG5cbiAgICBlbHNlIGlmIChlLnRhcmdldCA9PSBuZXdUYXNrTmFtZU9rYXkpe1xuICAgICAgICBcbiAgICAgICAgRXJyb3JDaGVjay5hbGVydElmU3RyaW5nRW1wdHkocHJvamVjdE5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3IHRhc2socHJvamVjdE5hbWVJbnB1dC52YWx1ZSkpO1xuICAgICAgICBET00uY2xlYXJQcm9qZWN0TGlzdCgpXG4gICAgICAgIERPTS5wb3B1bGF0ZVByb2plY3RMaXN0KHByb2plY3RzKVxuICAgICAgICBET00uY2xlYXJQcm9qZWN0TmFtZUlucHV0KClcbiAgICAgICAgRE9NLmhpZGVOZXdQcm9qZWN0RGl2KCk7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2tuYW1lXCIpe31cbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJkdWVEYXRlXCIpe31cbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJ0YXNrUmFkaW9CdG5cIil7fVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2tSYWRpb0J0blwiKXt9XG4gICAgZWxzZSB7fVxuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gcHJvamVjdE5hbWVJbnB1dCl7XG4gICAgICAgIERPTS5jbGVhclByb2plY3ROYW1lSW5wdXQoKTtcbiAgICAgICAgRE9NLmhpZGVOZXdQcm9qZWN0RGl2KCk7XG4gICAgfTtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPSB0YXNrTmFtZUlucHV0ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gZHVlRGF0ZUlucHV0ICl7XG4gICAgICAgIERPTS5oaWRlTmV3VGFza0RpdigpO307XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lICE9IFwicHJvamVjdEl0ZW1OYW1lUmVwbGFjZUlucHV0XCIpe1xuICAgICAgICBET00uY2xlYXJQcm9qZWN0UmVuYW1lSW5wdXQoKTtcbiAgICAgICAgRE9NLmhpZGVSZW5hbWVQcm9qZWN0RGl2KCk7XG4gICAgfTtcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkID09XCJwcm9qZWN0TmFtZUlucHV0XCIgJiYgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgbmV3UHJvamVjdE5hbWVPa2F5LmNsaWNrKCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID09XCJwcm9qZWN0SXRlbU5hbWVSZXBsYWNlSW5wdXRcIiAmJiBldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5leHRTaWJsaW5nLmNsaWNrKCk7XG4gICAgfVxuXG59KTsgXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBET00uY2xlYXJQcm9qZWN0TmFtZUlucHV0KCk7XG4gICAgICAgIERPTS5oaWRlTmV3UHJvamVjdERpdigpO1xuXG4gICAgICAgIERPTS5jbGVhclRhc2tOYW1lSW5wdXQoKTtcbiAgICAgICAgRE9NLmhpZGVOZXdUYXNrRGl2KCk7XG5cbiAgICAgICAgRE9NLmNsZWFyUHJvamVjdFJlbmFtZUlucHV0KCk7XG4gICAgICAgIERPTS5oaWRlUmVuYW1lUHJvamVjdERpdigpO1xuICAgIH1cbn0pOyBcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsZT0+e1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJwcm9qZWN0SXRlbU5hbWVcIil7XG4gICAgICAgIERPTS5zaG93UmVuYW1lUHJvamVjdERpdihlKTsgICAgXG4gICAgfTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9