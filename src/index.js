import DOM from './DOM'
import Task from './Task'
import Project from './Project'
import AllTasks from './AllTasks'
import ErrorCheck from './ErrorCheck'
import LocalStorage from './LocalStorage'

let allTasks = new AllTasks()
let noProjectTasks  = new Project("noProjectTasks");
let projects = [noProjectTasks];

if (LocalStorage.loadData() != null){
    let projectsJson = LocalStorage.loadData();
    for (let projectJson of projectsJson){
        if (projectJson.name == "noProjectTasks"){
            for (let taskJson of projectJson.tasks){
                noProjectTasks.tasks.push(new Task(taskJson.name, taskJson.dueDate, noProjectTasks))
            }
        }else{
            let tempProject = new Project(projectJson.name)
            projects.push(tempProject)
            for (let taskJson of projectJson.tasks){
                tempProject.tasks.push(new Task(taskJson.name, taskJson.dueDate, tempProject))
            }
        }
    }
    allTasks.repopulateTasks(projects)
}else{
    const project1 = new Project("Project 1");
    project1.addTask(new Task("task 1", "2024-01-01", project1));
    project1.addTask(new Task("task 2", "2024-01-01", project1 ));
    projects.push(project1);
    const project2 = new Project("Project 2");
    project2.addTask(new Task("task 3", "2024-01-01", project2 ));
    project2.addTask(new Task("task 4", "2024-01-01", project2 ));
    projects.push(project2);
    allTasks.repopulateTasks(projects)
}



let currentProject = allTasks
DOM.clearProjectList()
DOM.populateProjectList(projects)

DOM.clearTasks()
DOM.populateTasks(currentProject)



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
        ErrorCheck.alertIfProjectNameDuplicate(projectNameInput.value, currentProject, projects,"Add")
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
        ErrorCheck.alertIfProjectNameDuplicate(replaceProjectnameInput.value, currentProject, projects,"Replace")
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
        
        ErrorCheck.alertIfStringEmpty(taskNameInput.value);
        if (currentProject.name == "All Tasks"){
            noProjectTasks.addTask(new Task(taskNameInput.value,dueDateInput.value, noProjectTasks));
        }else{
            currentProject.addTask(new Task(taskNameInput.value, dueDateInput.value, currentProject));
        }
        allTasks.repopulateTasks(projects)
        DOM.clearTasks();
        DOM.populateTasks(currentProject)
        DOM.clearTaskNameInput();
        DOM.hideNewTaskDiv();
    }
    else if (e.target.className == "taskReplaceNameOkay"){

        let existingItemName = e.target.parentNode.previousElementSibling.innerHTML;
        let replaceTaskNameInput = e.target.previousElementSibling;

        ErrorCheck.alertIfStringEmpty(replaceTaskNameInput.value);

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
        
        DOM.hideRenameTaskDiv();
        DOM.clearTasks();
        DOM.populateTasks(currentProject)
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
        
        DOM.clearTasks();
        DOM.populateTasks(currentProject)
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
        DOM.clearTasks();
        DOM.populateTasks(currentProject);


    }

    else {}

    if (document.activeElement != projectNameInput){
        DOM.clearProjectNameInput();
        DOM.hideNewProjectDiv();
    };
    if (document.activeElement != taskNameInput && document.activeElement != dueDateInput ){
        DOM.hideNewTaskDiv();
    };
    if (document.activeElement.className != "projectItemNameReplaceInput"){
        DOM.clearProjectRenameInput();
        DOM.hideRenameProjectDiv();
    };

    if (document.activeElement.className != "taskItemNameReplaceInput"){
        DOM.hideRenameTaskDiv();
    };

    if (document.activeElement.className != "dueDateReplaceInput"){
        DOM.hideDueDateReplaceDiv();
    };

    LocalStorage.saveData(projects, allTasks);
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

    if (e.target.className == "taskName"){
        DOM.showRenameTaskInput(e);
    }

    if (e.target.className == "dueDate"){
        DOM.showResetDueDateInput(e);
    }
});
