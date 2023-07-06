import DOM from './DOM'
import Task from './Task'
import Project from './Project'
import AllTasks from './AllTasks'
import ErrorCheck from './ErrorCheck'

const projects = [];
const project1 = new Project("Project 1");
project1.addTask(new Task("task 1", "2024-01-01" ));
project1.addTask(new Task("task 2", "2024-01-01" ));
projects.push(project1);

const project2 = new Project("Project 2");
project2.addTask(new Task("task 3", "2024-01-01" ));
project2.addTask(new Task("task 4", "2024-01-01" ));
projects.push(project2);

const allTasks = new AllTasks()
DOM.clearProjectList()
DOM.populateProjectList(projects)

let currentProject = allTasks
allTasks.repopulateTasks(projects)


document.addEventListener("click",e =>{
    if (e.target == addProjectBtn){DOM.showNewProjectDiv();}
    else if (e.target.className == "projectItem"  ){
        let projectName = e.target.children[1].innerHTML;
        if (projectName == "All Tasks"){
            currentProject = allTasks
        }else{
            currentProject =  projects.find(project => project.name == projectName)
        }
        DOM.clearProjectHeader();
        DOM.populateProjectHeader(projectName);
        DOM.clearTasks();
        DOM.populateTasks(currentProject);
    }else if (e.target.className == "projectItemName"){
        let projectName = e.target.innerHTML;
        if (projectName == "All Tasks"){
            currentProject = allTasks
        }else{
            currentProject =  projects.find(project => project.name == projectName)
        }
        DOM.clearProjectHeader();
        DOM.populateProjectHeader(projectName);
        DOM.clearTasks();
        DOM.populateTasks(currentProject);
    }else if (e.target.className == "projectIcon"){
        let projectName = e.target.nextSibling.innerHTML;
        if (projectName == "All Tasks"){
            currentProject = allTasks
        }else{
            currentProject =  projects.find(project => project.name == projectName)
        }
        DOM.clearProjectHeader();
        DOM.populateProjectHeader(projectName);
        DOM.clearTasks();
        DOM.populateTasks(currentProject);
    }

    else if (e.target == addTaskBtn ){DOM.showNewTaskDiv();}
    else if (e.target == newProjectNameOkay){
        ErrorCheck.alertIfStringEmpty(projectNameInput.value);
        projects.push(new Project(projectNameInput.value));
        DOM.clearProjectList()
        DOM.populateProjectList(projects)
        DOM.clearProjectNameInput()
        DOM.hideNewProjectDiv();

        
    }
    else if (e.target.className == "projectNameOkay"){
        let existingProjectItemName = e.target.parentNode.previousElementSibling.innerHTML;
        let replaceProjectnameInput = e.target.previousElementSibling;

        ErrorCheck.alertIfStringEmpty(replaceProjectnameInput.value);

        let projectObj = projects.find(project => project.name == existingProjectItemName)
        projectObj.name = replaceProjectnameInput.value
        DOM.clearProjectList()
        DOM.populateProjectList(projects)
        DOM.clearProjectNameInput()
        DOM.hideNewProjectDiv()

        projectHeader.innerHTML = replaceProjectnameInput.value
    }
    else if (e.target.className == "deleteProject"){
        let projectItem = e.target.parentNode;
        let projectName = projectItem.innerHTML;

        let projectObj =  projects.find(project => project.name == projectName)
        projects.splice(projects.indexOf(projectObj),1)

        DOM.clearProjectList()
        DOM.populateProjectList(projects)

        allTasks.repopulateTasks(projects);

        allTasksDiv.click();
    }

    else if (e.target == newTaskNameOkay){
        
        ErrorCheck.alertIfStringEmpty(projectNameInput.value);
        projects.push(new task(projectNameInput.value));
        DOM.clearProjectList()
        DOM.populateProjectList(projects)
        DOM.clearProjectNameInput()
        DOM.hideNewProjectDiv();
    }
    
    else if (e.target.className == "taskname"){}
    else if (e.target.className == "dueDate"){}
    else if (e.target.className == "taskRadioBtn"){}
    else if (e.target.className == "taskRadioBtn"){}
    else {}

    if (document.activeElement != projectNameInput){
        DOM.clearProjectNameInput();
        DOM.hideNewProjectDiv();
    };
    if (document.activeElement != taskNameInput && document.activeElement != dueDateInput ){
        DOM.hideNewTaskDiv();};
    if (document.activeElement.className != "projectItemNameReplaceInput"){
        DOM.clearProjectRenameInput();
        DOM.hideRenameProjectDiv();
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
        DOM.clearProjectNameInput();
        DOM.hideNewProjectDiv();

        DOM.clearTaskNameInput();
        DOM.hideNewTaskDiv();

        DOM.clearProjectRenameInput();
        DOM.hideRenameProjectDiv();
    }
}); 

document.addEventListener("dblclick",e=>{
    if (e.target.className == "projectItemName"){
        DOM.showRenameProjectDiv(e);    
    };
});
