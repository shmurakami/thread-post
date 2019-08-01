import * as React from 'react'

import {Header} from '../modules/Header'
import {Link} from "react-router-dom"
import {Authentication} from "../../app/auth/Authentication"
import {Sidebar} from "../modules/Sidebar"

type Props = {}

type State = {}

export class Index extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    getMessages() {
        return [
            {id: 1, content: 'test1', date: '2019-01-02T12:34:56', user: {id: 1, name: 'user1', display_name: 'user1d'}},
            {id: 2, content: 'test2', date: '2019-01-03T01:23:05', user: {id: 2, name: 'user2', display_name: 'user2d'}},
            {id: 3, content: 'test1', date: '2019-01-04T11:22:33', user: {id: 1, name: 'user1', display_name: 'user1d'}},
        ]
    }

    render() {
        const messages = this.getMessages().map(message => {
            return <div className="media message" key={message.id}>
                <img className="avatar d-flex align-self-start mr-3" src="#" alt="no avatar"/>
                <div className="media-body">
                    <h5 className="mt-0"><a href={`/profile/${message.user.name}`}>{message.user.name}</a></h5>
                    <p className="content">{message.content}</p>
                    <p className="message-date">{message.date}</p>
                </div>
            </div>
        })

        return (
            <div>
                <Header/>
                <Sidebar/>
                <main className="col-sm-9 offset-sm-3 col-md-9 offset-md-3 pt-3">
                    <div id="history">
                        {messages}
                    </div>
                </main>
            </div>
        )
    }
}

