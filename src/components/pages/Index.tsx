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

    render() {
        return (
            <div>
                <Header/>
                <Sidebar/>
                <main className="col-sm-9 offset-sm-3 col-md-9 offset-md-3 pt-3">
                    main
                </main>
            </div>
        )
    }
}

