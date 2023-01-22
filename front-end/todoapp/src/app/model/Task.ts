export class Task{
    private _id!: number;
    private _title: string;    
    private _description: string;
    private _dueDate: string;
    private _finished: boolean;

    constructor(
        title: string,
        description: string,
        dueDate: string
    )
    {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._finished = false;
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

}