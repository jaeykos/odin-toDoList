import Project from './Project'

export default class AllTasks extends Project{
    name = "All Tasks"

    repopulateTasks(projects){ 
        //remove all tasks belonging to the project
        this.tasks = []

        for (const project of projects){
            this.tasks = this.tasks.concat(project.tasks)
        }

        

    }
}