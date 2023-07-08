import Project from './Project'

export default class AllTasks extends Project{
    name = "All Tasks"

    repopulateTasks(projects){ 
        //remove all tasks belonging to the project
        this.tasks = []

        for (const project of projects){
            this.tasks = this.tasks.concat(project.tasks)
        }

        //sort by due date
        this.tasks.sort(function(a,b) {
            let dateA = a.dueDate.replaceAll('-','');
            let dateB = b.dueDate.replaceAll('-','');
            return dateA > dateB ? 1 : dateA < dateB ? -1 : 0;
            // return a.localeCompare(b);         // <-- alternative 
            });
    }    
}