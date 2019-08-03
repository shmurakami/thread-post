export class Thread {
    constructor(private _id: string, private _title: string) {
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }
}