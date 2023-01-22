export class TaskDTO{
    private idProject: number;
    private title: string;
    private description: string;
    private dueDate: string;

    constructor(
        idProject: number, title: string, description: string, dueDate: string
    ){
        this.idProject = idProject;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    toString(){
        return `{
            "idProject":${this.idProject},
            "title":"${this.title}",
            "description":"${this.description}",
            "dueDate":"${this.dueDate}"
        }`
    }
}