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
    noProjectTasks = [];

    repopulateTasks(projects){ 
        //remove all tasks belonging to the project
        this.tasks = []

        for (const project of projects){
            this.tasks = this.tasks.concat(project.tasks)
        }

        this.tasks  = this.tasks.concat(this.noProjectTasks);

        //sort by due date
        this.tasks.sort(function(a,b) {
            let dateA = a.dueDate.replaceAll('-','');
            let dateB = b.dueDate.replaceAll('-','');
            return dateA > dateB ? 1 : dateA < dateB ? -1 : 0;
            // return a.localeCompare(b);         // <-- alternative 
            });
    }

    addNoProjectTasks(task){
        this.noProjectTasks.push(task);
    }

    addTask(task){

        this.noProjectTasks.push(task);

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

    static populateTasks(currentProject){
        if (currentProject.name == "All Tasks"){
            
            for (const task of currentProject.tasks){
                if (task.project.name == "All Tasks"){
                    taskList.innerHTML = taskList.innerHTML +'<div class="taskDiv">' +
                    '<div class="circleIcon"></div>' +
                    `<div class="taskName">${task.name}</div>`+
                    `<div class="projectSubscript"></div>`+
                    `<div class="dueDate"> ${task.dueDate.replaceAll("-",".")}</div>` +
                    '</div>'
                }else{
                    taskList.innerHTML = taskList.innerHTML +'<div class="taskDiv">' +
                    '<div class="circleIcon"></div>' +
                    `<div class="taskName">${task.name}</div>`+
                    `<div class="projectSubscript">${task.project.name}</div>`+
                    `<div class="dueDate"> ${task.dueDate.replaceAll("-",".")}</div>` +
                    '</div>'
                }   
            }
            
        }else {
            for (const task of currentProject.tasks){
                taskList.innerHTML = taskList.innerHTML +'<div class="taskDiv">' +
                '<div class="circleIcon"></div>' +
                `<div class="taskName">${task.name}</div>`+
                `<div class="dueDate"> ${task.dueDate.replaceAll("-",".")}</div>` +
                '</div>'
            }
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

        //sort by due date

        this.tasks.sort(function(a,b) {
            let dateA = a.dueDate.replaceAll('-','');
            let dateB = b.dueDate.replaceAll('-','');
            return dateA > dateB ? 1 : dateA < dateB ? -1 : 0;
            // return a.localeCompare(b);         // <-- alternative 
          });

    }
    removeTask(task){
        this.tasks = this.tasks.filter(item => item !== task)
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
const project1 = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]("Project 1");
project1.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("task 1", "2024-01-01", project1));
project1.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("task 2", "2024-01-01", project1 ));
projects.push(project1);

const project2 = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]("Project 2");
project2.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("task 3", "2024-01-01", project2 ));
project2.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("task 4", "2024-01-01", project2 ));
projects.push(project2);

const allTasks = new _AllTasks__WEBPACK_IMPORTED_MODULE_3__["default"]()
allTasks.repopulateTasks(projects)

let currentProject = allTasks
_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectList()
_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateProjectList(projects)

_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTasks()
_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateTasks(currentProject)


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
        
        _ErrorCheck__WEBPACK_IMPORTED_MODULE_4__["default"].alertIfStringEmpty(taskNameInput.value);
        if (currentProject.name == "All Tasks"){
            allTasks.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskNameInput.value,dueDateInput.value, currentProject));
        }else{
            currentProject.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskNameInput.value, dueDateInput.value, currentProject));
        }
        allTasks.repopulateTasks(projects)
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTasks();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateTasks(currentProject)
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTaskNameInput()
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewTaskDiv();
    }
    
    else if (e.target.className == "taskname"){}
    else if (e.target.className == "circleIcon"){
        let taskName = e.target.nextSibling.innerHTML;

        if (currentProject.name == "All Tasks"){
            let projectName =  e.target.nextSibling.nextSibling.innerHTML;
            
            if (projectName == ""){
                let taskObj = allTasks.noProjectTasks.find(task => task.name == taskName);
                allTasks.noProjectTasks.splice(allTasks.noProjectTasks.indexOf(taskObj),1);
            }else{
                let projectObj = projects.find(project => project.name == projectName);
                let taskObj = projectObj.tasks.find(task => task.name == taskName);

                projectObj.tasks.splice(projectObj.tasks.indexOf(taskObj),1)
            }

            
        }else{
            let taskObj = currentProject.tasks.find(task => task.name == taskName);
            currentProject.tasks.splice(currentProject.tasks.indexOf(taskObj),1)
        }
        allTasks.repopulateTasks(projects);
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTasks();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateTasks(currentProject);


    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQUc7QUFDWCxRQUFRLDRDQUFHOzs7QUFHWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsNENBQUc7QUFDWCxRQUFRLDRDQUFHO0FBQ1g7QUFDQTtBQUNBLFFBQVEsNENBQUc7QUFDWDtBQUNBLFFBQVEsNENBQUc7QUFDWCxRQUFRLDRDQUFHO0FBQ1g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxRQUFRLDRDQUFHO0FBQ1gsUUFBUSw0Q0FBRzs7QUFFWCxRQUFRLDRDQUFHO0FBQ1gsUUFBUSw0Q0FBRzs7QUFFWCxRQUFRLDRDQUFHO0FBQ1gsUUFBUSw0Q0FBRztBQUNYO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsUUFBUSw0Q0FBRztBQUNYO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvQWxsVGFza3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9FcnJvckNoZWNrLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGxUYXNrcyBleHRlbmRzIFByb2plY3R7XG4gICAgbmFtZSA9IFwiQWxsIFRhc2tzXCJcbiAgICBub1Byb2plY3RUYXNrcyA9IFtdO1xuXG4gICAgcmVwb3B1bGF0ZVRhc2tzKHByb2plY3RzKXsgXG4gICAgICAgIC8vcmVtb3ZlIGFsbCB0YXNrcyBiZWxvbmdpbmcgdG8gdGhlIHByb2plY3RcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RzKXtcbiAgICAgICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmNvbmNhdChwcm9qZWN0LnRhc2tzKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YXNrcyAgPSB0aGlzLnRhc2tzLmNvbmNhdCh0aGlzLm5vUHJvamVjdFRhc2tzKTtcblxuICAgICAgICAvL3NvcnQgYnkgZHVlIGRhdGVcbiAgICAgICAgdGhpcy50YXNrcy5zb3J0KGZ1bmN0aW9uKGEsYikge1xuICAgICAgICAgICAgbGV0IGRhdGVBID0gYS5kdWVEYXRlLnJlcGxhY2VBbGwoJy0nLCcnKTtcbiAgICAgICAgICAgIGxldCBkYXRlQiA9IGIuZHVlRGF0ZS5yZXBsYWNlQWxsKCctJywnJyk7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZUEgPiBkYXRlQiA/IDEgOiBkYXRlQSA8IGRhdGVCID8gLTEgOiAwO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGEubG9jYWxlQ29tcGFyZShiKTsgICAgICAgICAvLyA8LS0gYWx0ZXJuYXRpdmUgXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGROb1Byb2plY3RUYXNrcyh0YXNrKXtcbiAgICAgICAgdGhpcy5ub1Byb2plY3RUYXNrcy5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzayl7XG5cbiAgICAgICAgdGhpcy5ub1Byb2plY3RUYXNrcy5wdXNoKHRhc2spO1xuXG4gICAgfVxuXG4gICAgXG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9Ne1xuXG5cblxuICAgIHN0YXRpYyBwb3B1bGF0ZVRvZGF5RGF0ZSgpe1xuICAgIH1cbiAgICBzdGF0aWMgcG9wdWxhdGVQcm9qZWN0TGlzdChwcm9qZWN0cyl7XG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0cyl7XG4gICAgICAgICAgICBsZXQgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJvamVjdEl0ZW0uY2xhc3NOYW1lID0gXCJwcm9qZWN0SXRlbVwiXG4gICAgICAgICAgICBwcm9qZWN0QnJvd3Nlci5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcm9qZWN0SWNvbi5jbGFzc05hbWUgPSBcInByb2plY3RJY29uXCJcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcblxuICAgICAgICAgICAgbGV0IHByb2plY3RJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcm9qZWN0SXRlbU5hbWUuY2xhc3NOYW1lID0gXCJwcm9qZWN0SXRlbU5hbWVcIlxuICAgICAgICAgICAgcHJvamVjdEl0ZW1OYW1lLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtTmFtZSk7XG5cbiAgICAgICAgICAgIGxldCBuYW1lUmVwbGFjZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuYW1lUmVwbGFjZURpdi5jbGFzc05hbWUgPSBcIm5hbWVSZXBsYWNlRGl2XCJcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKG5hbWVSZXBsYWNlRGl2KTtcblxuICAgICAgICAgICAgbGV0IHByb2plY3RJdGVtTmFtZVJlcGxhY2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHByb2plY3RJdGVtTmFtZVJlcGxhY2VJbnB1dC5jbGFzc05hbWUgPSBcInByb2plY3RJdGVtTmFtZVJlcGxhY2VJbnB1dFwiXG4gICAgICAgICAgICBuYW1lUmVwbGFjZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbU5hbWVSZXBsYWNlSW5wdXQpO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdE5hbWVPa2F5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lT2theS5jbGFzc05hbWUgPSBcInByb2plY3ROYW1lT2theVwiXG4gICAgICAgICAgICBuYW1lUmVwbGFjZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZU9rYXkpO1xuXG4gICAgICAgICAgICBsZXQgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LmNsYXNzTmFtZSA9IFwiZGVsZXRlUHJvamVjdFwiXG4gICAgICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY2xlYXJQcm9qZWN0TmFtZUlucHV0KCl7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgfVxuICAgIHN0YXRpYyBzaG93UmVuYW1lUHJvamVjdERpdihlKXtcbiAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuZm9jdXMoKVxuICAgIH1cbiAgICBzdGF0aWMgaGlkZVJlbmFtZVByb2plY3REaXYoKXtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYubmFtZVJlcGxhY2VEaXZcIikuZm9yRWFjaCgoZGl2KT0+ZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYucHJvamVjdEl0ZW1OYW1lXCIpLmZvckVhY2goKGRpdik9PmRpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKTtcblxuICAgIH1cbiAgICBzdGF0aWMgY2xlYXJQcm9qZWN0UmVuYW1lSW5wdXQoKXtcbiAgICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0SXRlbU5hbWVSZXBsYWNlSW5wdXRcIilcbiAgICAgICAgXG4gICAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgaW5wdXRzKXtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHN0YXRpYyBjbGVhclByb2plY3RMaXN0KCl7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0QnJvd3Nlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwcm9qZWN0QnJvd3Nlci5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFyVGFza05hbWVJbnB1dCgpe1xuICAgICAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gXCJcIlxuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhclByb2plY3RIZWFkZXIoKXtcbiAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgfVxuXG4gICAgc3RhdGljIHBvcHVsYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0TmFtZSl7XG4gICAgICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFyVGFza3MoKXtcbiAgICAgICAgd2hpbGUgKHRhc2tMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRhc2tMaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9wdWxhdGVUYXNrcyhjdXJyZW50UHJvamVjdCl7XG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdC5uYW1lID09IFwiQWxsIFRhc2tzXCIpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgY3VycmVudFByb2plY3QudGFza3Mpe1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnByb2plY3QubmFtZSA9PSBcIkFsbCBUYXNrc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpc3QuaW5uZXJIVE1MID0gdGFza0xpc3QuaW5uZXJIVE1MICsnPGRpdiBjbGFzcz1cInRhc2tEaXZcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjaXJjbGVJY29uXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFza05hbWVcIj4ke3Rhc2submFtZX08L2Rpdj5gK1xuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInByb2plY3RTdWJzY3JpcHRcIj48L2Rpdj5gK1xuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImR1ZURhdGVcIj4gJHt0YXNrLmR1ZURhdGUucmVwbGFjZUFsbChcIi1cIixcIi5cIil9PC9kaXY+YCArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9IHRhc2tMaXN0LmlubmVySFRNTCArJzxkaXYgY2xhc3M9XCJ0YXNrRGl2XCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2lyY2xlSWNvblwiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhc2tOYW1lXCI+JHt0YXNrLm5hbWV9PC9kaXY+YCtcbiAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJwcm9qZWN0U3Vic2NyaXB0XCI+JHt0YXNrLnByb2plY3QubmFtZX08L2Rpdj5gK1xuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImR1ZURhdGVcIj4gJHt0YXNrLmR1ZURhdGUucmVwbGFjZUFsbChcIi1cIixcIi5cIil9PC9kaXY+YCArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFzayBvZiBjdXJyZW50UHJvamVjdC50YXNrcyl7XG4gICAgICAgICAgICAgICAgdGFza0xpc3QuaW5uZXJIVE1MID0gdGFza0xpc3QuaW5uZXJIVE1MICsnPGRpdiBjbGFzcz1cInRhc2tEaXZcIj4nICtcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNpcmNsZUljb25cIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhc2tOYW1lXCI+JHt0YXNrLm5hbWV9PC9kaXY+YCtcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImR1ZURhdGVcIj4gJHt0YXNrLmR1ZURhdGUucmVwbGFjZUFsbChcIi1cIixcIi5cIil9PC9kaXY+YCArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd0FkZFRhc2tJbnB1dHMoKXtcblxuICAgIH1cblxuICAgIHN0YXRpYyBzaG93QWRkUHJvamVjdElucHV0cygpe1xuXG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVRhc2soKXtcblxuICAgIH1cblxuICAgIHN0YXRpYyBzaG93TmV3UHJvamVjdERpdigpe1xuICAgICAgICBuZXdQcm9qZWN0SW5wdXREaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIGFkZFByb2plY3RCdG4uc3R5bGUuZGlzcGxheT0gXCJub25lXCJcbiAgICAgICAgcHJvamVjdE5hbWVJbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgICBzdGF0aWMgc2hvd05ld1Rhc2tEaXYoKXtcbiAgICAgICAgbmV3VGFza0lucHV0RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXk9IFwibm9uZVwiXG4gICAgICAgIHRhc2tOYW1lSW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZU5ld1Byb2plY3REaXYoKXtcbiAgICAgICAgbmV3UHJvamVjdElucHV0RGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXk9IFwiYmxvY2tcIlxuICAgIH1cbiAgICBzdGF0aWMgaGlkZU5ld1Rhc2tEaXYoKXtcbiAgICAgICAgbmV3VGFza0lucHV0RGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXk9IFwiYmxvY2tcIlxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckNoZWNre1xuICAgIHN0YXRpYyBhbGVydElmU3RyaW5nRW1wdHkoc3RyaW5nKXtcbiAgICAgICAgaWYgKHN0cmluZyA9PSBcIlwiKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiTmFtZSBjYW5ub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICB0aGlzSXNFcnJvckxpbmVUb1N0b3BEZWJ1Z2dlclxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBzdGF0aWMgYWxlcnRJZlBhc3REYXRlKCl7XG4gICAgfVxuICAgIHN0YXRpYyBhbGFydElmRHVwbGljYXRlUHJvamVjdE5hbWUoKXtcblxuICAgIH1cbiAgICBzdGF0aWMgYWxlcnRJZkR1cGxpY2F0ZVRhc2tOYW1lKCl7XG5cbiAgICB9XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIHRhc2tzID0gW107XG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXG4gICAgICAgIC8vc29ydCBieSBkdWUgZGF0ZVxuXG4gICAgICAgIHRoaXMudGFza3Muc29ydChmdW5jdGlvbihhLGIpIHtcbiAgICAgICAgICAgIGxldCBkYXRlQSA9IGEuZHVlRGF0ZS5yZXBsYWNlQWxsKCctJywnJyk7XG4gICAgICAgICAgICBsZXQgZGF0ZUIgPSBiLmR1ZURhdGUucmVwbGFjZUFsbCgnLScsJycpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGVBID4gZGF0ZUIgPyAxIDogZGF0ZUEgPCBkYXRlQiA/IC0xIDogMDtcbiAgICAgICAgICAgIC8vIHJldHVybiBhLmxvY2FsZUNvbXBhcmUoYik7ICAgICAgICAgLy8gPC0tIGFsdGVybmF0aXZlIFxuICAgICAgICAgIH0pO1xuXG4gICAgfVxuICAgIHJlbW92ZVRhc2sodGFzayl7XG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhc2spXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlLCBwcm9qZWN0KXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9ICAgIFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IERPTSBmcm9tICcuL0RPTSdcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzaydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCdcbmltcG9ydCBBbGxUYXNrcyBmcm9tICcuL0FsbFRhc2tzJ1xuaW1wb3J0IEVycm9yQ2hlY2sgZnJvbSAnLi9FcnJvckNoZWNrJ1xuXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcIlByb2plY3QgMVwiKTtcbnByb2plY3QxLmFkZFRhc2sobmV3IFRhc2soXCJ0YXNrIDFcIiwgXCIyMDI0LTAxLTAxXCIsIHByb2plY3QxKSk7XG5wcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKFwidGFzayAyXCIsIFwiMjAyNC0wMS0wMVwiLCBwcm9qZWN0MSApKTtcbnByb2plY3RzLnB1c2gocHJvamVjdDEpO1xuXG5jb25zdCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiUHJvamVjdCAyXCIpO1xucHJvamVjdDIuYWRkVGFzayhuZXcgVGFzayhcInRhc2sgM1wiLCBcIjIwMjQtMDEtMDFcIiwgcHJvamVjdDIgKSk7XG5wcm9qZWN0Mi5hZGRUYXNrKG5ldyBUYXNrKFwidGFzayA0XCIsIFwiMjAyNC0wMS0wMVwiLCBwcm9qZWN0MiApKTtcbnByb2plY3RzLnB1c2gocHJvamVjdDIpO1xuXG5jb25zdCBhbGxUYXNrcyA9IG5ldyBBbGxUYXNrcygpXG5hbGxUYXNrcy5yZXBvcHVsYXRlVGFza3MocHJvamVjdHMpXG5cbmxldCBjdXJyZW50UHJvamVjdCA9IGFsbFRhc2tzXG5ET00uY2xlYXJQcm9qZWN0TGlzdCgpXG5ET00ucG9wdWxhdGVQcm9qZWN0TGlzdChwcm9qZWN0cylcblxuRE9NLmNsZWFyVGFza3MoKVxuRE9NLnBvcHVsYXRlVGFza3MoY3VycmVudFByb2plY3QpXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZSA9PntcbiAgICBpZiAoZS50YXJnZXQgPT0gYWRkUHJvamVjdEJ0bil7RE9NLnNob3dOZXdQcm9qZWN0RGl2KCk7fVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInByb2plY3RJdGVtXCIgICl7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LmNoaWxkcmVuWzFdLmlubmVySFRNTDtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09IFwiQWxsIFRhc2tzXCIpe1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBhbGxUYXNrc1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgRE9NLmNsZWFyUHJvamVjdEhlYWRlcigpO1xuICAgICAgICBET00ucG9wdWxhdGVQcm9qZWN0SGVhZGVyKHByb2plY3ROYW1lKTtcbiAgICAgICAgRE9NLmNsZWFyVGFza3MoKTtcbiAgICAgICAgRE9NLnBvcHVsYXRlVGFza3MoY3VycmVudFByb2plY3QpO1xuICAgIH1lbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJwcm9qZWN0SXRlbU5hbWVcIil7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09IFwiQWxsIFRhc2tzXCIpe1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBhbGxUYXNrc1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgRE9NLmNsZWFyUHJvamVjdEhlYWRlcigpO1xuICAgICAgICBET00ucG9wdWxhdGVQcm9qZWN0SGVhZGVyKHByb2plY3ROYW1lKTtcbiAgICAgICAgRE9NLmNsZWFyVGFza3MoKTtcbiAgICAgICAgRE9NLnBvcHVsYXRlVGFza3MoY3VycmVudFByb2plY3QpO1xuICAgIH1lbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJwcm9qZWN0SWNvblwiKXtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZS50YXJnZXQubmV4dFNpYmxpbmcuaW5uZXJIVE1MO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT0gXCJBbGwgVGFza3NcIil7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGFsbFRhc2tzXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSAgcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSlcbiAgICAgICAgfVxuICAgICAgICBET00uY2xlYXJQcm9qZWN0SGVhZGVyKCk7XG4gICAgICAgIERPTS5wb3B1bGF0ZVByb2plY3RIZWFkZXIocHJvamVjdE5hbWUpO1xuICAgICAgICBET00uY2xlYXJUYXNrcygpO1xuICAgICAgICBET00ucG9wdWxhdGVUYXNrcyhjdXJyZW50UHJvamVjdCk7XG4gICAgfVxuXG4gICAgZWxzZSBpZiAoZS50YXJnZXQgPT0gYWRkVGFza0J0biApe0RPTS5zaG93TmV3VGFza0RpdigpO31cbiAgICBlbHNlIGlmIChlLnRhcmdldCA9PSBuZXdQcm9qZWN0TmFtZU9rYXkpe1xuICAgICAgICBFcnJvckNoZWNrLmFsZXJ0SWZTdHJpbmdFbXB0eShwcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlKSk7XG4gICAgICAgIERPTS5jbGVhclByb2plY3RMaXN0KClcbiAgICAgICAgRE9NLnBvcHVsYXRlUHJvamVjdExpc3QocHJvamVjdHMpXG4gICAgICAgIERPTS5jbGVhclByb2plY3ROYW1lSW5wdXQoKVxuICAgICAgICBET00uaGlkZU5ld1Byb2plY3REaXYoKTtcblxuICAgICAgICBcbiAgICB9XG4gICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwicHJvamVjdE5hbWVPa2F5XCIpe1xuICAgICAgICBsZXQgZXhpc3RpbmdQcm9qZWN0SXRlbU5hbWUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MO1xuICAgICAgICBsZXQgcmVwbGFjZVByb2plY3RuYW1lSW5wdXQgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIEVycm9yQ2hlY2suYWxlcnRJZlN0cmluZ0VtcHR5KHJlcGxhY2VQcm9qZWN0bmFtZUlucHV0LnZhbHVlKTtcblxuICAgICAgICBsZXQgcHJvamVjdE9iaiA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT0gZXhpc3RpbmdQcm9qZWN0SXRlbU5hbWUpXG4gICAgICAgIHByb2plY3RPYmoubmFtZSA9IHJlcGxhY2VQcm9qZWN0bmFtZUlucHV0LnZhbHVlXG4gICAgICAgIERPTS5jbGVhclByb2plY3RMaXN0KClcbiAgICAgICAgRE9NLnBvcHVsYXRlUHJvamVjdExpc3QocHJvamVjdHMpXG4gICAgICAgIERPTS5jbGVhclByb2plY3ROYW1lSW5wdXQoKVxuICAgICAgICBET00uaGlkZU5ld1Byb2plY3REaXYoKVxuXG4gICAgICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gcmVwbGFjZVByb2plY3RuYW1lSW5wdXQudmFsdWVcbiAgICB9XG4gICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiZGVsZXRlUHJvamVjdFwiKXtcbiAgICAgICAgbGV0IHByb2plY3RJdGVtID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gcHJvamVjdEl0ZW0uaW5uZXJIVE1MO1xuXG4gICAgICAgIGxldCBwcm9qZWN0T2JqID0gIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpXG4gICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHByb2plY3RPYmopLDEpXG5cbiAgICAgICAgRE9NLmNsZWFyUHJvamVjdExpc3QoKVxuICAgICAgICBET00ucG9wdWxhdGVQcm9qZWN0TGlzdChwcm9qZWN0cylcblxuICAgICAgICBhbGxUYXNrcy5yZXBvcHVsYXRlVGFza3MocHJvamVjdHMpO1xuXG4gICAgICAgIGFsbFRhc2tzRGl2LmNsaWNrKCk7XG4gICAgfVxuXG4gICAgZWxzZSBpZiAoZS50YXJnZXQgPT0gbmV3VGFza05hbWVPa2F5KXtcbiAgICAgICAgXG4gICAgICAgIEVycm9yQ2hlY2suYWxlcnRJZlN0cmluZ0VtcHR5KHRhc2tOYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICBpZiAoY3VycmVudFByb2plY3QubmFtZSA9PSBcIkFsbCBUYXNrc1wiKXtcbiAgICAgICAgICAgIGFsbFRhc2tzLmFkZFRhc2sobmV3IFRhc2sodGFza05hbWVJbnB1dC52YWx1ZSxkdWVEYXRlSW5wdXQudmFsdWUsIGN1cnJlbnRQcm9qZWN0KSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QuYWRkVGFzayhuZXcgVGFzayh0YXNrTmFtZUlucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIGN1cnJlbnRQcm9qZWN0KSk7XG4gICAgICAgIH1cbiAgICAgICAgYWxsVGFza3MucmVwb3B1bGF0ZVRhc2tzKHByb2plY3RzKVxuICAgICAgICBET00uY2xlYXJUYXNrcygpO1xuICAgICAgICBET00ucG9wdWxhdGVUYXNrcyhjdXJyZW50UHJvamVjdClcbiAgICAgICAgRE9NLmNsZWFyVGFza05hbWVJbnB1dCgpXG4gICAgICAgIERPTS5oaWRlTmV3VGFza0RpdigpO1xuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJ0YXNrbmFtZVwiKXt9XG4gICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiY2lyY2xlSWNvblwiKXtcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gZS50YXJnZXQubmV4dFNpYmxpbmcuaW5uZXJIVE1MO1xuXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdC5uYW1lID09IFwiQWxsIFRhc2tzXCIpe1xuICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gIGUudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLmlubmVySFRNTDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHByb2plY3ROYW1lID09IFwiXCIpe1xuICAgICAgICAgICAgICAgIGxldCB0YXNrT2JqID0gYWxsVGFza3Mubm9Qcm9qZWN0VGFza3MuZmluZCh0YXNrID0+IHRhc2submFtZSA9PSB0YXNrTmFtZSk7XG4gICAgICAgICAgICAgICAgYWxsVGFza3Mubm9Qcm9qZWN0VGFza3Muc3BsaWNlKGFsbFRhc2tzLm5vUHJvamVjdFRhc2tzLmluZGV4T2YodGFza09iaiksMSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE9iaiA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT0gcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrT2JqID0gcHJvamVjdE9iai50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5uYW1lID09IHRhc2tOYW1lKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RPYmoudGFza3Muc3BsaWNlKHByb2plY3RPYmoudGFza3MuaW5kZXhPZih0YXNrT2JqKSwxKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgdGFza09iaiA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLm5hbWUgPT0gdGFza05hbWUpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QudGFza3Muc3BsaWNlKGN1cnJlbnRQcm9qZWN0LnRhc2tzLmluZGV4T2YodGFza09iaiksMSlcbiAgICAgICAgfVxuICAgICAgICBhbGxUYXNrcy5yZXBvcHVsYXRlVGFza3MocHJvamVjdHMpO1xuICAgICAgICBET00uY2xlYXJUYXNrcygpO1xuICAgICAgICBET00ucG9wdWxhdGVUYXNrcyhjdXJyZW50UHJvamVjdCk7XG5cblxuICAgIH1cbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJ0YXNrUmFkaW9CdG5cIil7fVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2tSYWRpb0J0blwiKXt9XG4gICAgZWxzZSB7fVxuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gcHJvamVjdE5hbWVJbnB1dCl7XG4gICAgICAgIERPTS5jbGVhclByb2plY3ROYW1lSW5wdXQoKTtcbiAgICAgICAgRE9NLmhpZGVOZXdQcm9qZWN0RGl2KCk7XG4gICAgfTtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPSB0YXNrTmFtZUlucHV0ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gZHVlRGF0ZUlucHV0ICl7XG4gICAgICAgIERPTS5oaWRlTmV3VGFza0RpdigpO307XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lICE9IFwicHJvamVjdEl0ZW1OYW1lUmVwbGFjZUlucHV0XCIpe1xuICAgICAgICBET00uY2xlYXJQcm9qZWN0UmVuYW1lSW5wdXQoKTtcbiAgICAgICAgRE9NLmhpZGVSZW5hbWVQcm9qZWN0RGl2KCk7XG4gICAgfTtcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkID09XCJwcm9qZWN0TmFtZUlucHV0XCIgJiYgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgbmV3UHJvamVjdE5hbWVPa2F5LmNsaWNrKCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID09XCJwcm9qZWN0SXRlbU5hbWVSZXBsYWNlSW5wdXRcIiAmJiBldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5leHRTaWJsaW5nLmNsaWNrKCk7XG4gICAgfVxuXG59KTsgXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBET00uY2xlYXJQcm9qZWN0TmFtZUlucHV0KCk7XG4gICAgICAgIERPTS5oaWRlTmV3UHJvamVjdERpdigpO1xuXG4gICAgICAgIERPTS5jbGVhclRhc2tOYW1lSW5wdXQoKTtcbiAgICAgICAgRE9NLmhpZGVOZXdUYXNrRGl2KCk7XG5cbiAgICAgICAgRE9NLmNsZWFyUHJvamVjdFJlbmFtZUlucHV0KCk7XG4gICAgICAgIERPTS5oaWRlUmVuYW1lUHJvamVjdERpdigpO1xuICAgIH1cbn0pOyBcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsZT0+e1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJwcm9qZWN0SXRlbU5hbWVcIil7XG4gICAgICAgIERPTS5zaG93UmVuYW1lUHJvamVjdERpdihlKTsgICAgXG4gICAgfTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9