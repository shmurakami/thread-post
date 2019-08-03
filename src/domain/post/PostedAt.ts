export class PostedAt {
    constructor(private _posted_at: string) {
    }

    asDate(): Date {
        return new Date(this._posted_at)
    }

    asDisplayFormat(): string {
        const date = this.asDate()
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

}