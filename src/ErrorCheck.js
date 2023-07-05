export default class ErrorCheck{
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
