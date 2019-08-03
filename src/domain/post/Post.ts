import {User} from "../model/User";
import {PostedAt} from "./PostedAt";

export class Post {
    constructor(private _id: string, private _content: string, private _user: User, private _posted_at: PostedAt) {
    }

    get id(): string {
        return this._id
    }

    get content(): string {
        return this._content
    }

    get postedAt(): string {
        return this._posted_at.asDisplayFormat()
    }

    get speakerName(): string {
        return this._user.getName()
    }
}