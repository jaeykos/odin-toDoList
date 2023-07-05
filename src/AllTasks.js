import Project from './Project'

export default class AllTasks extends Project{
    name = "All"
    repopulateTasksOfProject(project){ 
        //remove all tasks belonging to the project
        this.tasks = this.tasks.filter(item => item.project !== project)

        //insert all tasks belgonging to the project
        this.tasks = this.tasks.concat(project.tasks)

    }
}