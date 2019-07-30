import {User, StoredAccount} from "../../domain/model/User";
import {StoredTokenInterface, Token} from "../storage/TokenStorage";

interface StoredAccountValue {
    account: StoredAccount,
    token: StoredTokenInterface,
}

export interface AccountStorageRepositoryInterface {
    get(): User | null
    set(AccountModel, Token): void
}

export class AccountStorageRepository implements AccountStorageRepositoryInterface {

    private storage: Storage

    constructor(autoLogin: boolean) {
        let storage
        if (autoLogin) {
            storage = localStorage
        } else {
            storage = sessionStorage
        }
        this.storage = storage
    }

    get(): User | null {
        const account: StoredAccountValue = JSON.parse(this.storage.getItem('account'))
        if (!account) {
            return null
        }

        return new User(account.account.id, account.account.name)
    }

    set(accountModel: User, token: Token): void {
        const value: StoredAccountValue = {
            account: accountModel.toStoreObject(),
            token: token.toStoreObject(),
        }
        this.storage.setItem('account', JSON.stringify(value))
    }
}