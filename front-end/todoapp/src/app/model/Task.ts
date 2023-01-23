export class Task{
    private _id!: number;
    private _title: string | null;    
    private _description: string | null;
    private _dueDate: string | null;
    private _finished: boolean;

    constructor(
        title: string | null,
        description: string | null,
        dueDate: string | null
    )
    {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._finished = false;
    }

    get id(){
        return this._id
    }

    set title(value: string){
        this._title = value;
    }

    set description(value: string){
        this._description = value;
    }

    set dueDate(value: string){
        this._dueDate = value;
    }

    set finished(value: boolean){
        this._finished = value
    }

    public get taskData(){
        return Object.assign({}, this, {
            title: this._title,
            description: this._description,
            dueDate: this._dueDate
        })
    }

}