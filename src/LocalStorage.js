export default class LocalStorage {

    static saveData(projects, allTasks){
        let stringifiedProjects = JSON.stringify(projects)
        localStorage.setItem("projects", stringifiedProjects)
    }

    static loadData(){
        let stringifiedProjects= localStorage.getItem("projects")
        if (stringifiedProjects == null){
            return null;
        }
        return JSON.parse(stringifiedProjects);

    }

}