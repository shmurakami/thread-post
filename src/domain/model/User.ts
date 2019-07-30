export class User {
    constructor(private id: number, private name: string) {
    }

    getName(): string {
        return this.name
    }

}