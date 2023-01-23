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
}