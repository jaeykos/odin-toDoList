class Task {

    constructor(name, dueDate, project){
        this.name = name;
        this.dueDate = dueDate;
        this.project = project;
    }    
}

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

class AllProject extends Project{
    name = "All"
    repopulateTasksOfProject(project){ 
        //remove all tasks belonging to the project
        this.tasks = this.tasks.filter(item => item.project !== project)

        //insert all tasks belgonging to the project
        this.tasks = this.tasks.concat(project.tasks)

    }
}

class DOM{

    static closeAllPopUps(){

    }

    static populateTodayDate(){

    }

    static populateProjectNameHeader(){

    }

    static populateProjectNamesOnSideBar(){

    }

    static populateTasks(){

    }


    static showAddTaskInputs(){

    }

    static showAddProjectInputs(){

    }

    static removeTask(){

    }
}

class ErrorCheck{
    static alertIfStringEmpty(){
    }
    static alertIfPastDate(){
    }
    static alartIfDuplicateProjectName(){

    }
    static alartIfDuplicateTaskName(){

    }
}

document.addEventListener("click",e =>{
    if (e.target.id == "addNewProject"){}
    else if (e.target.id =="addProjectBtn"){}
    else if (e.target.id =="addNewTask"){}
    else if (e.target.id =="addTaskBtn"){}
    else if (e.target.className =="projectName"){}
    else if (e.target.className =="taskname"){}
    else if (e.target.className =="dueDate"){}
    else if (e.target.className =="taskRadioBtn"){}
    else if (e.target.className =="taskRadioBtn"){}
    else {}
})

/*
let project1 = new Project("project");

let task1 = new Task("task1", "1st", project1);
let task2 = new Task("task2", "2nd", project1);
let task3 = new Task("task3", "3rd", project1)

project1.addTask(task1);
project1.addTask(task2);
project1.removeTask(task1);
project1.addTask(task3);

let allProject = new AllProject();
allProject.repopulateTasksOfProject(project1);

project1.removeTask(task2);
allProject.repopulateTasksOfProject(project1);

console.log(project1)
*/