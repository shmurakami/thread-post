import {AccountStorageRepository, AccountStorageRepositoryInterface} from "../repository/AccountStorageRepository";
import {User} from "../../domain/model/User";

export class Authentication {

    private static repository: AccountStorageRepositoryInterface

    constructor() {
    }

    static isAuthenticated(): boolean {
        let account
        if (this.repository) {
            account = this.repository.get()
            return account !== null
        }

        this.setRepository()
        account = this.repository.get()
        return !!account;

    }

    static retrieveUser(): User | null {
        if (!this.repository) {
            this.setRepository()
        }
        return this.repository.get()
    }

    static setRepository() {
        let account
        const sessionStorageRepository = new AccountStorageRepository(false);
        account = sessionStorageRepository.get()
        if (account) {
            this.repository = sessionStorageRepository
            return
        }

        this.repository = new AccountStorageRepository(true)
    }
}