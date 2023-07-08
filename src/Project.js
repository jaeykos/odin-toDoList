export default class Project {
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