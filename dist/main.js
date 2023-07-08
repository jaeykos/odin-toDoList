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

        //sort by due date
        this.tasks.sort(function(a,b) {
            let dateA = a.dueDate.replaceAll('-','');
            let dateB = b.dueDate.replaceAll('-','');
            return dateA > dateB ? 1 : dateA < dateB ? -1 : 0;
            // return a.localeCompare(b);         // <-- alternative 
            });
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
            if (project.name == "noProjectTasks"){
                continue;
            }
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

    static showResetDueDateInput(e){
        e.target.nextElementSibling.style.display = "flex";
        e.target.style.display = "none";
        e.target.nextElementSibling.firstElementChild.focus()
    }
    static hideRenameProjectDiv(){
        
        document.querySelectorAll("div.nameReplaceDiv").forEach((div)=>div.style.display = "none");
        document.querySelectorAll("div.projectItemName").forEach((div)=>div.style.display = "block");

    }

    static hideDueDateReplaceDiv(){
        
        document.querySelectorAll("div.dueDateReplaceDiv").forEach((div)=>div.style.display = "none");
        document.querySelectorAll("div.dueDate").forEach((div)=>div.style.display = "block");
        
    }

    static hideRenameTaskDiv(){
        document.querySelectorAll("div.taskNameReplaceDiv").forEach((div)=>div.style.display = "none");
        document.querySelectorAll("div.taskName").forEach((div)=>div.style.display = "block");

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
    static showRenameTaskInput(e){
        e.target.style.display = "none";
        e.target.nextElementSibling.style.display = "flex";
        e.target.nextElementSibling.firstElementChild.focus()
    }

    static populateTasks(currentProject){
        if (currentProject.name == "All Tasks"){
            
            for (const task of currentProject.tasks){
                if (task.projectName == "noProjectTasks"){
                    taskList.innerHTML = taskList.innerHTML +
                    '<div class="taskDiv">' +
                    '<div class="circleIcon"></div>' +
                    '<div class="taskNameDiv">'+
                    `<div class="taskName">${task.name}</div>`+
                    '<div class="taskNameReplaceDiv">'+
                    '<input type="text" class="taskItemNameReplaceInput">'+
                    '<div class="taskReplaceNameOkay"></div></div>'+'</div>'+
                    `<div class="projectSubscript"></div>`+
                    '<div class="dueDateDiv">'+
                    `<div class="dueDate"> ${task.dueDate.replaceAll("-",".")}</div>` +
                    '<div class="dueDateReplaceDiv">'+
                    '<input type="date" class="dueDateReplaceInput">'+
                    '<div class="dueDateReplaceOkay"></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
                }else{
                    taskList.innerHTML = taskList.innerHTML +
                    '<div class="taskDiv">' +
                     '<div class="circleIcon"></div>' +
                     '<div class="taskNameDiv">'+
                       `<div class="taskName">${task.name}</div>`+
                       '<div class="taskNameReplaceDiv">'+
                          '<input type="text" class="taskItemNameReplaceInput">'+
                          '<div class="taskReplaceNameOkay"></div>'+
                       '</div>'+
                     '</div>'+
                    `<div class="projectSubscript">${task.projectName}</div>`+
                    '<div class="dueDateDiv">'+
                    `<div class="dueDate"> ${task.dueDate.replaceAll("-",".")}</div>` +
                    '<div class="dueDateReplaceDiv">'+
                    '<input type="date" class="dueDateReplaceInput">'+
                    '<div class="dueDateReplaceOkay"></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
                }   
            }
            
        }else {
            for (const task of currentProject.tasks){
                taskList.innerHTML = taskList.innerHTML +
                '<div class="taskDiv">' +
                '<div class="circleIcon"></div>' +
                '<div class="taskNameDiv">'+
                `<div class="taskName">${task.name}</div>`+
                '<div class="taskNameReplaceDiv">'+
                '<input type="text" class="taskItemNameReplaceInput">'+
                '<div class="taskReplaceNameOkay"></div></div></div>'+
                '<div class="dueDateDiv">'+
                `<div class="dueDate"> ${task.dueDate.replaceAll("-",".")}</div>` +
                '<div class="dueDateReplaceDiv">'+
                '<input type="date" class="dueDateReplaceInput">'+
                '<div class="dueDateReplaceOkay"></div>'+
                '</div>'+
                '</div>'+
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
            thisIsErrorLineToStopDebugger;
        }   
    }

    static alertIfProjectNameDuplicate(name, currentProject, projects, AddOrReplace){
        
        let tempProjectArr =  projects.filter(project => project.name == name)
        if ((AddOrReplace == "Add" && tempProjectArr.length == 1)
        || (AddOrReplace == "Replace" && name != currentProject.name &&  tempProjectArr.length == 1)){
                alert("Project name already exists");
                thisIsErrorLineToStopDebugger;
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

/***/ "./src/LocalStorage.js":
/*!*****************************!*\
  !*** ./src/LocalStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorage)
/* harmony export */ });
class LocalStorage {

    static saveData(projects, allTasks){
        let stringifiedProjects = JSON.stringify(projects)
        localStorage.setItem("projects", stringifiedProjects)
    }

    static loadData(){
        let stringifiedProjects= localStorage.getItem("projects")
        if (stringifiedProjects == null){
            return null;
        }
        return JSON.parse(stringifiedProjects);

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
        this.projectName = project.name;
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
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LocalStorage */ "./src/LocalStorage.js");







let allTasks = new _AllTasks__WEBPACK_IMPORTED_MODULE_3__["default"]()
let noProjectTasks  = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]("noProjectTasks");
let projects = [noProjectTasks];

if (_LocalStorage__WEBPACK_IMPORTED_MODULE_5__["default"].loadData() != null){
    let projectsJson = _LocalStorage__WEBPACK_IMPORTED_MODULE_5__["default"].loadData();
    for (let projectJson of projectsJson){
        if (projectJson.name == "noProjectTasks"){
            for (let taskJson of projectJson.tasks){
                noProjectTasks.tasks.push(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskJson.name, taskJson.dueDate, noProjectTasks))
            }
        }else{
            let tempProject = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"](projectJson.name)
            projects.push(tempProject)
            for (let taskJson of projectJson.tasks){
                tempProject.tasks.push(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskJson.name, taskJson.dueDate, tempProject))
            }
        }
    }
    allTasks.repopulateTasks(projects)
}else{
    const project1 = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]("Project 1");
    project1.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("task 1", "2024-01-01", project1));
    project1.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("task 2", "2024-01-01", project1 ));
    projects.push(project1);
    const project2 = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]("Project 2");
    project2.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("task 3", "2024-01-01", project2 ));
    project2.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"]("task 4", "2024-01-01", project2 ));
    projects.push(project2);
    allTasks.repopulateTasks(projects)
}



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
        _ErrorCheck__WEBPACK_IMPORTED_MODULE_4__["default"].alertIfProjectNameDuplicate(projectNameInput.value, currentProject, projects,"Add")
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
        _ErrorCheck__WEBPACK_IMPORTED_MODULE_4__["default"].alertIfProjectNameDuplicate(replaceProjectnameInput.value, currentProject, projects,"Replace")
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
            noProjectTasks.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskNameInput.value,dueDateInput.value, noProjectTasks));
        }else{
            currentProject.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskNameInput.value, dueDateInput.value, currentProject));
        }
        allTasks.repopulateTasks(projects)
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTasks();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateTasks(currentProject)
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTaskNameInput();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewTaskDiv();
    }
    else if (e.target.className == "taskReplaceNameOkay"){

        let existingItemName = e.target.parentNode.previousElementSibling.innerHTML;
        let replaceTaskNameInput = e.target.previousElementSibling;

        _ErrorCheck__WEBPACK_IMPORTED_MODULE_4__["default"].alertIfStringEmpty(replaceTaskNameInput.value);

        if (currentProject.name == "All Tasks"){
            let tempProjectName = e.target.parentNode.parentNode.nextElementSibling.innerHTML;

            if (tempProjectName==""){
                tempProjectName = "noProjectTasks"
            }

            let tempProjectObj = projects.find(project=> project.name == tempProjectName)
            let temptaskObj = tempProjectObj.tasks.find(task => task.name == existingItemName)
            temptaskObj.name = replaceTaskNameInput.value

        }else{
            let temptaskObj = currentProject.tasks.find(task => task.name == existingItemName)
            temptaskObj.name = replaceTaskNameInput.value
        }
        
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideRenameTaskDiv();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTasks();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateTasks(currentProject)
    }
    else if (e.target.className == "dueDateReplaceOkay"){

        
        let replaceDateInput = e.target.previousElementSibling;


        if (currentProject.name == "All Tasks"){
            let existingItemName = e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.firstElementChild.innerHTML;
            let tempProjectName = e.target.parentNode.parentNode.previousElementSibling.innerHTML;

            if (tempProjectName==""){
                tempProjectName = "noProjectTasks"
            }

            let tempProjectObj = projects.find(project=> project.name == tempProjectName)
            let temptaskObj = tempProjectObj.tasks.find(task => task.name == existingItemName)
            temptaskObj.dueDate = replaceDateInput.value

        }else{
            let existingItemName = e.target.parentNode.parentNode.previousElementSibling.firstElementChild.innerHTML;
            let temptaskObj = currentProject.tasks.find(task => task.name == existingItemName)
            temptaskObj.dueDate = replaceDateInput.value
        }
        
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearTasks();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].populateTasks(currentProject)
    }
    else if (e.target.className == "circleIcon"){
        let taskName = e.target.nextSibling.firstElementChild.innerHTML;

        if (currentProject.name == "All Tasks"){
            let projectName =  e.target.nextSibling.nextSibling.innerHTML;
            
            if (projectName == ""){
                let taskObj = noProjectTasks.tasks.find(task => task.name == taskName);
                noProjectTasks.tasks.splice(noProjectTasks.tasks.indexOf(taskObj),1);
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

    else {}

    if (document.activeElement != projectNameInput){
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectNameInput();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewProjectDiv();
    };
    if (document.activeElement != taskNameInput && document.activeElement != dueDateInput ){
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideNewTaskDiv();
    };
    if (document.activeElement.className != "projectItemNameReplaceInput"){
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].clearProjectRenameInput();
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideRenameProjectDiv();
    };

    if (document.activeElement.className != "taskItemNameReplaceInput"){
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideRenameTaskDiv();
    };

    if (document.activeElement.className != "dueDateReplaceInput"){
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].hideDueDateReplaceDiv();
    };

    _LocalStorage__WEBPACK_IMPORTED_MODULE_5__["default"].saveData(projects, allTasks);
})

document.addEventListener("keypress", function(event) {
    if (document.activeElement.id =="projectNameInput" && event.key === "Enter") {
        newProjectNameOkay.click();
    }

    if (document.activeElement == taskNameInput && event.key === "Enter") {
        newTaskNameOkay.click();
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

    if (e.target.className == "taskName"){
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].showRenameTaskInput(e);
    }

    if (e.target.className == "dueDate"){
        _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].showResetDueDateInput(e);
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7OztBQUdYOztBQUVBOztBQUVBO0FBQ0EsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7QUFDWDtBQUNBO0FBQ0EsUUFBUSw0Q0FBRztBQUNYO0FBQ0E7QUFDQSxRQUFRLDRDQUFHO0FBQ1gsUUFBUSw0Q0FBRztBQUNYOztBQUVBO0FBQ0EsUUFBUSw0Q0FBRztBQUNYOztBQUVBO0FBQ0EsUUFBUSw0Q0FBRztBQUNYOztBQUVBLElBQUkscURBQVk7QUFDaEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7O0FBRVgsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7O0FBRVgsUUFBUSw0Q0FBRztBQUNYLFFBQVEsNENBQUc7QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLFFBQVEsNENBQUc7QUFDWDs7QUFFQTtBQUNBLFFBQVEsNENBQUc7QUFDWDs7QUFFQTtBQUNBLFFBQVEsNENBQUc7QUFDWDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL0FsbFRhc2tzLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvRXJyb3JDaGVjay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxsVGFza3MgZXh0ZW5kcyBQcm9qZWN0e1xuICAgIG5hbWUgPSBcIkFsbCBUYXNrc1wiXG5cbiAgICByZXBvcHVsYXRlVGFza3MocHJvamVjdHMpeyBcbiAgICAgICAgLy9yZW1vdmUgYWxsIHRhc2tzIGJlbG9uZ2luZyB0byB0aGUgcHJvamVjdFxuICAgICAgICB0aGlzLnRhc2tzID0gW11cblxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpe1xuICAgICAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuY29uY2F0KHByb2plY3QudGFza3MpXG4gICAgICAgIH1cblxuICAgICAgICAvL3NvcnQgYnkgZHVlIGRhdGVcbiAgICAgICAgdGhpcy50YXNrcy5zb3J0KGZ1bmN0aW9uKGEsYikge1xuICAgICAgICAgICAgbGV0IGRhdGVBID0gYS5kdWVEYXRlLnJlcGxhY2VBbGwoJy0nLCcnKTtcbiAgICAgICAgICAgIGxldCBkYXRlQiA9IGIuZHVlRGF0ZS5yZXBsYWNlQWxsKCctJywnJyk7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZUEgPiBkYXRlQiA/IDEgOiBkYXRlQSA8IGRhdGVCID8gLTEgOiAwO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGEubG9jYWxlQ29tcGFyZShiKTsgICAgICAgICAvLyA8LS0gYWx0ZXJuYXRpdmUgXG4gICAgICAgICAgICB9KTtcbiAgICB9ICAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTXtcblxuXG5cbiAgICBzdGF0aWMgcG9wdWxhdGVUb2RheURhdGUoKXtcbiAgICB9XG4gICAgc3RhdGljIHBvcHVsYXRlUHJvamVjdExpc3QocHJvamVjdHMpe1xuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpe1xuICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PSBcIm5vUHJvamVjdFRhc2tzXCIpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmNsYXNzTmFtZSA9IFwicHJvamVjdEl0ZW1cIlxuICAgICAgICAgICAgcHJvamVjdEJyb3dzZXIuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJvamVjdEljb24uY2xhc3NOYW1lID0gXCJwcm9qZWN0SWNvblwiXG4gICAgICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbik7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0SXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJvamVjdEl0ZW1OYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdEl0ZW1OYW1lXCJcbiAgICAgICAgICAgIHByb2plY3RJdGVtTmFtZS5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbU5hbWUpO1xuXG4gICAgICAgICAgICBsZXQgbmFtZVJlcGxhY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmFtZVJlcGxhY2VEaXYuY2xhc3NOYW1lID0gXCJuYW1lUmVwbGFjZURpdlwiXG4gICAgICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChuYW1lUmVwbGFjZURpdik7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0SXRlbU5hbWVSZXBsYWNlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBwcm9qZWN0SXRlbU5hbWVSZXBsYWNlSW5wdXQuY2xhc3NOYW1lID0gXCJwcm9qZWN0SXRlbU5hbWVSZXBsYWNlSW5wdXRcIlxuICAgICAgICAgICAgbmFtZVJlcGxhY2VEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1OYW1lUmVwbGFjZUlucHV0KTtcblxuICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lT2theSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZU9rYXkuY2xhc3NOYW1lID0gXCJwcm9qZWN0TmFtZU9rYXlcIlxuICAgICAgICAgICAgbmFtZVJlcGxhY2VEaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVPa2F5KTtcblxuICAgICAgICAgICAgbGV0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc05hbWUgPSBcImRlbGV0ZVByb2plY3RcIlxuICAgICAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGNsZWFyUHJvamVjdE5hbWVJbnB1dCgpe1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gXCJcIlxuICAgIH1cbiAgICBzdGF0aWMgc2hvd1JlbmFtZVByb2plY3REaXYoZSl7XG4gICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmZvY3VzKClcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd1Jlc2V0RHVlRGF0ZUlucHV0KGUpe1xuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5mb2N1cygpXG4gICAgfVxuICAgIHN0YXRpYyBoaWRlUmVuYW1lUHJvamVjdERpdigpe1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5uYW1lUmVwbGFjZURpdlwiKS5mb3JFYWNoKChkaXYpPT5kaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5wcm9qZWN0SXRlbU5hbWVcIikuZm9yRWFjaCgoZGl2KT0+ZGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIpO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVEdWVEYXRlUmVwbGFjZURpdigpe1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5kdWVEYXRlUmVwbGFjZURpdlwiKS5mb3JFYWNoKChkaXYpPT5kaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5kdWVEYXRlXCIpLmZvckVhY2goKGRpdik9PmRpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVSZW5hbWVUYXNrRGl2KCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYudGFza05hbWVSZXBsYWNlRGl2XCIpLmZvckVhY2goKGRpdik9PmRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LnRhc2tOYW1lXCIpLmZvckVhY2goKGRpdik9PmRpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKTtcblxuICAgIH1cblxuXG4gICAgc3RhdGljIGNsZWFyUHJvamVjdFJlbmFtZUlucHV0KCl7XG4gICAgICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEl0ZW1OYW1lUmVwbGFjZUlucHV0XCIpXG4gICAgICAgIFxuICAgICAgICBmb3IgKGNvbnN0IGlucHV0IG9mIGlucHV0cyl7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBzdGF0aWMgY2xlYXJQcm9qZWN0TGlzdCgpe1xuICAgICAgICB3aGlsZSAocHJvamVjdEJyb3dzZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcHJvamVjdEJyb3dzZXIuZmlyc3RDaGlsZC5yZW1vdmUoKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhclRhc2tOYW1lSW5wdXQoKXtcbiAgICAgICAgdGFza05hbWVJbnB1dC52YWx1ZSA9IFwiXCJcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJQcm9qZWN0SGVhZGVyKCl7XG4gICAgICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIH1cblxuICAgIHN0YXRpYyBwb3B1bGF0ZVByb2plY3RIZWFkZXIocHJvamVjdE5hbWUpe1xuICAgICAgICBwcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhclRhc2tzKCl7XG4gICAgICAgIHdoaWxlICh0YXNrTGlzdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0YXNrTGlzdC5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBzaG93UmVuYW1lVGFza0lucHV0KGUpe1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5mb2N1cygpXG4gICAgfVxuXG4gICAgc3RhdGljIHBvcHVsYXRlVGFza3MoY3VycmVudFByb2plY3Qpe1xuICAgICAgICBpZiAoY3VycmVudFByb2plY3QubmFtZSA9PSBcIkFsbCBUYXNrc1wiKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIGN1cnJlbnRQcm9qZWN0LnRhc2tzKXtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5wcm9qZWN0TmFtZSA9PSBcIm5vUHJvamVjdFRhc2tzXCIpe1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSB0YXNrTGlzdC5pbm5lckhUTUwgK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRhc2tEaXZcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjaXJjbGVJY29uXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGFza05hbWVEaXZcIj4nK1xuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhc2tOYW1lXCI+JHt0YXNrLm5hbWV9PC9kaXY+YCtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0YXNrTmFtZVJlcGxhY2VEaXZcIj4nK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0YXNrSXRlbU5hbWVSZXBsYWNlSW5wdXRcIj4nK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRhc2tSZXBsYWNlTmFtZU9rYXlcIj48L2Rpdj48L2Rpdj4nKyc8L2Rpdj4nK1xuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInByb2plY3RTdWJzY3JpcHRcIj48L2Rpdj5gK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImR1ZURhdGVEaXZcIj4nK1xuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImR1ZURhdGVcIj4gJHt0YXNrLmR1ZURhdGUucmVwbGFjZUFsbChcIi1cIixcIi5cIil9PC9kaXY+YCArXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZHVlRGF0ZVJlcGxhY2VEaXZcIj4nK1xuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJkdWVEYXRlUmVwbGFjZUlucHV0XCI+JytcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkdWVEYXRlUmVwbGFjZU9rYXlcIj48L2Rpdj4nK1xuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JytcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9IHRhc2tMaXN0LmlubmVySFRNTCArXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGFza0RpdlwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjaXJjbGVJY29uXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRhc2tOYW1lRGl2XCI+JytcbiAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YXNrTmFtZVwiPiR7dGFzay5uYW1lfTwvZGl2PmArXG4gICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGFza05hbWVSZXBsYWNlRGl2XCI+JytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidGFza0l0ZW1OYW1lUmVwbGFjZUlucHV0XCI+JytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0YXNrUmVwbGFjZU5hbWVPa2F5XCI+PC9kaXY+JytcbiAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXG4gICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JytcbiAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJwcm9qZWN0U3Vic2NyaXB0XCI+JHt0YXNrLnByb2plY3ROYW1lfTwvZGl2PmArXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZHVlRGF0ZURpdlwiPicrXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiZHVlRGF0ZVwiPiAke3Rhc2suZHVlRGF0ZS5yZXBsYWNlQWxsKFwiLVwiLFwiLlwiKX08L2Rpdj5gICtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkdWVEYXRlUmVwbGFjZURpdlwiPicrXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImR1ZURhdGVSZXBsYWNlSW5wdXRcIj4nK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImR1ZURhdGVSZXBsYWNlT2theVwiPjwvZGl2PicrXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JytcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIGN1cnJlbnRQcm9qZWN0LnRhc2tzKXtcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSB0YXNrTGlzdC5pbm5lckhUTUwgK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGFza0RpdlwiPicgK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2lyY2xlSWNvblwiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGFza05hbWVEaXZcIj4nK1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFza05hbWVcIj4ke3Rhc2submFtZX08L2Rpdj5gK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGFza05hbWVSZXBsYWNlRGl2XCI+JytcbiAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0YXNrSXRlbU5hbWVSZXBsYWNlSW5wdXRcIj4nK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGFza1JlcGxhY2VOYW1lT2theVwiPjwvZGl2PjwvZGl2PjwvZGl2PicrXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkdWVEYXRlRGl2XCI+JytcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImR1ZURhdGVcIj4gJHt0YXNrLmR1ZURhdGUucmVwbGFjZUFsbChcIi1cIixcIi5cIil9PC9kaXY+YCArXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkdWVEYXRlUmVwbGFjZURpdlwiPicrXG4gICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZHVlRGF0ZVJlcGxhY2VJbnB1dFwiPicrXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkdWVEYXRlUmVwbGFjZU9rYXlcIj48L2Rpdj4nK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dBZGRUYXNrSW5wdXRzKCl7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd0FkZFByb2plY3RJbnB1dHMoKXtcblxuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVUYXNrKCl7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd05ld1Byb2plY3REaXYoKXtcbiAgICAgICAgbmV3UHJvamVjdElucHV0RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXk9IFwibm9uZVwiXG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgc3RhdGljIHNob3dOZXdUYXNrRGl2KCl7XG4gICAgICAgIG5ld1Rhc2tJbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5PSBcIm5vbmVcIlxuICAgICAgICB0YXNrTmFtZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVOZXdQcm9qZWN0RGl2KCl7XG4gICAgICAgIG5ld1Byb2plY3RJbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5PSBcImJsb2NrXCJcbiAgICB9XG4gICAgc3RhdGljIGhpZGVOZXdUYXNrRGl2KCl7XG4gICAgICAgIG5ld1Rhc2tJbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5PSBcImJsb2NrXCJcbiAgICB9XG59IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckNoZWNre1xuICAgIHN0YXRpYyBhbGVydElmU3RyaW5nRW1wdHkoc3RyaW5nKXtcbiAgICAgICAgaWYgKHN0cmluZyA9PSBcIlwiKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiTmFtZSBjYW5ub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICB0aGlzSXNFcnJvckxpbmVUb1N0b3BEZWJ1Z2dlcjtcbiAgICAgICAgfSAgIFxuICAgIH1cblxuICAgIHN0YXRpYyBhbGVydElmUHJvamVjdE5hbWVEdXBsaWNhdGUobmFtZSwgY3VycmVudFByb2plY3QsIHByb2plY3RzLCBBZGRPclJlcGxhY2Upe1xuICAgICAgICBcbiAgICAgICAgbGV0IHRlbXBQcm9qZWN0QXJyID0gIHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSBuYW1lKVxuICAgICAgICBpZiAoKEFkZE9yUmVwbGFjZSA9PSBcIkFkZFwiICYmIHRlbXBQcm9qZWN0QXJyLmxlbmd0aCA9PSAxKVxuICAgICAgICB8fCAoQWRkT3JSZXBsYWNlID09IFwiUmVwbGFjZVwiICYmIG5hbWUgIT0gY3VycmVudFByb2plY3QubmFtZSAmJiAgdGVtcFByb2plY3RBcnIubGVuZ3RoID09IDEpKXtcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzSXNFcnJvckxpbmVUb1N0b3BEZWJ1Z2dlcjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIGFsZXJ0SWZQYXN0RGF0ZSgpe1xuICAgIH1cbiAgICBzdGF0aWMgYWxhcnRJZkR1cGxpY2F0ZVByb2plY3ROYW1lKCl7XG5cbiAgICB9XG4gICAgc3RhdGljIGFsZXJ0SWZEdXBsaWNhdGVUYXNrTmFtZSgpe1xuXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcblxuICAgIHN0YXRpYyBzYXZlRGF0YShwcm9qZWN0cywgYWxsVGFza3Mpe1xuICAgICAgICBsZXQgc3RyaW5naWZpZWRQcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIHN0cmluZ2lmaWVkUHJvamVjdHMpXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWREYXRhKCl7XG4gICAgICAgIGxldCBzdHJpbmdpZmllZFByb2plY3RzPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpXG4gICAgICAgIGlmIChzdHJpbmdpZmllZFByb2plY3RzID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyaW5naWZpZWRQcm9qZWN0cyk7XG5cbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICB0YXNrcyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzayl7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcblxuICAgICAgICAvL3NvcnQgYnkgZHVlIGRhdGVcbiAgICAgICAgdGhpcy50YXNrcy5zb3J0KGZ1bmN0aW9uKGEsYikge1xuICAgICAgICAgICAgbGV0IGRhdGVBID0gYS5kdWVEYXRlLnJlcGxhY2VBbGwoJy0nLCcnKTtcbiAgICAgICAgICAgIGxldCBkYXRlQiA9IGIuZHVlRGF0ZS5yZXBsYWNlQWxsKCctJywnJyk7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZUEgPiBkYXRlQiA/IDEgOiBkYXRlQSA8IGRhdGVCID8gLTEgOiAwO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGEubG9jYWxlQ29tcGFyZShiKTsgICAgICAgICAvLyA8LS0gYWx0ZXJuYXRpdmUgXG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFzaylcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUsIHByb2plY3Qpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdC5uYW1lO1xuICAgIH0gICAgXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRE9NIGZyb20gJy4vRE9NJ1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0J1xuaW1wb3J0IEFsbFRhc2tzIGZyb20gJy4vQWxsVGFza3MnXG5pbXBvcnQgRXJyb3JDaGVjayBmcm9tICcuL0Vycm9yQ2hlY2snXG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gJy4vTG9jYWxTdG9yYWdlJ1xuXG5sZXQgYWxsVGFza3MgPSBuZXcgQWxsVGFza3MoKVxubGV0IG5vUHJvamVjdFRhc2tzICA9IG5ldyBQcm9qZWN0KFwibm9Qcm9qZWN0VGFza3NcIik7XG5sZXQgcHJvamVjdHMgPSBbbm9Qcm9qZWN0VGFza3NdO1xuXG5pZiAoTG9jYWxTdG9yYWdlLmxvYWREYXRhKCkgIT0gbnVsbCl7XG4gICAgbGV0IHByb2plY3RzSnNvbiA9IExvY2FsU3RvcmFnZS5sb2FkRGF0YSgpO1xuICAgIGZvciAobGV0IHByb2plY3RKc29uIG9mIHByb2plY3RzSnNvbil7XG4gICAgICAgIGlmIChwcm9qZWN0SnNvbi5uYW1lID09IFwibm9Qcm9qZWN0VGFza3NcIil7XG4gICAgICAgICAgICBmb3IgKGxldCB0YXNrSnNvbiBvZiBwcm9qZWN0SnNvbi50YXNrcyl7XG4gICAgICAgICAgICAgICAgbm9Qcm9qZWN0VGFza3MudGFza3MucHVzaChuZXcgVGFzayh0YXNrSnNvbi5uYW1lLCB0YXNrSnNvbi5kdWVEYXRlLCBub1Byb2plY3RUYXNrcykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IHRlbXBQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdEpzb24ubmFtZSlcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2godGVtcFByb2plY3QpXG4gICAgICAgICAgICBmb3IgKGxldCB0YXNrSnNvbiBvZiBwcm9qZWN0SnNvbi50YXNrcyl7XG4gICAgICAgICAgICAgICAgdGVtcFByb2plY3QudGFza3MucHVzaChuZXcgVGFzayh0YXNrSnNvbi5uYW1lLCB0YXNrSnNvbi5kdWVEYXRlLCB0ZW1wUHJvamVjdCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsVGFza3MucmVwb3B1bGF0ZVRhc2tzKHByb2plY3RzKVxufWVsc2V7XG4gICAgY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcIlByb2plY3QgMVwiKTtcbiAgICBwcm9qZWN0MS5hZGRUYXNrKG5ldyBUYXNrKFwidGFzayAxXCIsIFwiMjAyNC0wMS0wMVwiLCBwcm9qZWN0MSkpO1xuICAgIHByb2plY3QxLmFkZFRhc2sobmV3IFRhc2soXCJ0YXNrIDJcIiwgXCIyMDI0LTAxLTAxXCIsIHByb2plY3QxICkpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdDEpO1xuICAgIGNvbnN0IHByb2plY3QyID0gbmV3IFByb2plY3QoXCJQcm9qZWN0IDJcIik7XG4gICAgcHJvamVjdDIuYWRkVGFzayhuZXcgVGFzayhcInRhc2sgM1wiLCBcIjIwMjQtMDEtMDFcIiwgcHJvamVjdDIgKSk7XG4gICAgcHJvamVjdDIuYWRkVGFzayhuZXcgVGFzayhcInRhc2sgNFwiLCBcIjIwMjQtMDEtMDFcIiwgcHJvamVjdDIgKSk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0Mik7XG4gICAgYWxsVGFza3MucmVwb3B1bGF0ZVRhc2tzKHByb2plY3RzKVxufVxuXG5cblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gYWxsVGFza3NcbkRPTS5jbGVhclByb2plY3RMaXN0KClcbkRPTS5wb3B1bGF0ZVByb2plY3RMaXN0KHByb2plY3RzKVxuXG5ET00uY2xlYXJUYXNrcygpXG5ET00ucG9wdWxhdGVUYXNrcyhjdXJyZW50UHJvamVjdClcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGUgPT57XG4gICAgaWYgKGUudGFyZ2V0ID09IGFkZFByb2plY3RCdG4pe0RPTS5zaG93TmV3UHJvamVjdERpdigpO31cbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJwcm9qZWN0SXRlbVwiICApe1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5jaGlsZHJlblsxXS5pbm5lckhUTUw7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PSBcIkFsbCBUYXNrc1wiKXtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gYWxsVGFza3NcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9ICBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKVxuICAgICAgICB9XG4gICAgICAgIERPTS5jbGVhclByb2plY3RIZWFkZXIoKTtcbiAgICAgICAgRE9NLnBvcHVsYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0TmFtZSk7XG4gICAgICAgIERPTS5jbGVhclRhc2tzKCk7XG4gICAgICAgIERPTS5wb3B1bGF0ZVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgXG4gICAgfWVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInByb2plY3RJdGVtTmFtZVwiKXtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT0gXCJBbGwgVGFza3NcIil7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGFsbFRhc2tzXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSAgcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSlcbiAgICAgICAgfVxuICAgICAgICBET00uY2xlYXJQcm9qZWN0SGVhZGVyKCk7XG4gICAgICAgIERPTS5wb3B1bGF0ZVByb2plY3RIZWFkZXIocHJvamVjdE5hbWUpO1xuICAgICAgICBET00uY2xlYXJUYXNrcygpO1xuICAgICAgICBET00ucG9wdWxhdGVUYXNrcyhjdXJyZW50UHJvamVjdCk7XG4gICAgfWVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInByb2plY3RJY29uXCIpe1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5uZXh0U2libGluZy5pbm5lckhUTUw7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PSBcIkFsbCBUYXNrc1wiKXtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gYWxsVGFza3NcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9ICBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKVxuICAgICAgICB9XG4gICAgICAgIERPTS5jbGVhclByb2plY3RIZWFkZXIoKTtcbiAgICAgICAgRE9NLnBvcHVsYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0TmFtZSk7XG4gICAgICAgIERPTS5jbGVhclRhc2tzKCk7XG4gICAgICAgIERPTS5wb3B1bGF0ZVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS50YXJnZXQgPT0gYWRkVGFza0J0biApe0RPTS5zaG93TmV3VGFza0RpdigpO31cbiAgICBlbHNlIGlmIChlLnRhcmdldCA9PSBuZXdQcm9qZWN0TmFtZU9rYXkpe1xuICAgICAgICBFcnJvckNoZWNrLmFsZXJ0SWZTdHJpbmdFbXB0eShwcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgRXJyb3JDaGVjay5hbGVydElmUHJvamVjdE5hbWVEdXBsaWNhdGUocHJvamVjdE5hbWVJbnB1dC52YWx1ZSwgY3VycmVudFByb2plY3QsIHByb2plY3RzLFwiQWRkXCIpXG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QocHJvamVjdE5hbWVJbnB1dC52YWx1ZSkpO1xuICAgICAgICBET00uY2xlYXJQcm9qZWN0TGlzdCgpXG4gICAgICAgIERPTS5wb3B1bGF0ZVByb2plY3RMaXN0KHByb2plY3RzKVxuICAgICAgICBET00uY2xlYXJQcm9qZWN0TmFtZUlucHV0KClcbiAgICAgICAgRE9NLmhpZGVOZXdQcm9qZWN0RGl2KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInByb2plY3ROYW1lT2theVwiKXtcbiAgICAgICAgbGV0IGV4aXN0aW5nUHJvamVjdEl0ZW1OYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTDtcbiAgICAgICAgbGV0IHJlcGxhY2VQcm9qZWN0bmFtZUlucHV0ID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICBFcnJvckNoZWNrLmFsZXJ0SWZTdHJpbmdFbXB0eShyZXBsYWNlUHJvamVjdG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgIEVycm9yQ2hlY2suYWxlcnRJZlByb2plY3ROYW1lRHVwbGljYXRlKHJlcGxhY2VQcm9qZWN0bmFtZUlucHV0LnZhbHVlLCBjdXJyZW50UHJvamVjdCwgcHJvamVjdHMsXCJSZXBsYWNlXCIpXG4gICAgICAgIGxldCBwcm9qZWN0T2JqID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSBleGlzdGluZ1Byb2plY3RJdGVtTmFtZSlcbiAgICAgICAgcHJvamVjdE9iai5uYW1lID0gcmVwbGFjZVByb2plY3RuYW1lSW5wdXQudmFsdWVcbiAgICAgICAgRE9NLmNsZWFyUHJvamVjdExpc3QoKVxuICAgICAgICBET00ucG9wdWxhdGVQcm9qZWN0TGlzdChwcm9qZWN0cylcbiAgICAgICAgRE9NLmNsZWFyUHJvamVjdE5hbWVJbnB1dCgpXG4gICAgICAgIERPTS5oaWRlTmV3UHJvamVjdERpdigpXG5cbiAgICAgICAgcHJvamVjdEhlYWRlci5pbm5lckhUTUwgPSByZXBsYWNlUHJvamVjdG5hbWVJbnB1dC52YWx1ZVxuICAgIH1cbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJkZWxldGVQcm9qZWN0XCIpe1xuICAgICAgICBsZXQgcHJvamVjdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0SXRlbS5pbm5lckhUTUw7XG5cbiAgICAgICAgbGV0IHByb2plY3RPYmogPSAgcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSlcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YocHJvamVjdE9iaiksMSlcblxuICAgICAgICBET00uY2xlYXJQcm9qZWN0TGlzdCgpXG4gICAgICAgIERPTS5wb3B1bGF0ZVByb2plY3RMaXN0KHByb2plY3RzKVxuXG4gICAgICAgIGFsbFRhc2tzLnJlcG9wdWxhdGVUYXNrcyhwcm9qZWN0cyk7XG5cbiAgICAgICAgYWxsVGFza3NEaXYuY2xpY2soKTtcbiAgICB9XG5cbiAgICBlbHNlIGlmIChlLnRhcmdldCA9PSBuZXdUYXNrTmFtZU9rYXkpe1xuICAgICAgICBcbiAgICAgICAgRXJyb3JDaGVjay5hbGVydElmU3RyaW5nRW1wdHkodGFza05hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdC5uYW1lID09IFwiQWxsIFRhc2tzXCIpe1xuICAgICAgICAgICAgbm9Qcm9qZWN0VGFza3MuYWRkVGFzayhuZXcgVGFzayh0YXNrTmFtZUlucHV0LnZhbHVlLGR1ZURhdGVJbnB1dC52YWx1ZSwgbm9Qcm9qZWN0VGFza3MpKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRUYXNrKG5ldyBUYXNrKHRhc2tOYW1lSW5wdXQudmFsdWUsIGR1ZURhdGVJbnB1dC52YWx1ZSwgY3VycmVudFByb2plY3QpKTtcbiAgICAgICAgfVxuICAgICAgICBhbGxUYXNrcy5yZXBvcHVsYXRlVGFza3MocHJvamVjdHMpXG4gICAgICAgIERPTS5jbGVhclRhc2tzKCk7XG4gICAgICAgIERPTS5wb3B1bGF0ZVRhc2tzKGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICBET00uY2xlYXJUYXNrTmFtZUlucHV0KCk7XG4gICAgICAgIERPTS5oaWRlTmV3VGFza0RpdigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJ0YXNrUmVwbGFjZU5hbWVPa2F5XCIpe1xuXG4gICAgICAgIGxldCBleGlzdGluZ0l0ZW1OYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTDtcbiAgICAgICAgbGV0IHJlcGxhY2VUYXNrTmFtZUlucHV0ID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICBFcnJvckNoZWNrLmFsZXJ0SWZTdHJpbmdFbXB0eShyZXBsYWNlVGFza05hbWVJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0Lm5hbWUgPT0gXCJBbGwgVGFza3NcIil7XG4gICAgICAgICAgICBsZXQgdGVtcFByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUw7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wUHJvamVjdE5hbWU9PVwiXCIpe1xuICAgICAgICAgICAgICAgIHRlbXBQcm9qZWN0TmFtZSA9IFwibm9Qcm9qZWN0VGFza3NcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdGVtcFByb2plY3RPYmogPSBwcm9qZWN0cy5maW5kKHByb2plY3Q9PiBwcm9qZWN0Lm5hbWUgPT0gdGVtcFByb2plY3ROYW1lKVxuICAgICAgICAgICAgbGV0IHRlbXB0YXNrT2JqID0gdGVtcFByb2plY3RPYmoudGFza3MuZmluZCh0YXNrID0+IHRhc2submFtZSA9PSBleGlzdGluZ0l0ZW1OYW1lKVxuICAgICAgICAgICAgdGVtcHRhc2tPYmoubmFtZSA9IHJlcGxhY2VUYXNrTmFtZUlucHV0LnZhbHVlXG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgdGVtcHRhc2tPYmogPSBjdXJyZW50UHJvamVjdC50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5uYW1lID09IGV4aXN0aW5nSXRlbU5hbWUpXG4gICAgICAgICAgICB0ZW1wdGFza09iai5uYW1lID0gcmVwbGFjZVRhc2tOYW1lSW5wdXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgRE9NLmhpZGVSZW5hbWVUYXNrRGl2KCk7XG4gICAgICAgIERPTS5jbGVhclRhc2tzKCk7XG4gICAgICAgIERPTS5wb3B1bGF0ZVRhc2tzKGN1cnJlbnRQcm9qZWN0KVxuICAgIH1cbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJkdWVEYXRlUmVwbGFjZU9rYXlcIil7XG5cbiAgICAgICAgXG4gICAgICAgIGxldCByZXBsYWNlRGF0ZUlucHV0ID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcblxuXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdC5uYW1lID09IFwiQWxsIFRhc2tzXCIpe1xuICAgICAgICAgICAgbGV0IGV4aXN0aW5nSXRlbU5hbWUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcbiAgICAgICAgICAgIGxldCB0ZW1wUHJvamVjdE5hbWUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUw7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wUHJvamVjdE5hbWU9PVwiXCIpe1xuICAgICAgICAgICAgICAgIHRlbXBQcm9qZWN0TmFtZSA9IFwibm9Qcm9qZWN0VGFza3NcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdGVtcFByb2plY3RPYmogPSBwcm9qZWN0cy5maW5kKHByb2plY3Q9PiBwcm9qZWN0Lm5hbWUgPT0gdGVtcFByb2plY3ROYW1lKVxuICAgICAgICAgICAgbGV0IHRlbXB0YXNrT2JqID0gdGVtcFByb2plY3RPYmoudGFza3MuZmluZCh0YXNrID0+IHRhc2submFtZSA9PSBleGlzdGluZ0l0ZW1OYW1lKVxuICAgICAgICAgICAgdGVtcHRhc2tPYmouZHVlRGF0ZSA9IHJlcGxhY2VEYXRlSW5wdXQudmFsdWVcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0l0ZW1OYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgbGV0IHRlbXB0YXNrT2JqID0gY3VycmVudFByb2plY3QudGFza3MuZmluZCh0YXNrID0+IHRhc2submFtZSA9PSBleGlzdGluZ0l0ZW1OYW1lKVxuICAgICAgICAgICAgdGVtcHRhc2tPYmouZHVlRGF0ZSA9IHJlcGxhY2VEYXRlSW5wdXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgRE9NLmNsZWFyVGFza3MoKTtcbiAgICAgICAgRE9NLnBvcHVsYXRlVGFza3MoY3VycmVudFByb2plY3QpXG4gICAgfVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImNpcmNsZUljb25cIil7XG4gICAgICAgIGxldCB0YXNrTmFtZSA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcblxuICAgICAgICBpZiAoY3VycmVudFByb2plY3QubmFtZSA9PSBcIkFsbCBUYXNrc1wiKXtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZSA9ICBlLnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZy5pbm5lckhUTUw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PSBcIlwiKXtcbiAgICAgICAgICAgICAgICBsZXQgdGFza09iaiA9IG5vUHJvamVjdFRhc2tzLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLm5hbWUgPT0gdGFza05hbWUpO1xuICAgICAgICAgICAgICAgIG5vUHJvamVjdFRhc2tzLnRhc2tzLnNwbGljZShub1Byb2plY3RUYXNrcy50YXNrcy5pbmRleE9mKHRhc2tPYmopLDEpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RPYmogPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09IHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgdGFza09iaiA9IHByb2plY3RPYmoudGFza3MuZmluZCh0YXNrID0+IHRhc2submFtZSA9PSB0YXNrTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0T2JqLnRhc2tzLnNwbGljZShwcm9qZWN0T2JqLnRhc2tzLmluZGV4T2YodGFza09iaiksMSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IHRhc2tPYmogPSBjdXJyZW50UHJvamVjdC50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5uYW1lID09IHRhc2tOYW1lKTtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnNwbGljZShjdXJyZW50UHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2tPYmopLDEpXG4gICAgICAgIH1cbiAgICAgICAgYWxsVGFza3MucmVwb3B1bGF0ZVRhc2tzKHByb2plY3RzKTtcbiAgICAgICAgRE9NLmNsZWFyVGFza3MoKTtcbiAgICAgICAgRE9NLnBvcHVsYXRlVGFza3MoY3VycmVudFByb2plY3QpO1xuXG5cbiAgICB9XG5cbiAgICBlbHNlIHt9XG5cbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPSBwcm9qZWN0TmFtZUlucHV0KXtcbiAgICAgICAgRE9NLmNsZWFyUHJvamVjdE5hbWVJbnB1dCgpO1xuICAgICAgICBET00uaGlkZU5ld1Byb2plY3REaXYoKTtcbiAgICB9O1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9IHRhc2tOYW1lSW5wdXQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPSBkdWVEYXRlSW5wdXQgKXtcbiAgICAgICAgRE9NLmhpZGVOZXdUYXNrRGl2KCk7XG4gICAgfTtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgIT0gXCJwcm9qZWN0SXRlbU5hbWVSZXBsYWNlSW5wdXRcIil7XG4gICAgICAgIERPTS5jbGVhclByb2plY3RSZW5hbWVJbnB1dCgpO1xuICAgICAgICBET00uaGlkZVJlbmFtZVByb2plY3REaXYoKTtcbiAgICB9O1xuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lICE9IFwidGFza0l0ZW1OYW1lUmVwbGFjZUlucHV0XCIpe1xuICAgICAgICBET00uaGlkZVJlbmFtZVRhc2tEaXYoKTtcbiAgICB9O1xuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lICE9IFwiZHVlRGF0ZVJlcGxhY2VJbnB1dFwiKXtcbiAgICAgICAgRE9NLmhpZGVEdWVEYXRlUmVwbGFjZURpdigpO1xuICAgIH07XG5cbiAgICBMb2NhbFN0b3JhZ2Uuc2F2ZURhdGEocHJvamVjdHMsIGFsbFRhc2tzKTtcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkID09XCJwcm9qZWN0TmFtZUlucHV0XCIgJiYgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgbmV3UHJvamVjdE5hbWVPa2F5LmNsaWNrKCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gdGFza05hbWVJbnB1dCAmJiBldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBuZXdUYXNrTmFtZU9rYXkuY2xpY2soKTtcbiAgICB9XG5cbn0pOyBcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIERPTS5jbGVhclByb2plY3ROYW1lSW5wdXQoKTtcbiAgICAgICAgRE9NLmhpZGVOZXdQcm9qZWN0RGl2KCk7XG5cbiAgICAgICAgRE9NLmNsZWFyVGFza05hbWVJbnB1dCgpO1xuICAgICAgICBET00uaGlkZU5ld1Rhc2tEaXYoKTtcblxuICAgICAgICBET00uY2xlYXJQcm9qZWN0UmVuYW1lSW5wdXQoKTtcbiAgICAgICAgRE9NLmhpZGVSZW5hbWVQcm9qZWN0RGl2KCk7XG4gICAgfVxufSk7IFxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIixlPT57XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInByb2plY3RJdGVtTmFtZVwiKXtcbiAgICAgICAgRE9NLnNob3dSZW5hbWVQcm9qZWN0RGl2KGUpOyAgICBcbiAgICB9O1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2tOYW1lXCIpe1xuICAgICAgICBET00uc2hvd1JlbmFtZVRhc2tJbnB1dChlKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiZHVlRGF0ZVwiKXtcbiAgICAgICAgRE9NLnNob3dSZXNldER1ZURhdGVJbnB1dChlKTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==