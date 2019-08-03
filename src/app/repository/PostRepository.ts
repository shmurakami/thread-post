import {request} from '../HttpRequest'
import {AxiosResponse} from "axios";
import {Post} from "../../domain/post/Post";
import {User} from "../../domain/model/User";
import {PostedAt} from "../../domain/post/PostedAt";

type PostResponseContent = {
    "id": string,
    "title": string,
    "user": {
        "id": string,
        "name": string,
    },
    "posted_at": string,
}

type PostResponse = {
    data: {
        post: PostResponseContent
    }
}

type PostsResponse = {
    data: {
        posts: PostResponseContent[]
    }
}

export class PostRepository {

    getPosts(threadId: string): Promise<Post[]> {
        return new Promise((resolve, reject) => {
            request.get(`threads/${threadId}/posts`, {})
                .then((r: AxiosResponse<PostsResponse>) => {
                    const response = r.data.data
                    console.log(response)
                    const posts = response.posts.map((post: PostResponseContent) =>
                        new Post(post.id,post.title, new User(post.user.id, post.user.name), new PostedAt(post.posted_at)))
                    resolve(posts)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}