import * as React from 'react'
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {Authentication} from "../../app/auth/Authentication"
import {Thread} from "../../domain/thread/Thread";
import {ThreadRepository} from "../../app/repository/ThreadRepository";

type SidebarProps = {}

const threadRepository = new ThreadRepository()

export function Sidebar(props: SidebarProps) {
    const [threads, setThreads] = useState([])

    const getThreads = () => {
        if (Authentication.isAuthenticated()) {
            return threadRepository.getThreads()
        }
    }

    useEffect(() => {
        getThreads()
            .then(threads => setThreads(threads))
    }, [])

    const threadElement = threads.map((thread: Thread) => {
        let classes = "nav-link justify-content-between"
        // dummy
        if (thread.id === '1') {
            classes = `${classes} active`
        }

        return <li key={thread.id} className="nav-item">
            <a className={classes} href="#">{thread.title}</a>
        </li>
    })

    return (
        <aside>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-sm-3 col-md-3 hidden-xs-down bg-faded sidebar">
                        <ul className="nav nav-pills flex-column">
                            {threadElement}
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    )
}
