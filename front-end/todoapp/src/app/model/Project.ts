export class Project{
    private _title: string;
    private _description: string;

    constructor(title: string, description: string){
        this._title = title;
        this._description = description;
    }

    set title(value: string){
        this._title = value;
    }

    set description(value: string){
        this._description = value;
    }

    toString(){
        return `{
            "title": "${this._title}",
            "description": "${this._description}"
        }`
    }
}