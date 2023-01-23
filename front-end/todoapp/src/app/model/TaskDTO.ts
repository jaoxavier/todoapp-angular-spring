export class TaskDTO{
    private idProject: number;
    private title: string | null;
    private description: string | null;
    private dueDate: string | null;

    constructor(
        idProject: number, title: string | null, description: string | null, dueDate: string | null
    ){
        this.idProject = idProject;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
}