
export default class Project {
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