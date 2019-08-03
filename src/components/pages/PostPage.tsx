import * as React from 'react'
import {useState, useEffect} from 'react'

import {Header} from '../modules/Header'
import {Link} from "react-router-dom"
import {Sidebar} from "../modules/Sidebar"
import {Post} from "../../domain/post/Post";
import {PostRepository} from "../../app/repository/PostRepository";
import {User} from "../../domain/model/User";
import {PostedAt} from "../../domain/post/PostedAt";

type Props = {
    thread_id: string
}

const postRepository = new PostRepository()

export function PostPage(props: Props) {
    const [threadId, setThreadId] = useState(props.thread_id)
    const [posts, setPosts] = useState([])

    const getPosts = (threadId: string): Promise<Post[]> => {
        return new Promise((resolve, rej) => {
            const temp = [
                {id: "1", content: 'test1', date: '2019-01-02T12:34:56', user: {id: "1", name: 'user1'}},
                {id: "2", content: 'test2', date: '2019-01-03T01:23:05', user: {id: "2", name: 'user2'}},
                {id: "3", content: 'test1', date: '2019-01-04T11:22:33', user: {id: "1", name: 'user1'}},
            ]
            resolve(temp.map(p => new Post(p.id, p.content, new User(p.user.id, p.user.name), new PostedAt(p.date))))
        })

        // return postRepository.getPosts(threadId)
    }

    useEffect(() => {
        getPosts(threadId)
            .then((posts: Post[]) => setPosts(posts))
    }, [])

    const postsAsHtml = () => {
        return posts.map((post: Post) => {
            <div className="media message" key={post.id}>
                <img className="avatar d-flex align-self-start mr-3" src="#" alt="no avatar"/>
                <div className="media-body">
                    <h5 className="mt-0"><a href={'#'}>{post.speakerName}</a></h5>
                    <p className="content">{post.content}</p>
                    <p className="message-date">{post.postedAt}</p>
                </div>
            </div>
        })
    }

    return (
        <div>
            <Header/>
            <Sidebar/>
            <main className="col-sm-9 offset-sm-3 col-md-9 offset-md-3 pt-3">
                <div id="history">
                    {postsAsHtml()}
                </div>
            </main>
        </div>
    )
}
