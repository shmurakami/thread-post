export class User {
    constructor(private id: number, private name: string) {
    }

    toStoreObject() {
        return {
            id: this.id,
            name: this.name,
        }
    }

    getName(): string {
        return this.name
    }

}