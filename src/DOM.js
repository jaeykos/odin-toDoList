export default class DOM{



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