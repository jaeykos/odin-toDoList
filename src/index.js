import DOM from './DOM'
import Task from './Task'
import Project from './Project'
import AllTasks from './AllTasks'
import ErrorCheck from './ErrorCheck'

const projects = [];

document.addEventListener("click",e =>{
    if (e.target == addProjectBtn){DOM.showNewProjectDiv();}
    else if (e.target == addTaskBtn ){DOM.showNewTaskDiv();}
    else if (e.target == projectNameOkay){
        ErrorCheck.alertIfStringEmpty(projectNameInput.value);
        projects.push(new Project(projectNameInput.value));
        DOM.clearProjectList()
        DOM.populateProjectList(projects)
        DOM.clearProjectNameInput()
        DOM.hideNewProjectDiv();
    }
    else if (e.target == taskNameOkay){}
    else if (e.target.className == "projectName"){}
    else if (e.target.className == "taskname"){}
    else if (e.target.className == "dueDate"){}
    else if (e.target.className == "taskRadioBtn"){}
    else if (e.target.className == "taskRadioBtn"){}
    else {}

    if (document.activeElement != projectNameInput){
        DOM.clearProjectNameInput();
        DOM.hideNewProjectDiv();
    };
    if (document.activeElement != taskNameInput && document.activeElement != dueDateInput ){DOM.hideNewTaskDiv();};
})

projectNameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        projectNameOkay.click();
    }
}); 

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        DOM.clearProjectNameInput();
        DOM.hideNewProjectDiv();

        DOM.clearTaskNameInput();
        DOM.hideNewTaskDiv();
    }
}); 

document.addEventListener("dblclick",e=>{
    if (e.target.className = "projectName"){
        
    }
})