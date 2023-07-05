export default class DOM{



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