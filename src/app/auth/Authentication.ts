import {User} from "../../domain/model/User";

export class Authentication {

    private static repository: Storage

    constructor() {
    }

    static isAuthenticated(): boolean {
        return !!this.retrieveUser()
    }

    static retrieveUser(): User | null {
        const user = JSON.parse(this.getRepository().getItem('user'))
        if (user) {
            return new User(user.id, user.name)
        }
        return null
    }

    static getRepository(): Storage {
        if (!this.repository) {
            this.repository = localStorage
        }
        return this.repository
    }

    static authAsDummy(): boolean {
        this.getRepository().setItem('user', JSON.stringify(new User('1', 'test').toStoreObject()))
        return true
    }
}