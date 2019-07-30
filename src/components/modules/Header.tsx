import * as React from 'react'
import {Link} from 'react-router-dom'
import {Authentication} from "../../app/auth/Authentication";

type HeaderProps = {}

type HeaderState = {}

export class Header extends React.Component<HeaderProps, HeaderState> {

    private isAuthenticated: boolean

    constructor(props: HeaderProps) {
        super(props)

        this.isAuthenticated = Authentication.isAuthenticated()
    }

    render(): React.ReactNode {
        return (
            <header>
                <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="" href="/">ThreadPost</a>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">チャットログ</li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }

}

