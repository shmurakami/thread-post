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
        return new User(user.id, user.name)
    }

    static getRepository(): Storage {
        if (this.repository) {
            return this.repository
        }
        this.repository = localStorage
    }
}