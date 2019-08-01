import * as React from 'react'
import {Link} from "react-router-dom";
import {Authentication} from "../../app/auth/Authentication"

type SidebarProps = {}

type SidebarState = {}

export class Sidebar extends React.Component<SidebarProps, SidebarState> {
    constructor(props: SidebarProps) {
        super(props)
    }

    getThreads() {
        if (Authentication.isAuthenticated()) {
            return [
                {id: 1, name: 'thread1'},
                {id: 2, name: 'thread2'},
                {id: 3, name: 'thread3'},
            ]
        }
        return []
    }

    render(): React.ReactNode {
        const threads = this.getThreads().map(thread => {
            let classes = "nav-link justify-content-between"
            if (thread.id === 1) {
                classes = `${classes} active`
            }

            return <li key={thread.id} className="nav-item">
                <a className={classes} href="#">{thread.name}</a>
            </li>
        })

        return (
            <aside>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-sm-3 col-md-3 hidden-xs-down bg-faded sidebar">
                            <ul className="nav nav-pills flex-column">
                                {threads}
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>
        )
    }
}
