
export default class ErrorCheck{
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
