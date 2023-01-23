export class Project{
    private _id!: number;
    private _title: string | null;
    private _description: string | null;

    constructor(title: string | null, description: string | null){
        this._title = title;
        this._description = description;
    }

    get id(){
        return this._id;
    }

    set title(value: string){
        this._title = value;
    }

    set description(value: string){
        this._description = value;
    }

    get projectData(){
        return Object.assign({}, this, {
            title: this._title,
            description: this._description
        });
    }
}